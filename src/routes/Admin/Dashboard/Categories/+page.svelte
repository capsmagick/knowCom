<script lang="ts">
    import type { PageData } from '../../$types';
    import { Button } from "$lib/components/ui/button";
    import { goto } from '$app/navigation';
    import { Plus } from "radix-icons-svelte";
    import DataTable from "./categorieTable.svelte";
    export let data: PageData;
  </script>
  
  <div class="flex items-center justify-between">
    <p>Categories</p>
    <Button variant="outline" on:click={() => goto("/Admin/Dashboard/NewCategories")}>
      <Plus class="mr-2 h-4 w-4" />
      Add Category
    </Button>
  </div>
  <div class="container mx-auto py-10">
    <DataTable />
  </div>

