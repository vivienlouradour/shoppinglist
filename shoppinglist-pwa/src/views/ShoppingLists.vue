<template>
  <div class="home">
    <v-card elevation="5" class="mt-12">
      <v-tabs
        background-color="secondary"
        center-active
        fixed-tabs
        dark
      >
        <v-tab
          v-for="list in lists"
          :key="list.title"
        >
          {{ list.title }}
        </v-tab>
        <v-tab-item
          v-for="list in lists"
          :key="list.title"
        >
          <ShoppingList :shoppingList="list" />
          <v-card-text class="text-center">
      <v-btn color="error" text small @click="deleteList(list)">Remove Tab</v-btn>
      <v-divider class="mx-4" vertical></v-divider>
    </v-card-text>
        </v-tab-item>
      </v-tabs>
      
      <v-dialog v-model="showAddListDialog" persistent max-width="600px">
        <template v-slot:activator="{ on: dialogOn, attrs: dialogAttrs }">
          <v-tooltip left>
            <template v-slot:activator="{ on: tooltipOn, attrs: tooltipAttrs }">
              <v-btn
                absolute
                dark
                fab
                top
                right
                color="secondary"
                v-bind="{...dialogAttrs, ...tooltipAttrs}"
                v-on="{...dialogOn, ...tooltipOn}"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <span>Add a new shopping list</span>
          </v-tooltip>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Create new shopping list</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field ref="listTitle" v-model="newListTitle" label="Title*"  required :error="newListTitleErrorMessage != null" :error-messages="newListTitleErrorMessage"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="cancelAddList">Close</v-btn>
            <v-btn color="blue darken-1" text :disabled="newListTitleErrorMessage !== ''"  @click="addList">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>





    </v-card>
    
  </div>
</template>

<script>
import ShoppingList from "../components/ShoppingList.vue"
import Store from "../store"

export default {
  name: "ShoppingLists",
  components: {
    ShoppingList
  },
  data: () => ({
    newListTitle: "",
    newListTitleErrorMessage: "Title can't be empty",
    lists: Store.state.shoppingLists,
    showAddListDialog: false
  }),
  watch: {
    newListTitle (val){
      if(!val){
        this.newListTitleErrorMessage = "Title can't be empty"
      }
      else if(this.lists.filter(list => list.title === val).length > 0){
        this.newListTitleErrorMessage = "Title already exists"
      }
      else{
        this.newListTitleErrorMessage = ""
      }
    },
  },
  methods: {
    addList: function() {
      const newList = {
        title: this.newListTitle,
        content: []
      }

      Store.dispatch('addShoppingList', newList)

      this.newListTitle = ""
      this.showAddListDialog = false
    },
    cancelAddList: function() {
      this.newListTitle = ""
      this.showAddListDialog = false
    },
    deleteList: function(list){
      Store.dispatch('removeShoppingList', list)
    }
  }
  
};
</script>
