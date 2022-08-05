<template>
  <q-page class="flex flex-center animated-fade">
    <div class="main">
        <q-btn color="primary" class="q-my-md" text-color="white" label="Create" @click="createMap"/>
        <q-btn color="primary" class="q-my-md" text-color="white" label="Add Manually" @click="listener"/>
        <div id="map" ref="mapDivRef"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { Geolocation } from '@capacitor/geolocation'
import { GoogleMap } from '@capacitor/google-maps';

export default defineComponent({
  name: 'MapsExp',
  data(){
    return{
      map: ref(null),
      mapDivRef: ref(null),
      marker: ref(null)  
    }
    
  },
  methods: {
    async createMap () {
        const mapRef = document.getElementById('map');

        const newMap = await GoogleMap.create({
        id: 'my-map', // Unique identifier for this map instance
        element: mapRef, // reference to the capacitor-google-map element
        apiKey: 'AIzaSyC_spspGRVPKwQERhWf440KVVe6WwvOR2M', // Your Google Maps API Key
        config: {
            center: {
            // The initial position to be rendered by the map
            lat: 33.6,
            lng: -117.9,
            },
            zoom: 8, // The initial zoom level to be rendered by the map
        },
        });

        this.map = newMap;
    },
    async add(){
        await this.map.addMarker({
            coordinate:{
                lat: 28.6468935,
                lng: 76.9531791
            },
            title: "Your position"
        })
        await this.map.setCamera({
            coordinate: {
                lat: 28.6468935,
                lng: 76.9531791
            }
        })
    },
    async listener(){
      await this.map.setOnMapClickListener(async (data) => {
        if (this.marker != null){
          await this.map.removeMarker(this.marker)
        }
        this.marker = await this.map.addMarker({
            coordinate:{
                lat: data.latitude,
                lng: data.longitude
            },
            title: "Your chosen position"
        })
      })
    }
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