import React from "react";

export default function Creative({ src, postId, title, description }) {
  return (
    <div className="flex flex-col shadow-2xl">
      <img className="" width={200} src={src} alt={src} />
      <h4 className="font-bold">{title}</h4>
      <p>{description}</p>
    </div>
  );
}
