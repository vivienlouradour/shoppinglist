<template>
  <v-app>
    <v-app-bar color="primary" dark absolute>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Shopping list</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  
      <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            link
            :to="item.link"
          >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
    
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
          </v-list-item>

        </v-list>
        <v-divider></v-divider>
 
        <div class="pa-2">
          <v-switch
            v-model="$vuetify.theme.dark"
            hide-details
            inset
            label="Dark Theme"
          ></v-switch>
        </div>
      </v-navigation-drawer>
   
    <v-main class="mx-16 my-16">
      <router-view />
    </v-main>

    <v-footer>
      <v-spacer></v-spacer>
      <div>
        <a :href="'//github.com/vivienlouradour'" target="_blank" style="text-decoration: none">
          Vivien Louradour - &copy; {{ new Date().getFullYear() }}
        </a>
      </div>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
  },

  data: () => ({
    drawer: false,
    menuItems: [
      { title: 'Home', icon: 'mdi-view-dashboard', link: '/' },
      { title: 'About', icon: 'mdi-help-box', link: '/about' },
    ]
  }),
};
</script>
