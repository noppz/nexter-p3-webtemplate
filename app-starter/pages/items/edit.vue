<template>
  <v-layout>
    <v-container>
      <v-row dense align="center" justify="center">
        <v-col cols="12">
          <material-card color="blue">
            <template v-slot:header>
              <v-toolbar flat color="transparent">
                <v-toolbar-title>รายการสินค้า</v-toolbar-title>
              </v-toolbar>
            </template>
            <v-container>
              <v-row dense justify="center">
                <v-col cols="12" md="8">
                  <v-text-field
                    v-model="editedItem.name"
                    label="Dessert name"
                    dense
                    clear-icon="mdi-close-circle-outline"
                    clearable
                  >
                    <v-btn slot="append" class="pa-0" small text color="primary">
                      Check
                    </v-btn>
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <v-text-field v-model="editedItem.calories" label="Calories" dense></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <v-text-field v-model="editedItem.fat" label="Fat (g)" dense></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <v-text-field v-model="editedItem.carbs" label="Carbs (g)" dense></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <v-text-field
                    v-model="editedItem.protein"
                    label="Protein (g)"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <div class="text-center">
                    <v-btn outlined rounded style="width: 6rem;" class="mx-1" @click="cancel">
                      Cancel
                    </v-btn>
                    <v-btn color="primary" rounded style="width: 6rem;" class="mx-1" @click="save">
                      Save
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </material-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
const breadcrumbInfo = [
  {
    text: 'Items',
    disabled: false,
    to: '/items',
    exact: true
  },
  {
    text: 'Items Edit',
    disabled: true,
    to: '/items/edit',
    exact: true
  }
]
const moduleInfo = {
  title: 'Items',
  subtitle: 'Items Description'
}
const objectItem = {
  name: '',
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0
}
export default {
  data() {
    return {
      breadcrumbs: breadcrumbInfo,
      modules: moduleInfo,
      dialog: false,
      dialog2: false,
      widthSize: '480px',
      editedItem: objectItem,
      defaultItem: objectItem
    }
  },
  computed: {
    //
  },
  created() {
    //
  },
  methods: {
    cancel() {
      this.$router.push('/items')
    },
    save() {
      //
    }
  }
}
</script>
