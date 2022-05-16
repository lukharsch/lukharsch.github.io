<template>
    <div>
        <!-- <h4 class="text-h4">Ulm University</h4>
        <span class="text-body-1 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quos
            quaerat nobis dolorem nihil cupiditate dolores dolor expedita?
            Necessitatibus recusandae perferendis natus rem aut praesentium sunt
            sapiente placeat reprehenderit dolore!
        </span> -->
        <v-card class="wrapper" outlined>
            <div class="mt-4 text-center">
                <logo-uni-ulm v-if="uniUlm" style="width: 50%; aspect-ratio: 1 / 1;"/>
                <LogoDB v-else-if="db" style="width: 50%; aspect-ratio: 1 / 1;" />
                <LogoMB v-else-if="mb" style="width: 50%; aspect-ratio: 1 / 1;" />
            </div>

            <v-card-title class="text-h4 mb-2"> Ulm University </v-card-title>

            <v-card-subtitle> 2020 - 2022 </v-card-subtitle>

            <v-card-actions>
                <v-btn icon @click="show = !show" color="primary">
                    <v-icon>{{
                        show ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                        I'm a thing. But, like most politicians, he promised
                        more than he could deliver. You won't have time for
                        sleeping, soldier, not with all the bed making you'll be
                        doing. Then we'll go with that data file! Hey, you add a
                        one and two zeros to that or we walk! You're going to do
                        his laundry? I've got to find a way to escape.
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </div>
</template>

<script>
import LogoUniUlm from "@/components/LogoUniUlm.vue"
import LogoUniHelsinki from "@/components/LogoUniHelsinki.vue"
import LogoDB from "@/components/LogoDB.vue"
import LogoMB from "@/components/LogoMB.vue"

export default {
    name: "WorkTile",

    components: {
        LogoUniUlm,
        LogoUniHelsinki,
        LogoDB,
        LogoMB
    },

    props: {
        uniUlm: Boolean,
        uniHelsinki: Boolean,
        db: Boolean,
        mb: Boolean,
    },

    data: () => ({
        show: false,
    }),

    computed: {},

    methods: {},

    mounted() {},
};
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
}
</style>