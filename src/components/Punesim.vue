<template>
  <div class="main">
    <div class="imagerow">
      <q-img
          :src="image"
          :ratio="16/9"
        />
    </div>
    <div class="space"></div>
    <q-btn unelevated class="hooper" rounded color="primary" style="margin-top: 20px; margin-bottom: 15px"><q-space/><span>Punesim</span><q-space/><q-icon name="search" /></q-btn>    
    <div class="kats">
      <div class="fullwidth row no-wrap">
        <div class="katsd bg-darkblue relative-position" v-ripple.center:white>
            <q-icon name="font_download" color="white" size="2rem"/>
            <q-space/>
            <p class="name text-white" style="text-align:center; margin: 0;padding: 0;">Punesim</p>
            <q-space/>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import Image from '../assets/argetim.jpg'
export default {
  setup(){
    const image = Image
    return {
      image,
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '0px',
        opacity: 0
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
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.imagerow{
  width: 80%;
  height: 17vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
}
.kats{
  width: 70%;
  height: 30vh;
  padding: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  top: 30px;
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
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  padding: 0px 20px 0 20px;
  height: 80px;
  width: 100%;
}
.extraMargined{
  margin-left: 15px;
}
.v-sc{
  overflow: visible;
  width: 100%;
}
.space{
  height: 50px;
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
    width: 50%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    transform: translateX(25%);
  }
  .hooper2{
    width: 110%;
    transform: translateX(-10%);
  }
  
}
</style>