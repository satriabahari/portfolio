import { RootState } from "@/lib/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface MenuState {
  activeSection: string;
}

const initialState: MenuState = {
  activeSection: "Home",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setActiveSection: (state, actions: PayloadAction<string>) => {
      state.activeSection = actions.payload;
    },
  },
});

export const { setActiveSection } = menuSlice.actions;

export default menuSlice.reducer

export const selectedActiveSection = (state: RootState) => state.menu.activeSection
