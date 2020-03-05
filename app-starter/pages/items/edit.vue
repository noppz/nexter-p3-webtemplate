<template>
  <v-layout>
    <v-container>
      <v-row dense>
        <v-col cols="12" xs="12">
          <v-card outlined>
            <v-breadcrumbs :items="breadcrumbs" class="py-2 px-4" />
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" xs="12">
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
                      dense
                      clear-icon="mdi-close-circle-outline"
                      clearable
                    >
                      <v-btn slot="append" class="pa-0" small text color="primary">
                        Check
                      </v-btn>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Calories"
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="editedItem.fat" label="Fat (g)" dense></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="editedItem.carbs" label="Carbs (g)" dense></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Protein (g)"
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="cancel">
                Cancel
              </v-btn>
              <v-btn color="primary" @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
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
