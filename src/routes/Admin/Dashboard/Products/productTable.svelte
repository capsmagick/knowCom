<script lang="ts">
  import { createTable, Render, Subscribe ,createRender } from "svelte-headless-table";
  import { readable } from "svelte/store";
  import * as Table from "$lib/components/ui/table";
  import ProductActions from "./productActions.svelte";
  import { addPagination ,addSortBy} from "svelte-headless-table/plugins";
  import Button from "$lib/components/ui/button/button.svelte";
  import {CaretSort} from "radix-icons-svelte";


    type Payment = {
      id:string;
      productimage: string;
      productname: string;
      status: "draft" | "unpublished" | "published" | "Deactivated";
      stock: number;
    };
    const data: Payment[] = [
      {
        id:"123",
        productimage: "url",
      productname: "shirt",
      status: "draft" ,
      stock: 20,
      },
      {
        id:"124",
        productimage: "url",
      productname: "shirt",
      status: "draft" ,
      stock: 20,
      },
      {
        id:"125",
        productimage: "url",
      productname: "shirt",
      status: "draft" ,
      stock: 20,
      },
      {
        id:"126",
        productimage: "url",
      productname: "shirt",
      status: "draft" ,
      stock: 20,
      }
      
    ];
  const table = createTable(readable(data), {
    page: addPagination(),
    sort: addSortBy()
  });
    
    const columns = table.createColumns([
    table.column({
      accessor: "id",
      header: "ID",
      plugins: {
        sort: {
          disable: true
        }
      }
    }),
    table.column({
      accessor: "productimage",
      header: "Image",
      plugins: {
        sort: {
          disable: true
        }
      }
    }),
    table.column({
      accessor: "productname",
      header: "Name",
      plugins: {
        sort: {
          disable: true
        }
      }
    }),
    table.column({
      accessor: "status",
      header: "Status",
      plugins: {
        sort: {
          disable: true
        }
      }
    }),
    table.column({
      accessor: "stock",
      header: "Stock",
      plugins: {
        sort: {
          disable: true
        }
      }
    }),
    table.column({
      accessor: ({ id }) => id,
      header: "",
      plugins: {
        sort: {
          disable: true
        }
      },
      cell: ({ value }) => {
        return createRender(ProductActions, { id: value });
      }
    })
  ]);

  const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates  } =
    table.createViewModel(columns);
    const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;

  </script>


<div class="rounded-md border">
    <Table.Root {...$tableAttrs}>
      <Table.Header>
        {#each $headerRows as headerRow}
          <Subscribe rowAttrs={headerRow.attrs()}>
            <Table.Row>
              {#each headerRow.cells as cell (cell.id)}
                <Subscribe attrs={cell.attrs()} let:attrs props={cell.props()}>
                  <Table.Head {...attrs}>
                    <Render of={cell.render()} />
                  </Table.Head>
                </Subscribe>
              {/each}
            </Table.Row>
          </Subscribe>
        {/each}
      </Table.Header>
      <Table.Body {...$tableBodyAttrs}>
        {#each $pageRows as row (row.id)}
          <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
            <Table.Row {...rowAttrs}>
              {#each row.cells as cell (cell.id)}
                <Subscribe attrs={cell.attrs()} let:attrs>
                  <Table.Cell {...attrs}>
                    <Render of={cell.render()} />
                  </Table.Cell>
                </Subscribe>
              {/each}
            </Table.Row>
          </Subscribe>
        {/each}
      </Table.Body>
    </Table.Root><div class="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          on:click={() => ($pageIndex = $pageIndex - 1)}
          disabled={!$hasPreviousPage}>Previous</Button
        >
        <Button
          variant="outline"
          size="sm"
          disabled={!$hasNextPage}
          on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
        >
      </div>
    </div>
