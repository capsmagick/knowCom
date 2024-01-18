<script>
  import * as Card from "$lib/components/ui/card";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import Button from '$lib/components/ui/button/button.svelte';

	export let form;
	console.log(form);

</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" 
    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" 
    alt="Your Company">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <Label for="email">Email address</Label>
        <div class="mt-2">
          <Input id="email" 
          name="email" 
          type="email" autocomplete="email" required value="admin@demo.com"></Input>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <Label for="password">Password</Label>
        </div>
        <div class="mt-2">
          <Input id="password" name="password" type="password" autocomplete="current-password" required value="Helloworld"></Input>
        </div>
      </div>

      <div>
        <Button type="submit" class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Sign in</Button>
      </div>
    </form>

  </div>
</div>

