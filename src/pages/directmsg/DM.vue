<template>
  <q-page class="flex flex-center animated-fade">
    <div class="main">
        <div class="width90"><h5 class="text-h5">Mesazhet tuaja</h5></div>
        <q-list bordered class=" width90 q-mt-lg">
          <q-item clickable v-ripple v-for="ds in discussions" :key="ds.name" @click="goto('/directmsg/chat', ds.participant1)">
            <q-item-section>{{ds.name}}</q-item-section>
            <q-item-section avatar>
              <q-avatar rounded>
                {{ds.name.substring(0, 1)}}
              </q-avatar>
            </q-item-section>
          </q-item>
        </q-list>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

export default defineComponent({
  name: 'ChatListPage',
  data(){
    return{
      discussions: null,
      messages: null,
      data: null
    }
    
  },
  methods: {
     goto(route, routenamelist){
        const listing = routenamelist
        listing.forEach((el)=>{
          if(el != this.data.email){
            console.log('sup')
            this.$router.push({path: route, query: {routename: el}})
            return
          }
        })
        
     }
  },
  async beforeMount(){
    this.data = this.$q.localStorage.getItem('account');
    const dt = await firebase.firestore().collection('discussions').where('participant1', 'array-contains', this.data.email).get()

    const dc = [] 
    dt.forEach((el) => {
        dc.push(el.data())
    })

    this.discussions = dc
    
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
  padding: 25px;
}
#map{
    width: 100%;
    height: 80vh;
}

</style>