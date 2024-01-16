<script lang="ts">
    import type { PageData } from '../../$types';
    import { Button } from "$lib/components/ui/button";
    import { Plus } from "radix-icons-svelte";
    
    export let data: PageData;
</script>

<p>Products</p>
  
  <Button variant="outline" >
    <Plus class="mr-2 h-4 w-4" />
    Create New
</Button>