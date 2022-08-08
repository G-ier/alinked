<template>
  <div class="main">
    
    <q-btn unelevated rounded class="hooper" color="primary" style=" margin-top: 10px; margin-bottom: 15px"><q-space/><span>Qendra tregtare</span><q-space/><q-icon name="search" /></q-btn>    
    
    <div class="kats">
        
        <div class="conti shadow-3 q-mt-sm animated-fade" v-ripple.center:white>
            <div class="fullheight fullwidth" style="background-color:rgba(6, 44, 116, 0.40);padding: 17px 30px 17px 30px;border-radius:15px;display:flex;justify-content:center;align-items:center">
                <q-space/>
                <p class="fan text-p text-white" style="margin: 0; padding: 0;">Qendra tregtare</p>
                <q-space/>
            </div>
        </div>
        
    </div>
    
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
  width: 80%;
  height: 150px;
  border-radius: 15px;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 0px;
  background-image: url("../assets/supermarket.jpg");
  background-size: cover;
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
    width: 30%;
    transform: translateY(20px);
  }
  .kats{
    width: 70%;
    height: 300px;
    padding: 0px 0 20px 0;
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