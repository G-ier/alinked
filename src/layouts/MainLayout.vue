<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer class="bg-white text-primary">
        <div id="main-end" style="background: rgba(0,0,0,0);">
          <div class="btn-over upper-hand">
             <q-btn push color="blue" round icon="search" class="upper-hand" @click="search = true"/>
          </div>
          <q-tabs
            v-model="tab"
            no-caps
            inline-label
            class="bg-white text-blue shadow-2 second-end"
          >
            <q-tab name="home" icon="home" @click="goto('/')"/>
            <q-tab name="mails" icon="mail" />
            <q-tab name="alarms" icon="alarm" />
            <q-tab name="movies" icon="movie" />
          </q-tabs>
        </div>
      </q-footer>
      <q-dialog
        v-model="search"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <div class="fuller">
          <div class="header">
            <q-icon name="arrow_back_ios_new" @click="search = false"/>
          </div>
          <div class="search">
            <q-input standout="bg-white text-white" bg-color="grey" color="white" dense label="Cfare jeni duke kerkuar?" class="search text-white">
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div class="kerkimet">
            <h5 class="title">Kerkimet</h5>
            <div class="results">
              <p class="result">Search_1</p>
            </div>
          </div>
        </div>
      </q-dialog>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  data(){
    return{
      prevHeight: 0
    }
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      fabLeft: ref(true),
      fabCenter: ref(true),
      fabRight: ref(true),
      search: ref(false),
      tab: ref('home'),
      maximizedToggle: ref(true),
      goto(link){
        this.$router.push({path: link})
      }
    }
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
})
</script>

<style scoped>
.fade-enter-active,
 .fade-leave-active {
   transition-duration: 0.3s;
   transition-property: opacity;
   transition-property: height, opacity;
   transition-timing-function: ease;
   overflow: hidden;
 }
#main-end{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5px 0 5px;
  background: rgba(0,0,0,0);
}
.second-end{
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: rgba(0,0,0,0);
}
.custom-btn{
  position: relative;
  top: 20px;
}
.btn-over{
  padding: 5px;
  border-radius: 50%;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 25px;
}
.upper-hand{
  z-index: 9999;
}
.fuller{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  padding: 40px 0 40px 0;
}
.header{
  width: 90%;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 30px;
}
.search{
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.kerkimet{
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.kerkimet{
  font-size: 1.5rem;
  font-weight: 600;
}
.results{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.result{
  font-size: 1.2rem;
  font-weight: 400;
}
</style>
