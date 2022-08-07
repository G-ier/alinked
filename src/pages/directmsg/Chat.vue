<template>
  <q-page class="flex flex-center animated-fade">
    <div class="main">
        <div class="row items-center width90">
            <q-icon name="arrow_back_ios_new" class="q-mr-lg" size="xs" @click="goto('/directmsg')"/>
            <p class="text-h6 q-ma-none q-pa-none">Chat</p>
        </div>
        <div class="row items-center justify-center width90 q-mt-md">
            <p class="text-p q-ma-none q-pa-none">{{routename}}</p>
        </div>
        <div class="fullwidth q-mt-lg" style="height: 100%">
            <q-chat-message
                v-for="msg in messages"
                :key="msg.time.seconds"
                :text="[msg.inhalt]"
            />
        </div>
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
  name: 'ChatPage',
  data(){
    return{
      discussions: null,
      messages: null,
      data: null,
      routename: this.$route.query.routename
    }
    
  },
  methods: {
     goto(route){
        
        this.$router.push(route)
     },
     async getmsgs(){
        const group1 = await firebase.firestore().collection('messages').where('to', '==', this.data.email).where('from', '==', this.routename).get()
        const group2 = await firebase.firestore().collection('messages').where('from', '==', this.data.email).where('to', '==', this.routename).get()

        var tr1 = []
        var tr2 = []

        group1.forEach((el)=>{
            tr1.push(el.data())
        })

        group2.forEach((el)=>{
            tr2.push(el.data())
        })

        tr1 = tr1.concat(tr2)
        
        tr1 = tr1.sort((a,b)=>{
            
            if (a.time.seconds < b.time.seconds) {
                return -1;
            }
            if (a.time.seconds > b.time.seconds) {
                return 1;
            }

            // names must be equal
            return 0;
        })

        return tr1
     }
  },
  async beforeMount(){

    this.data = this.$q.localStorage.getItem('account');
    this.messages = await this.getmsgs()
    
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