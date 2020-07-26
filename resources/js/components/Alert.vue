<template>
  <div class="alert shadow-sm" :class="`alert-${type}`">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      default: "success",
    },
  },
};
</script>
