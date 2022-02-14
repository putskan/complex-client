<template>
  <div class="my-8 mx-5" :class="{ 'mx-16 my-6': !$vuetify.breakpoint.xs }">
    <h1>רשימת השאלות</h1>
    <v-list class="mt-3">
      <v-list-group
        v-for="q in questionList"
        :key="q.slug"
        prepend-icon="mdi-alpha-q-circle-outline"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="q.question_title"></v-list-item-title>
          </v-list-item-content>
        </template>
        <h3
          class="title my-7 grey--text text--darken-4"
          v-text="q.question_title"
        />
        <p v-text="q.question_text" class="grey--text text--darken-4" />
        <v-row class="my-8" justify="center">
          <v-col
            v-for="media in q.question_medias"
            :key="media.slug"
            class="d-flex child-flex"
            cols="6"
          >
            <v-img
              max-height="400px"
              max-width="550px"
              class="media"
              :src="media.media"
              @click="openMedia(media.media)"
            >
            </v-img>
          </v-col>
        </v-row>

        <v-expansion-panels
          class="mt-6 mb-16 mx-auto"
          :class="{ 'w-75': !$vuetify.breakpoint.xs }"
        >
          <v-expansion-panel>
            <v-expansion-panel-header class="overline"
              >ראו תשובה לשאלה: {{ q.question_title }}</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <p>
                <b>תשובה:</b> {{ q.solution_answer }}<br /><br />
                <b>פירוט:</b><br>
                {{ q.solution_text }}
              </p>
              <v-row class="my-8" justify="center">
                <v-col
                  v-for="media in q.solution_medias"
                  :key="media.slug"
                  class="d-flex child-flex"
                  cols="6"
                >
                  <v-img
                    max-height="450px"
                    max-width="600px"
                    class="media"
                    :src="media.media"
                    @click="openMedia(media.media)"
                  >
                  </v-img>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-list-group>
    </v-list>
    <v-pagination
      @input="onPageChange"
      v-model="currentPage"
      class="mt-5"
      :length="pagesCount"
      :total-visible="7"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

import store from "../store";

const defaultPage = 1;

function fetchQuestions(page) {
  return store.dispatch("getQuestionList", page);
}

export default {
  async beforeRouteEnter(to, from, next) {
    const page = to.params.page || defaultPage;
    const questionList = await fetchQuestions(page);
    next((vm) => {
      vm.questionList = questionList;
    });
  },
  props: {
    page: {
      type: Number,
      default: defaultPage,
    },
  },
  computed: {
    ...mapState(["pagesCount"]),
  },
  methods: {
    openMedia(url) {
      window.open(url, "_newtab" + Date.now());
    },
    async onPageChange(page) {
      this.currentPage = page;
      this.questionList = await fetchQuestions(page);

      // TODO: handle "back" button bug
      history.pushState(
        {},
        null,
        this.$route.path.replace(
          /\/(.*?)$/,
          encodeURIComponent(this.currentPage)
        )
      );
    },
  },
  data() {
    return {
      currentPage: this.page,
      questionList: [],
    };
  },
};
</script>

<style scoped>
.media {
  cursor: pointer;
}
</style>
