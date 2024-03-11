<!-- <nav
  class="flex justify-around py-4 bg-white/80
backdrop-blur-md shadow-sm w-full top-0 left-0 right-0 z-10 fixed"
>
  <div class="flex items-center">
    <a href="/" class="cursor-pointer">
      <h3 class="text-2xl font-bold text-slate-950">GameZone</h3>
    </a>
  </div>

  <div class="items-center hidden space-x-8 lg:flex">
    <a
      class="flex text-gray-800 hover:text-slate-950
		cursor-pointer"
      href="/"
    >
      Home
    </a>

    <a
      href="/about"
      class="flex text-gray-800 hover:text-slate-950
		cursor-pointer"
    >
      About
    </a>

    <a
      href="/signup"
      class="flex text-gray-800 hover:text-slate-950
		cursor-pointer"
    >
      Join
    </a>
  </div>
</nav> -->
<script lang="ts">
export let isLoggedIn: boolean = false;
</script>

<div class="container w-full mx-auto py-4">
  <div class="flex items-center justify-between">
      <a href="/" class="text-lg font-semibold">Home</a>
      <div class="flex-1"></div>
      <div class="flex items-center">
          <a href="#" class="px-4 py-2 text-slate-950 font-Poppins ml-6">About</a>
          <a href="#" class="px-4 py-2 text-slate-950 font-Poppins ml-6">Pricing</a>
          <a href="#" class="px-4 py-2 text-slate-950 font-Poppins ml-6">Contact</a>

      </div>
  </div>
</div>

