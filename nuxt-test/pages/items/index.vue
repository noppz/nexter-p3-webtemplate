<template>
  <v-layout>
    <v-container class="pa-0">
      <v-row dense>
        <v-col cols="12" xs="12">
          <v-card outlined>
            <v-breadcrumbs
              :items="breadcrumbs"
              class="py-2 px-4"
            ></v-breadcrumbs>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" xs="12">
          <v-data-table
            :headers="tableHeader"
            :items="tableData"
            :page.sync="page"
            :items-per-page="itemsPerPage.value"
            :search="search"
            sort-by="calories"
            class="elevation-1"
            hide-default-footer
            dense
            @page-count="pageCount = $event"
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-toolbar-title>{{ modules.title }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
                <div class="d-flex mt-2 mb-0 ml-4" style="width:160px">
                  <v-overflow-btn
                    :items="dropdown_icon"
                    value="Quick Add"
                    segmented
                    small
                    dark
                    dense
                    background-color="primary"
                  ></v-overflow-btn>
                </div>
                <!-- Start Edit Dialog -->
                <v-dialog v-model="dialog" :max-width="widthSize">
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text class="py-0">
                      <v-container>
                        <v-row dense>
                          <v-col cols="12">
                            <v-text-field
                              v-model="editedItem.name"
                              label="Dessert name"
                              outlined
                              dense
                              clear-icon="mdi-close-circle-outline"
                              clearable
                              hide-details="auto"
                            >
                              <v-btn
                                slot="append"
                                class="pa-0"
                                small
                                text
                                color="primary"
                              >
                                ตรวจสอบ
                              </v-btn>
                            </v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="editedItem.calories"
                              label="Calories"
                              outlined
                              dense
                              hide-details="auto"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="editedItem.fat"
                              label="Fat (g)"
                              outlined
                              dense
                              hide-details="auto"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="editedItem.carbs"
                              label="Carbs (g)"
                              outlined
                              dense
                              hide-details="auto"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="editedItem.protein"
                              label="Protein (g)"
                              outlined
                              dense
                              hide-details="auto"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn text @click="close">
                        Cancel
                      </v-btn>
                      <v-btn color="primary" @click="save">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <!-- END Edit DIALOG -->
                <!-- START DELETE DIALOG -->
                <v-dialog v-model="dialog2" :max-width="widthSize">
                  <v-card>
                    <v-card-title>
                      <span class="headline">Delete Item</span>
                    </v-card-title>
                    <v-card-text class="py-0">
                      <v-container>
                        <v-row dense>
                          <v-col cols="12">
                            Do you confim to delete thie item?
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn text @click="close2">
                        Cancel
                      </v-btn>
                      <v-btn dark color="red" @click="confirmDelete">
                        Confirm
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <!-- END DELETE DIALOG -->
              </v-toolbar>
            </template>
            <template v-slot:item.action="{ item }">
              <v-btn icon @click="editItem(item)">
                <v-icon small>
                  mdi-pencil
                </v-icon>
              </v-btn>
              <v-btn icon @click="deleteItem(item)">
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
              <v-btn icon color="warning" @click="updateItem(item)">
                <v-icon small>mdi-pencil-box-outline</v-icon>
              </v-btn>
            </template>
            <template v-slot:no-data>
              <v-btn
                color="primary"
                class="my-4"
                small
                icon
                @click="initialize"
              >
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </template>
          </v-data-table>
          <div class="d-flex">
            <v-select
              v-model="itemsPerPage"
              :hint="`display ${itemsPerPage.label}`"
              :items="selectCount"
              item-text="label"
              item-value="value"
              label="Items per page"
              persistent-hint
              return-object
              single-line
              @input="setSelectedCount"
            ></v-select>
            <v-pagination
              v-model="page"
              class="justify-end"
              :length="pageCount"
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
            ></v-pagination>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
const breadcrumbInfo = [
  {
    text: 'Items',
    disabled: true,
    to: '/items',
    exact: true
  }
]
const moduleInfo = {
  title: 'Items',
  subtitle: 'Items Description'
}
const tableHeaders = [
  {
    text: 'Dessert (100g serving)',
    value: 'name',
    sortable: false,
    align: 'left'
  },
  { text: 'Calories', value: 'calories', align: 'right' },
  { text: 'Fat (g)', value: 'fat', align: 'right' },
  { text: 'Carbs (g)', value: 'carbs', align: 'right' },
  { text: 'Protein (g)', value: 'protein', align: 'right' },
  { text: 'Actions', value: 'action', sortable: false, align: 'center' }
]
const tableDatum = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7
  }
]
const objectItem = {
  name: '',
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0
}

const countItems = [
  { label: '5', value: 5 },
  { label: '10', value: 10 },
  { label: '20', value: 20 },
  { label: '50', value: 50 }
]

export default {
  data() {
    return {
      breadcrumbs: breadcrumbInfo,
      modules: moduleInfo,
      dialog: false,
      dialog2: false,
      widthSize: '480px',
      dropdown_icon: [
        { text: 'Quick Add', callback: () => this.createQuickItem() },
        { text: 'New Item', callback: () => this.createItem() }
      ],
      search: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: { label: '10', value: 10 },
      selectCount: countItems,
      tableHeader: tableHeaders,
      tableData: [],
      editedIndex: -1,
      editedItem: objectItem,
      defaultItem: objectItem,
      deleteItemIndex: null
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Create Item' : 'Update Item'
    }
  },
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.tableData = tableDatum
    },
    setSelectedCount(item) {
      this.itemsPerPage = item
    },
    createItem() {
      this.$router.push('/items/edit')
    },
    createQuickItem() {
      this.dialog = true
    },
    updateItem(item) {
      this.$router.push('/items/edit')
    },
    editItem(item) {
      this.editedIndex = this.tableData.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem(item) {
      this.deleteItemIndex = this.tableData.indexOf(item)
      this.dialog2 = true
    },
    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tableData[this.editedIndex], this.editedItem)
      } else {
        this.tableData.push(this.editedItem)
      }
      this.close()
    },
    close2() {
      this.deleteItemIndex = null
      this.dialog2 = false
    },
    confirmDelete() {
      const index = this.deleteItemIndex
      this.tableData.splice(index, 1)
      this.deleteItemIndex = null
      this.dialog2 = false
    }
  }
}
</script>
