<template>
  <div class="flex items-center justify-center min-h-screen flex-col">
    <p
      class="max-w-sm uppercase text-xs"
    >Duke Talent is a boutique search and consulting agency specializing in design, architecture and creative-minded brands.</p>
    <p class="font-bold uppercase text-left max-w-sm w-full text-xs mt-4">Contact</p>
    <p class="max-w-sm uppercase text-xs">24 Park Ave</p>
    <p class="max-w-sm uppercase text-xs">Venice, CA 90291</p>
    <p>e. duke@duketalent.agency</p>
    <p>p. 414 520 0318</p>
  </div>
</template>

<script>
export default {
  layout: "inner"
};
</script>

<style scoped>
p {
  @apply my-2 max-w-sm uppercase text-xs w-full text-left;
}
</style>