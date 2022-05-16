<template>
    <div>
        <div :style="'height: ' + computedHeight"></div>
        <div style="height: 100%; display: flex; flex-flow: column">
            <div
                style="
                    flex: 0 1 auto;
                    position: sticky;
                    top: 0px;
                    background-color: var(--v-background-base);
                    z-index: 90;
                "
            >
                <h1 class="text-h2 text-sm-h1 pb-4">
                    Hey,<br />{{ startingWord }}
                    <span class="primary--text">{{ buzz }}</span>
                </h1>
                <div class="grad"></div>
            </div>

            <div style="flex: 1 1 auto">
                <div
                    style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        margin-top: 200px;
                        margin-bottom: 100px;
                    "
                >
                    <div :class="avatarClasses">
                        <div
                            :style="
                                'position: absolute;' +
                                'display: flex;' +
                                'justify-content: space-between;' +
                                'right: ' +
                                (this.$vuetify.breakpoint.smAndUp
                                    ? '-110px'
                                    : '-55px') +
                                ';' +
                                'top: ' +
                                (this.$vuetify.breakpoint.smAndUp
                                    ? '-110px'
                                    : '-75px') +
                                ';'
                            "
                            :class="avatarClasses"
                        >
                            <svg
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                :width="
                                    this.$vuetify.breakpoint.smAndUp
                                        ? '100'
                                        : '60'
                                "
                                class="rotate mr-4 mt-2 mt-md-4"
                                viewBox="0 0 415.262 415.261"
                                style="
                                    enable-background: new 0 0 415.262 415.261;
                                "
                                xml:space="preserve"
                            >
                                <g>
                                    <path
                                        style="fill: var(--v-primary-base)"
                                        d="M414.937,374.984c-7.956-24.479-20.196-47.736-30.601-70.992c-1.224-3.06-6.12-3.06-7.956-1.224
		c-10.403,11.016-22.031,22.032-28.764,35.496h-0.612c-74.664,5.508-146.88-58.141-198.288-104.652
		c-59.364-53.244-113.22-118.116-134.64-195.84c-1.224-9.792-2.448-20.196-2.448-30.6c0-4.896-6.732-4.896-7.344,0
		c0,1.836,0,3.672,0,5.508C1.836,12.68,0,14.516,0,17.576c0.612,6.732,2.448,13.464,3.672,20.196
		C8.568,203.624,173.808,363.356,335.376,373.76c-5.508,9.792-10.403,20.195-16.523,29.988c-3.061,4.283,1.836,8.567,6.12,7.955
		c30.6-4.283,58.14-18.972,86.292-29.987C413.712,381.104,416.16,378.656,414.937,374.984z M332.928,399.464
		c3.673-7.956,6.12-15.912,10.404-23.868c1.225-3.061-0.612-5.508-2.448-6.12c0-1.836-1.224-3.061-3.06-3.672
		c-146.268-24.48-264.996-124.236-309.06-259.489c28.764,53.244,72.828,99.756,116.28,138.924
		c31.824,28.765,65.484,54.468,102.204,75.888c28.764,16.524,64.872,31.824,97.92,21.421l0,0c-1.836,4.896,5.508,7.344,7.956,3.672
		c7.956-10.404,15.912-20.196,24.48-29.376c8.567,18.972,17.748,37.943,24.479,57.527
		C379.44,382.94,356.796,393.956,332.928,399.464z"
                                    />
                                </g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                            </svg>

                            <span class="hand" :style="'font-size: ' + tmSize"
                                >that's me</span
                            >
                        </div>
                        <v-avatar
                            size="clamp(160px, 50vw, 350px)"
                            style="border: 5px solid var(--v-primary-base)"
                        >
                            <v-img
                                src="../assets/profilbild.jpg"
                                alt="Picture of myself"
                            />
                        </v-avatar>
                    </div>
                </div>
                <div>
                    <div
                        style="
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100%;
                            margin-top: 100px;
                            margin-bottom: 100px;
                        "
                    >
                        <div
                            :class="ageClasses"
                            style="
                                display: flex;
                                flex-flow: column;
                                align-items: center;
                            "
                        >
                            <svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                :width="
                                    this.$vuetify.breakpoint.smAndUp
                                        ? '200'
                                        : '100'
                                "
                                viewBox="0 0 512 512"
                                style="
                                    enable-background: new 0 0 512 512;
                                    fill: var(--v-primary-base);
                                "
                                xml:space="preserve"
                            >
                                <g>
                                    <g>
                                        <g>
                                            <path
                                                d="M256,85.27c18.825,0,34.133-15.309,34.133-34.133c0-16.563-23.142-43.196-27.785-48.367c-3.234-3.61-9.463-3.61-12.698,0
				c-4.642,5.171-27.785,31.804-27.785,48.367C221.867,69.962,237.175,85.27,256,85.27z M256,21.68
				c9.054,11.315,17.067,24.021,17.067,29.457c0,9.412-7.654,17.067-17.067,17.067c-9.412,0-17.067-7.654-17.067-17.067
				C238.933,45.701,246.946,32.995,256,21.68z"
                                            />
                                            <path
                                                d="M213.333,119.404h85.333c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533h-85.333
				c-4.719,0-8.533,3.823-8.533,8.533S208.614,119.404,213.333,119.404z"
                                            />
                                            <path
                                                d="M102.4,218.698v62.839c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-59.733
				c10.138,0,18.748-7.125,27.87-14.677c11.008-9.122,23.484-19.456,40.397-19.456s29.389,10.334,40.397,19.456
				c9.122,7.552,17.732,14.677,27.87,14.677c10.138,0,18.748-7.125,27.87-14.677c11.008-9.122,23.484-19.456,40.397-19.456
				c16.913,0,29.389,10.334,40.397,19.456c9.122,7.552,17.732,14.677,27.87,14.677v59.733c0,4.71,3.814,8.533,8.533,8.533
				c4.719,0,8.533-3.823,8.533-8.533v-62.839c19.652-7.219,34.133-26.3,34.133-48.094c0-19.456-14.677-34.133-34.133-34.133H102.4
				c-19.456,0-34.133,14.677-34.133,34.133C68.267,192.398,82.748,211.478,102.4,218.698z M102.4,153.537h307.2
				c10.052,0,17.067,7.014,17.067,17.067c0,18.5-15.633,34.133-34.133,34.133c-3.994,0-10.59-5.47-16.973-10.752
				c-11.913-9.873-28.228-23.381-51.294-23.381c-23.066,0-39.381,13.508-51.294,23.381c-6.383,5.282-12.979,10.752-16.973,10.752
				s-10.59-5.47-16.973-10.752c-11.913-9.873-28.228-23.381-51.294-23.381s-39.381,13.508-51.294,23.381
				c-6.383,5.282-12.979,10.752-16.973,10.752c-18.5,0-34.133-15.633-34.133-34.133C85.333,160.552,92.348,153.537,102.4,153.537z"
                                            />
                                            <path
                                                d="M503.467,494.87H8.533c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h494.933
				c4.719,0,8.533-3.823,8.533-8.533S508.186,494.87,503.467,494.87z"
                                            />
                                            <path
                                                d="M34.133,389.364v79.906c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-76.8
				c10.138,0,18.748-7.125,27.87-14.677c11.008-9.122,23.484-19.456,40.397-19.456s29.389,10.334,40.397,19.456
				c9.122,7.552,17.732,14.677,27.87,14.677c10.138,0,18.748-7.125,27.87-14.677c11.008-9.122,23.484-19.456,40.397-19.456
				s29.389,10.334,40.397,19.456c9.122,7.552,17.732,14.677,27.87,14.677c10.138,0,18.748-7.125,27.87-14.677
				c11.008-9.122,23.484-19.456,40.397-19.456c16.913,0,29.389,10.334,40.397,19.456c9.122,7.552,17.732,14.677,27.87,14.677v76.8
				c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-79.906c19.652-7.219,34.133-26.3,34.133-48.094
				c0-19.456-14.677-34.133-34.133-34.133H34.133C14.677,307.137,0,321.814,0,341.27C0,363.065,14.481,382.145,34.133,389.364z
				 M34.133,324.204h443.733c10.052,0,17.067,7.014,17.067,17.067c0,18.5-15.633,34.133-34.133,34.133
				c-3.994,0-10.59-5.47-16.973-10.752c-11.912-9.873-28.228-23.381-51.294-23.381c-23.066,0-39.381,13.508-51.294,23.381
				c-6.383,5.282-12.979,10.752-16.973,10.752s-10.59-5.47-16.973-10.752c-11.913-9.873-28.228-23.381-51.294-23.381
				c-23.066,0-39.381,13.508-51.294,23.381c-6.383,5.282-12.979,10.752-16.973,10.752s-10.59-5.47-16.973-10.752
				c-11.913-9.873-28.228-23.381-51.294-23.381s-39.381,13.508-51.294,23.381c-6.383,5.282-12.979,10.752-16.973,10.752
				c-18.5,0-34.133-15.633-34.133-34.133C17.067,331.218,24.081,324.204,34.133,324.204z"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                            </svg>
                            <span
                                class="text-h4 text-center mt-3"
                                style="font-size: 32px !important"
                            >
                                {{ secondsSB }} seconds
                            </span>
                            <span
                                class="text-h5 text-center mt-3"
                                style="font-size: 27px !important"
                            >
                                {{ daysSB }} days
                            </span>
                            <span
                                class="text-h6 text-center mt-3"
                                style="font-size: 20px !important"
                            >
                                {{ weeksSB }} weeks
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <v-timeline :class="studyClasses" :dense="!smAndUp">
                        <v-timeline-item
                            v-for="study in studys"
                            :key="study.year"
                        >
                            <template v-slot:icon>
                                <v-avatar>
                                    <v-icon
                                        style="color: var(--v-background-base)"
                                        >mdi-school</v-icon
                                    >
                                </v-avatar>
                            </template>
                            <template v-slot:opposite>
                                <span>{{ study.year }}</span>
                            </template>
                            <v-card outlined>
                                <v-card-subtitle
                                    class="text-overline pb-0"
                                    v-if="!smAndUp"
                                >
                                    {{ study.year }}
                                </v-card-subtitle>
                                <v-row no-gutters align-items="center">
                                    <v-col
                                        cols="2"
                                        class="pl-4 pt-4 pb-4"
                                        style="align-self: center"
                                    >
                                        <logo-uni-ulm
                                            v-if="
                                                study.location.includes('Ulm')
                                            "
                                        />
                                        <logo-uni-helsinki
                                            v-else-if="
                                                study.location.includes(
                                                    'Helsinki'
                                                )
                                            "
                                        />
                                    </v-col>
                                    <v-col cols="10">
                                        <v-card-title class="text-h5" style="word-break: break-word">
                                            {{ study.location }}
                                        </v-card-title>
                                        <v-card-subtitle
                                            class="text-subtitle-1"
                                        >
                                            {{ study.title }}
                                        </v-card-subtitle>
                                    </v-col>
                                </v-row>

                                <v-card-text v-html="study.text"></v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </div>
                <div style="margin-top: 100px; margin-bottom: 100px">
                    <v-row justify-content="space-between" align-items="center" :class="workClasses">
                        <v-col cols="12" sm="4" lg="4">
                            <work-tile uniUlm />
                        </v-col>
                        <v-col cols="12" sm="4" lg="4">
                            <work-tile db />
                        </v-col>
                        <v-col cols="12" sm="4" lg="4">
                            <work-tile mb />
                        </v-col>
                    </v-row>
                </div>

                <div style="height: 200vh"></div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import WorkTile from "@/components/WorkTile.vue";
