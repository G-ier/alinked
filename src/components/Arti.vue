<template>
  <div class="main">
    <div class="kats" v-touch-swipe="onScroll">
      <q-scroll-area ref="scrollAreaRef"  :thumb-style="thumbStyle" :visible="visible" style="max-height: 1200px; max-width: 3000px; " class="v-sc-2" >
        <div class="fit hooper2 row no-wrap">
          <div class="conti" :style="{'margin-left': leftM + 'px'}" :class="{'active-ting': index==0, 'pre': index==1}">
            <q-space/>
            <p class="fan text-p text-white" style="margin: 0; padding: 0;">Kercim & Balet</p>
            <q-space/>
          </div>
          <div class="conti" :class="{'active-ting': index==1, 'pre': index==2, 'nex': index==0}">
            <q-space/>
            <p class="fan text-p text-white" style="margin: 0; padding: 0;">Muzike</p>
            <q-space/>
          </div>
          <div class="conti" :class="{'active-ting': index==2, 'nex': index==1}" :style="{'margin-right': leftM + 'px'}">
            <q-space/>
            <p class="fan text-p text-white" style="margin: 0; padding: 0;">Impiante</p>
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
    

    <q-btn unelevated rounded class="hooper" color="primary" style="margin-top: 10px; margin-bottom: 15px"><q-space/><span>Arti</span><q-space/><q-icon name="search" /></q-btn>    
    
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
    const leftM = (scWidth-140)/2
    var index = ref(0)
    return {
      image,
      position,
      scrollAreaRef,
      scWidth,
      leftM,
      index,
      slide: ref('style'),
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
  width: 120px;
  height: 120px;
  padding: 17px 30px 17px 30px;
  border-radius: 10px;
  background-color: #316bd8;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 30px;
  transition: 0.5s;
}
.pre{
    
}
.nex{
    
}
.active-ting{
  border-radius: 20px;
  transform: rotate(0);
}
.fan{
    font-size: 1rem;
}
.v-sc-2{
  overflow: visible;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.kats{
  width: 100%;
  height: 280px;
  padding: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
.hooper{
    width: 70%
  }
@media only screen and (min-width: 1100px) {
  .pager{
    display: flex;
    justify-content: center;
  }
  
  .imagerow{
    width: 20%;
    height: 20vh;
    margin: 2.1rem 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: contain;
  }
  .hooper{
    width: 30%
  }
  .kats{
    width: 70%;
    height: 300px;
    padding: 40px 0 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transform: translateX(0%);
  }
  .hooper2{
    width: 110%;
    transform: translateX(-10%);
  }
  
}
</style>