import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import 'vuetify/dist/vuetify.min.css' // TODO: needed?

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#00ACC1",
            }
        }
    }
});
