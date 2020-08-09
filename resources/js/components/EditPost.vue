<template>
  <div class="mt-5">
    <Alert type="danger" v-if="validationErrors.length > 0">
      <p class="m-0 p-0" v-for="(error, index) in validationErrors" v-text="error" :key="index"></p>
    </Alert>
    <Loading v-if="loading" />
    <form @submit.prevent="updatePost" @keyup.ctrl.enter="updatePost" v-else>
      <div class="form-group">
        <label class="font-weight-bold" for="title">Post title</label>
        <input type="text" class="form-control" id="title" v-model="post.title" />
      </div>
      <div class="form-group">
        <label class="font-weight-bold" for="text">Post text</label>
        <textarea class="form-control" id="text" cols="30" rows="8" v-model="post.text"></textarea>
      </div>
      <div class="form-group">
        <label class="font-weight-bold" for="category">Category</label>
        <Category v-model="post.category_id" :selected-id="post.category_id" />
      </div>
      <div class="form-group">
        <label class="font-weight-bold" for="category">Thumbnail</label>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFile" @change="selectFile" />
          <label class="custom-file-label" for="customFile">Choose file</label>
        </div>
      </div>
      <hr />
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import Loading from "./Loading";
import Mixin from "../mixin/index";

export default {
  mixins: [Mixin],
  data() {
    return {
      loading: true,
    };
  },
  created() {
    this.checkPost(this.$route.params.postId);
  },
  methods: {
    updatePost() {
      this.loading = true;
      axios
        .patch(`/api/posts/${this.post.id}`, this.post)
        .then((res) => {
          this.errors = {};
          this.loading = false;
          Swal.fire("Good job!", "Post successfull updated!", "success");
          this.$router.push({ name: "post-list" });
        })
        .catch((err) => {
          this.loading = false;
          this.errors = err.response.data.errors;
        });
    },
    checkPost(id) {
      axios
        .get(`/api/posts/${id}`)
        .then((res) => {
          this.post = res.data;
          this.loading = false;
        })
        .catch((e) => {
          this.$router.push({ name: "404" });
        });
    },
  },
  components: {
    Loading,
  },
  beforeRouteEnter: (to, from, next) => {
    if (!isNaN(to.params.postId)) {
      next();
    } else {
      next({ name: "404" });
    }
  },
};
</script>
