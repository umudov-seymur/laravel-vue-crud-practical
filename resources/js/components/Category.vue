<template>
  <select class="custom-select" id="category" @change="selectCategory">
    <option disabled selected>Please, choose the category!</option>
    <option
      v-for="(category, index) in categories"
      :value="category.id"
      :selected="selectedId == category.id"
      :key="index"
    >{{ category.name }}</option>
  </select>
</template>

<script>
export default {
  props: ["selectedId"],
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    selectCategory(event) {
      this.$emit("input", event.target.value);
    },
    getCategories() {
      axios.get(`/api/categories`).then((res) => {
        this.categories = res.data;
      });
    },
  },
  created() {
    if (this.categories.length <= 0) {
      this.getCategories();
    }
  },
};
</script>
