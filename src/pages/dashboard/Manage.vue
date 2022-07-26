<template>
  <q-page class="flex flex-center animated-fade">
    <div class="waiter" v-if="wait==true">
      <div>
        <q-spinner-bars
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">Loading</q-tooltip>
      </div>
    </div>
    <div class="main" v-if="data.type == 'normal' && wait==false">
      <div class="row width90 q-mb-lg">
        <h5 class="text-h5 popreg">Menaxho produktet</h5>
        <q-space/>
        
      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { getAuth, signOut} from "firebase/auth";
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'ManagePage',
  methods: {

  },
  data(){
    const $q = useQuasar();
    return{
      
    }
  },
  beforeMount(){
  
    setTimeout(() => {
      // find data in localstorage 
      this.data = this.$q.localStorage.getItem('account');
      this.wait = false
    }, 2000);
  }
})
</script>
<style scoped>
.waiter{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

</style>