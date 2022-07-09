<template>
  <div class="main">
    <div class="imagerow">
      <q-img
          :src="image"
          :ratio="16/9"
        />
    </div>
    <q-btn unelevated rounded color="primary" label="Argetim dhe shplodhje" style="margin-top: 50px"><q-icon name="search" style="padding-left: 10px" /></q-btn>
    <div class="kats">
      <div class="katsh">
        <p class="katnav text-grey-10">Nenkategorite</p>
      </div>
      <div class="katss">
        <q-scroll-area ref="scrollAreaRef" :thumb-style="thumbStyle" :visible="false" style="height: 120px; max-width: 3000px;" class="v-sc">
          <div class="row no-wrap">
            <div class="katsd relative-position" v-ripple.center:white v-for="el in kats" :key="el.id" :class="{extraMargined: el.id != 1}" @click="goto(el.link)">
              <q-icon name="font_download" color="white" size="2rem"/>

              <p class="name text-white" style="text-align:center; margin: 0;padding: 0;">{{el.title}}</p>
            </div>
          </div>
        </q-scroll-area>
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
      }
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
  width: 100%;
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
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 0px 5px 0 5px;
  height: 100px;
  width: 140px;
  background-color: rgb(116, 15, 184);
}
.extraMargined{
  margin-left: 15px;
}
.v-sc{
  overflow: visible;
  width: 100%;
}
</style>