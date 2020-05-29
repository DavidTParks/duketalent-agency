<template>
  <div class="flex items-center justify-center min-h-screen flex-col">
    <p v-for="(aboutText, index) in document.about_text" :key="index">{{aboutText.text}}</p>
    <p class="font-bold uppercase text-left max-w-sm w-full text-xs mt-12">Contact</p>
    <p class="max-w-sm uppercase text-xs">24 Park Ave</p>
    <p class="max-w-sm uppercase text-xs">Venice, CA 90291</p>
    <p>e. duke@duketalent.agency</p>
    <p>p. 414 520 0318</p>
  </div>
</template>

<script>
export default {
  layout: "inner",
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle("about")).data;
      return {
        document
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style scoped>
p {
  @apply py-2 max-w-sm uppercase text-xs w-full text-left;
}
</style>