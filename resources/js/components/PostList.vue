<template>
  <div class="mt-5">
    <div class="text-center" v-if="loading">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-else>
      <Category class="mb-3" :selectedId="category" v-model="category" />
      <table class="table">
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
            <th scope="col">Created date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody class="font-weight-bold">
          <tr v-for="(post, index) in posts.data" :key="index">
            <th scope="row">#{{ post.id }}</th>
            <td>{{ post.title }}</td>
            <td>{{ post.text }}</td>
            <td>{{ post.created_at }}</td>
            <td>
              <button class="btn btn-sm btn-success">
                <i class="fa fa-edit"></i> Edit
              </button>
              <button class="btn btn-sm btn-danger ml-1" @click="removePost(post.id)">
                <i class="fa fa-remove"></i> Delete
              </button>
            </td>
          </tr>
        </tbody>
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

export default {
  data() {
    return {
      posts: {
        data: {},
      },
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
      this.getResults(this.currentPage);
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
      let category = this.category > 0 ? `&category=${this.category}` : "";
      this.loading = true;

      axios.get(`api/posts?page=${page}${category}`).then((res) => {
        this.posts = res.data;
        this.loading = false;
        this.currentPage = page;
      });
    },
    removePost(id) {
      axios.delete(`api/posts/${id}`).then((res) => {
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
  components: {
    Alert,
    Category,
  },
};
</script>
