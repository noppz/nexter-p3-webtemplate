<template>
  <v-container fluid fill-height class="py-0">
    <v-row align="center" justify="center">
      <v-col cols="12" class="py-0">
        <material-card color="blue">
          <template v-slot:header>
            <div class="px-3">
              <div class="title font-weight-light mb-2">Dashboard</div>

              <div class="category">
                Handcrafted by us with
                <v-icon size="17">mdi-heart</v-icon>
              </div>
            </div>
          </template>

          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <!-- HELLO -->
              </v-col>
            </v-row>
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      //
    }
  },
  methods: {
    //
  }
}
</script>
