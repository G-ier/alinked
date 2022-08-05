<template>
  <div class="main">
    <div class="kats" v-touch-swipe="onScroll">
      <q-scroll-area ref="scrollAreaRef" :thumb-style="thumbStyle" :visible="visible" style="max-height: 1200px; max-width: 3000px;" class="v-sc-2" >
        <div class="row no-wrap">
          <div class="conti" :style="{'margin-left': leftM + 'px'}" v-ripple.center:white>
            <q-space/>
            <p class="fan text-p text-white" style="margin: 0; padding: 0;">Restorante</p>
            <q-space/>
          </div>
          <div class="conti" v-ripple.center:white>        
            <q-space/>
            <p class="fan text-p text-white" style="margin: 0; padding: 0;">Hotele</p>
            <q-space/>
          </div>
          <div class="conti" v-ripple.center:white>
            <q-space/>
            <p class="fan text-p text-white" style="margin: 0; padding: 0;">Bars</p>
            <q-space/>
          </div>
          <div class="conti" :style="{'margin-right': leftM + 'px'}" v-ripple.center:white>
            <q-space/>
            <p class="fan text-p text-white" style="margin: 0; padding: 0;">Impiante sportive</p>
            <q-space/>
          </div>
        </div>
      </q-scroll-area>
      <div class="katsh">
        <q-btn round dense color="primary" icon="chevron_left" class="transition-ang" v-if="index!=0" @click="index-=1;animateScrollBefore()"/>
        <q-space />
        <q-btn round dense color="primary" icon="chevron_right" class="transition-ang" v-if="index!=3" @click="index+=1;animateScrollNext()"/>
      </div>
    </div>
    

    <q-btn unelevated rounded color="primary" style="width: 70%; margin-top: 20px; margin-bottom: 15px"><q-space/><span>Hoteleri</span><q-space/><q-icon name="search" /></q-btn>    
    <div class="imagerow">
      <q-img
          :src="image"
          :ratio="16/9"
        />
    </div>

  </div>
</template>

<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import Image from '../assets/doctors.jpg'
export default {
  setup(){
    const $q = useQuasar()
    const image = Image
    const position = ref(0)
    const scrollAreaRef = ref(null)
    const scWidth = $q.screen.width
    const leftM = (scWidth-150)/2
    var index = ref(0)
    return {
      image,
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
          position.value = position.value + scWidth - 2*leftM +10
          scrollAreaRef.value.setScrollPosition('horizontal', position.value, 300)
          
        }else {
          position.value = position.value + scWidth - 2*leftM +10
          scrollAreaRef.value.setScrollPosition('horizontal', position.value, 300)
        }
      },
      animateScrollBefore () {
        if(this.index == 1 || this.index == 0){
          position.value = position.value - scWidth + 2*leftM -10
          scrollAreaRef.value.setScrollPosition('horizontal', position.value, 300)
          
        }else {
          position.value = position.value - scWidth + 2*leftM -10
          scrollAreaRef.value.setScrollPosition('horizontal', position.value, 300)
        }
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
  width: 130px;
  padding: 17px 30px 17px 30px;
  border-radius: 20px;
  background-color: #316bd8;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 30px;
  position: relative;
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
  height: 190px;
  padding: 20px 0 20px 0;
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
</style>