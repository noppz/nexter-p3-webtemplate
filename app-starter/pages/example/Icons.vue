<template>
  <v-container fill-height fluid class="py-0">
    <v-row>
      <v-col cols="12" class="py-0">
        <material-card color="green">
          <template v-slot:header>
            <div class="px-3">
              <div class="title font-weight-light mb-2">
                Material Design Icons
              </div>
              <div class="category font-weight-thin">
                See all available Icons
                <a class="white--text" href="https://materialdesignicons.com/" target="_blank">
                  [ VISIT HERE ]
                </a>
              </div>
            </div>
          </template>

          <v-row align="center" justify="center">
            <v-col cols="auto" class="mx-auto">
              <v-btn large color="success" href="https://materialdesignicons.com/" target="_blank">
                <v-icon left>
                  mdi-material-design
                </v-icon>
                <span>See all icons</span>
              </v-btn>
            </v-col>
          </v-row>

          <v-row align="center" justify="center">
            <v-col cols="auto" class="mx-auto">
              <v-btn
                large
                color="success"
                href="https://cdn.materialdesignicons.com/5.0.45/"
                target="_blank"
              >
                <v-icon left>
                  mdi-material-design
                </v-icon>
                <span>See icons name version 5.0.45</span>
              </v-btn>
            </v-col>
          </v-row>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'example',
  auth: 'guest',
  data: () => ({
    icons: []
  })
}
</script>
