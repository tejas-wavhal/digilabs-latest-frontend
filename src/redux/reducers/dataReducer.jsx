import { createReducer } from "@reduxjs/toolkit";

export const dataReducer = createReducer(
  {},
  {
    loadDataRequest: state => {
      state.loading = true
    },
    loadDataSuccess: (state, action) => {
      state.loading = false
      state.text = action.payload.text
      state.logo = action.payload.logoUrl
    },
    loadDataFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    updateTextRequest: state => {
      state.loading = true
    },
    updateTextSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    updateTextFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    updateLogoRequest: state => {
      state.loading = true
    },
    updateLogoSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    updateLogoFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    clearError: state => {
      state.error = null
    },
    clearMessage: state => {
      state.message = null
    },

  })

