<template>
  <div class="main">
    <div class="row fr">
        <q-btn flat color="secondary" label="Auto: Shes-Blej" />
        <q-space/>
        <q-btn flat color="secondary" label="Filter" v-if="resultOn"/>
        <q-btn flat color="secondary" disabled label="Filter" v-if="resultOn==false"/>
    </div>
    <div class="row fr">
        <q-space/>
        <q-btn flat color="secondary" label="Rikerko" v-if="resultOn" @click="hide"/>
        <q-space/>
    </div>

    <div class="fr animated-fade" v-if="resultOn==false">
        <q-select class="q-my-md" standout="bg-grey text-white" v-model="model1" :options="options1" label="Kategoria" />
        <q-select class="" standout="bg-grey text-white" v-model="model2" :options="options2" label="Marka" />
        <q-select class="q-mt-md" standout="bg-grey text-white" v-model="model3" :options="options3" label="Karburanti" />
        <q-select class="q-mt-md" standout="bg-grey text-white" v-model="model4" :options="options4" label="Cmimi" />
        <q-select class="q-my-md" standout="bg-grey text-white" v-model="model5" :options="options5" label="Viti i Prodhimit" />
    </div>

    <q-btn @click="search" v-if="resultOn==false" class="animated-fade" unelevated rounded color="primary" style="width: 70%; margin-top: 10px; margin-bottom: 15px"><q-space/><span>Kerko</span><q-space/><q-icon name="search" /></q-btn>    
    
    <div class="results animated-fade" v-if="resultOn">
        success
    </div>

  </div>
</template>

<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import Image from '../assets/car.jpg'
export default {
  setup(){
    const $q = useQuasar()
    const image = Image
    const position = ref(0)
    const scrollAreaRef = ref(null)
    const scWidth = $q.screen.width
    const leftM = (scWidth-150)/2
    var index = ref(0)
    return {
      fPanel: ref(false),
      model1: null,
      model2: null,
      model3: null,
      model4: null,
      model5: null
    }
  },
  data(){
    return{
        resultOn: false,
        results: [],
    }
  },
  methods: {
    filter(){
        this.fPanel = true
    },
    search(){
        this.resultOn = true
    },
    hide(){
        this.resultOn = false
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
.fr{
    width: 90%;
}
.results{
    
}
</style>