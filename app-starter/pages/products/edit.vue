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
                    v-model="editedItem.sapcode"
                    label="SAP code"
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
                  <v-text-field
                    v-model="editedItem.product_name"
                    label="ชื่อสินค้า"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <v-text-field
                    v-model="editedItem.product_description"
                    label="อื่นๆ (ระบุ)"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <v-text-field v-model="editedItem.barcode" label="Barcode" dense></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <v-text-field
                    v-model="editedItem.unit_th"
                    label="หน่วยขาย (TH)"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <v-text-field
                    v-model="editedItem.unit_en"
                    label="หน่วยขาย (EN)"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <v-select label="หมวด" small dense></v-select>
                </v-col>
                <v-col cols="12" md="8">
                  <v-select label="หมวดย่อย" small dense></v-select>
                </v-col>
                <v-col cols="12" md="8">
                  <v-select label="หมวดย่อย ลำดับที่ 2" small dense></v-select>
                </v-col>
                <v-col cols="12" md="8">
                  <v-select label="หมวดย่อย ลำดับที่ 3" small dense></v-select>
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
