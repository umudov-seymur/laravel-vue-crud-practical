<template>
  <div class="mt-5">
    <Alert type="danger" v-if="validationErrors.length > 0">
      <p class="m-0 p-0" v-for="(error, index) in validationErrors" v-text="error" :key="index"></p>
    </Alert>
    <form @submit.prevent="savePost">
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
        <Category v-model="post.category_id" />
      </div>
      <div class="form-group">
        <label class="font-weight-bold" for="category">Thumbnail</label>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFile" @change="selectFile" />
          <label class="custom-file-label" for="customFile">Choose file</label>
        </div>
      </div>
      <hr />
      <button type="submit" class="btn btn-primary" :disabled="disabled">Submit</button>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import Alert from "./Alert";
import Category from "./Category";

export default {
  data() {
    return {
      post: {
        title: "",
        text: "",
        category_id: "",
      },
      errors: {},
    };
  },
  computed: {
    validationErrors() {
      let errors = [];
      Object.keys(this.errors).forEach((key) => {
        errors.push(this.errors[key][0]);
      });
      return errors;
    },
    disabled() {
      return isEmptyObject(this.post);
    },
  },
  components: {
    Alert,
    Category,
  },
  methods: {
    savePost() {
      const data = new FormData();
      Object.keys(this.post).forEach((key) => {
        data.append(key, this.post[key]);
      });

      axios
        .post(`api/posts`, data)
        .then((res) => {
          if (res.data) {
            this.errors = {};
            this.post = {};
            Swal.fire(
              "Good job!",
              "Post successfull added to system",
              "success"
            );
            this.$router.push("/");
          }
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
        });
    },
    selectFile(event) {
      this.post.photo = event.target.files[0];
    },
  },
  beforeRouteLeave(to, from, next) {
    if (!isEmptyObject(this.post)) {
      const answer = window.confirm(
        "Do you really want to leave? you have unsaved changes!"
      );
      next(answer);
    } else {
      next();
    }
  },
};
function isEmptyObject(obj) {
  return Object.values(obj).every((field) => field.trim() === "");
}
</script>
