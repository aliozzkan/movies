import axios from "axios";
import {BASE_URL} from 'helpers/server-url'

export const http = () => {
  const worker = axios.create();
  worker.defaults.baseURL = BASE_URL;

  return worker;
}