<script (lang="ts")>
    export let data;
    console.log(data.data);
</script>
<div style="margin-top: 100px;">
<p>About</p>
<p>{JSON.stringify(data.data[0])}</p>
<a href="/">Home</a>
</div>