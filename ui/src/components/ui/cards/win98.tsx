import { GitHubRepo } from "@/types/api";
import React from "react";

type Win98Props = {
  repo: GitHubRepo;
};

function Win98({ repo }: Win98Props) {
  return (
    <div
      className="border-2 border-[#7c7c7c] border-t-white border-l-white border-b-[#131313] 
         bg-[#c0c0c0] w-[90%] max-w-[500px] resize-both"
    >
      {/* Toolbar */}
      <div className="relative bg-[#000080] text-white px-1 py-1 font-bold">
        <div className="window-title">{repo.name}</div>
        <div className="absolute right-1 top-1 flex gap-1">
          <div className="h-[17px] w-[17px] border-2 border-[#7c7c7c] border-t-white border-l-white bg-[#ccc] bg-[url('https://win98icons.alexmeub.com/images/question-icon.png')] bg-center bg-no-repeat" />
          <div className="h-[17px] w-[17px] border-2 border-[#7c7c7c] border-t-white border-l-white bg-[#ccc] bg-[url('https://win98icons.alexmeub.com/images/close-icon.png')] bg-center bg-no-repeat" />
        </div>
      </div>

      {/* Tabs */}
      <div className="overflow-hidden pt-0.5 flex">
        {repo.topics.map((tab, i) => (
          <button
            key={tab}
            className={`px-2 py-1 text-sm border-t border-b border-white border-r-2 border-r-[#666] rounded-t-[3px] ${
              i === 0 ? "border-l border-l-white" : ""
            } ${i === 0 ? "active-tab" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 border border-white border-t-0">
        <form>
          <fieldset className="relative border border-[#7c7c7c] p-4">
            <legend className="px-1 bg-[#c0c0c0]">{repo.language}</legend>

            <p className="mb-2 underline decoration-transparent first-letter:underline">
              {repo.description}
            </p>

            <select name="wallpaper" size={5} className="w-full my-4">
              <option
                value="none"
                className="pl-5 bg-[url('https://win98icons.alexmeub.com/icons/png/world_star-0.png')] bg-no-repeat bg-[length:auto_14px] bg-left"
              >
                {repo.stargazers_count}
              </option>
              <option
                value="1"
                className="pl-5 bg-[url('https://win98icons.alexmeub.com/icons/png/network_normal_two_pcs-2.png')] bg-no-repeat bg-[length:auto_14px] bg-left"
              >
                {repo.forks_count}
              </option>
              <option
                value="2"
                className="pl-5 bg-[url('https://win98icons.alexmeub.com/icons/png/file_eye.png')] bg-no-repeat bg-[length:auto_14px] bg-left"
              >
                {repo.watchers_count}
              </option>
            </select>
          </fieldset>
        </form>
      </div>

      {/* Actions */}
      <div className="mt-2 flex justify-end gap-2 pr-2 pb-2">
        {["Apply", "Cancel", "OK"].map(label => (
          <button
            key={label}
            className="w-[75px] border border-[#131313] border-t-white border-l-white bg-[#c0c0c0] py-1 text-center"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Win98;
