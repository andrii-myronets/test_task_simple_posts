import { SET_POST_IMG, SET_POST_COMMENTS, ADD_POST_COMMENT } from "./types";

export const setPostImg = (payload) => ({
    type: SET_POST_IMG,
    payload
});

export const setPostComents = (payload) => ({
    type: SET_POST_COMMENTS,
    payload
});

export const addPostComent = (payload) => ({
    type: ADD_POST_COMMENT,
    payload
});