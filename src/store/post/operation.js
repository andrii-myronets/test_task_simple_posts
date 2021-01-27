import { server } from "../../API";
import { setPostImg, setPostComents, addPostComent } from "./actions";

export const getPostImg = (image_id) => async (dispatch) => {
    try {
        const { status, data } = await server(`/images/${image_id}`);
        if (status === 200) {
          dispatch(setPostImg({
            image_id:image_id,
            src: data.src
          }));
        }
      } catch (error) {
        console.log(error);
      }
};

export const getPostComments = (image_id) => async (dispatch) => {
  try {
      const { status, data } = await server(`/comments/${image_id}`);
      if (status === 200) {
        dispatch(setPostComents(data));
      }
    } catch (error) {
      console.log(error);
    }
};

export const addComment = (comment) => async (dispatch) => {
  try {
      const { status, data } = await server.post(`/comments/add/`, comment);
      if (status === 200) {
        dispatch(addPostComent(data));
      }
    } catch (error) {
      console.log(error);
    }
};

