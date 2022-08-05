<template>
  <div class="main">
    <div class="imagerow">
      <q-img
          :src="image"
          :ratio="16/9"
        />
    </div>
    
    <div class="kats" v-touch-swipe="onScroll">
      <div class="katsh">
        <q-btn round dense color="primary" icon="expand_less" class="transition-ang" v-if="index!=0" @click="index-=1;animateScrollBefore()"/>
        <q-space />
        <q-btn round dense color="primary" icon="expand_more" class="transition-ang" v-if="index!=2" @click="index+=1;animateScrollNext()"/>
      </div>
      <q-scroll-area ref="scrollAreaRef" :thumb-style="thumbStyle" :visible="visible" style="max-height: 3000px;" class="v-sc-2">
        <div class="column no-wrap">
          <div class="conti shadow-3" :style="{'margin-left': leftM + 'px'}" v-ripple.center:white>

            <q-avatar size="50px" font-size="35px" color="secondary" text-color="white" icon="directions" />
            <q-space />
            <p class="fan text-p text-white" style="margin: 0; padding: 0;">Komuniteti mysliman</p>
            <q-space />
          </div>
          <div class="conti shadow-3" :style="{'margin-left': leftM + 'px'}" v-ripple.center:white> 
            <p class="fan text-p text-white" style="margin: 0; padding: 0;">Komuniteti katolik</p>
            <q-space />
            <q-avatar size="50px" font-size="35px" color="secondary" text-color="white" icon="directions" />
            <q-space />
          </div>
          <div class="conti shadow-3" :style="{'margin-left': leftM + 'px'}" v-ripple.center:white>
            <q-avatar size="50px" font-size="35px" color="secondary" text-color="white" icon="directions" />
            <q-space />
            <p class="fan text-p text-white" style="margin: 0; padding: 0;">Komuniteti ortodoks </p>
            <q-space />
          </div>
          <div class="conti shadow-3" :style="{'margin-left': leftM + 'px'}" v-ripple.center:white> 
            <p class="fan text-p text-white" style="margin: 0; padding: 0;">Komuniteti katolik</p>
            <q-space />
            <q-avatar size="50px" font-size="35px" color="secondary" text-color="white" icon="directions" />
            <q-space />
          </div>
        </div>
      </q-scroll-area>
    </div>

  </div>
</template>

<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import Image from '../assets/doctors.jpg'
import Image2 from '../assets/books.jpg'
export default {
  setup(){
    const $q = useQuasar()
    const image = Image
    const image2 = Image2
    const position = ref(0)
    const scrollAreaRef = ref(null)
    const scWidth = $q.screen.width
    const leftM = (scWidth-250)/2
    var index = ref(0)
    return {
      image,
      image2,
      position,
      scrollAreaRef,
      scWidth,
      leftM,
      index,
      slide: ref('style'),
      kats: [
        {
          title: "Arsimi",
          link: "argetim",
          id: 1
        },
        {
          title: "Turizem & Kulture",
          link: "argetim",
          id: 2
        },
        {
          title: "Teknologji",
          link: "argetim",
          id: 3
        },
        {
          title: "Auto",
          link: "argetim",
          id: 4
        },
        {
          title: "Argetim & Shplodhje",
          link: "argetim",
          id: 5
        },
        {
          title: "Auto_3",
          link: "argetim",
          id: 6
        }
      ],
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '0px',
        opacity: 0
      },
      animateScrollNext () {
        position.value = position.value + 130
        scrollAreaRef.value.setScrollPosition('vertical', position.value, 300)
      },
      animateScrollBefore () {
        position.value = position.value - 130
        scrollAreaRef.value.setScrollPosition('vertical', position.value, 300)
      },
      onScroll(){
        return;
      }
    }
  },
  methods:{
    goto(link, route, title){
      this.$router.push({path: link, query: {routename: route, routetitle: title}})
    }
  }
}
</script>

<style scoped>
.main{
  width: 100%;
  padding: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.imagerow{
  width: 80%;
  height: 20vh;
  margin: 2.1rem 0 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
}
.katsh{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
  margin: 0 0 0px 0;
  color: black;
  background-color: rgba(0, 0, 0, 0);
}
.type{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.skury{
    width: 100%;
}
.conti{
  width: 250px;
  height: 90px;
  position: relative;
  padding: 0px 0px 0px 10px;
  border-radius: 20px;
  background-color: #316bd8;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 30px;
  margin-top: 30px;
}
.fan{
  font-size: 1rem;
}
.v-sc-2{
  overflow: visible;
  width: 100%;
  height: 100%;
}
.kats{
  width: 100%;
  height: 300px;
  padding: 0px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.transition-ang{
  animation: fadein 0.5s;
  opacity: 1;
  z-index: 0;
}
.btn-unactive{
  opacity: 0;
  z-index: -1002;
}
.first{
  margin-left: 5%;
}
.cst-img{
  border-radius: 20px;
  height: 100px;
}
</style>