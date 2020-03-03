<template>
  <v-layout column justify-center align-center>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="4">
          <v-card>
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Username"
                  name="username"
                  prepend-icon="mdi-account"
                  type="text"
                  :value="username"
                  outlined
                  dense
                  hide-details="auto"
                />
                <div class="my-2"></div>
                <v-text-field
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  :value="password"
                  outlined
                  dense
                  hide-details="auto"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn block color="primary" @click="submit">Login</v-btn>
            </v-card-actions>
          </v-card>
          {{ message }}
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  layout: 'simple',
  auth: false,
  data() {
    return {
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {
    async submit() {
      try {
        if (this.username.length > 0 && this.password.length > 0) {
          await this.$auth
            .loginWith('local', {
              data: {
                username: this.username,
                password: this.password
              }
            })
            .then(() => {
              console.log('success')
              this.$router.push('/dashboard')
            })
        }
      } catch (e) {
        this.message = e.response.data.message
      }
    }
  }
}
</script>
