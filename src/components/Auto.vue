<template>
  <div class="main">
    <div class="kats">
      <q-scroll-area ref="scrollAreaRef" :thumb-style="thumbStyle" :visible="visible" style="max-height: 1200px; max-width: 3000px;" class="v-sc-2" >
        <div class="row no-wrap">
          <div class="conti shadow-3 q-mt-sm chain-fade-1-grad2" v-ripple.center:white>
            <q-avatar size="55px" font-size="50px" color="white" text-color="blue-9" icon="handyman" class=""/>
            <q-space/>
            <p class="fan text-p text-gray-5" style="margin: 0; padding: 0;">Distributor & Koncesionare</p>
            <q-space/>
          </div>
          <div class="conti shadow-3 q-mt-sm chain-fade-2-grad2" v-ripple.center:white>        
            <q-avatar size="55px" font-size="50px" color="white" text-color="blue-9" icon="handyman" class=""/>
            <q-space/>
            <p class="fan text-p text-black" style="margin: 0; padding: 0;">Servise</p>
            <q-space/>
          </div>
          <div class="conti shadow-3 q-mt-sm chain-fade-3-grad2" v-ripple.center:white>
            <q-avatar size="55px" font-size="50px" color="white" text-color="blue-9" icon="handyman" class=""/>
            <q-space/>
            <p class="fan text-p text-black" style="margin: 0; padding: 0;">Pjese te perdorura</p>
            <q-space/>
          </div>
          <div class="conti shadow-3 q-mt-sm chain-fade-1-grad2" v-ripple.center:white>
            <q-avatar size="55px" font-size="50px" color="white" text-color="blue-9" icon="handyman" class=""/>
            <q-space/>
            <p class="fan text-p text-black" style="margin: 0; padding: 0;">Shes blej</p>
            <q-space/>
          </div>
          <div class="conti shadow-3 q-mt-sm chain-fade-1-grad2" v-ripple.center:white>
            <q-avatar size="55px" font-size="50px" color="none" text-color="blue-9" icon="handyman" class=""/>
            <q-space/>
            <p class="fan text-p text-black" style="margin: 0; padding: 0;">Dogana</p>
            <q-space/>
          </div>
          <div class="conti shadow-3 q-mt-sm q-mr-sm chain-fade-1-grad2" v-ripple.center:white>
            <q-avatar size="55px" font-size="50px" color="none" text-color="blue-9" icon="handyman" class=""/>
            <q-space/>
            <p class="fan text-p text-black" style="margin: 0; padding: 0;">Kontrolli fizik</p>
            <q-space/>
          </div>
        </div>
      </q-scroll-area>
    </div>
    

    <q-btn unelevated rounded color="primary" style="width: 70%; margin-top: 10px; margin-bottom: 15px"><q-space/><span>Auto</span><q-space/><q-icon name="search" /></q-btn>    
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
import Image from '../assets/car.jpg'
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
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '0px',
        opacity: 0
      },
      animateScrollNext () {
        if(this.index == 1 || this.index == 0){
          position.value = position.value + 145
          scrollAreaRef.value.setScrollPosition('horizontal', position.value, 300)
          
        }else {
          position.value = position.value + 145
          scrollAreaRef.value.setScrollPosition('horizontal', position.value, 300)
        }
      },
      animateScrollBefore () {
        if(this.index == 1 || this.index == 0){
          position.value = position.value - 145
          scrollAreaRef.value.setScrollPosition('horizontal', position.value, 300)
          
        }else {
          position.value = position.value - 145
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
  position: relative;
  top: 10px;
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
  height: 150px;
  padding: 17px 30px 17px 30px;
  border-radius: 5px;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 20px;
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
  height: 230px;
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