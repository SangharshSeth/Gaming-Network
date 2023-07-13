<html>
<meta content="This is a Signup Page for Learning App Developed by Sangharsh Seth" name="description">
<title>
    Learning
</title>
<script lang="ts">
</script>
<div
        class="mt-8 sm: mx-auto sm: w-full sm: max-w-md h-full"
        style="margin-top: 160px;"
>
    <div class=" bg-white py-8 px-6 shadow rounded-xl sm:px-10 h-screen">
        <div class="sm: mx-auto sm: w-full sm: max-w-md ">

            <div class="text-emerald-700 text-xl mb-5 flex flex-col items-center content-center">
                <p>Create your Account</p>
            </div>
            <form
                    action="?/signup"
                    class="mb-0 space-y-6 flex flex-col flex-1 h-full"
                    method="POST"
            >
                <div class="mt-0 mb-0 flex flex-col gap-4">
                    <div>
                        <label class="text-sm font-medium text-gray-600" for="email">
                            Email
                        </label>
                        <input
                                class="w-full border focus:outline-none focus:border-emerald-500
                            border-gray-300 px-4 py-2 rounded shadow-sm"
                                id="email"
                                name="email"
                                placeholder="User@mail.com"
                                required
                                type="text"
                        />
                    </div>
                    <div>
                        <label class="text-sm font-medium text-gray-600" for="password"> Password </label>
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
                    <button class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 mt-1 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
</html>
