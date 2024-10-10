
"use client"
import { useState } from 'react';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [order, setOrder] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('fileName', file);
    formData.append('description', description);
    formData.append('title', title);
    formData.append('order', order);

    try {
      const response = await fetch('/api/creatives', {
        method: 'POST',
        body: formData,
      });
      console.log(formData,description,title);
      

      const result = await response.json();
      console.log(result);
      
      if (result.result) {
        alert('File uploaded and details saved!');
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="number"
        value={order}
        onChange={(e) => setOrder(Number(e.target.value))}
        placeholder="Order"
        required
      />
      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadForm;
