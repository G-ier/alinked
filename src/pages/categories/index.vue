<template>
  <q-page class="flex">
    <q-inner-loading v-if="route==null||route=='loading'" :showing="true">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
    <Argetim v-if="route=='argetim'" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Argetim from '../../components/Argetim.vue'
 
export default defineComponent({
  name: 'Category page',
  components:{
    Argetim
  } ,
  setup () {

    return {
      
    }
  },
  computed: {
      route(){
          return this.$route.query.routename;
      }
  }
})
</script>
<style scoped>

</style>