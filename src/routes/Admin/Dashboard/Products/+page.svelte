<script lang="ts">
    import type { PageData } from '../../$types';
    import { Button } from "$lib/components/ui/button";
    import { Plus } from "radix-icons-svelte";
    import { goto } from '$app/navigation';
    import ProductTable from "./ProductTable.svelte";
    
    export let data: PageData;
   

</script>

<div class="flex items-center justify-between">
  <p>Products</p>
  <Button variant="outline" on:click={() => goto("/Admin/Dashboard/NewProduct")}>
    <Plus class="mr-2 h-4 w-4" />
    Create New
  </Button>
</div>
  
<div class="container mx-auto py-10">
  <ProductTable />
</div>