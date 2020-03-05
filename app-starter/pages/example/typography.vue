<template>
  <v-container fill-height fluid class="py-0">
    <v-row align="center" justify="center">
      <v-col cols="12" class="py-0">
        <material-card
          color="green"
          title="Material Dashboard Heading"
          text="Created using Roboto Font Family"
        >
          <v-card-text>
            <h2 class="font-weight-light mb-4">
              Typography
            </h2>

            <v-container class="pa-0" fluid>
              <v-row v-for="(t, i) in typography" :key="i" align="center">
                <v-col v-if="i === 0" cols="12">
                  <div class="display-1 text-center py-2" style="border: 1px solid #ccc;">
                    Text Size
                  </div>
                </v-col>
                <v-col v-if="i === 8" cols="12">
                  <div class="display-1 text-center py-2" style="border: 1px solid #ccc;">
                    Text Color
                  </div>
                </v-col>
                <v-col v-if="i === 15" cols="12">
                  <div class="display-1 text-center py-2" style="border: 1px solid #ccc;">
                    Content
                  </div>
                </v-col>
                <v-col cols="12" md="2">
                  <span v-text="t[0]" />
                </v-col>
                <v-col cols="12" md="10">
                  <component
                    :is="t[2]"
                    :class="t[3]"
                    style="border-bottom: 1px solid #ddd; padding: 0.5rem 1rem; margin: 0.5rem 0;"
                  >
                    {{ t[1] }}
                  </component>
                </v-col>
              </v-row>
              <!-- CODE -->
              <v-row>
                <v-col cols="12" md="2">
                  <span v-text="'code <code>'" />
                </v-col>
                <v-col cols="12" md="10">
                  <div
                    style="border-bottom: 1px solid #ddd; padding: 0.5rem 1rem; margin: 0.5rem 0;"
                  >
                    <code> $z = $x + $y;</code>
                  </div>
                </v-col>
              </v-row>
              <!-- VARIABLE -->
              <v-row>
                <v-col cols="12" md="2">
                  <span v-text="'variable <var>'" />
                </v-col>
                <v-col cols="12" md="10">
                  <div
                    style="border-bottom: 1px solid #ddd; padding: 0.5rem 1rem; margin: 0.5rem 0;"
                  >
                    <var>$C</var> = <var>$A</var> x <var>$B</var>;
                  </div>
                </v-col>
              </v-row>
              <!-- KEYBOATD INPUT -->
              <v-row>
                <v-col cols="12" md="2">
                  <span v-text="'keyboard input <kbd>'" />
                </v-col>
                <v-col cols="12" md="10">
                  <div
                    style="border-bottom: 1px solid #ddd; padding: 0.5rem 1rem; margin: 0.5rem 0;"
                  >
                    Please press button <kbd>Enter</kbd>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const leader =
  'I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.'
const leaderShort = leader.slice(0, 105) + '...'
const material = 'Material Dashboard'

// Content Element
// ['<p>', leader, 'p', ''],
// ['<blockquote>', leader, 'blockquote', 'blockquote'],
// ['<code>', 'CODE', 'code', ''],
// ['<var>', 'variable', 'var', ''],
// ['<kbd>', 'keyboard input', 'kbd', ''],

export default {
  layout: 'example',
  auth: 'guest',
  data: () => ({
    typography: [
      // Text Size
      ['display-4', material, 'div', 'display-4'],
      ['display-3', material, 'div', 'display-3'],
      ['display-2', material, 'h1', 'display-2'],
      ['display-1', material, 'h2', 'display-1'],
      ['headline', material, 'h3', 'headline'],
      ['title', material, 'h4', 'title'],
      ['subtitle-1', material, 'h5', 'subtitle-1'],
      ['subtitle-2', material, 'h6', 'subtitle-2'],
      // Text Color
      ['primary', leaderShort, 'p', 'primary--text'],
      ['secondary', leaderShort, 'p', 'secondary--text'],
      ['accent', leaderShort, 'p', 'accent--text'],
      ['info', leaderShort, 'p', 'info--text'],
      ['success', leaderShort, 'p', 'success--text'],
      ['warning', leaderShort, 'p', 'warning--text'],
      ['error', leaderShort, 'p', 'error--text'],
      // Content
      ['paragraph <p>', leader, 'p', ''],
      ['block quote <blockquote>', leader, 'blockquote', 'blockquote']
    ]
  })
}
</script>
