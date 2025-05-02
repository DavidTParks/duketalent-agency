<template>
  <div>
    
    <div class="flex flex-row">
      <div class="w-1/5">
        <div class="p-4">
          <a class="text-3xl uppercase underline" href="https://www.duketalent.io/" target="_blank" rel="noopener noreferrer" style="color: #b93517;">
            DukeTalent.io
          </a>
        </div>
      
      </div>
      <div class="w-3/5">
        <nuxt />
      </div>
      <div class="w-1/5 flex flex-col items-end justify-center pr-8">
        <nuxt-link to="/clientLogin" class="side-nav-link">Client Login</nuxt-link>
        <nuxt-link to="/about" class="side-nav-link">About</nuxt-link>
        <a href="mailto:duke@duketalent.agency" class="side-nav-link">Contact</a>
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
