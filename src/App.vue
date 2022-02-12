<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <span class="subtitle-1 mx-2">Complex</span>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
