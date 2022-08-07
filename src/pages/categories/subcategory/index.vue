<template>
  <q-page class="flex animated-fade" style="min-height: 400px">
    <div class="headerdis shadow-3">
      <div class="totaled">
        <q-icon name="arrow_back_ios_new" size="xs" class="custom-black" @click="gotoHome('auto', 'Auto')" v-if="route=='shesblej'"/>
        <q-icon name="arrow_back_ios_new" size="xs" class="custom-black" @click="$router.go(-1)" v-if="route!='shesblej'"/>
        <p class="text-h5 custom-black" style="margin: 0; padding: 0;" v-if="route=='shesblej'">{{title}}</p>
        <p class="text-h5 custom-black" style="margin: 0; padding: 0;" v-if="route!='shesblej'">Listime</p>
        <q-icon name="arrow_back_ios_new" style="z-index: -1000; opacity: 0"/>
      </div>
    </div>
    <q-inner-loading v-if="route==null||route=='loading'" :showing="true">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
    <Shesblej v-if="route=='shesblej'" />
    <ListPlaces v-if="route=='list-places'" :title="title" :route="route" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Shesblej from '../../../components/Auto_shesblej.vue'
import ListPlaces from '../../../components/ListPlaces.vue'
 
export default defineComponent({
  name: 'Category page',
  components:{
    Shesblej,
    ListPlaces
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
    gotoHome(link,title){
      this.$router.push({path: '/categories/'+link, query: {routename: link, routetitle: title}})
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