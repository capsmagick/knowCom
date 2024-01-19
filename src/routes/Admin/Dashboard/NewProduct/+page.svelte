<script lang="ts">
    import type { PageData } from '../$types';
    import ProductForm from "./addProductForm.svelte";
    
    export let data: PageData;
</script>
<p>Add Product</p>

<div class="container mx-auto py-10">
    <ProductForm { data }/>
</div>