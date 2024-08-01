import FileUpload from '@/components/FileUpload'
import React from 'react'

function page() {
  return (
    <div className="max-w-[1300px] w-[95%] m-auto bg-white shadow-lg my-4 rounded-xl overflow-hidden p-3 ">
      <FileUpload />
    </div>
  )
}

export default page