import { ADD_BLOG_LOADING } from "../constant/blog.constants";

export const addBlog =
  (title: string, image: string, content: any, addedby: string, tag: []) =>
  async (dispatch: any) => {
    try {
      dispatch({
        type: ADD_BLOG_LOADING,
        payload: { title, image, content },
      });
    } catch (error) {}
  };
