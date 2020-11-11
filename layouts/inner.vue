<template>
  <div>
    <div class="flex flex-row">
      <div class="w-1/5 flex items-start justify-start">
        <nuxt-link class="w-full h-full" to="/">
          <img
            class="h-24 w-auto object-contain -rotate-90 transform mt-4 sm:mt-12 -ml-4 sm:-ml-12"
            src="~/assets/logos/duke-basic.png"
          />
        </nuxt-link>
      </div>
      <div class="w-3/5">
        <nuxt />
      </div>
      <div class="w-1/5 flex flex-col items-end justify-center pr-8">
        <nuxt-link to="/clientLogin" class="side-nav-link">Client Login</nuxt-link>
        <nuxt-link to="/about" class="side-nav-link">About</nuxt-link>
        <a target="_blank" rel="noopener noreferrer" href="mailto:duke@duketalent.agency" class="side-nav-link">Contact</a>
      </div>
    </div>
  </div>
</template>

<style>
html {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.side-nav-link {
  @apply my-4 text-xs;
  text-transform: uppercase;
  line-height: 2em;
  letter-spacing: 0.15em;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
}
</style>
