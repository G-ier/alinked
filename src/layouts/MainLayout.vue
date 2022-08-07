<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer class="bg-white text-primary">
        <div id="main-end" style="background: rgba(0,0,0,0);">
          <div class="btn-over upper-hand">
             <q-btn push color="secondary" round icon="search" class="upper-hand" @click="store.search = true"/>
          </div>
          <q-tabs
            v-model="tab"
            no-caps
            inline-label
            class="bg-white main-blue shadow-2 second-end"
          >
            <q-route-tab name="home" icon="home" to="/"/>
            <q-route-tab name="mails" icon="notifications" to="/notifications" />
            <q-route-tab name="alarms" icon="sms" to="/directmsg"/>
            <q-route-tab name="movies" icon="person" to="/dashboard"/>
          </q-tabs>
        </div>
      </q-footer>
      <q-dialog
        v-model="store.search"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <div class="fuller">
          <div class="header">
            <q-icon name="arrow_back_ios_new" @click="store.search = false"/>
          </div>
          <div class="search">
            <q-input standout="bg-white text-white" bg-color="grey" color="white" dense label="Cfare jeni duke kerkuar?" v-model="search_string" class="search text-white" @keypress="searchdb">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div class="kerkimet" v-if="search_modus==false">
            <h5 class="title">Me te kerkuarat</h5>
            <div class="results">
              <p class="result">Search_1</p>
              <p class="result">Search_2</p>
              <p class="result">Search_3</p>
              <p class="result">Search_4</p>
              <p class="result">Search_5</p>
            </div>
          </div>
          <div class="kerkimet" v-if="search_modus==true">
            <h5 class="title">Rezultate</h5>
            <div class="results">
              <p class="result" v-for="result in results" :key="result.uuid" style="curson: pointer;">{{result.name}}</p>
            </div>
          </div>
        </div>
      </q-dialog>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useSearchStore } from 'stores/example-store.js'

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
      prevHeight: 0,
      search_string: "",
      results: [{uuid: 1, name: ""}],
      search_modus: false
    }
  },
  setup () {
    const leftDrawerOpen = ref(false)
    const store = useSearchStore()

    return {
      essentialLinks: linksList,
      store,
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
    async searchdb(){
      setTimeout(async () => {
        this.search_modus = true;
        const results = await firebase.firestore().collection("products").where('name', '>=', this.search_string).where('name', '<=', this.search_string + '\uf8ff').get()
        var rlist = []
        results.forEach(doc => {
          console.log(doc.data())
          rlist.push(doc.data())
          //doc.data()
        });
        console.log(results)
        this.results = rlist.slice(0,5)
      },1500)
    }
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
  height: 50px;
  position: relative;
  bottom: 26px;
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
