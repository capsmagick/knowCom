<script lang="ts">
    import type { PageData } from './$types';
    import * as Card from "$lib/components/ui/card";
    import * as Select from "$lib/components/ui/select";
    import { Input } from "$lib/components/ui/input";
    import { Textarea } from "$lib/components/ui/textarea";
    import { Label } from "$lib/components/ui/label";
	import { Description } from '$lib/components/ui/alert';
    
    export let data: PageData;

    const status = [
      {
        value: "active",
        label: "Active"
      },
      {
        value: "inactive",
        label: "Inactive"
      }
    ];
    const visibility = [
      {
        value: "public",
        label: "Public"
      },
      {
        value: "private",
        label: "Private"
      }
    ];
</script>

<style>
    .label {
      font-weight: normal;
      font-size: 5px;
    }
    .center-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
</style>

<div class="container mx-auto py-10">
    <Card.Root class="w-[800px] mx-auto">
        <Card.Header>
          <Card.Title>General information<span class="text-red-500">*</span></Card.Title>
          <Card.Description class="card-description">To start selling, all you need is a name and a price.</Card.Description>
        </Card.Header>
        <Card.Content>
          <form>
            <div class="p-4 mb-4">
                <div class="grid grid-cols-2 gap-4 mt-2">
                    <div class="flex flex-col space-y-1.5">
                      <Label class="label" for="title">Title<span class="text-red-500">*</span></Label>
                      <Input id="title" placeholder="Winter Jacket" required />
                    </div>
                    <div class="flex flex-col space-y-1.5">
                      <Label for="subtitle">Subtitle</Label>
                      <Input id="subtitle" placeholder="Warm and cozy..."/>
                    </div>
                  </div>
                  <p class="text-xs mt-1 card-description">Give your product a short and clear title.<br>
                    50-60 characters is the recommended length for search engines.</p>
                  <div class="grid grid-cols-2 gap-4 mt-4">
                    <div class="flex flex-col space-y-1.5">
                        <Label class="label" for="handle">Handle<span class="text-red-500">*</span></Label>
                        <Input id="handle" placeholder="/ Winter-Jacket" required />
                      </div>
                      <div class="flex flex-col space-y-1.5">
                        <Label for="material">Material</Label>
                        <Input id="material" placeholder="100% Cotton"/>
                      </div>
                  </div>
                  <div class="mt-4">
                    <Label for="description">Description</Label>
                    <Textarea id="description" placeholder="A warm and cozy jacket..." required />
                  </div>
                  <p class="text-xs mt-1 card-description">Give your product a short and clear description.<br>
                    120-160 characters is the recommended length for search engines.</p>
            </div>
          </form>
        </Card.Content>
      </Card.Root>
</div>