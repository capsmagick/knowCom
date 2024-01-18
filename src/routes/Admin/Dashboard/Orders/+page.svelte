<script lang="ts">
    import type { PageData } from '../../$types';
    import DataTable from "./orderTable.svelte";

    export let data: PageData;
</script>
<p>Orders</p>
<div class="container mx-auto py-10">
    <DataTable />
</div>