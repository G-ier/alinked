<template>
  <q-page class="flex animated-fade" style="min-height: 400px">
    <div class="headerdis shadow-3">
      <div class="totaled">
        <q-icon name="arrow_back_ios_new" size="xs" @click="gotoHome"/>
        <p class="text-h5 custom-black" style="margin: 0; padding: 0;">{{title}}</p>
        <q-icon name="arrow_back_ios_new" style="z-index: -1000; opacity: 0"/>
      </div>
    </div>
    <q-inner-loading v-if="route==null||route=='loading'" :showing="true">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
    <Argetim v-if="route=='argetim'" />
    <Shteti v-if="route=='shteti'" />
    <Shendetesia v-if="route=='shendetesia'" />
    <Sport v-if="route=='sport'" />
    <Hotele v-if="route=='hotele'" />
    <Arsimi v-if="route=='arsimi'" />
    <Fetare v-if="route=='fetare'" />
    <Diaspora v-if="route=='diaspora'" />
    <Auto v-if="route=='auto'" />
    <Sociale v-if="route=='sociale'" />
    <Imobiliare v-if="route=='imobiliare'" />
    <Turizem v-if="route=='turizem'" />
    <Libri v-if="route=='libri'" />
    <Markete v-if="route=='markete'" />
    <Arti v-if="route=='arti'" />
    <Pun v-if="route=='punesim'" />
    <Qendra v-if="route=='qendra'" />
    <Udhetime v-if="route=='udhetime'" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Argetim from '../../components/Argetim.vue'
import Shteti from '../../components/Shteti.vue'
import Shendetesia from '../../components/Shendetesia.vue'
import Sport from '../../components/Sport.vue'
import Hotele from '../../components/Hotele.vue'
import Arsimi from '../../components/Arsimi.vue'
import Fetare from '../../components/Fetare.vue'
import Diaspora from '../../components/Diaspora.vue'
import Auto from '../../components/Auto.vue'
import Sociale from '../../components/Sociale.vue'
import Imobiliare from '../../components/Imobiliare.vue'
import Turizem from '../../components/Turizem.vue'
import Libri from '../../components/Libri.vue'
import Markete from '../../components/Markete.vue'
import Arti from '../../components/Arti.vue'
import Pun from '../../components/Punesim.vue'
import Qendra from '../../components/Qendra.vue'
import Udhetime from '../../components/Udhetime.vue'
 
export default defineComponent({
  name: 'Category page',
  components:{
    Argetim,
    Shteti,
    Shendetesia,
    Sport,
    Hotele,
    Arsimi,
    Fetare,
    Diaspora,
    Auto,
    Sociale,
    Imobiliare,
    Turizem,
    Libri,
    Markete,
    Arti,
    Pun,
    Qendra,
    Udhetime

  } ,
  setup () {
    return {
      
    }
  },
  computed: {
      route(){
          return this.$route.query.routename;
      },
      title(){
          return this.$route.query.routetitle;
      }
  },
  methods: {
    gotoHome(){
      this.$router.push({path:'/'})
    }
  }
})
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.headerdis{
  width: 100%;
  height: 17vh;
  background-color: rgb(226, 226, 226);
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.totaled{
  height: 40%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>