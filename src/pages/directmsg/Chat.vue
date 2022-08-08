<template>
  <vue-advanced-chat/>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import ChatWindow from 'vue-advanced-chat'
import 'vue-advanced-chat/dist/vue-advanced-chat.css'

export default defineComponent({
  name: 'ChatPage',
  components: {
      ChatWindow
    },
  data(){
    return{
      discussions: null,
      
      data: null,
      routename: this.$route.query.routename,
      rooms: [],
      messages: [],
      currentUserId: 1234
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

    //this.data = this.$q.localStorage.getItem('account');
    //this.messages = await this.getmsgs()
    
  },
  mounted(){
    document.querySelector('vue-advanced-chat').currentUserId = this.currentUserId
    document.querySelector('vue-advanced-chat').rooms = this.rooms
    document.querySelector('vue-advanced-chat').messages = this.messages
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