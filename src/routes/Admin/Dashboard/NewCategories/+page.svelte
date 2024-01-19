<script lang="ts">
    import type { PageData } from './$types';
    import CategoryForm from "./addCategoryForm.svelte";
    
    export let data: PageData;
</script>
<p>Add Category</p>

<div class="container mx-auto py-10">
  <CategoryForm { data }/>
</div>