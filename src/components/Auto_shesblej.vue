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
        <q-select class="q-my-md" standout="bg-grey text-white" v-model="model1" :options="options1" label="Ngjyra" />
        <q-select class="" standout="bg-grey text-white" v-model="model2" :options="options2" label="Marka" />
        <q-select class="q-mt-md" standout="bg-grey text-white" v-model="model3" :options="options3" label="Karburanti" />
        <q-select class="q-mt-md" standout="bg-grey text-white" v-model="model4" :options="options4" label="Cmimi" />
        <q-select class="q-my-md" standout="bg-grey text-white" v-model="model5" :options="options5" label="Viti i Prodhimit" />
    </div>

    <q-btn @click="search" v-if="resultOn==false" class="animated-fade hooper" unelevated rounded color="primary" style="margin-top: 10px; margin-bottom: 15px"><q-space/><span>Kerko</span><q-space/><q-icon name="search" /></q-btn>    
    
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
      model1: ref(null),
      model2: ref(null),
      model3: ref(null),
      model4: ref(null),
      model5: ref(null),
      options1: [
        "E bardhe",
        "E kuqe",
        "Blu",
        "E verdhe"
      ],
      options2: [
        "mercedes-benz",
        "volkswagen",
        "audi",
        "fiat",
        "volvo",
        "ford",
        "iveco",
        "kia",
        "toyota",
        "nisan",
        "porche",
        "range rover",
        "humer",
        "ferrari",
        "lamborgini",
        "bugatti",
        "BMW"
      ],
      options3: [
        "benzine",
        "diezel",
        "gaz"
      ],
      options4: [
        "euro",
        "leke"
      ],
      options5: [
        "2005-2010",
        "2010-2015",
        "2015-2020",
        "2020 e lart"
      ]
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
.hooper{
    width: 70%
  }
@media only screen and (min-width: 1100px) {
  .pager{
    display: flex;
    justify-content: center;
  }
  .hooper{
    width: 30%
  }
  .main{
    width: 60%;
    padding: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
}
</style>