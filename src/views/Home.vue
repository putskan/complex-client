<template>
  <v-card class="mx-auto pa-6 mt-10" :class="{ 'w-50': !$vuetify.breakpoint.xs }">
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
        @click="$router.push('/questions/1'); loading = true"
        color="primary"
        class="mx-auto d-block"
        :loading="loading"
      >
        <span>אני רוצה שאלות</span>
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
      loading: false,
      title: "קומפלקס",
      subtitle: "בעיות סיבוכיות ריצה וזיכרון",
      text: "לחצו על הכפתור מטה כדי להתחיל.",
    };
  },
};
</script>
