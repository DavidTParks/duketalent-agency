<template>
  <div class="flex items-center justify-center min-h-screen flex-col">
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <img class="mx-auto h-12 w-auto" src="/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
    <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
      Client Login
    </h2>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 sm:px-10 border border border-gray-600">
      <form action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
            Username
          </label>
          <div class="mt-1 rounded-md shadow-sm">
            <input id="email" type="email" required class="appearance-none block w-full px-3 py-2 border border-gray-600  placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-gray-900 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
          </div>
        </div>

        <div class="mt-6">
          <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
            Password
          </label>
          <div class="mt-1 rounded-md shadow-sm">
            <input id="password" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-600  placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-gray-900 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
          </div>
        </div>

        <div class="mt-6 flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember_me" type="checkbox" class="form-checkbox h-4 w-4 text-gray-600 transition duration-150 ease-in-out" />
            <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm leading-5">
            <a href="#" class="ml-8 font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:underline transition ease-in-out duration-150">
              Forgot your password?
            </a>
          </div>
        </div>

        <div class="mt-6">
          <span class="block w-full rounded-md shadow-sm">
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-black-700 transition duration-150 ease-in-out">
              Sign in
            </button>
          </span>
        </div>
      </form>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  layout: "inner",
};
</script>

<style scoped>

</style>