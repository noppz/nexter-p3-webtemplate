<template>
  <v-layout>
    <v-container style="min-width: 320px;" class="mb-2">
      <v-row align="center" justify="center">
        <v-col cols="12" xs="12" sm="6" lg="4">
          <material-card color="blue" class="text-center">
            <template v-slot:header>
              <div class="px-3 mx-auto">
                <div class="title mb-2">
                  Digital Partner System
                </div>

                <div class="category text-center">
                  Handcrafted by us with
                  <v-icon size="17">
                    mdi-heart
                  </v-icon>
                </div>
              </div>
            </template>

            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="username"
                  :label="$t('login.username')"
                  name="username"
                  prepend-icon="mdi-account"
                  type="text"
                  :rules="[rules.required]"
                />
                <div class="my-2"></div>
                <v-text-field
                  v-model="password"
                  :label="$t('login.password')"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  :rules="[rules.required]"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn block dark color="blue" @click="login">{{ $t('login.login') }}</v-btn>
            </v-card-actions>
          </material-card>
          <!-- -->
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: 'Login',
  layout: 'simple',
  data() {
    return {
      username: '',
      password: '',
      rules: {
        required: (value) => !!value || this.$t('login.field_required')
      }
    }
  },
  methods: {
    async login() {
      await this.$auth
        .loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })
        .then(() => this.$toast.success('Log in Success', { icon: 'fingerprint' }))
        .error((e) => this.$toast.error('Log in Failed', { icon: 'fingerprint' }))
      // this.$router.replace('/')
    }
  }
}
</script>
