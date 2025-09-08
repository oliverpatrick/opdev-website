import React from "react";
import { ChevronRightIcon, SettingsIcon } from "./common/icons";

function TopBar() {
  return (
    // <div className="absolute top-0 left-0 h-16 w-full bg-transparent flex items-center justify-between px-4 pt-2">
    //   <div className="flex space-x-1 items-center justify-center h-10 w-1/3 rounded-full bg-yellow-500 mr-2 p-1 border-[0.5px] border-[hsla(228,16%,63%,0.4)] ">
    //     <div className="flex-1 font-bold h-full w-10 flex items-center justify-start text-white text-sm">
    //       <div className="h-7 w-7 rounded-full bg-green-500 flex items-center justify-center">
    //         {/* <SettingsIcon className="size-4 text-white" aria-hidden="true" /> */}
    //       </div>
    //       <div className="flex flex-col items-start justify-center ml-1">
    //         <div className="flex justify-center items-center">
    //           <div className="font-semibold">opdev</div>
    //           <ChevronRightIcon
    //             className="size-2 text-white"
    //             aria-hidden="true"
    //           />
    //         </div>
    //         <span className="text-[8px] text-white font-semibold">Online</span>
    //       </div>
    //     </div>
    //     <div className="h-7 w-7 rounded-full bg-green-500 flex items-center justify-center">
    //       <SettingsIcon className="size-4 text-white" aria-hidden="true" />
    //     </div>
    //   </div>
    // </div>
    <div className="absolute top-0 left-0 h-16 w-full bg-transparent flex items-center justify-between px-4 pt-2">
      <div className="flex space-x-1 items-center justify-center h-10 w-1/3 rounded-full bg-yellow-500 mr-2 p-1 border-[0.5px] border-[hsla(228,16%,63%,0.4)] ">
        <div className="flex-1 font-bold h-full w-10 flex items-center justify-start text-white text-sm">
          <div className="h-7 w-7 rounded-full bg-green-500 flex items-center justify-center">
            {/* <SettingsIcon className="size-4 text-white" aria-hidden="true" /> */}
          </div>
          <div className="flex flex-col items-start justify-center ml-1">
            <div className="flex justify-center items-center">
              <div className="font-semibold">opdev</div>
              <ChevronRightIcon
                className="size-2 text-white"
                aria-hidden="true"
              />
            </div>
            <span className="text-[8px] text-white font-semibold">Online</span>
          </div>
        </div>
        <div className="h-7 w-7 rounded-full bg-green-500 flex items-center justify-center">
          <SettingsIcon className="size-4 text-white" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
