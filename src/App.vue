<template>
  <v-app :theme="theme">
      <v-app-bar color="red">
        <!-- สร้างปุ่มเมนูสามขีด -->
        <v-app-bar-nav-icon class="grey--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-btn><v-app-bar-title @click="goToHome">MENU</v-app-bar-title></v-btn>

        <v-spacer></v-spacer>
        <v-btn :prepend-icon = "theme === 'light' ?'mdi-weather-sunny' : 'mdi-weather-night'" @click="onToggleTheme">UNIQLO</v-btn>
        <v-btn icon="mdi-account" @click="goToLogin"></v-btn>
        <v-btn icon="mdi-cart-outline" @click="goToBasket"></v-btn>
      </v-app-bar>
      
      <!--  Drawer -->
      <v-navigation-drawer v-model="drawer" class="indigo">
          <v-list-item link title="Home" to="/home"></v-list-item>
          <v-list-item link title="Shirt" to="/shirt"></v-list-item>
          <v-list-item link title="Sweatshirts & Hoodies" to="/hood"></v-list-item>
          <v-list-item link title="Fleece" to="/fleece"></v-list-item>
          <v-list-item link title="Jeans" to="/jeans"></v-list-item>
          <v-list-item link title="Amazon" to="/amazon"></v-list-item>

          <v-list v-model:opend="open">
            <v-list-group value="shirt">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  title="Shirt"
                ></v-list-item>
              </template>
              <v-list-item
                v-for="([title, icon],i) in shirt"
                :key="i"
                :title="title"
                :prepend-icon="icon"
                value="title"
              ></v-list-item>
            </v-list-group>
          </v-list>
      </v-navigation-drawer>
  
      <router-view></router-view>

      <v-divider></v-divider>
      <div class="pt-2">
        <p class="caption text-center">
          {{new Date().getFullYear()}} - Thitiporn Kaewburong
        </p>
      </div>
  </v-app>
</template>

<script>
  export default {
  data: () => ({
      theme: 'light',
      drawer: false,
      open: ['shirt'],
      shirt: [
        ['T-Shirt'],['Coat']
      ],
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },
  methods: {
    onToggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    },
    goToLogin() {
      this.$router.push('/login')
    },
    goToBasket() {
      this.$router.push('/basket')
    },
    goToHome() {
      this.$router.push('/home')
    },
  },
  mounted() {
    fetch('https://www.melivecode.com/api/users')
      .then(res => res.json())
      .then((result) => {
        this.items = result;
        console.log(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  },
};
</script>
