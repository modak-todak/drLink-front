import { api } from "../api"

export const getRecords = async() => {
  const res = await api.get('/records')
  return res.data.mockConsultationRecords
}