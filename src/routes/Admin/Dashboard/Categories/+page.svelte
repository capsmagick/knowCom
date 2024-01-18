<script lang="ts">
    import type { PageData } from '../../$types';
    import DataTable from "./categorieTable.svelte";
    export let data: PageData;
  </script>
  <p>Categories</p>
  <div class="container mx-auto py-10">
    <DataTable />
  </div>

