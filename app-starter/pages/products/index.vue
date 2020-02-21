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
            :items-per-page="10"
            sort-by="calories"
            class="elevation-1"
          >
            <!-- START DIALOG EDITOR -->
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-toolbar-title>{{ modules.title }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="480">
                  <template v-slot:activator="{ on }">
                    <v-btn rounded color="primary" v-on="on">New Product</v-btn>
                  </template>
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
                              clearable
                              hide-details="auto"
                            ></v-text-field>
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
              </v-toolbar>
            </template>
            <template v-slot:item.action="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                edit
              </v-icon>
              <v-icon small @click="deleteItem(item)">
                delete
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
            <!-- END DIALOG EDITOR -->
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
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

export default {
  data() {
    const breadcrumbInfo = [
      {
        text: 'Products',
        disabled: true,
        href: 'products'
      }
    ]
    const moduleInfo = {
      title: 'Products',
      subtitle: 'Products Description'
    }
    const tableHeaders = [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' }
    ]
    return {
      breadcrumbs: breadcrumbInfo,
      modules: moduleInfo,
      dialog: false,
      tableHeader: tableHeaders,
      tableData: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    }
  },
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.tableData = tableDatum
    },
    editItem(item) {
      this.editedIndex = this.tableData.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem(item) {
      const index = this.tableData.indexOf(item)
      confirm('Are you sure you want to delete this item?') &&
        this.tableData.splice(index, 1)
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
    }
  }
}
</script>
