import { SET_POST_COMMENTS, SET_POST_IMG, ADD_POST_COMMENT } from "./types";

const InitialState = {
    imgSrc: '',
    comments: []
};

export function reducer(state = InitialState, { type, payload }) {
    switch (type) {
        case SET_POST_IMG:
            return {
                ...state,
                image_id: payload.image_id,
                imgSrc: payload.src,
            }
        case SET_POST_COMMENTS:
            return {
                ...state,
                comments: payload,
            }
        case ADD_POST_COMMENT:
            return {
                ...state,
                comments: [...state.comments, payload],
            }
        default:
            return state
    }
};


