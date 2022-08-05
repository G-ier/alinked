<template>
  <div class="main">
    <div class="imagerow">
      <q-img
          :src="image"
          :ratio="16/9"
        />
    </div>

    <q-btn unelevated rounded color="primary" style="width: 70%; margin-top: 20px; margin-bottom: 35px"><q-space/><span>Imobiliare</span><q-space/><q-icon name="search" /></q-btn>    
    
    <div class="kats">
        
        <div class="conti shadow-3" v-ripple.center:white>
            <q-space/>
            <p class="fan text-p main-blue-10" style="margin: 0; padding: 0;">Jep-Marr me qera</p>
            <q-avatar size="45px" font-size="45px" color="white" text-color="blue-10" icon="handshake" class=" q-ml-sm"/>
        </div>
        
    </div>
    <div class="kats-2">
        
        <div class="conti-2 shadow-3" v-ripple.center:white>
            <q-avatar size="45px" font-size="45px" color="white" text-color="blue-10" icon="handshake" class=" q-mr-sm"/>
            <p class="fan text-p main-blue-10" style="margin: 0; padding: 0;">Shes-Blej</p>
            <q-space/>
        </div>
        
    </div>

    <div class="kats" v-touch-swipe="onScroll">
        
        <div class="conti shadow-3" v-ripple.center:white>
            <q-space/>
            <p class="fan text-p main-blue-10" style="margin: 0; padding: 0;">Agjensi imobiliare</p>
            <q-avatar size="45px" font-size="45px" color="white" text-color="blue-10" icon="local_shipping" class=" q-ml-sm"/>
        </div>
        
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
    const leftM = (scWidth-240)/2
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
  width: 60%;
  height: 15vh;
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
  width: 80%;
  position: relative;
  right: 10px;
  padding: 10px 30px 10px 30px;
  border-radius: 0px 50px 50px 0;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.conti-2{
  width: 80%;
  position: relative;
  left: 10px;
  padding: 10px 30px 10px 30px;
  border-radius: 50px 0 0 50px;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 0px;
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
  padding: 0px 0 0px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.kats-2{
  width: 100%;
  padding: 15px 0 15px 0;
  display: flex;
  justify-content: flex-end;
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