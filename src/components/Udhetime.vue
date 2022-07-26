<template>
  <div class="main">
    
    <div class="imagerow">
      <q-img
          :src="image"
          :ratio="16/9"
        />
    </div>

    <q-btn unelevated rounded color="primary" style="width: 70%; margin-top: 15px; margin-bottom: 5px"><q-space/><span>Sporti</span><q-space/><q-icon name="search" /></q-btn>    
    
    <div class="kats" v-touch-swipe="onScroll">
      <div class="katsh">
        <q-btn round dense color="primary" icon="expand_less" class="transition-ang" v-if="index!=0" @click="index-=1;animateScrollBefore()"/>
        <q-space />
        <q-btn round dense color="primary" icon="expand_more" class="transition-ang" v-if="index!=4" @click="index+=1;animateScrollNext()"/>
      </div>
      <q-scroll-area ref="scrollAreaRef" :thumb-style="thumbStyle" :visible="visible" style="max-height: 3000px; max-width: 3000px;" class="v-sc-2" >
          <div class="conti shadow-2">
            <q-avatar v-ripple.center:white size="75px" square class="b2 specialbox" font-size="42px" color="secondary" text-color="white" icon="directions" />
            <p class="fan text-p q-ma-none q-pa-none">Terminale</p>
          </div>
          <div class="conti shadow-2">
            <p class="fan text-p q-ma-none q-pa-none">Stacione</p>
            <q-avatar v-ripple.center:white size="75px" square class="b2 specialbox2" font-size="42px" color="secondary" text-color="white" icon="directions" />
          </div>
          <div class="conti shadow-2">
            <q-avatar v-ripple.center:white size="75px" square class="b2 specialbox" font-size="42px" color="secondary" text-color="white" icon="directions" />
            <p class="fan text-p q-ma-none q-pa-none">Agjensi turistike</p>
          </div>
          <div class="conti shadow-2">
            <p class="fan text-p q-ma-none q-pa-none">Aeroporte</p>
            <q-avatar v-ripple.center:white size="75px" square class="b2 specialbox2" font-size="42px" color="secondary" text-color="white" icon="directions" />
          </div>
          <div class="conti shadow-2">
            <q-avatar v-ripple.center:white size="75px" square class="b2 specialbox" font-size="42px" color="secondary" text-color="white" icon="directions" />
            <p class="fan text-p q-ma-none q-pa-none">Porte</p>
          </div>
      </q-scroll-area>
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
    const leftM = (scWidth-270)/2
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
        if(this.index == 1){
          position.value = position.value + 95
          scrollAreaRef.value.setScrollPosition('vertical', position.value, 300)
          
        }else {
          position.value = position.value + 75
          scrollAreaRef.value.setScrollPosition('vertical', position.value, 300)
        }
      },
      animateScrollBefore () {
        if(this.index == 0){
          position.value = position.value - 95
          scrollAreaRef.value.setScrollPosition('vertical', position.value, 300)
          
        }else {
          position.value = position.value - 75
          scrollAreaRef.value.setScrollPosition('vertical', position.value, 300)
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
  margin: 0 0 15px 0;
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
  width: 80%;
  height: 55px;
  border-radius: 15px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
  transition: 0.5s;
  margin-top: 25px;
  margin-bottom: 25px;
}
.active-ting{
  border-radius: 0px;
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
  height: 260px;
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
.specialbox{
    position: absolute;
    left: 10%;
}
.specialbox2{
    position: absolute;
    right: 10%;
}
</style>