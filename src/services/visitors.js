import axios from "axios"

const baseUrl = import.meta.env.VITE_BASE_URL

const getCountForKey = async (key) => {
  const { data } = await axios.get(`${baseUrl}/${key}`)
  return data
}

const registerKey = async (key) => {
  const { data } = await axios.post(`${baseUrl}/register/${key}`)
  return data
}

const incrementKey = async (key) => {
  const { data } = await axios.post(`${baseUrl}/increment/${key}`)
  return data
}

const resetKey = async (key) => {
  const { data } = await axios.post(`${baseUrl}/reset/${key}`)
  return data
}

export default {
  getCountForKey,
  registerKey,
  incrementKey,
  resetKey
}
