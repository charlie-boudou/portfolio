import { createSlice } from '@reduxjs/toolkit';
import { IThemeState } from '../utils/types';

const initialState: IThemeState = {
 backgroundColor: "bg-[#F4F2F3]",
 icon: "#FFA101",
 backgroundSidebar: "bg-[#B3DEE5]",
 activeIcon: '#072A40',
 textColor: "text-black",
 textProjectButton: "#B3DEE5",
 textContact: "#B3DEE5"
};

export const themeSlice = createSlice({
 name: 'theme',
 initialState,
 reducers: {
   switchTheme: (state, action) => {
    state.backgroundColor = !action.payload ? "bg-[#F4F2F3]" : "bg-[#191919]";
    state.backgroundSidebar = !action.payload ? "bg-[#B3DEE5]" : "bg-[#5F264A]";
    state.icon = !action.payload ? "#FFA101" : "#D4ADFC";
    state.activeIcon = !action.payload ? "#072A40" : "#66347F";
    state.textColor = !action.payload ? "text-black" : "text-white";
    state.textProjectButton = !action.payload ? "#B3DEE5" : "#072A40";
    state.textContact = !action.payload ? "#B3DEE5" : "#5F264A";
   },
 },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;