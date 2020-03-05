<template>
  <v-layout>
    <v-container class="pa-0">
      <v-row dense>
        <v-col cols="12">
          <v-card outlined>
            <v-breadcrumbs :items="breadcrumbs" class="py-2 px-4"></v-breadcrumbs>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense align="center" justify="center">
        <v-col cols="12">
          <v-card>
            <v-card-title>
              <span class="headline">รายการสินค้า</span>
            </v-card-title>
            <v-card-text class="py-0">
              <v-container>
                <v-row dense>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.sapcode"
                      label="SAP code"
                      small
                      dense
                      outlined
                      clear-icon="mdi-close-circle-outline"
                      clearable
                      hide-details="auto"
                    >
                      <v-btn slot="append" class="pa-0" small text color="primary">
                        Check
                      </v-btn>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.product_name"
                      label="ชื่อสินค้า"
                      small
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.product_description"
                      label="อื่นๆ (ระบุ)"
                      small
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.barcode"
                      label="Barcode"
                      small
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.unit_th"
                      label="หน่วยขาย (TH)"
                      small
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.unit_en"
                      label="หน่วยขาย (EN)"
                      small
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select label="หมวด" small dense outlined hide-details="auto"></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-select label="หมวดย่อย" small dense outlined hide-details="auto"></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      label="หมวดย่อย ลำดับที่ 2"
                      small
                      dense
                      outlined
                      hide-details="auto"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      label="หมวดย่อย ลำดับที่ 3"
                      small
                      dense
                      outlined
                      hide-details="auto"
                    ></v-select>
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
    text: 'Products',
    disabled: false,
    to: '/products',
    exact: true
  },
  {
    text: 'Products Edit',
    disabled: true,
    to: '/products/edit',
    exact: true
  }
]
const moduleInfo = {
  title: 'Products',
  subtitle: 'Products Description'
}
const objectItem = {
  sapcode: '',
  product_name: '',
  product_description: '',
  barcode: '',
  unit_th: '',
  unit_en: '',
  category: '',
  subcategory: '',
  class: '',
  subclass: ''
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
      this.$router.push('/products')
    },
    save() {
      this.$router.push('/products')
    }
  }
}
</script>
