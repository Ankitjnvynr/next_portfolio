
"use client"
import CreativesView from '@/components/dashboardComps/CreativesView';
import { useState } from 'react';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [order, setOrder] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', description);
    formData.append('title', title);

    try {
      const response = await fetch('/api/creatives', {
        method: 'POST',
        body: formData,
      });
      console.log(formData,description,title);
      

      const result = await response.json();
      console.log(result);
      
      if (result) {
        alert('File uploaded and details saved!');
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
<>
<form onSubmit={handleSubmit} className='flex items-center p-3 shadow gap-3 flex-wrap' >
      <input
      className='px-2 flex-1' 
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      
      <input
      className='border border-blue-300 px-2 flex-1'
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
      className='border border-blue-300 px-2 flex-1'
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
     
      <button className='border rounded-lg px-3 py-1 bg-blue-800 text-white'  type="submit">Upload</button>
    </form>

<CreativesView/>
</>

  );
}

export default UploadForm;
