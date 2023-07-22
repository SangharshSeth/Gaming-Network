<script lang="ts">
  import { fly } from "svelte/transition";
</script>

<title> Login </title>
<meta
  content="This is a Signup Page for Learning App Developed by Sangharsh Seth"
  name="description"
/>

<div
  class="mt-8 sm: mx-auto sm: w-full sm: max-w-md h-full"
  style="margin-top: 160px;"
  in:fly={{ y: 50, duration: 1000 }}
>
  <div
    class=" bg-white py-8 px-6 shadow rounded-xl sm:px-10"
    style="height: 730px;"
  >
    <div class="sm: mx-auto sm: w-full sm: max-w-md">
      <div class=" mb-6 flex flex-col items-center content-center gap-2">
        <p class="font-bold text-emerald-600 text-2xl font-sans-serif">
          Login to Your Account
        </p>
        <p class="text-sm">
          Dont have a account? <a class="text-emerald-600" href="/signup"
            >Join Now</a
          >
        </p>
      </div>
      <form class="mb-0 space-y-6 flex flex-col flex-1 h-full" method="POST">
        <div class="mt-0 mb-0 flex flex-col gap-4">
          <div>
            <label class="text-sm font-medium text-gray-700" for="email">
              Email
            </label>
            <input
              class="w-full border focus:outline-none focus:border-emerald-500
                              border-gray-300 px-4 py-2 rounded shadow-sm"
              id="email"
              name="email"
              placeholder="user@mail.com"
              required
              type="text"
            />
          </div>
          <div>
            <label class="text-sm font-medium text-gray-700" for="password">
              Password
            </label>
            <input
              class="w-full border focus:outline-none focus:border-emerald-500
                              border-gray-300 px-4 py-2 rounded shadow-sm"
              id="password"
              name="password"
              placeholder="Password"
              required
              type="password"
            />
          </div>
          <div class="flex flex-row gap-1 items-center content-center">
            <label for="terms" id="terms" class="text-gray-700 text-sm font-medium"
              >Forgot your Password? <a href="/forgot" class="text-emerald-700"
                >Reset Here.</a
              ></label
            >
          </div>
          <button
            class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 mt-1 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
