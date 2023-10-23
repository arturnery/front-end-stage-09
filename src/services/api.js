import axios from "axios";

export const api = axios.create({
  baseURL: 'https://rockeatnotes-back-end.onrender.com'
});