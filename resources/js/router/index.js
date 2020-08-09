import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const PostList = () => import("../components/PostList");
const NewPost = () => import("../components/NewPost");
const EditPost = () => import("../components/EditPost");

export default new VueRouter({
    mode: "history",
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    routes: [
        {
            path: "/",
            redirect: "/post-list"
        },
        {
            path: "/post-list",
            component: PostList,
            name: "post-list"
        },
        {
            path: "/add-new-post",
            component: NewPost
        },
        {
            path: "/edit-post/:postId",
            component: EditPost,
            name: "post.edit"
        },
        {
            path: "*",
            name: "404",
            component: PostList
        }
    ]
});
