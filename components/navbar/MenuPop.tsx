import React from "react";
import MenuItem from "./MenuItem";
import { MENU_ITEMS } from "@/constant/menu";
import { MenuItemProps } from "@/types/menu";
import Breakline from "../Breakline";
import { SOCIAL_MEDIA } from "@/constant/socialMedia";

export default function MenuPop() {
  return (
    <div className="absolute left-0 right-0 mt-6">
      <div className="h-screen w-full bg-neutral-200 dark:bg-neutral-900">
        <div className="flex  flex-col items-end gap-y-4 py-12 px-8">
          {MENU_ITEMS.map((item: MenuItemProps, index: number) => (
            <MenuItem key={index} {...item} />
          ))}
          <Breakline/>
          {SOCIAL_MEDIA.map((media,index) => {
            return(
              <div key={index} className="text-neutral-500 dark:text-neutral-400">
                {media.title}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
