import React from "react";
import MenuItem from "./MenuItem";
import { MenuItemProps } from "@/types/menu";

type MenuProps = {
  list: MenuItemProps[];
};

export default function Menu({ list }: MenuProps) {
  return (
    <div className="hidden lg:flex gap-x-8">
      {list.map((item: MenuItemProps, index: number) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
}
