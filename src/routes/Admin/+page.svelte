<script>
	export let form;
	console.log(form);
</script>

<div class="container">
	<h2>Login</h2>

	{#if form?.message}
	  <p class="red">{form.message}</p>
	{/if}
	<form method="post">
		<div>
			<input name="email" type="email" value={form?.email || "admin@demo.com"}>
		</div>
		<div>
			<input name="password" type="password" value="Helloworld">
		</div>
		<button>Login</button>

	</form>

</div>

<style>
	.red{
		color: red;
	}
</style>