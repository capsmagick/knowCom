<script lang="ts">
    import type { PageData } from './$types';
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import * as Select from "$lib/components/ui/select";
    import { Input } from "$lib/components/ui/input";
    import { Textarea } from "$lib/components/ui/textarea";
    import { Label } from "$lib/components/ui/label";
	import { Description } from '$lib/components/ui/alert';
    
    export let data: PageData;

    const frameworks = [
      {
        value: "sveltekit",
        label: "SvelteKit"
      },
      {
        value: "next",
        label: "Next.js"
      },
      {
        value: "astro",
        label: "Astro"
      },
      {
        value: "nuxt",
        label: "Nuxt.js"
      }
    ];
</script>
<p>Add Category</p>

<style>
    .label {
      font-weight: normal;
      font-size: 5px;
    }
</style>
  
  <Card.Root class="w-[800px]">
    <Card.Header>
      <Card.Title>Details</Card.Title>
    </Card.Header>
    <Card.Content>
      <form>
        <div class="p-4 mb-4">
            <div class="grid grid-cols-2 gap-4 mt-2">
                <div class="flex flex-col space-y-1.5">
                  <Label class="label" for="name">Name<span class="text-red-500">*</span></Label>
                  <Input id="name" placeholder="Give this category a name" required />
                </div>
                <div class="flex flex-col space-y-1.5">
                  <Label for="handle">Handle</Label>
                  <Input id="handle" placeholder="Custon handle"/>
                </div>
              </div>
              <div class="mt-4">
                <Label for="description">Description</Label>
                <Textarea id="description" placeholder="Give this category a description" required />
              </div>
              <div class="grid grid-cols-2 gap-4 mt-4">
                <div class="flex flex-col space-y-1.5">
                  <Label for="status">Status</Label>
                  <Select.Root>
                    <Select.Trigger id="framework">
                      <Select.Value placeholder="Select" />
                    </Select.Trigger>
                    <Select.Content>
                      {#each frameworks as framework}
                        <Select.Item value={framework.value} label={framework.label}
                          >{framework.label}</Select.Item
                        >
                      {/each}
                    </Select.Content>
                  </Select.Root>
                </div>
                <div class="flex flex-col space-y-1.5">
                  <Label for="visibility">Visibility</Label>
                  <Select.Root>
                    <Select.Trigger id="framework">
                      <Select.Value placeholder="Public" />
                    </Select.Trigger>
                    <Select.Content>
                      {#each frameworks as framework}
                        <Select.Item value={framework.value} label={framework.label}>
                            {framework.label}</Select.Item>
                      {/each}
                    </Select.Content>
                  </Select.Root>
                </div>
              </div>
        </div>
      </form>
    </Card.Content>
  </Card.Root>