<script lang="ts">
    import type { PageData } from '../../$types';
    import DataTable from "./customerTable.svelte";

    export let data: PageData;
</script>
<p>Customer</p>
<div class="container mx-auto py-10">
    <DataTable />
</div>