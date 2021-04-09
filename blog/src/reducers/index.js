import { combineReducers } from "redux";
import postsReducer from './postsReducer'
import usersReducer from "./usersReducer";

export default combineReducers(
    {
        // it is dummy, just eliminate error
        posts: postsReducer,
        users: usersReducer

    }
)