import LogoUniUlm from "@/components/LogoUniUlm.vue";
import LogoUniHelsinki from "@/components/LogoUniHelsinki.vue";

export default {
    name: "Home",
    components: {
        WorkTile,
        LogoUniUlm,
        LogoUniHelsinki,
    },
    data: () => ({
        startingWord: "I'm",
        buzz: "Lukas",
        avatarClasses: ["fade", "fade-out"],
        ageClasses: ["fade", "fade-out"],
        studyClasses: ["fade", "fade-out"],
        workClasses: ["fade", "fade-out"],
        startingPoint: 700,
        sectionSizeMult: 3,
        isName: false,
        secondsSB: 0,
        daysSB: Math.round(
            (new Date().getTime() -
                new Date(1998, 9, 16, 0, 0, 0, 0).getTime()) /
                (1000 * 3600 * 24)
        )
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
        weeksSB: Math.round(
            (new Date().getTime() -
                new Date(1998, 9, 16, 0, 0, 0, 0).getTime()) /
                (1000 * 3600 * 24 * 7)
        )
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
        studys: [
            {
                year: "2017 - 2021",
                title: "Bachelor of Science",
                location: "Ulm University",
                text: "<ul><li>Computer Science in the Bachelor's programme</li><li>Application Subject: Economics</li><li>Thesis: Conception and Implementation of a new web-based system to plan exams.</li><li>Thesis grade: 1.0</li><li>Bachelor's grade: 2.1</li></ul>",
            },
            {
                year: "2021 - present",
                title: "Master of Science",
                location: "Ulm University",
                text: "<ul><li>Computer Science in the Master's programme</li><li>Application Subject: Economics</li></ul>",
            },
            {
                year: "2021",
                title: "Exchange Semester",
                location: "University of Helsinki",
                text: "<ul><li>Exchange Semester in the Computer Science Master's programme at the University of Helsinki</li></ul>",
            },
        ],
    }),

    computed: {
        computedHeight() {
            return this.$vuetify.breakpoint.smAndUp
                ? "calc(50vh - 6rem)"
                : "calc(50vh - 3.75rem)";
        },
        computedHeightAvatar() {
            return this.$vuetify.breakpoint.smAndUp ? "300" : "240";
        },
        tmSize() {
            return this.$vuetify.breakpoint.smAndUp ? "34px" : "24px";
        },
        smAndUp() {
            return this.$vuetify.breakpoint.smAndUp;
        },
    },

    methods: {
        updateScroll() {
            console.log(window.scrollY);
            if (window.scrollY > 3330) {
                this.startingWord = "You can";
                this.buzz = "contact me";
            } else if (window.scrollY > this.startingPoint * 3) {
                this.startingWord = "I'm";
                this.buzz = "a web developer";
                this.workClasses = ["fade", "fade-in"];
            } else if (window.scrollY > 1040) {
                this.startingWord = "I'm";
                this.buzz = "a computer science student";
                //this.ageClasses = ["fade", "fade-out-no-translate"];
                this.workClasses = ["fade", "fade-out"];
                this.studyClasses = ["fade", "fade-in"];
            } else if (window.scrollY > 680) {
                this.startingWord = "I'm";
                this.buzz = "23 years old";
                //this.avatarClasses = ["fade", "fade-out-no-translate"];
                this.studyClasses = ["fade", "fade-out"];
                this.ageClasses = ["fade", "fade-in"];
            } else {
                this.startingWord = "I'm";
                this.buzz = "Lukas";
                this.ageClasses = ["fade", "fade-out"];
                if (window.scrollY > 200) {
                    this.avatarClasses = ["fade", "fade-in"];
                } else {
                    this.avatarClasses = ["fade", "fade-out"];
                }
            }
        },
        getSeconds() {
            setInterval(() => {
                var t1 = new Date(1998, 9, 16, 0, 0, 0, 0);
                var t2 = new Date();
                var dif = t1.getTime() - t2.getTime();

                var Seconds_from_T1_to_T2 = dif / 1000;
                var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
                this.secondsSB = Math.round(Seconds_Between_Dates)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            }, 1000);
        },
    },

    mounted() {
        window.addEventListener("scroll", this.updateScroll);
        this.getSeconds();
    },
};
</script>

<style scoped>
.fade {
    transition: opacity 1s ease-out, transform 1s ease-out;
}
.fade-in {
    opacity: 1;
    transform: translateY(0vh);
}
.fade-out {
    opacity: 0;
    transform: translateY(20vh);
}
.fade-out-no-translate {
    opacity: 0;
}

.rotate {
    -webkit-transform: rotate(102deg);
    -moz-transform: rotate(102deg);
    -o-transform: rotate(102deg);
    -ms-transform: rotate(102deg);
    transform: rotate(102deg);
}

.hand {
    font-family: "Freehand", cursive;
}

.grad {
    width: 100%;
    height: 50px;
    position: absolute;
    z-index: 90;
    bottom: -50px;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0),
        var(--v-background-base)
    );
}
</style>