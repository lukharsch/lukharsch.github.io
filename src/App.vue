<template>
    <v-app>
        <v-container
            fluid
            class="background"
            style="max-width: 1080px; margin-left: auto; margin-right: auto"
        >
            <v-main>
                <v-btn fixed right top icon color="primary" @click="toggleDark" style="z-index: 99">
                    <v-icon v-if="this.$vuetify.theme.dark" dark> mdi-brightness-7 </v-icon>
                    <v-icon v-else dark> mdi-brightness-4 </v-icon>
                </v-btn>
                <router-view />
            </v-main>
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: "App",

    data: () => ({
        //
    }),

    methods: {
        toggleDark() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        }
    }
};
</script>

<style>
</style>
