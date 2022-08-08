<template>
  <div class="main">

    <div class="headers">
        
            <q-bar class="rounded-borders">
                <div class="cursor-pointer non-selectable">
                    <q-btn dense flat label="Filtrat" @click="bar = true" />
                    
                </div>
                <q-space />
                <q-btn dense flat label="Vendos" @click="filter" />
                </q-bar>
    </div>

    <div class="prods">
        <p class="text-p q-pa-none q-ma-none">Rezultate per: {{title}}</p>
        <div class="lister items-start q-gutter-md">
            <div class="card" v-for="item in prods" :key="item.name">
                <q-card class="my-card">
                    <img :src="cdn_dir + item.photo">

                    <q-card-section>
                        <div class="text-h6">{{item.name}}</div>
                    </q-card-section>
                    <q-card-actions>
                        <q-btn color="primary" no-caps>Kontakto</q-btn>
                        <q-space/>
                        <q-btn flat no-caps @click="showonmap(item)">Shiko ne harte</q-btn>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </div>
    <q-dialog v-model="bar" persistent>
      <q-card>
        <q-bar>

          <div><p class="q-ma-none q-pa-none">Filtrat</p></div>  
          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip>Mbyll</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="fullwidth row justify-center">
            <div class="width90">
                <q-checkbox v-model="privat" label="Institucion Privat" hint="Opsionale"/>
                <q-checkbox v-model="publik" label="Institucion Publik" hint="Opsionale"/>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="mapshow"
      full-height
      full-width
      persistent
    >
      <div id="mapDivRef" ref="mapDivRef">
                    
      </div>
      <div id="over_map">
        <q-btn color="negative" class="width80" label="Mbyll" @click="closemap"/>
      </div>

      
    </q-dialog>

  </div>
</template>

<script>
import {onBeforeMount, ref} from 'vue'
import { useQuasar } from 'quasar'
import Image from '../assets/doctors.jpg'
import Image2 from '../assets/books.jpg'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleMap } from '@capacitor/google-maps';
import { uid } from 'quasar'

export default {
  props: {
    route: String,
    title: String
  },
  data(){
    return{
        marka: null,
        qyteti: null,
        privat: false,
        publik: false,
        prods: null,
        bar: false,
        cdn_dir: "http://127.0.0.1:5000/get_image?file=",
        mapshow: false,
        map: null,
        marker: null
    }
  },
  methods: {
    async filter(){
        if(this.privat && !this.publik){
            const listings = await firebase.firestore().collection("places").where('privat', '==', this.privat).get()
            const decr = [] 
            listings.forEach((el) => {
                decr.push(el.data())
            })
            this.prods = decr
        } else if(!this.privat && this.publik){
            const listings = await firebase.firestore().collection("places").where('publik', '==', this.publik).get()
            const decr = [] 
            listings.forEach((el) => {
                decr.push(el.data())
            })
            this.prods = decr
        }
        else if(this.privat && this.publik){
            const listings = await firebase.firestore().collection("places").where('privat', '==', this.privat).where('publik', '==', this.publik).get()
            const decr = [] 
            listings.forEach((el) => {
                decr.push(el.data())
            })
            this.prods = decr
        }
        
    },
    async showonmap (item) {
        
        this.mapshow = true

        if(this.map == null){
          setTimeout(async () => {
            const mapRef = document.getElementById('mapDivRef');
            if(this.map != null){
              return;
            }
            const newMap = await GoogleMap.create({
            id: 'my-map', // Unique identifier for this map instance
            element: mapRef, // reference to the capacitor-google-map element
            apiKey: 'AIzaSyC_spspGRVPKwQERhWf440KVVe6WwvOR2M', // Your Google Maps API Key
            config: {
                center: {
                // The initial position to be rendered by the map
                    lat: 41.33150266529172,
                    lng: 19.818300833689182
                },
                zoom: 10, // The initial zoom level to be rendered by the map
            },
            });

            this.map = newMap;
            
            if (this.marker != null){
              await this.map.removeMarker(this.marker)
            }
            this.marker = await this.map.addMarker({
                coordinate:{
                    lat: item.location.latitude,
                    lng: item.location.longitude
                },
                title: item.name
            })  

          },1000)
                
        }
          
          
    },
    closemap(){
      this.mapshow = false
      this.map.destroy()
      this.map = null
      this.marker = null
    }
  },
  async beforeMount(){
    const listings = await firebase.firestore().collection("places").where('kategoria', '==', this.$props.title).get()

    const decr = [] 
    listings.forEach((el) => {
        decr.push(el.data())
    })
    console.log("apperently right")
    console.log(listings)
    this.prods = decr
  }
  
}
</script>

<style scoped>
.main{
  width: 100%;
  padding: 25px 10px 10px 10px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.headers{
    width: 95%;
}
.prods{
    width: 95%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.lister{
    width: 95%;
    margin-top: 30px;
    display: flex;
    
}
#over_map { position: absolute; top: 85%; left: 20%; z-index: 99; background-color: transparent; border: none; box-shadow: none;}
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