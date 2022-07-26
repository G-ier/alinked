<template>
  <q-page class="runup flex animated-fade">
    <div class="name q-my-xl">
        <div class="n2">
            <h4 class="text-p popreg main-blue q-pa-none q-ma-none" >Njoftime</h4>
        </div>
    </div>
    <div class="main">
        <div class="fr1 q-py-xl bg-primary">
            <p class="text-p popreg text-white q-pa-none q-ma-none" >Njoftimi 1</p>
        </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'NotificationsPage',
  setup(){
    return{
        
    }
  }
})
</script>
<style scoped>
.main{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.fr1{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 20px;
    padding: 20px;
}
.fr2{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.name{
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;  
    position: relative;
}
.n2{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.runup{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
</style>