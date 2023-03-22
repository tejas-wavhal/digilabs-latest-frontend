import { server } from "../store"
import axios from "axios"



export const loadData = () => async (dispatch) => {
  try {
    dispatch({ type: "loadDataRequest" })

    const { data } = await axios.get(
      `${server}/loaddata`,
      {
        headers: {
          "Content-type": "application/json"
        }
      })

    dispatch({ type: "loadDataSuccess", payload: data })

  } catch (error) {
    dispatch({ type: 'loadDataFail', payload: error.response.data.message })
  }
}


export const updateText = (text) => async (dispatch) => {
  try {
    dispatch({ type: "updateTextRequest" })

    const { data } = await axios.put(
      `${server}/updatetext`,
      { text },
      {
        headers: {
          "Content-type": "application/json"
        }
      })

    dispatch({ type: "updateTextSuccess", payload: data })

  } catch (error) {
    dispatch({ type: 'updateTextFail', payload: error.response.data.message })
  }
}


export const updateLogo = (formdata) => async (dispatch) => {
  try {
    dispatch({ type: "updateLogoRequest" })

    const { data } = await axios.put(
      `${server}/updatelogo`,
      formdata,
      {
        headers: {
          "Content-type": "multipart/form-data"
        }
      })

    dispatch({ type: "updateLogoSuccess", payload: data })

  } catch (error) {
    dispatch({ type: 'updateLogoFail', payload: error.response.data.message })
  }
}