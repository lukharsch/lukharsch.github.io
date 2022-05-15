import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            light: {
                primary: "#996E00",
                error: "#B00020",
                background: "#ffffff"
            },
            dark: {
                primary: "#ffd56b",
                background: "#121212"
            },
        },
        options: { customProperties: true },
    },
});
