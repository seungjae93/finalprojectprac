import axios from "axios";
import { useMutation } from "react-query";

const postsApi = axios.create({
  baseURL: "http://localhost:3001",
});

//POST
export const addPost = async (post) => {
  const response = await postsApi.post("/review", post);
  return response.data;
};

export const useAddPost = () => {
  return useMutation(addPost);
};

//GET
export const getPosts = async () => {
  const response = await postsApi.get("/review");
  return response.data;
};

export default postsApi;
