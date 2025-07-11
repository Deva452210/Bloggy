import React, { useEffect, useState } from "react";
import { assets, blog_data, comments_data } from "../assets/assets";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Moment from "moment";
import Loader from "../components/Loader";

const Blog = () => {
  const { id } = useParams();

  const [data, setdata] = useState(null);
  const [comments, setcomments] = useState([]);

  const [name, setname] = useState("");
  const [content, setcontent] = useState("");

  // Fetching blog data

  const fetchBlogData = async () => {
    const data = blog_data.find((item) => item._id === id);
    setdata(data);
  };

  const addcomment = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchBlogData();
    fetchCommentsData();
  }, []);

  // Fetching comments data

  const fetchCommentsData = async () => {
    setcomments(comments_data);
  };

  return data ? (
    <div className=" relative">
      <img
        src={assets.gradientBackground}
        alt="backgroung image"
        className=" absolute -top-50 -z-1 opacity-50"
      />
      <Navbar />
      <div className=" text-center mt-20 text-gray-600">
        <p className=" text-primary py-4 font-medium">
          Published on {Moment(data.createdAt).format("MMM Do YYYY")}
        </p>
        <h1 className=" text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
          {data.title}
        </h1>
        <h2 className=" my-5 max-w-lg truncate mx-auto">{data.subTitle}</h2>
        <p className=" inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
          Deva
        </p>
      </div>

      {/* Main */}
      <div className=" mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img src={data.image} alt="Blog image" className=" rounded-3xl mb-5" />
        {/* Description section */}
        <div
          className="rich-text max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        {/* Comments section */}

        <div className=" mt-14 mb-10 max-w-3xl mx-auto">
          <p className=" font-semibold mb-4">Comments ({comments.length})</p>
          <div className=" flex flex-col gap-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className=" relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600"
              >
                <div className=" flex items-center gap-2 mb-2">
                  <img
                    src={assets.user_icon}
                    alt="user icon"
                    className=" w-6"
                  />{" "}
                  <p className=" font-medium">{item.name}</p>
                </div>

                <p className=" text-sm max-w-md ml-8">{item.content}</p>
                <div className=" absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* comment form  */}
        <div className=" max-w-3xl mx-auto">
          <p className=" font-semibold mb-4">Leave your comments</p>
          <form
            onSubmit={addcomment}
            className=" flex flex-col items-start gap-4 max-w-lg"
          >
            <input
              onChange={(e) => setname(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              required
              className=" w-full p-2 border border-gray-300 rounded outline-none"
            />

            <textarea
              onChange={(e) => setcontent(e.target.value)}
              value={content}
              placeholder="Comment"
              required
              className=" w-full p-2 border border-gray-300 rounded outline-none h-48"
            ></textarea>

            <button
              type="submit"
              className=" bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  ) : (
    <Loader />
  );
};

export default Blog;
