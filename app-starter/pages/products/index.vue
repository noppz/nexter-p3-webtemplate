<template>
  <v-layout>
    <v-container>
      <!--
      <v-row dense>
        <v-col cols="12" xs="12">
          <v-card outlined>
            <v-breadcrumbs :items="breadcrumbs" class="py-2 px-4"></v-breadcrumbs>
          </v-card>
        </v-col>
      </v-row>
      -->
      <v-row dense>
        <v-col cols="12" xs="12">
          <material-card color="blue">
            <template v-slot:header>
              <v-toolbar flat color="transparent">
                <v-toolbar-title>{{ modules.title }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <div class="d-flex" style="width:280px;">
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    dense
                    hide-details
                    full-width
                  ></v-text-field>
                </div>
                <v-btn
                  class="text-inherit ml-4"
                  style="width:180px;"
                  color="warning"
                  to="/products/edit"
                  rounded
                >
                  Create Product
                </v-btn>
                <!-- START DELETE DIALOG -->
                <v-dialog v-model="dialog2" :max-width="widthSize">
                  <v-card>
                    <v-card-title class="justify-center">
                      <span class="headline">Delete Item</span>
                    </v-card-title>
                    <v-card-text class="text-center mt-4 mb-2">
                      Do you confim to delete thie item?
                    </v-card-text>
                    <v-card-actions class="justify-center">
                      <v-btn outlined rounded style="width: 6rem;" class="mx-1" @click="close2">
                        Cancel
                      </v-btn>
                      <v-btn
                        dark
                        color="red"
                        style="width: 6rem;"
                        class="mx-1"
                        rounded
                        @click="confirmDelete"
                      >
                        Confirm
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <!-- END DELETE DIALOG -->
              </v-toolbar>
            </template>
            <v-data-table
              :headers="tableHeader"
              :items="tableData"
              :page.sync="page"
              :items-per-page="itemsPerPage.value"
              :search="search"
              sort-by="calories"
              hide-default-footer
              @page-count="pageCount = $event"
            >
              <template v-slot:item.product_status="{ item }">
                <v-chip :color="getColor(item.product_status)" small dark>
                  {{ getText(item.product_status) }}
                </v-chip>
              </template>
              <template v-slot:item.action="{ item }">
                <v-btn icon @click="updateItem(item)">
                  <v-icon small>
                    mdi-pencil
                  </v-icon>
                </v-btn>
                <v-btn icon @click="deleteItem(item)">
                  <v-icon small>mdi-delete</v-icon>
                </v-btn>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" class="my-4" small icon @click="initialize">
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
                circle
              ></v-pagination>
            </div>
          </material-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
const breadcrumbInfo = [
  {
    text: 'Products',
    disabled: true,
    to: '/products',
    exact: true
  }
]
const moduleInfo = {
  title: 'รายการสินค้า',
  subtitle: 'Products Description'
}
const tableHeaders = [
  {
    text: 'ชื่อสินค้า',
    value: 'product_name',
    sortable: false,
    align: 'left'
  },
  { text: 'ตัวเลือกสินค้า', value: 'product_specs', align: 'center' },
  { text: 'ราคาสินค้า', value: 'price', align: 'right' },
  { text: 'คลัง', value: 'stock_amount', align: 'right' },
  { text: 'ยอดขาย', value: 'sale_amount', align: 'right' },
  { text: 'สถานะสินค้า', value: 'product_status', align: 'center' },
  { text: 'การดำเนินการ', value: 'action', sortable: false, align: 'center' }
]
const tableDatum = [
  {
    product_name: 'Frozen Yogurt',
    product_specs: 'ขาว',
    price: 100,
    stock_amount: 100,
    sale_amount: '1,000',
    product_status: 1
  },
  {
    product_name: 'Ice cream sandwich',
    product_specs: 'ดำ',
    price: 100,
    stock_amount: 100,
    sale_amount: '2,000',
    product_status: 1
  },
  {
    product_name: 'Eclair',
    product_specs: 'ดำ',
    price: 200,
    stock_amount: 0,
    sale_amount: '1,500',
    product_status: 0
  },
  {
    product_name: 'Cupcake',
    product_specs: 'ขาว',
    price: 300,
    stock_amount: 0,
    sale_amount: 500,
    product_status: 0
  },
  {
    product_name: 'Gingerbread',
    product_specs: 'ขาว',
    price: 450,
    stock_amount: 100,
    sale_amount: 750,
    product_status: 1
  },
  {
    product_name: 'Jelly bean',
    product_specs: 'ดำ',
    price: 500,
    stock_amount: 0,
    sale_amount: 800,
    product_status: 0
  },
  {
    product_name: 'Lollipop',
    product_specs: 'ดำ',
    price: 200,
    stock_amount: '1,000',
    sale_amount: '10,000',
    product_status: 1
  },
  {
    product_name: 'Honeycomb',
    product_specs: 'ดำ',
    price: 320,
    stock_amount: 100,
    sale_amount: 680,
    product_status: 1
  },
  {
    product_name: 'Donut',
    product_specs: 'ขาว',
    price: 600,
    stock_amount: 0,
    sale_amount: 700,
    product_status: 0
  },
  {
    product_name: 'KitKat',
    product_specs: 'ขาว',
    price: 500,
    stock_amount: 500,
    sale_amount: 500,
    product_status: 1
  }
]
const objectItem = {
  product_name: '',
  product_specs: '',
  price: 0,
  stock_amount: 0,
  sale_amount: 0,
  product_status: ''
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
      this.$router.push('/products/edit')
    },
    updateItem(item) {
      this.$router.push('/products/edit')
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
    },
    getColor(val) {
      if (val === 0) return 'red'
      else if (val === 1) return 'green'
    },
    getText(val) {
      if (val === 0) return 'สินค้าหมด'
      else if (val === 1) return 'พร้อมขาย'
      else return ''
    }
  }
}
</script>
