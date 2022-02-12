<template>
  <v-card class="w-50 mx-auto pa-6 mt-10">
    <v-card-title>
      <span class="headline">{{ title }}</span>
    </v-card-title>
    <v-card-subtitle>
      <span>{{ subtitle }}</span>
    </v-card-subtitle>
    <div class="my-5">
      <v-card-text class="mx-auto text-center d-block">
        <span>{{ text }}</span>
      </v-card-text>
      <v-btn
        @click="$router.push('/questions/1')"
        color="primary"
        class="mx-auto d-block"
      >
        <span>Solve questions</span>
        <v-icon right> mdi-party-popper </v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "Welcome to Complex",
      subtitle: "Solve time & space complexity problems",
      text: "Click on the button below to get started.",
    };
  },
};
</script>
