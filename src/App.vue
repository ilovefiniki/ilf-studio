<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar
              absolute
              color="white"
              elevate-on-scroll
              scroll-target="#scrolling-techniques-7"
      >

        <v-toolbar-title>ILOVEFINIKI</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn text>
          Home
        </v-btn>

        <v-btn text>
          Services
        </v-btn>

        <v-btn text>
          Portfolio
        </v-btn>

        <v-btn text>
          Reviews
        </v-btn>

        <v-btn text>
          Contacts
        </v-btn>

      </v-app-bar>

      <router-view/>

        <v-footer>
          <div>ILOVEFINIKI</div>
          <v-spacer></v-spacer>
          <div>&copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-card>
  </v-app>
</template>
<style>

</style>
<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
