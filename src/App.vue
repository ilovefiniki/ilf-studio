<template>
  <v-app>
    <v-card tile class="overflow-hidden">
      <v-app-bar
              absolute
              color="white"
              elevate-on-scroll
              scroll-target="#scrolling-techniques-7"
      >

        <v-toolbar-title>I <i class="far fa-heart indigo--text"></i> FINIKI</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
                text
                href="#"
        >
          Home
        </v-btn>
        <v-btn
                text
                href="#services"
        >
          Services
        </v-btn>
        <v-btn
                text
                href="#reviews"
        >
          Reviews
        </v-btn>
        <v-btn
                text
                href="#contacts"
        >
          Contacts
        </v-btn>

      </v-app-bar>

      <router-view/>

        <v-footer class="black py-10">
          <div class="white--text">ILOVEFINIKI</div>
          <v-spacer></v-spacer>
          <div class="white--text">&copy; {{ new Date().getFullYear() }}</div>
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
