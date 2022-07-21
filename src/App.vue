<template>
  <v-app>

    <v-main>
      <section id="hero" class="hero d-flex flex-column justify-center align-center">
        <v-img src="./assets/blob-haikei_left_top.svg"
               style="position: absolute; left: 0; top: 0; width: clamp(200px, 40vw, 500px)"></v-img>
        <h4 class="text-h4 text-center content">Hey, I'm</h4>
        <h1 class="text-h1 text-center content">Lukas</h1>
        <h4 class="text-h5 text-center content mt-4">Web Developer</h4>
        <div class="bottom-nav d-flex justify-center align-center">
          <a style="text-decoration: none; color: currentColor" class="d-flex flex-column justify-center align-center" href="#intro">
            <span v-if="$vuetify.breakpoint.smAndDown" class="text-body-1">To Introduction</span>
            <span v-else class="text-body-1">To Introduction</span>
            <v-icon class="transition-chevron" size="36">mdi-chevron-down</v-icon>
          </a>
        </div>
      </section>

      <section id="intro" class="intro d-flex flex-column justify-center align-center" :class="$vuetify.breakpoint.smAndUp ? 'intro-blob' : ''">
        <div class="top-nav d-flex justify-center align-center">
          <a style="text-decoration: none; color: currentColor" class="d-flex flex-column justify-center align-center" href="#hero">
            <v-icon class="transition-chevron" size="36">mdi-chevron-up</v-icon>
          </a>
        </div>
        <v-icon class="text-h4 text-center content" :class="$vuetify.breakpoint.smAndUp ? 'black-text' : 'primary-text'">mdi-human-greeting</v-icon>
        <h4 class="text-h4 text-center content" :class="$vuetify.breakpoint.smAndUp ? 'black-text' : 'primary-text'">Introduction</h4>
        <div class="d-flex justify-center">
          <span style="max-width: 500px" class="text-body-1 text-center content pa-4" :class="$vuetify.breakpoint.smAndUp ? 'black-text' : 'primary-text'">My name is Lukas Harsch, I'm 23 years old and I'm a web developer and computer science student based in Ulm, Germany. I started developing web apps in my bachelor's thesis. Since then, I fell in love with web development because I enjoy bringing creativity and coding together.</span>
        </div>


        <div class="bottom-nav d-flex justify-center align-center">
          <a style="text-decoration: none; color: currentColor" class="d-flex flex-column justify-center align-center" href="#education">
            <span v-if="$vuetify.breakpoint.smAndDown" class="text-body-1">To Education</span>
            <span v-else class="text-body-1">To Education</span>
            <v-icon class="transition-chevron" size="36">mdi-chevron-down</v-icon>
          </a>
        </div>
      </section>
      <section id="education" class="education d-flex flex-column justify-center align-center">
        <div class="top-nav d-flex justify-center align-center">
          <a style="text-decoration: none; color: currentColor" class="d-flex flex-column justify-center align-center" href="#intro">
            <v-icon class="transition-chevron" size="36">mdi-chevron-up</v-icon>
          </a>
        </div>
        <v-icon class="text-h4 text-center content primary-text">mdi-school</v-icon>
        <h4 class="text-h4 text-center content">Education</h4>
        <span class="text-body-1 text-center content pa-4">Click to explore</span>
        <div class="d-flex justify-center flex-column content" style="max-width: 95%">
          <v-tabs
              background-color="#121212"
              v-model="selectedEducation"
              active-class="temp"
              color="#FFD56B"
          >
            <v-tabs-slider color="#FFD56B"></v-tabs-slider>

            <v-tab

            >
              B.Sc. Computer Science <br> Ulm, Germany
            </v-tab>
            <v-tab

            >
              M.Sc. Computer Science <br> Helsinki, Finland
            </v-tab>
            <v-tab

            >
              M.Sc. Computer Science <br> Ulm, Germany
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="selectedEducation" style="background-color: #121212">
            <v-tab-item>
              <v-card flat style="background-color: #121212">
                <v-card-text>Hi</v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat style="background-color: #121212">
                <v-card-text>Hi</v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat style="background-color: #121212">
                <v-card-text>Hi</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </div>

        <div class="bottom-nav d-flex justify-center align-center">
          <a style="text-decoration: none; color: currentColor" class="d-flex flex-column justify-center align-center bottom-nav-click" href="#work">
            <span v-if="$vuetify.breakpoint.smAndDown" class="text-body-1">To Work Experience</span>
            <span v-else class="text-body-1">To Work Experience</span>
            <v-icon class="transition-chevron" size="36">mdi-chevron-down</v-icon>
          </a>
        </div>
      </section>
    </v-main>

    <div class="bottom-waves">

    </div>

  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    //HelloWorld,
  },

  data: () => ({
    scrollAmount: 1,
    selectedEducation: 0
  }),

  methods: {
    /*scrollView(amount) {
      let scrollFromTop = window.pageYOffset;
      const viewHeight = Math.round(window.innerHeight * Math.abs(amount));
      if (scrollFromTop % viewHeight === 0) scrollFromTop += Math.sign(amount);
      let targetPos;
      if (amount > 0)
        targetPos = Math.ceil(scrollFromTop / viewHeight) * viewHeight;
      else
        targetPos = Math.floor(scrollFromTop / viewHeight) * viewHeight;
      window.scrollTo({
        top: targetPos,
        behavior: "smooth"
      });
      // NB: smooth scrolling is not supported in some browsers
      // This codepen uses smoothscroll-polyfill@0.4.4
    },
    keyHandler(e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        this.scrollView(this.scrollAmount);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        this.scrollView(this.scrollAmount * -1);
      }
    },
    validateInput(e) {
      if (!/\d|\./.test(e.key)) e.preventDefault();
    }*/
  },
  mounted() {
    //window.addEventListener("keydown", this.keyHandler);
    const sections = [...document.querySelectorAll("section")];

    let options = {
      rootMargin: "30px",
      threshold: 0.25
    };

    const callback = (entries) => {
      entries.forEach(entry => {
        const { target } = entry;
        console.log(entry, target)

        if (entry.intersectionRatio >= 0.25) {
          target.classList.add("is-visible");
        } else {
          target.classList.remove("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

  },
  beforeUnmount() {
    //window.removeEventListener("keydown", this.keyHandler);
  }
};
</script>

<style lang="scss">
.temp {
  color: red
}
.v-application {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

section .content {
  opacity: 0;
  transform: translate3d(0, 2rem, 0);
}

section.is-visible .content {
  opacity: 1;
  transition: opacity 2000ms, transform 1000ms;
  transform: translate3d(0, 0rem, 0);
}

.hero {
  position: relative;
  scroll-snap-align: center;
  //background-color: #FFD56B;
  //color: black;
  background-color: #121212;
  color: #FFD56B;
  height: 100vh;
}

.intro {
  position: relative;
  scroll-snap-align: center;
  background-color: #121212;
  color: #FFD56B;
  height: 100vh;
}

.intro-blob {
  background-image: url("./assets/blob-haikei_big.svg");
  background-size: clamp(550px, 140vw, 750px);
  background-position: center;
}

.content.black-text {
  color: black
}

.content.primary-text {
  color: #FFD56B
}

.education {
  position: relative;
  scroll-snap-align: center;
  background-color: #121212;
  color: #FFD56B;
  height: 100vh;
}

.bottom-nav {
  position: absolute;
  bottom: 10px;
  width: 100%;
  color: inherit;
}

.top-nav {
  position: absolute;
  top: 10px;
  width: 100%;
  color: inherit;
}

.bottom-nav-click {
  cursor: pointer;
}

.transition-chevron {
  color: inherit !important;
  animation: MoveUpDown 1s ease-in-out infinite;
}

@keyframes MoveUpDown {
  0%, 100% {
    bottom: 0;
  }
  50% {
    bottom: 6px;
  }
}

::-webkit-scrollbar {
  display: block;
  width: 5px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #FFD56B;
  border-radius: 100vh;
  border-right: none;
  border-left: none;
}

::-webkit-scrollbar-track-piece:end {
  background: transparent;
  margin-bottom: 45vh;
}

::-webkit-scrollbar-track-piece:start {
  background: transparent;
  margin-top: 45vh;
}

</style>
