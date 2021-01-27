import { SET_POSTS } from "./types";

const InitialState = {
    posts: [],
};

export function reducer ( state = InitialState, {type, payload}) {
    switch  (type) {
        case SET_POSTS:
            return {
                ...state,
                posts: payload,
            }
        default:
            return state
    }
};


