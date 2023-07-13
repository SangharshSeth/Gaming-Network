<script lang="ts">
  import type { ActionData } from "./$types";
</script>

<div
  class="mt-8 sm: mx-auto sm: w-full sm: max-w-md"
  style="margin-top: 200px;"
>
  <div class=" bg-white py-8 px-6 shadow rounded-xl sm:px-10">
    <div class="sm: mx-auto sm: w-full sm: max-w-md">
      <form
        class="mb-0 space-y-6 flex flex-col"
        method="POST"
        action="?/signup"
      >
        <h2 class="center">Create your Account</h2>
        <div class="mb-0 space-y-2 flex flex-col">
          <label for="email" class="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="User@mail.com"
            id="email"
            class="w-full border
                            border-gray-300 px-3 py-2 rounded-lg shadow-sm"
          />
          <label for="password"> Password </label>
          <input
            type="pass"
            name="password"
            placeholder="Password"
            id="password"
            class="w-full border
                            border-gray-300 px-3 py-2 rounded-lg shadow-sm"
          />
          <button class=".outline">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>

<style>
</style>
