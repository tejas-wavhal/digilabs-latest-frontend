import { server } from "../store"
import axios from "axios"

export const sendOtp = (email) => async (dispatch) => {
  try {
    dispatch({ type: "sendOtpRequest" })

    const { data } = await axios.post(
      `${server}/sendotp`,
      { email },
      {
        headers: {
          "Content-type": "application/json"
        }
      })

    dispatch({ type: "sendOtpSuccess", payload: data })

  } catch (error) {
    dispatch({ type: 'sendOtpFail', payload: error.response.data.message })
  }
}


export const verifyOtp = (otp) => async (dispatch) => {
  try {
    dispatch({ type: "verifyOtpRequest" })

    const { data } = await axios.post(
      `${server}/verifyopt`,
      { otp },
      {
        headers: {
          "Content-type": "application/json"
        }
      })

    dispatch({ type: "verifyOtpSuccess", payload: data })

  } catch (error) {
    dispatch({ type: 'verifyOtpFail', payload: error.response.data.message })
  }
}

