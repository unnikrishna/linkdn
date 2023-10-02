import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="w-[300px] mt-[20px] bg-white" >
        <div class="hidden sm:block">
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
            <div>
              <div
                class="bg-center bg-cover block h-14 w-full"
                // style="background-image:url(https://media.licdn.com/dms/image/C5616AQFBJ6o2Z7TrsQ/profile-displaybackgroundimage-shrink_200_800/0/1516968055361?e=1692835200&amp;v=beta&amp;t=MEqhkc8BTKOniiPx0Hphp_pXKJ-0GH6OWaaKLurI8Qc)"
              ></div>
              <div class="flex justify-center">
                <img
                  class="w-16 h-16 rounded-full overflow-hidden border-white border-2 mt-[-32px] z-1"
                  src="https://media.licdn.com/dms/image/D4E03AQGEu93ehaEucA/profile-displayphoto-shrink_100_100/0/1675407583125?e=1692835200&amp;v=beta&amp;t=qe1mCCS79H25N_h_VTUtEZ_XoslNvPv30y3QPv8rS8U"
                />
              </div>
            </div>
            <a
              class="flex justify-center items-center flex-col mt-4 pb-4 border-b border-slate-200"
              href="https://www.linkedin.com/in/ozgurgul35/"
              target="_blank"
            >
              <div class="text-md font-medium hover:underline cursor-pointer">
                Ozgur GUL
              </div>
              <div class="text-xs text-zinc-500 mt-1">
                Senior Software Engineer
              </div>
            </a>
            <div>
              <div class="py-3 border-b border-slate-200">
                <div class="flex flex-row items-center text-xs font-semibold px-3 p-1 cursor-pointer hover:bg-zinc-200">
                  <div class="w-full text-zinc-500">
                    Who's viewed your profile
                  </div>
                  <div class="text-blue-600">50</div>
                </div>
                <div class="flex flex-row items-center text-xs font-semibold px-3 p-1 cursor-pointer hover:bg-zinc-200">
                  <div class="w-full text-zinc-500">
                    Impressions of your post
                  </div>
                  <div class="text-blue-600">9195</div>
                </div>
              </div>
              <div class="flex flex-row items-center text-xs font-semibold p-3 cursor-pointer hover:bg-zinc-200 text-zinc-600">
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
                  class="lucide lucide-bookmark"
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
                <span class="ml-2">My items</span>
              </div>
            </div>
          </div>
          <div class="sticky top-16">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm pt-1 mt-2">
              <div class="font-semibold text-blue-700 text-xs p-3 py-2 hover:underline">
                Groups
              </div>
              <div class="font-semibold text-blue-700 text-xs p-3 py-2 hover:underline">
                Events
              </div>
              <div class="font-semibold text-blue-700 text-xs p-3 py-2 hover:underline">
                Followed hashtags
              </div>
              <div class="border-t border-zinc-200 hover:bg-zinc-100 text-sm font-semibold text-zinc-500 p-3 text-center cursor-pointer transition-all">
                Discover more
              </div>
            </div>
          </div>
        </div>
        <div class="block sm:hidden">
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
            <div>
              <div
                class="bg-center bg-cover block h-14 w-full"
                //style="background-image:url(https://media.licdn.com/dms/image/C5616AQFBJ6o2Z7TrsQ/profile-displaybackgroundimage-shrink_200_800/0/1516968055361?e=1692835200&amp;v=beta&amp;t=MEqhkc8BTKOniiPx0Hphp_pXKJ-0GH6OWaaKLurI8Qc)"
              ></div>
              <div class="flex justify-center">
                <img
                  class="w-16 h-16 rounded-full overflow-hidden border-white border-2 mt-[-32px] z-1"
                  src="https://media.licdn.com/dms/image/D4E03AQGEu93ehaEucA/profile-displayphoto-shrink_100_100/0/1675407583125?e=1692835200&amp;v=beta&amp;t=qe1mCCS79H25N_h_VTUtEZ_XoslNvPv30y3QPv8rS8U"
                />
              </div>
            </div>
            <a
              class="flex justify-center items-center flex-col mt-4 pb-4 border-b border-slate-200"
              href="https://www.linkedin.com/in/ozgurgul35/"
              target="_blank"
            >
              <div class="text-md font-medium hover:underline cursor-pointer">
                Ozgur GUL
              </div>
              <div class="text-xs text-zinc-500 mt-1">
                Senior Software Engineer
              </div>
            </a>
          </div>
          <div class="flex text-zinc-500 font-semibold p-1 mt-2 hover:bg-zinc-200 cursor-pointer flex-row justify-center items-center text-sm">
            Show more{" "}
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
              class="lucide lucide-chevron-down"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
