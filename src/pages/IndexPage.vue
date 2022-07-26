<template>
  <q-page class="flex animated-fade">
    <div class="header">
      <h5 class="title">Aplikacion</h5>
      <div class="mainsearch">
        <q-input standout="bg-white text-white" bg-color="grey" color="white" dense readonly label="Po kerkoni dicka?" class="search text-white" @click="store.search = true">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>
    <div class="welcome">
      <div class="welc2">
        <h4 class="welti">Miresevini ne aplikacion.</h4>
        <div class="welph">
        
        </div>
      </div>
    </div>
    <div class="kats">
      <div class="katsh">
        <q-btn flat round dense class="text-fatal" icon="chevron_left" v-if="index != 0" @click="add(-1);animateScrollBefore()"/>
        <q-btn flat round dense disabled color="grey" icon="chevron_left" v-if="index == 0"/>
        <p class="katnav text-fatal">Kategorite</p>
        <q-btn flat round dense class="text-fatal" icon="chevron_right"  v-if="index != 1" @click="add(1);animateScrollNext()"/>
        <q-btn flat round dense disabled color="grey" icon="chevron_right"  v-if="index == 1"/>
      </div>
      <div class="katss">
        <q-scroll-area ref="scrollAreaRef" :thumb-style="thumbStyle" :visible="visible" style="height: 120px; max-width: 3000px;" class="v-sc">
          <div class="row no-wrap">
            <div class="katsd relative-position" v-ripple.center:white v-for="el in kats" :key="el.id" :class="{extraMargined: el.id != 1}" @click="goto(el.link, el.title)">
              <q-icon name="font_download" size="2rem" color="white"/>
              <q-separator />
              <q-separator />
              <p class="name text-white" style="text-align:center;">{{el.title}}</p>
            </div>
          </div>
        </q-scroll-area>
      </div>
    </div>
    <div class="fit row no-wrap items-center justify-center q-mb-lg">
      <q-btn color="secondary" dense text-color="white" class="extra-padded" label="Trego me shume" size="md" no-caps @click="moreKats = true"/>
    </div>
    <q-dialog
        v-model="moreKats"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <div class="fuller">
          <div class="header-kat">
            <q-icon name="arrow_back_ios_new" @click="moreKats = false"/>
            <h5 class="text-h4" style="padding:0;margin:0;">Kategorite</h5>
            <q-icon name="arrow_back_ios_new" @click="moreKats = false" style="z-index: -999;"/>
          </div>
          <div class="kat-main">
            <div class="plate">
              <q-scroll-area :visible="visible" :thumb-style="thumbStyle" style="max-height: 1200px; max-width: 3000px;" class="v-sc-2">
                <div class="single" v-for="kat in kats" :key="kat.id">
                  <div class="lefty">
                    <q-avatar color="primary" text-color="white">{{kat.title.charAt(0)}}</q-avatar>
                    <p class="text-p" style="padding: 0; margin: 0 0 0 15px;">{{kat.title}}</p>
                  </div>
                  <q-btn round color="white" text-color="secondary" icon="arrow_forward" unelevated @click="goto(kat.link, kat.title)"/>
                </div>
              </q-scroll-area>
            </div>
          </div>
        </div>
      </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useSearchStore } from 'stores/example-store.js'

export default defineComponent({
  name: 'IndexPage',
  setup () {

    const position = ref(0)
    const scrollAreaRef = ref(null)
    const store = useSearchStore()
    return {
      store,
      visible: ref(false),
      moreKats: ref(false),
      kats: [
        {
          title: "Arsimi",
          link: "arsimi",
          id: 1
        },
        {
          title: "Turizem & Kulture",
          link: "turizem",
          id: 2
        },
        {
          title: "Qendra Tregtare",
          link: "qendra",
          id: 3
        },
        {
          title: "Auto",
          link: "auto",
          id: 4
        },
        {
          title: "Argetim & Shplodhje",
          link: "argetim",
          id: 5
        },
        {
          title: "Institucione shteterore",
          link: "shteti",
          id: 6
        },
        {
          title: "Shendetesia",
          link: "shendetesia",
          id: 7
        },
        {
          title: "Sporti",
          link: "sport",
          id: 8
        },
        {
          title: "Hoteleri",
          link: "hotele",
          id: 9
        },
        {
          title: "Institucione fetare",
          link: "fetare",
          id: 11
        },
        {
          title: "Diaspora",
          link: "diaspora",
          id: 12
        },
        {
          title: "Sociale",
          link: "sociale",
          id: 13
        },
        {
          title: "Imobiliare",
          link: "imobiliare",
          id: 14
        },
        {
          title: "Libri & Kancelaria",
          link: "libri",
          id: 15
        },
        {
          title: "Markete & Tregje",
          link: "markete",
          id: 16
        },
        {
          title: "Arti",
          link: "arti",
          id: 17
        },
        {
          title: "Punesim",
          link: "punesim",
          id: 18
        },
        {
          title: "Teknologji",
          link: "teknologji",
          id: 19
        },
        {
          title: "Udhetime",
          link: "udhetime",
          id: 20
        }
      ],
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '0px',
        opacity: 0
      },
      position,
      scrollAreaRef,
      maximizedToggle: ref(true),
      add(num){
        this.index = this.index + num;
      },
      animateScrollNext () {
        position.value = position.value + 300
        scrollAreaRef.value.setScrollPosition('horizontal', position.value, 300)
      },
      animateScrollBefore () {
        position.value = position.value - 300
        scrollAreaRef.value.setScrollPosition('horizontal', position.value, 300)
      },
      goto(link, title){
        this.$router.push({path: '/categories/'+link, query: {routename: link, routetitle: title}})
      }
    }
  },
  data(){
    return{
      index: 0
    }
  }
})
</script>
<style scoped>
.header{
  height: 15vh;
  width: 100%;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.mainsearch{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search{
  width: 80%;
}
.title{
  font-size: 1.2rem;
}
.welcome{
  width: 100%;
  height: 30vh;
  padding: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.welc2{
  padding: 0px 30px 0px 30px;
  border-radius: 25px;
  background-color: rgb(49, 107, 216);
  display: grid;
  grid-template-columns: 60% 40%;
  width: 90%;
}
.welti{
  color: white;
  font-size: 1.5em;
}
.welph{
  background-image: url('../assets/main.png');
  background-size: cover;
}
.kats{
  width: 100%;
  height: 30vh;
  padding: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.katsh{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 0 0px 0;
  color: black;
}
.katnav{
  font-size: 1.1rem;
  padding: 0;
  margin: 0;
  transition: 0.3;
}
.katss{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  width: 90%;
  scroll-behavior: smooth;
}
.katsd{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 20px 0 0 0;
  height: 105px;
  width: 90px;
  background-color: #0d285a;
}
.extraMargined{
  margin-left: 15px;
}
.v-sc{
  overflow: visible;
  width: 100%;
}
.extra-padded{
  padding: 0 7px 0 7px;
}
.fuller{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  padding: 30px 0 30px 0;
}
.header-kat{
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.kat-main{
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.plate{
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: rgba(226, 231, 243, 0.767);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 14px 15px 14px;
}
.single{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.lefty{
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.v-sc-2{
  overflow: visible;
  width: 100%;
  height: 100%;
}
</style>