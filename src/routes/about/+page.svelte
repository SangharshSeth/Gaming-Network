<script (lang="ts")>
    export let data;
    console.log(data.data);
</script>
<p>About</p>
<p>{JSON.stringify(data.data[0])}</p>
<a href="/">Home</a>