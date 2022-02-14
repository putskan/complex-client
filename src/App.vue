<template>
  <v-app>
    <v-app-bar app color="primary" class="d-flex justify-end" dark>
      <span
        class="subtitle-1 mx-2"
        style="cursor: pointer"
        @click="$router.push('/')"
        >Complex</span
      >
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
