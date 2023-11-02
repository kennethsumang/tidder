import { createSlice } from '@reduxjs/toolkit';

/**
 * App slice
 * @author Kenneth Sumang
 */
export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isSidebarOpen: false,
    navbarTitle: 'Home',
  },
  reducers: {
    /**
     * Toggles sidebar open status
     * @param state
     */
    toggleSidebarOpen: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },

    /**
     * Sets the open status of sidebar
     * @param state
     * @param action
     */
    setSidebarOpen: (state, action: { payload: boolean }) => {
      state.isSidebarOpen = action.payload;
    },

    /**
     * Sets the navbar title
     * @param state
     * @param action
     */
    setNavbarTitle: (state, action: { payload: string }) => {
      state.navbarTitle = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleSidebarOpen,
  setSidebarOpen,
  setNavbarTitle
} = appSlice.actions;

export default appSlice.reducer;