"use client";
import { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message,setMessage]=useState("")

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const data = new FormData();
    data.set("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(
          `HTTP error! status: ${res.status}, message: ${errorText}`
        );
      }

      const d = await res.json();
      setMessage("File uploaded successfully!");
      console.log(d);
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage(`File upload failed: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-80">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded-lg shadow-lg w-80 animate-fade-in-up">
        <h2 className="text-2xl font-semibold text-center mb-4">Upload File</h2>
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Upload
        </button>
        <em className={`text-center text-sm ${message=='File uploaded successfully!'?'text-green-600':'text-red-600'} `}>{ message}</em>
      </form>
    </div>
  );
};

export default FileUpload;
