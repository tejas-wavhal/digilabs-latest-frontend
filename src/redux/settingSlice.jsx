// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const settingsSlice = createSlice({
//   name: 'settings',
//   initialState: {
//     text: '',
//     logoUrl: '',
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     setText: (state, action) => {
//       state.text = action.payload;
//     },
//     setLogoUrl: (state, action) => {
//       state.logoUrl = action.payload;
//     },
//     setLoading: (state, action) => {
//       state.isLoading = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//   },
// });

// export const { setText, setLogoUrl, setLoading, setError } = settingsSlice.actions;

// export const updateText = (text) => async (dispatch) => {
//   dispatch(setLoading(true));
//   try {
//     const response = await axios.put('/api/settings/text', { text });
//     dispatch(setText(response.data.text));
//   } catch (error) {
//     dispatch(setError(error.message));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

// export const updateLogo = (file) => async (dispatch) => {
//   dispatch(setLoading(true));
//   try {
//     const response = await axios.put('/api/settings/logo', { data: file });
//     dispatch(setLogoUrl(response.data.logoUrl));
//   } catch (error) {
//     dispatch(setError(error.message));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

// export default settingsSlice.reducer;
