<template>
  <div class="main">
    <div class="imagerow">
      <q-img
          :src="image"
          :ratio="16/9"
        />
    </div>
    
    <q-btn unelevated rounded color="primary" style="width: 70%; margin-top: 20px; margin-bottom: 15px"><q-space/><span>Libri & Kancelaria</span><q-space/><q-icon name="search" /></q-btn>

    <div class="kats">
      <div class="fullwidth row justify-between">
        <div class="col-3">
          <q-img
            src="https://placeimg.com/500/300/nature"
            spinner-color="white"
            width="100%"
            :ratio="1"
            class="q-mb-xs rounded-borders shadow-3"
          />
          <p class="q-pa-none q-ma-none q-py-xxs q-px-xs rounded-borders text-center bg-darkblue text-white">Biblioteka</p>
        </div>
        <div class="col-3 items-center">
          <q-img
            src="https://placeimg.com/500/300/nature"
            spinner-color="white"
            width="100%"
            :ratio="1"
            class="q-mb-xs rounded-borders shadow-3"
          />
          <p class="q-pa-none q-ma-none q-py-xxs q-px-xs rounded-borders text-center bg-darkblue text-white">Librari</p>
        </div>
        <div class="col-3">
          <q-img
            src="https://placeimg.com/500/300/nature"
            spinner-color="white"
            width="100%"
            :ratio="1"
            class="q-mb-xs rounded-borders shadow-3"
          />
          <p class="q-pa-none q-ma-none q-py-xxs q-px-xs rounded-borders text-center bg-darkblue text-white">Kancelari</p>
        </div>
      </div>
      <div class="fullwidth row justify-center">
        <div class="col-3">
          <q-img
            src="https://placeimg.com/500/300/nature"
            spinner-color="white"
            width="100%"
            :ratio="1"
            class="q-mb-xs rounded-borders shadow-3"
          />
          <p class="q-pa-none q-ma-none q-py-xxs q-px-xs rounded-borders text-center bg-darkblue text-white">Autor</p>
        </div>
      </div>
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
    const leftM = (scWidth-190)/2
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
  width: 170px;
  height: 150px;
  padding: 10px 10px 10px 10px;
  border-radius: 20px;
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
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
  width: 90%;
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