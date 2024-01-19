<script lang="ts">
    import type { PageData } from './$types';
    import * as Card from "$lib/components/ui/card";
    import * as Select from "$lib/components/ui/select";
    import { Input } from "$lib/components/ui/input";
    import { Textarea } from "$lib/components/ui/textarea";
    import { Label } from "$lib/components/ui/label";
    
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
                        <Select.Trigger id="status">
                          <Select.Value placeholder="Select" />
                        </Select.Trigger>
                        <Select.Content>
                          {#each status as status}
                            <Select.Item value={status.value} label={status.label}
                              >{status.label}</Select.Item
                            >
                          {/each}
                        </Select.Content>
                      </Select.Root>
                    </div>
                    <div class="flex flex-col space-y-1.5">
                      <Label for="visibility">Visibility</Label>
                      <Select.Root>
                        <Select.Trigger id="visibility">
                          <Select.Value placeholder="Select" />
                        </Select.Trigger>
                        <Select.Content>
                          {#each visibility as visibility}
                            <Select.Item value={visibility.value} label={visibility.label}>
                                {visibility.label}</Select.Item>
                          {/each}
                        </Select.Content>
                      </Select.Root>
                    </div>
                  </div>
            </div>
          </form>
        </Card.Content>
      </Card.Root>
</div>