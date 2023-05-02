import { configureStore } from "@reduxjs/toolkit";
import {
  addBlogReducer,
  addCategoryReducer,
  deleteBlogReducer,
  deleteCategoryReducer,
  getBlogReducer,
  getCategoriesReducer,
  updateBlogReducer,
  updateCategoryReducer,
} from "../redux/reducers/blog.reducer";
import {
  addjobReducer,
  jobApplyReducer,
  jobReducer,
  jobsReducer,
  updateJobReducer,
} from "../redux/reducers/job.reducer";
import {
  contactUsReducer,
  getmessageReducer,
  getnewsReducer,
  newsReducer,
} from "../redux/reducers/news.reducer";
import {
  addPrivacyReducer,
  addTermsReducer,
  getPrivacyRedcuer,
  getTermsRedcuer,
} from "../redux/reducers/settings.reducer";
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
    addPrivacy: addPrivacyReducer,
    /*
     * add terms and condition
     */
    addTerms: addTermsReducer,
    /*
     * get privacy and policy
     */
    getPrivacy: getPrivacyRedcuer,
    /*
     *  get terms and condition
     */
    getTerms: getTermsRedcuer,
    newsList: getnewsReducer,
    messagesList: getmessageReducer, //get all inqueires message

    //categories curd actions

    addCategory: addCategoryReducer,
    updateCategory: updateCategoryReducer,
    deleteCategory: deleteCategoryReducer,
    listcategories: getCategoriesReducer,

    //blog curd actions

    addBlog: addBlogReducer,
    updateBlog: updateBlogReducer,
    deleteBlog: deleteBlogReducer,
    listBlogs: getBlogReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
