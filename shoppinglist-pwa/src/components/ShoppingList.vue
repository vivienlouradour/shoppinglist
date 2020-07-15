<template>
  <v-card
    flat
    tile
  >
    <v-card-text>{{ testt }}</v-card-text>
    <v-card-text>{{ shoppingList.title }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ShoppingList',
  props: ['shoppingList'],
  data: () => ({
    testt: "azezer azdalmzdkmlk"
  })
}
</script>