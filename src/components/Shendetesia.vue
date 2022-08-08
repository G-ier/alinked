<template>
  <div class="main">
    <div class="imagerow">
      <q-img
          :src="image"
          :ratio="16/9"
        />
    </div>
    <q-btn unelevated rounded color="primary" label="Shendetesia" style="margin-top: 20px; margin-bottom: 15px"><q-icon name="search" style="padding-left: 10px" /></q-btn>
    <div class="kats">
      <div class="type">
          <q-avatar v-ripple.center:white size="85px" font-size="42px" color="secondary" text-color="white" icon="directions" />
          <p class="text-p">Spitale</p>
      </div>
      <div class="type">
          <q-avatar v-ripple.center:white size="85px" font-size="42px" color="secondary" text-color="white" icon="directions" />
          <p class="text-p">Poliklinika</p>
      </div>
      <div class="type">
          <q-avatar v-ripple.center:white size="85px" font-size="42px" color="secondary" text-color="white" icon="directions" />
          <p class="text-p">Urgjenca</p>
      </div>
      <div class="type">
          <q-avatar v-ripple.center:white size="85px" font-size="42px" color="secondary" text-color="white" icon="directions" />
          <p class="text-p">Klinika</p>
      </div>
    </div>
  </div>
</template>

<script>
import Image from '../assets/doctors.jpg'
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
.kats{
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
}
.type{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
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
  }
  .hooper2{
    width: 110%;
    transform: translateX(-10%);
  }
  
}
</style>