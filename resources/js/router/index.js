import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import PostList from "../components/PostList";
import NewPost from "../components/NewPost";

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
            component: PostList
        },
        {
            path: "/add-new-post",
            component: NewPost
        }
    ]
});
