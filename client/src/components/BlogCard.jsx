import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer"
    >
      <img src={image} alt="Blog image" className="aspect-video" />
      <span className="ml-2 mb-2 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs">
        {category}
      </span>
      <div>
        <h5 className="px-3 mb-2 font-medium text-gray-900">{title}</h5>
        <p
          className="px-3 mb-3 text-xs text-gray-600"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
        ></p>
      </div>
    </div>
  );
};

export default BlogCard;
