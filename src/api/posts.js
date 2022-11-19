import {BASE_URL} from "../config";
import {
    deleteAPICalls,
    getAPICalls,
    getWithoutTokenAPICalls,
    patchAPICalls,
    postAPICalls,
    postWithoutBodyAPICalls
} from "./utility";

const getUserLikedPosts = async (likerId, token, query) => {
    let apiEndpoint = BASE_URL + "api/posts/liked/" + likerId + "?" + new URLSearchParams(query);
    try {
        return getAPICalls(apiEndpoint, token);
    } catch (error) {
        console.log(error);
    }
};

const getPosts = async (token, query) => {
    let apiEndpoint = BASE_URL + "api/posts?" + new URLSearchParams(query);
    try {
        return getAPICalls(apiEndpoint, token);
    } catch (error) {
        console.log(error);
    }
};

const getPost = async (postId, token) => {
    let apiEndpoint = BASE_URL + "api/posts/" + postId;
    try {
        return getAPICalls(apiEndpoint, token);
    } catch (error) {
        console.log(error);
    }
};

const createPost = async (post, user) => {
    let apiEndpoint = BASE_URL + "api/posts";
    try {
        return postAPICalls(apiEndpoint, user.token, post);
    } catch (error) {
        console.log(error);
    }
};

const likePost = async (postId, user) => {
    let apiEndpoint = BASE_URL + "api/posts/like/" + postId;
    try {
        return postWithoutBodyAPICalls(apiEndpoint, user.token)
    } catch (error) {
        console.log(error);
    }
};

const updatePost = async (postId, user, data) => {
    let apiEndpoint = BASE_URL + "api/posts/" + postId;
    try {
        return patchAPICalls(apiEndpoint, user.token, data);
    } catch (error) {
        console.log(error);
    }
};

const deletePost = async (postId, user) => {
    let apiEndpoint = BASE_URL + "api/posts/" + postId;
    try {
        return deleteAPICalls(apiEndpoint, user.token);
    } catch (error) {
        console.log(error);
    }
};

const unlikePost = async (postId, user) => {
    let apiEndpoint = BASE_URL + "api/posts/like/" + postId;
    try {
        return deleteAPICalls(apiEndpoint, user.token);
    } catch (error) {
        console.log(error);
    }
};

export {
    getPost,
    createPost,
    updatePost,
    deletePost,
    getPosts,
    getUserLikedPosts,
    likePost,
    unlikePost,
};
