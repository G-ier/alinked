<template>
  <div class="main">
    <div class="imagerow">
      <q-img
          :src="image"
          :ratio="16/9"
        />
    </div>
    
    <q-btn unelevated rounded color="primary" style="width: 70%; margin-top: 20px; margin-bottom: 15px"><q-space/><span>Diaspora</span><q-space/><q-icon name="search" /></q-btn>

    <div class="kats" v-touch-swipe="onScroll">
      <div class="katsh">
        <q-btn round dense color="primary" icon="chevron_left" class="transition-ang" v-if="index!=0" @click="index-=1;animateScrollBefore()"/>
        <q-space />
        <q-btn round dense color="primary" icon="chevron_right" class="transition-ang" v-if="index!=3" @click="index+=1;animateScrollNext()"/>
      </div>
      <q-scroll-area ref="scrollAreaRef" :thumb-style="thumbStyle" :visible="visible" style="max-height: 1200px; max-width: 3000px;" class="v-sc-2" >
        <div class="row no-wrap">
          <div class="conti shadow-3" :style="{'margin-left': leftM + 'px'}" v-ripple.center:white>
            <q-avatar size="40px" font-size="20px" color="white" text-color="white" icon="directions" class="shadow-3 q-mr-sm"/>
            <p class="fan text-p text-white" style="margin: 0; padding: 0;">Europa</p>
            <q-space />
          </div>
          <div class="conti shadow-3" v-ripple.center:white>   
            <q-avatar size="40px" font-size="20px" color="white" text-color="white" icon="directions" class="shadow-3 q-mr-sm"/>
            <p class="fan text-p text-white" style="margin: 0; padding: 0;">Amerika e Veriut</p>
            <q-space />
          </div>
          <div class="conti shadow-3" v-ripple.center:white>
            <q-avatar size="40px" font-size="20px" color="white" text-color="white" icon="directions" class="shadow-3 q-mr-sm"/>
            <p class="fan text-p text-white" style="margin: 0; padding: 0;">Azia</p>
            <q-space />
          </div>
          <div class="conti shadow-3" :style="{'margin-right': leftM + 'px'}" v-ripple.center:white>
            <q-avatar size="40px" font-size="20px" color="white" text-color="white" icon="directions" class="shadow-3 q-mr-sm"/>
            <p class="fan text-p text-white" style="margin: 0; padding: 0;">Antarktida</p>
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
        if(this.index == 1 || this.index == 0){
          position.value = position.value + scWidth - 2*leftM
          scrollAreaRef.value.setScrollPosition('horizontal', position.value, 300)
          
        }else {
          position.value = position.value + scWidth - 2*leftM
          scrollAreaRef.value.setScrollPosition('horizontal', position.value, 300)
        }
      },
      animateScrollBefore () {
        if(this.index == 1 || this.index == 0){
          position.value = position.value - scWidth + 2*leftM
          scrollAreaRef.value.setScrollPosition('horizontal', position.value, 300)
          
        }else {
          position.value = position.value - scWidth + 2*leftM 
          scrollAreaRef.value.setScrollPosition('horizontal', position.value, 300)
        }
      },
      onScroll(){
        return;
      }
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
  margin: 2.1rem 0 0 0;
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
  margin: 0 0 20px 0;
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
  width: 230px;
  height: 80px;
  padding: 0px 25px 0px 20px;
  border-radius: 10px;
  background-color: #316bd8;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  transition: 0.5s;
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