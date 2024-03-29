<script lang="ts">
    import { createTable, Render, Subscribe, createRender } 
    from "svelte-headless-table";
    import { addPagination, addSortBy, addTableFilter, addHiddenColumns, addSelectedRows }
    from "svelte-headless-table/plugins";
    import { readable } from "svelte/store";
    import * as Table from "$lib/components/ui/table";
    import DataTableActions from "./orderActions.svelte";
    import { Button } from "$lib/components/ui/button";
    import { ChevronDown, CaretSort } from "radix-icons-svelte";
    import { Input } from "$lib/components/ui/input";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import DataTableCheckbox from "./orderCheckbox.svelte";

      type Payment = {
        id: string;
        order: string;
        date_added: string;
        customer: string;
        sales_channel: string;
        total: number;
        fulfillment: "pending" | "processing" | "success" | "failed";
        payment_status: "pending" | "processing" | "success" | "failed";
      };
      const data: Payment[] = [
        {
          id: "m5gr84i9",
          order: "Samsung Mobile",
          date_added: "12/12/2023",
          customer: "Kiran",
          sales_channel: "Sales Channel",
          total: 1000,
          fulfillment: "success",
          payment_status: "success"
        },
        {
          id: "m5gr84i9",
          order: "Boat Watch",
          date_added: "24/10/2023",
          customer: "Leo",
          sales_channel: "Sales channel",
          total: 999,
          fulfillment: "success",
          payment_status: "success"
        }
      ];     
    
    const table = createTable(readable(data), {
        page: addPagination(),
        sort: addSortBy({ disableMultiSort: true }),
        filter: addTableFilter({
            fn: ({ filterValue, value }) =>
            value.toLowerCase().includes(filterValue.toLowerCase())
        }),
        hide: addHiddenColumns(),
        select: addSelectedRows()
    });
    
      const columns = table.createColumns([
        table.column({
          accessor: "id",
          header: (_, { pluginStates }) => {
            const { allPageRowsSelected } = pluginStates.select;
            return createRender(DataTableCheckbox, {
                checked: allPageRowsSelected
            });
        },
        cell: ({ row }, { pluginStates }) => {
            const { getRowState } = pluginStates.select;
            const { isSelected } = getRowState(row);
            return createRender(DataTableCheckbox, {
                checked: isSelected
            });
        },
        plugins: {
            sort: {
                disable: true
            },
            filter: {
                exclude: true
            }
          }
        }),
        table.column({
          accessor: "order",
          header: "Order",
          plugins: {
            filter: {
                exclude: true
            }
          }
        }),
        table.column({
          accessor: "date_added",
          header: "Date Added",
          plugins: {
            sort: {
                disable: true
            },
            filter: {
                exclude: true
            }
          }
        }),
        table.column({
          accessor: "customer",
          header: "Customer"
        }),
        table.column({
          accessor: "fulfillment",
          header: "Fullfillment",
          plugins: {
            sort: {
                disable: true
            },
            filter: {
                exclude: true
            }
          }
        }),
        table.column({
          accessor: "payment_status",
          header: "Payment Status",
          plugins: {
            sort: {
                disable: true
            },
            filter: {
                exclude: true
            }
          }
        }),
        table.column({
          accessor: "sales_channel",
          header: "Sales Channel",
          plugins: {
            sort: {
                disable: true
            },
            filter: {
                exclude: true
            }
          }
        }),
        table.column({
          accessor: "total",
          header: "Total",
          plugins: {
            sort: {
                disable: true
            },
            filter: {
                exclude: true
            }
          }
        }),
        table.column({
          accessor: ({ id }) => id,
          header: "",
          cell: ({ value }) => {
            return createRender(DataTableActions, { id: value });
        },
        plugins: {
            sort: {
                disable: true
            }
        }
        })
      ]);

      const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates, flatColumns, rows } =
      table.createViewModel(columns);

      const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
      const { filterValue } = pluginStates.filter;
      const { hiddenColumnIds } = pluginStates.hide;
      const { selectedDataIds } = pluginStates.select;

      const ids = flatColumns.map((col) => col.id);
      let hideForId = Object.fromEntries(ids.map((id) => [id, true]));

      $: $hiddenColumnIds = Object.entries(hideForId)
      .filter(([, hide]) => !hide)
      .map(([id]) => id);

      const hidableCols = ["order", "date_added", "customer","fulfillment","payment_status", "sales_channel", "total"];
    </script>
    
    <div>
        <div class="flex items-center py-4">
            <div>
              <Input class="max-w-sm" placeholder="Filter emails..." type="text" bind:value={$filterValue}/>
            </div>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild let:builder>
                  <Button variant="outline" class="ml-auto" builders={[builder]}>
                    Columns <ChevronDown class="ml-2 h-4 w-4" />
                  </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                  {#each flatColumns as col}
                    {#if hidableCols.includes(col.id)}
                      <DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
                        {col.header}
                      </DropdownMenu.CheckboxItem>
                    {/if}
                  {/each}
                </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
        <div class="rounded-md border">
            <Table.Root {...$tableAttrs}>
              <Table.Header>
                {#each $headerRows as headerRow}
                  <Subscribe rowAttrs={headerRow.attrs()}>
                    <Table.Row>
                      {#each headerRow.cells as cell (cell.id)}
                        <Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
                          <Table.Head {...attrs} class="[&:has([role=checkbox])]:pl-3">
                              {#if cell.id === "amount"}
                              <div class="text-right">
                                  <Render of={cell.render()} />
                              </div>
                              {:else if cell.id === "order" }
                              <Button variant="ghost" on:click={props.sort.toggle}>
                                <Render of={cell.render()} />
                                <CaretSort class={"ml-2 h-4 w-4"} />
                              </Button>
                              {:else if cell.id === "customer" }
                              <Button variant="ghost" on:click={props.sort.toggle}>
                                <Render of={cell.render()} />
                                <CaretSort class={"ml-2 h-4 w-4"} />
                              </Button>
                              {:else}
                              <Render of={cell.render()} />
                              {/if}
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
                    <Table.Row {...rowAttrs} data-state={$selectedDataIds[row.id] && "selected"}>
                      {#each row.cells as cell (cell.id)}
                        <Subscribe attrs={cell.attrs()} let:attrs>
                          <Table.Cell {...attrs}>
                              {#if cell.id === "amount"}
                              <div class="text-right font-medium">
                                  <Render of={cell.render()} />
                              </div>
                              {:else if cell.id === "status"}
                              <div class="capitalize">
                                  <Render of={cell.render()} />
                              </div>
                              {:else}
                              <Render of={cell.render()} />
                              {/if}
                          </Table.Cell>
                        </Subscribe>
                      {/each}
                    </Table.Row>
                  </Subscribe>
                {/each}
              </Table.Body>
            </Table.Root>
          </div>
          <div class="flex items-center justify-end space-x-2 py-4">
            <div class="flex-1 text-sm text-muted-foreground">
                {Object.keys($selectedDataIds).length} of{" "}
                {$rows.length} row(s) selected.
            </div>
            <Button
              variant="outline"
              size="sm"
              on:click={() => ($pageIndex = $pageIndex - 1)}
              disabled={!$hasPreviousPage}>Previous</Button>
            <Button
              variant="outline"
              size="sm"
              disabled={!$hasNextPage}
              on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button>
          </div>
    </div>
    