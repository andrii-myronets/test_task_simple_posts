import { server } from "../../API";
import { setPosts } from "./actions";

export const getPosts = () => async (dispatch) => {
    try {
        const { status, data } = await server('/images/');
        if (status === 200) {
          dispatch(setPosts(data));
        }
      } catch (error) {
        console.log(error);
      }
};