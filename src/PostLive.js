import React from "react";

function PostLive({post}) {
  return (
    <div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-0 mt-2 bg-white">
        <div class="flex flex-row p-4">
          <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
              {post?.img}
            </span>
          </span>
          <div class="pl-4">
            <div class="flex flex-row items-center">
              <div class="font-semibold">{post?.title}</div>
              <div class="ml-2 text-muted-foreground text-sm"></div>
            </div>
            <div class="text-xs text-zinc-500">{post?.subTitle}</div>
          </div>
        </div>
        <div class="p-4 text-sm pt-0 text-left">{post?.post}</div>

        <div class="text-zinc-500 text-xs p-2 px-4 flex flex-row items-center border-b">
          <div class="w-full flex flex-row items-center hover:text-blue-600 hover:underline cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-lightbulb"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
              <path d="M9 18h6"></path>
              <path d="M10 22h4"></path>
            </svg>
            <span class="ml-1">5788</span>
          </div>
          <div class="hover:text-blue-600 hover:underline cursor-pointer shrink-0">
            {post?.comments} comments
          </div>
          <div class="hover:text-blue-600 hover:underline cursor-pointer shrink-0 ml-2">
            <span class="mr-1 text-muted-foreground">•</span> {post?.repost}{" "}
            reposts
          </div>
        </div>
        <div class="flex flex-row justify-between items-center py-2 px-4">
          <div class="p-2 rounded hover:bg-zinc-200 flex flex-row text-zinc-500 text-sm items-center cursor-pointer transition-all">
            <span>
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
                class="lucide lucide-thumbs-up"
              >
                <path d="M7 10v12"></path>
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
              </svg>
            </span>
            <span class="font-semibold ml-2 hidden sm:inline">Link</span>
          </div>
          <div class="p-2 rounded bg-zinc-200 flex flex-row text-zinc-500 text-sm items-center cursor-pointer transition-all">
            <span>
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
                class="lucide lucide-message-square"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </span>
            <span class="font-semibold ml-2 hidden sm:inline ">Comment</span>
          </div>
          <div class="p-2 rounded hover:bg-zinc-200 flex flex-row text-zinc-500 text-sm items-center cursor-pointer transition-all">
            <span>
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
                class="lucide lucide-arrow-left-right"
              >
                <path d="M8 3 4 7l4 4"></path>
                <path d="M4 7h16"></path>
                <path d="m16 21 4-4-4-4"></path>
                <path d="M20 17H4"></path>
              </svg>
            </span>
            <span class="font-semibold ml-2 hidden sm:inline">Repost</span>
          </div>
          <div class="p-2 rounded hover:bg-zinc-200 flex flex-row text-zinc-500 text-sm items-center cursor-pointer transition-all">
            <span>
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
                class="lucide lucide-send"
              >
                <line x1="22" x2="11" y1="2" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </span>
            <span class="font-semibold ml-2 hidden sm:inline">Send</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-md">
        {post?.allComments.map((c) => {
          return (
            <div className="p-4  flex justify-start align-center">
              <span className="bg-gray-200 p-2 rounded-[50%]">{c.user}</span>
              <span className="ml-3 p-2 bg-gray-200 rounded-xl">
                {c.comment}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostLive;
