import { configureStore } from "@reduxjs/toolkit";
import {
  addjobReducer,
  jobApplyReducer,
  jobReducer,
  jobsReducer,
  updateJobReducer,
} from "../redux/reducers/job.reducer";
import { contactUsReducer, newsReducer } from "../redux/reducers/news.reducer";
import { userSigninReducer } from "../redux/reducers/user.reducer";
// ...

export const store = configureStore({
  reducer: {
    subscribe: newsReducer,
    contatcUs: contactUsReducer,
    userSignin: userSigninReducer,
    jobsList: jobsReducer,
    jobDetails: jobReducer,
    addJobs: addjobReducer,
    updateJobs: updateJobReducer,
    applyjob: jobApplyReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;