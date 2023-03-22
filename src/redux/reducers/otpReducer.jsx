import { createReducer } from "@reduxjs/toolkit";

export const otpReducer = createReducer(
  {},
  {
    sendOtpRequest: state => {
      state.loading = true
    },
    sendOtpSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    sendOtpFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    verifyOtpRequest: state => {
      state.loading = true
    },
    verifyOtpSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    verifyOtpFail: (state, action) => {
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

