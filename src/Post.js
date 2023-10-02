import React, { useState, useEffect } from "react";
import PostLive from "./PostLive";
import axios from "axios";

const Post = ({}) => {
  const posts = {
    userid: 2,
    img: "OG",
    title: "Ozgur",
    subTitle: "Senior software engineer",
    post: "",
    comments: "0",
    repost: "0",
    allComments: [],
  };
  const initialvalue = {
    userid: 1,
    img: "SN",
    title: "Satya Nadella",
    subTitle: "Chairman and CEO at Microsoft",
    post: "Today, we are bringing together AI and quantum with Azure Quantum Elements, ushering in a new era of scientific discovery. Our goal is to compress the next 250 years of chemistry and materials science progress into the next 25.",
    comments: "139",
    repost: "593",
    allComments: [
      {
        user: "SM",
        comment: "This is intersting.",
      },
    ],
  };
  const [post, setPosts] = useState([{ ...initialvalue }]);
  const [conter, setconter] = useState(0);
  const [value, setvalue] = useState("");
  const handlePost = () => {
    if (value) {
      const samp = { ...posts };
      samp.post = value;
      setPosts((pre) => [samp, ...pre]);
      setvalue("");
      setconter(pre=> pre+1)
    }
  };
  useEffect(() => {
    axios
      .post("http://localhost:8000/comments", {})
      .then()
      .catch((err) => {
        setTimeout(() => {
          const newPost = post.map((p) => {
            if (p.userid === 2) {
              p.allComments = [
                {
                  user: "WF",
                  comment: "This is been taken care of",
                },
              ];
              return p;
            }
            return p;
          });
          setPosts([...newPost]);
        }, 2000);
        
      });
  }, [conter]);
  return (
    <>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-4 bg-white">
        <div class="flex flex-row">
          <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
              OG
            </span>
          </span>
          <input
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            class="flex w-full border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-3xl ml-2 h-12 font-semibold text-zinc-500 hover:bg-zinc-100 transition-all cursor-pointer"
            placeholder="Start a post"
          />
        </div>
        <div class="flex flex-row justify-between mt-3 sm:px-4 px-2">
          <div class="cursor-pointer hover:bg-zinc-100 rounded flex flex-row items-center justify-center">
            <span class="text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-image"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
              </svg>
            </span>
            <span class="font-semibold text-zinc-500 ml-2 text-sm">Photo</span>
          </div>
          <div class="cursor-pointer hover:bg-zinc-100 rounded flex flex-row items-center justify-center">
            <span class="text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-video"
              >
                <path d="m22 8-6 4 6 4V8Z"></path>
                <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
              </svg>
            </span>
            <span class="font-semibold text-zinc-500 ml-2 text-sm">Video</span>
          </div>
          <div class="cursor-pointer hover:bg-zinc-100 rounded flex flex-row items-center justify-center">
            <span class="text-purple-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-baggage-claim"
              >
                <path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"></path>
                <path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"></path>
                <rect width="13" height="8" x="8" y="6" rx="1"></rect>
                <circle cx="18" cy="20" r="2"></circle>
                <circle cx="9" cy="20" r="2"></circle>
              </svg>
            </span>
            <span class="font-semibold text-zinc-500 ml-2 text-sm">Job</span>
          </div>
          <div
            onClick={handlePost}
            class="cursor-pointer hover:bg-zinc-100 rounded flex flex-row items-center justify-center"
          >
            <span class="text-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-file"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
            </span>
            <span class="font-semibold text-zinc-500 ml-2 text-sm">Post</span>
          </div>
        </div>
      </div>
      {post.map((p) => {
        return <PostLive post={p} />;
      })}
    </>
  );
};

export default Post;
