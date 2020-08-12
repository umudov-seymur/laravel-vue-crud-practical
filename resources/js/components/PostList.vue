<template>
  <div class="mt-5">
    <Loading v-if="loading" />
    <div v-else>
      <Category class="mb-3" :selectedId="category" v-model="category" />
      <table class="table table-bordered">
        <thead class="text-primary font-weight-bold">
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <router-link :to="{path: 'post-list',query : {order : 'asc',page: currentPage}}">
                Title
                <i class="fa fa-arrow-up"></i>
              </router-link>
            </th>
            <th scope="col">Post text</th>
            <th scope="col">Category</th>
            <th scope="col">Created date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <draggable v-model="posts.data" class="font-weight-bold" tag="tbody" v-bind="dragOptions">
          <tr v-for="(post, index) in posts.data" :key="index">
            <th scope="row">#{{ post.id }}</th>
            <td>{{ post.title }}</td>
            <td>{{ post.text }}</td>
            <td>
              <span class="badge badge-info text-white shadow p-2">{{ post.category.name }}</span>
            </td>
            <td>{{ post.created_at }}</td>
            <td>
              <router-link
                :to="{name: 'post.edit',params: {postId: post.id}}"
                class="btn btn-sm btn-success"
                tag="button"
              >
                <i class="fa fa-edit"></i> Edit
              </router-link>
              <button class="btn btn-sm btn-danger ml-1" @click="removePost(post.id)">
                <i class="fa fa-remove"></i> Delete
              </button>
            </td>
          </tr>
        </draggable>
      </table>
      <hr />
      <pagination :data="posts" @pagination-change-page="getResults"></pagination>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import Alert from "./Alert";
import Category from "./Category";
import Loading from "./Loading";
import draggable from "vuedraggable";

export default {
  order: 1,
  data() {
    return {
      posts: {
        data: {},
      },
      list: [],
      category: null,
      loading: true,
      currentPage: null,
      ascOrDesc: false,
    };
  },
  created() {
    this.currentPage = this.$route.query.page;
    let category = (this.category = this.$route.query.category || null);
    if (category <= 0) {
      this.getResults(this.currentPage);
    }
  },
  watch: {
    category(id) {
      this.getResults(1);
      this.routeChange({
        category: id,
      });
    },
    currentPage(page) {
      this.routeChange({
        page: page,
        category: this.category || undefined,
      });
    },
  },
  methods: {
    getResults(page = 1) {
      let category = this.category !== null ? `&category=${this.category}` : "";
      this.loading = true;

      axios.get(`/api/posts?page=${page}${category}`).then((res) => {
        this.posts = res.data;
        this.loading = false;
        this.currentPage = page;
      });
    },
    removePost(id) {
      axios.delete(`/api/posts/${id}`).then((res) => {
        Swal.fire("Good job!", "Removed successfull", "success");
        this.getResults(this.currentPage);
      });
    },
    routeChange(query) {
      this.$router
        .push({
          path: "post-list",
          query: query,
        })
        .catch((e) => {});
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  components: {
    Alert,
    Category,
    Loading,
    draggable,
  },
};
</script>
