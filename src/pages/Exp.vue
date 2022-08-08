<template>
  <q-page class="flex pager flex-center animated-fade">
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
      <q-banner dense inline-actions class="text-white bg-red" v-if="(data.wantsToBe == 'institution' || data.wantsToBe == 'seller') && data.type == 'normal'">
        Llogaria juaj po vertetohet. Sapo te kryhet vertetimi do te perfitoni akses te plote.
        
      </q-banner>
      <div class="row width90 q-mb-lg">
        <h5 class="text-h5 popreg">Profili juaj</h5>
      </div>
      <div class="width90 columny">
        <q-btn flat label="Mesazhet tuaja" @click="goto('directmsg')"/>
        <q-btn flat label="Te dhenat e profilit" @click="profile=true"/>
      </div>
    </div>
    <div class="main" v-if="data.type == 'seller' && wait==false">
      
      <div class="row width90 items-center q-mb-lg">
        <h5 class="text-h5 popreg">Dashboard</h5>
        <q-space/>
        <q-icon name="settings" size="sm" class="q-mr-lg" @click="profileP=true;tabprofile= 'data'"/>
        <q-icon name="logout" size="sm" @click="logout"/>
      </div>
      
      <div class="width90 row q-my-md">
        <div class="product col q-mr-lg main-blue-bg" v-ripple @click="newproduct = true">
          <p class="popreg text-white">Shto produkt</p>
          
          <q-icon
            name="add"
            color="white"
            size="45"
          />
        </div>
        <q-space/>
        <div class="product col main-blue-bg" v-ripple>
          <p class="popreg text-white text-center">Menaxho produktet</p>
          <q-icon
            name="library_books"
            color="white"
            size="45"
          />
        </div>
      </div>
    </div>
    <div class="main" v-if="data.type == 'institution' && wait==false">
      
      <div class="row width90 items-center q-mb-lg">
        <h5 class="text-h5 popreg">Dashboard</h5>
        <q-space/>
        <q-icon name="settings" size="sm" class="q-mr-lg" @click="profileP=true;tabprofile = 'data'"/>
        <q-icon name="logout" size="sm" @click="logout"/>
      </div>
      <div class="width90 row q-my-md">
        <div class="product col q-mr-lg main-blue-bg" v-ripple @click="newproduct = true">
          <p class="popreg text-white">Shto produkt</p>
          
          <q-icon
            name="add"
            color="white"
            size="45"
          />
        </div>
        <q-space/>
        <div class="product col main-blue-bg" v-ripple>
          <p class="popreg text-white text-center">Menaxho produktet</p>
          <q-icon
            name="library_books"
            color="white"
            size="45"
          />
        </div>
      </div>
    </div>
    <q-dialog
      v-model="profile"
      persistent
      :maximized="true"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-white text-white">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6 text-black">Ndryshoni te dhenat tuaja</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="fullwidth innerdope">
            <div class="width90 innerpeace">
              <q-input filled v-model="data.name" class="q-mb-lg" label="Emri"/>
              <q-input filled v-model="data.email" class="q-mb-lg" label="Email" />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="profileP"
      persistent
      :maximized="true"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-white text-white">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup @click="destroymap">
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="fullwidth row justify-center text-h6">
            <div class="width90 text-black">Ndryshoni te dhenat tuaja</div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="fullwidth innerdope">
            <div class="width90 innerpeace">
              <q-tabs
                  v-model="tabprofile"
                  class="text-primary q-mb-lg fullheight fullwidth"
              >
                  <q-tab name="data" icon="person" label="Profili" @click="destroymap"/>
                  <q-tab name="map" icon="pin_drop" label="Lokacioni" @click="listener"/>
              </q-tabs>
              <q-tab-panels v-model="tabprofile" animated>
                <q-tab-panel name="data" class="bg-white">
                  <q-input filled v-model="data.name" class="q-mb-lg" label="Emri" error-message="Korigjoni fushen" :error="namePError"/>
                  <q-input filled v-model="data.email" hint="Momentalisht i pandryshueshem" class="q-mb-lg" label="Email" />
                </q-tab-panel> 
                <q-tab-panel name="map" class="bg-white fullwidth">
                  <div id="mapDivRef" ref="mapDivRef">
                    
                  </div>
                </q-tab-panel>  
              </q-tab-panels>
              <q-space/>
              <div class="fullwidth row justify-end">
                <q-btn dense color="primary" no-caps label="Ndrysho" @click="changeData">
                </q-btn>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="newproduct"
      persistent
      :maximized="true"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="fullwidth row justify-center text-h6">
            <div class="width90">Produkt ose sherbim i ri</div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            <q-tabs
                v-model="tab"
                class="text-white"
            >
                <q-tab name="produkt" icon="inventory_2" label="Produkt i ri" />
                <q-tab name="sherbim" icon="design_services" label="Sherbim i ri" />
            </q-tabs>
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="produkt" class="bg-primary">
                    <div class="fullwidth innerdope q-mt-lg">
                        <div class="width95 innerpeace">
                            <q-stepper
                                v-model="step"
                                header-nav
                                ref="stepper"
                                color="primary"
                                animated
                            >
                                <q-step
                                    :name="1"
                                    title="Info"
                                    icon="settings"
                                    :done="step > 1"
                                    :header-nav="step > 1"
                                >
                                    <q-input filled class="q-mb-lg"  v-model="product.name" error-message="Korigjoni fushen" :error="nameError" label="Emri i produktit" :dense="true" />
                                    <q-input filled class="text-white q-mb-md" v-model="product.price" error-message="Korigjoni fushen" :error="priceError" label="Cmimi - (Opsional)" :dense="true" type="number" hint="Cdo cmime eshte ne leke." />
                                    
                                    <q-stepper-navigation>
                                    <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Vazhdo" />
                                    </q-stepper-navigation>
                                </q-step>

                                <q-step
                                    :name="2"
                                    title="Filtrat"
                                    icon="create_new_folder"
                                    :done="step > 2"
                                    :header-nav="step > 2"
                                >

                                    <p class="text-p text-black">Cdo filter eshte opsional</p>
                                    <q-select filled v-model="category" error-message="Korigjoni fushen" :error="catError" :options="options" label="Kategoria" class="q-mb-md" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="argetim_opt" label="Nenkategoria" v-if="category== 'argetim dhe shplodhje'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="arsimi_opt" label="Nenkategoria" v-if="category== 'arsimi'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="arti_opt" label="Nenkategoria" v-if="category== 'arti'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="auto_opt" label="Nenkategoria" v-if="category== 'auto'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="banka_opt" label="Nenkategoria" v-if="category== 'banka dhe exchange'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="imo_opt" label="Nenkategoria" v-if="category== 'imobiliare'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="hot_opt" label="Nenkategoria" v-if="category== 'hoteleri-turizem'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="dia_opt" label="Nenkategoria" v-if="category== 'diaspora'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="pun_opt" label="Nenkategoria" v-if="category== 'punesimi'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="fet_opt" label="Nenkategoria" v-if="category== 'institucione fetare'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="sht_opt" label="Nenkategoria" v-if="category== 'institucione shteterore'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="lib_opt" label="Nenkategoria" v-if="category== 'libri dhe kancelari'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="mar_opt" label="Nenkategoria" v-if="category== 'markete dhe tregje'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="pro_opt" label="Nenkategoria" v-if="category== 'profesionet e lira'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="qen_opt" label="Nenkategoria" v-if="category== 'qendra tregetare'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="shen_opt" label="Nenkategoria" v-if="category== 'shendetesia'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="soc_opt" label="Nenkategoria" v-if="category== 'sociale '" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="spo_opt" label="Nenkategoria" v-if="category== 'sporte'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="tek_opt" label="Nenkategoria" v-if="category== 'teknologji'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="tur_opt" label="Nenkategoria" v-if="category== 'turizem kulture'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="udh_opt" label="Nenkategoria" v-if="category== 'udhetime'" />
                                    <q-select filled v-model="subcategory" error-message="Korigjoni fushen" :error="scError" :options="bleg_opt" label="Nenkategoria" v-if="category== 'blegtori bujqesi'" />
                                    
                                    <div class="fullwidth spaz" v-if="checker">
                                      <q-input filled class="q-mt-md" v-model="qytet" label="Qyteti" :dense="true" />
                                    </div>

                                    <div class="fullwidth spaz" v-if="checker2">
                                      <q-input filled class="q-mt-md" v-model="qytet" label="Qyteti" :dense="true" />
                                      <q-checkbox v-model="publik" />
                                      <q-checkbox v-model="privat" />
                                    </div>

                                    <div class="fullwidth spaz" v-if="checker3">
                                      <q-input filled class="q-mt-md" v-model="qytet" label="Qyteti" :dense="true" />
                                      <q-input filled class="q-mt-md" v-model="marka" label="Qyteti" :dense="true" />
                                    </div>

                                    <div class="fullwidth spaz q-mt-md" v-if="checker4">
                                      <q-select filled v-model="marka_car" :options="options_marka" label="Marka" class="q-mb-md" :dense="true" />
                                      <q-select filled v-model="karburat_car" :options="karb_opt" label="Karburanti" class="q-mb-md" :dense="true"/>
                                      <q-select filled v-model="kambio_car" :options="kambio_opt" label="Kambio" class="q-mb-md" :dense="true"/>
                                      <q-select filled v-model="cmimi_car" :options="cmimi_opt" label="Vlera" class="q-mb-md" :dense="true"/>
                                      <q-select filled v-model="vitimin_car" :options="vit_opt" label="Viti i prodhimit" class="q-mb-md" :dense="true"/>
                                      <q-input filled class="q-mt-md" v-model="ngjyra_car" label="Ngjyra" :dense="true" />
                                    </div>
                                    <div class="fullwidth spaz q-mt-md" v-if="checker5">
                                      <q-input filled class="q-mb-md" v-model="qytet" label="Qyteti" :dense="true" />
                                      <q-input filled class="q-mb-md" v-model="zona" label="Zona" :dense="true" />
                                      <q-select filled v-model="struktura" :options="str_opt" label="Marka" class="q-mb-md" :dense="true"/>
                                      <q-select filled v-model="siperfaqe" :options="sip_opt" label="Karburanti" class="q-mb-md" :dense="true"/>
                                      <q-input filled v-model="cmimi_min"  label="Cmimi min." class="q-mb-md" :dense="true"/>
                                      <q-input filled v-model="cmimi_max" label="Cmimi max." class="q-mb-md" :dense="true" />
                                      <q-input filled v-model="kati_min" label="Kati min." class="q-mb-md" :dense="true" />
                                      <q-input filled class="q-mt-md" v-model="kati_max" label="Kati max." :dense="true" />
                                    </div>
                                    <div class="fullwidth spaz q-mt-md" v-if="checker6">
                                      <q-input filled class="q-mt-md" v-model="qytet" label="Qyteti" :dense="true" />
                                      <q-input filled class="q-mt-md" v-model="zona" label="Zona" :dense="true" />
                                      <q-input filled class="q-mt-md" v-model="nr_njerez" label="Te rritur" error-message="Korigjoni fushen" :error="nrpError" :dense="true" />
                                      <q-input filled class="q-mt-md" v-model="nr_femij" label="Femije" error-message="Korigjoni fushen" :error="nrcError" :dense="true" />
                                    </div>
                                    <div class="fullwidth spaz q-mt-md" v-if="checker7">
                                      <q-input filled class="q-mt-md" v-model="qytet" label="Qyteti" :dense="true" />
                                      <q-input filled class="q-mt-md" v-model="zona" label="Zona" :dense="true" />
                                      <q-input filled class="q-mt-md" v-model="profesioni" label="Profesioni" :dense="true" />
                                      <q-select filled class="q-mt-md" v-model="contract" :options="con_opt" label="Tipi i kontrates" :dense="true" />
                                    </div>
                                    

                                    <q-stepper-navigation>
                                    <q-btn @click="done2 = true; step = 3" color="primary" label="Vazhdo" />
                                    <q-btn flat @click="step = 1" color="primary" label="Mbrapa" class="q-ml-sm" />
                                    </q-stepper-navigation>
                                </q-step>

                                <q-step
                                    :name="3"
                                    title="Fotot"
                                    icon="create_new_folder"
                                    :done="step > 2"
                                    :header-nav="step > 2"
                                >
                                    <q-uploader
                                    style="max-width: 300px"
                                    :factory="factoryFn"
                                    label="Numri maksimal: 3"
                                    max-files="3"
                                    ref="uploadermain"
                                    multiple
                                    @rejected="onRejected"
                                    />

                                    <q-stepper-navigation>
                                    <q-btn @click="createproduct" color="primary" label="Krijo" />
                                    <q-btn flat @click="step = 2" color="primary" label="Mbrapa" class="q-ml-sm" />
                                    </q-stepper-navigation>
                                </q-step>

                            </q-stepper>
                        </div>
                        
                    </div>
                </q-tab-panel>
                <q-tab-panel name="sherbim" class="bg-primary">
                    <div class="fullwidth innerdope q-mt-lg">
                        <div class="width90 innerpeace">
                            <q-stepper
                                v-model="step2"
                                header-nav
                                ref="stepper"
                                color="primary"
                                animated
                            >
                                <q-step
                                    :name="1"
                                    title="Info"
                                    icon="settings"
                                    :done="step2 > 1"
                                    :header-nav="step2 > 1"
                                >
                                    <q-input standout="text-white" bg-color="grey-6" class="text-white q-mb-lg" color="grey-5" v-model="product.name" label="Emri i produktit/sherbimit" :dense="true" />
                                    <q-input standout="text-white" bg-color="grey-6" class="text-white q-mb-md" v-model="product.price" label="Cmimi - (Opsional)" :dense="true" type="number" hint="Cdo cmime eshte ne leke." />
                                    
                                    <q-stepper-navigation>
                                    <q-btn @click="() => { done1 = true; step2 = 2 }" color="primary" label="Vazhdo" />
                                    </q-stepper-navigation>
                                </q-step>

                                <q-step
                                    :name="2"
                                    title="Fotot"
                                    icon="create_new_folder"
                                    :done="step2 > 2"
                                    :header-nav="step2 > 2"
                                >
                                    <q-uploader
                                    style="max-width: 300px"
                                    url="http://127.0.0.1:5000/upload"
                                    label="Numri maksimal i fotove (3)"
                                    max-files="3"
                                    @rejected="onRejected"
                                    />

                                    <q-stepper-navigation>
                                    <q-btn @click="() => { done2 = true; step2 = 3}" color="primary" label="Krijo" />
                                    <q-btn flat @click="step2 = 1" color="primary" label="Mbrapa" class="q-ml-sm" />
                                    </q-stepper-navigation>
                                </q-step>

                                <q-step
                                    :name="3"
                                    title="Filtrat"
                                    icon="create_new_folder"
                                    :done="step2 > 2"
                                    :header-nav="step2 > 2"
                                >
                                    vendos filtrat

                                    <q-stepper-navigation>
                                    <q-btn @click="deliver" color="primary" label="Krijo" />
                                    <q-btn flat @click="step2 = 2" color="primary" label="Mbrapa" class="q-ml-sm" />
                                    </q-stepper-navigation>
                                </q-step>
                            </q-stepper>
                        </div>
                        
                    </div>
                </q-tab-panel>

            </q-tab-panels>
          
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="successP">
      <q-card>
        <q-card-section>
          <div class="text-h6">Sukses ne krijim</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Produkti juaj eshte krijuar dhe eshte shtuar ne kategorine tuaj te zgjedhur.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="successChange">
      <q-card>
        <q-card-section>
          <div class="text-h6">Ndryshimi u krye</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Te dhenat tuaja te reja jane ndermarre dhe mund te shihen.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { getAuth, signOut} from "firebase/auth";
import { useQuasar } from 'quasar'
import { Geolocation } from '@capacitor/geolocation'
import { GoogleMap } from '@capacitor/google-maps';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, numeric } from '@vuelidate/validators'
import { uid } from 'quasar'

export default defineComponent({
  name: 'DesignExpandable',
  validations () {
    return {
      category: { required }, // Matches this.firstName
      subcategory: { required }, // Matches this.lastName
      product: {
        name: { required }, // Matches this.contact.email
        price: { numeric }
      },
      data: {
        name: {required, minLength: minLength(3)}
      },
      nr_njerez: {numeric},
      nr_femij: {numeric},

    }
  },
  methods: {
    goto(route){
      this.$router.push('directmsg')
    },
    async logout() {
      //const auth = getAuth();
      await firebase.auth().signOut();
      this.$router.push('/login')
        .then(() => {
        this.$q.notify({message: 'Sign Out i suksesshem.', type: 'positive'})
        this.$q.localStorage.remove('account')
        this.$q.localStorage.remove('credentials')
        // window.location.reload();
      })
      .catch(error =>  console.log('error',error))
    },
    autoget(){
      Geolocation.getCurrentPosition().then(newPosition => {
          console.log('Current', newPosition)
          this.data.location = newPosition
      })
    },
    onRejected (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    },
    factoryFn (files) {
      // returning a Promise
      files.forEach(element => {
        this.product.photoNames.push(element.name)
      });
      console.log("Files")
      console.log(this.product.photoNames)
      return new Promise((resolve) => {
        // simulating a delay of 2 seconds
        setTimeout(() => {
          resolve({
            url: 'http://localhost:5000/upload'
          })
        }, 2000)
      })
    },
    async createMap () {
        
        
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
              lat: 33.6,
              lng: -117.9,
              },
              zoom: 8, // The initial zoom level to be rendered by the map
          },
          });

          this.map = newMap;
          this.map.addMarker({
            coordinate:{
                  lat: this.data.location.latitude,
                  lng: this.data.location.longitude
              },
              title: "Pozicioni jote"
          })
          console.log("Map")
          console.log(this.map)
        },1000)
    },
    async listener(){
      await this.createMap()
      setTimeout(async ()=>{
        await this.map.setOnMapClickListener(async (data) => {
          if (this.marker != null){
            await this.map.removeMarker(this.marker)
          }
          this.marker = await this.map.addMarker({
              coordinate:{
                  lat: data.latitude,
                  lng: data.longitude
              },
              title: "Pozicioni jote"
          })
          this.coord.lat = data.latitude
          this.coord.lng = data.longitude
        })
      },1100)
    },
    async destroymap(){
      this.map.destroy()
      this.map = null
      this.marker = null
    },
    async createproduct(){
      // Check forms
      await this.v$.$touch()
      const result = await this.v$.$validate()
      console.log(result)
      if (!result) {
        
        this.$q.notify({
          message: 'Te dhenat jane plotesuar gabim.',
          type: 'negative',
          position: 'top'
        })
        return
      }

      //Deliver photos
      this.$refs.uploadermain.upload()

      // 
      await firebase.firestore().collection("products").doc(this.product.name).set({
        uuid: uid(),
        name: this.product.name,
        price: this.product.price,
        owner: this.data.email,
        ownerName: this.data.name,
        photoNames: this.product.photoNames,
        createdAt: Date.now(),
        category: this.category,
        subcategory: this.subcategory,
        qytet: this.qytet,
        publik: this.publik,
        privat: this.privat,
        marka: this.marka,
        marka_car: this.marka_car,
        karburat_car: this.karburat_car,
        kambio_car: this.kambio_car,
        cmimi_car: this.cmimi_car,
        vitimin_car: this.vitimin_car,
        ngjyra_car: this.ngjyra_car,
        zona: this.zona,
        struktura: this.struktura,
        siperfaqe: this.siperfaqe,
        cmimi_min: this.cmimi_min,
        cmimi_max: this.cmimi_max,
        kati_min: this.kati_min,
        kati_max: this.kati_max,
        nr_njerez: this.nr_njerez,
        nr_femij: this.nr_femij,
        kontinent: this.kontinent,
        shteti: this.shteti,
        profesioni: this.profesioni,
        contract: this.contract,
      })
      this.newproduct = false
      this.successP = true
    },
    async changeData(){
      await this.v$.data.name.$touch()
      const result = await this.v$.data.name.$validate()
      console.log(result)
      if (!result) {
        
        this.$q.notify({
          message: 'Te dhenat jane plotesuar gabim.',
          type: 'negative',
          position: 'top'
        })
        return
      }
      await firebase.firestore().collection('accounts').doc(this.data.email).update({
        name: this.data.name,
        location: new firebase.firestore.GeoPoint(this.coord.lat, this.coord.lng)
      })
      this.successChange = true
    }
  },
  computed: {
    checker(){
      if((this.category == 'argetim dhe shplodhje' || this.category == 'arti' || this.category == 'banka dhe exchange' || this.category == 'institucione fetare' || this.category == 'institucione fetare' || this.category == 'institucione shteterore' || this.category == 'libri dhe kancelari' || this.category == 'markete dhe tregje' || this.category == 'profesionet e lira' || this.category == 'qendra tregetare' || this.category == 'shendetesia' || this.category == 'sociale' || this.category == 'sporte' || this.category == 'teknologji' || this.category == 'turizem kulture' || this.category == 'udhetime' || this.category == 'blegtori bujqesi') && (this.subcategory != null || this.subcategory == 'dogana' || this.subcategory == 'kontroli fizik I automjeteve' || this.subcategory == 'parkim' || this.subcategory == 'pjese te perdorura' || this.subcategory == 'servise' || this.subcategory == 'referenca' || this.subcategory == 'bar' || this.subcategory == 'restorante')){
        return true
      } 
      else{
        return false
      }
      
    },
    checker2(){
      if((this.category == "arsimi" && this.subcategory != null)){return true}else{
        return false
      }
    },
    checker3(){
      if((this.subcategory == "distributor dhe koncesionar")){return true}else{
        return false
      }
    },
    checker4(){
      if((this.subcategory == "shes blej makina")){return true}else{
        return false
      }
    },
    checker5(){
      if(this.subcategory == "jep-merr me qera" ||this.subcategory == "shes-blej"){return true}else{
        return false
      }
    },
    checker6(){
      if(this.subcategory == "hotele"){return true}else{
        return false
      }
    },
    checker7(){
      if(this.subcategory == "njoftime pune"){return true}else{
        return false
      }
    },
    nameError(){
      if(this.v$.product.name.$error){
        return true
      }
    },
    catError(){
      if(this.v$.category.$error){
        return true
      }
    },
    scError(){
      if(this.v$.subcategory.$error){
        return true
      }
    },
    priceError(){
      if(this.v$.product.price.$error){
        return true
      }
    },
    nrpError(){
      if(this.v$.nr_njerez.$error){
        return true
      }
    },
    nrcError(){
      if(this.v$.nr_femij.$error){
        return true
      }
    },
  },
  data(){
    const $q = useQuasar();
    return{
      successChange: false,
      wait: true,
      v$: useVuelidate(),
      data: {
        name: null,
        type: 'normal',
        email: null,
        location: null,
        password: null,
        joined: Date.now(),
        sales: 0,
        wantsToBe: null,
        photo: null
      },
      coord: {
        lat: null,
        lng: null
      },
      product: {
        uuid: null,
        name: null,
        price: 0,
        owner: null,
        ownerName: null,
        photoNames: [],
        joined: Date.now(),
        sales: 0,
        createdAt: null
      },
      $q,
      blerje: false,
      profile: false,
      profileP: false,
      newproduct: false,
      tab: ref('produkt'),
      tabprofile: ref('data'),
      step: ref(1),
      step2: ref(1),
      map: ref(null),
      marker: ref(null),
      mapDivRef: ref(null),
      mapel: null,
      category: null,
      subcategory: null,
      qytet: null,
      publik: false,
      privat: false,
      marka: null,
      marka_car: null,
      karburat_car: null,
      kambio_car: null,
      cmimi_car: null,
      vitimin_car: null,
      ngjyra_car: null,
      zona: null,
      struktura: null,
      siperfaqe: null,
      cmimi_min: null,
      cmimi_max: null,
      kati_min: null,
      kati_max: null,
      nr_njerez: null,
      nr_femij: null,
      kontinent: null,
      shteti: null,
      profesioni: null,
      contract: null,
      options: ['argetim dhe shplodhje', 'arsimi', 'arti', 'auto', 'banka dhe exchange', 'imobiliare', 'hoteleri-turizem', 'diaspora', 'punesimi', 'institucione fetare', 'institucione shteterore', 'libri dhe kancelari', 'markete dhe tregje', 'profesionet e lira', 'qendra tregetare', 'shendetesia', 'sociale ', 'sporte', 'teknologji', 'turizem kulture', 'udhetime', 'blegtori bujqesi'],
      argetim_opt: ['jeta e nates', 'kende lojrash', 'kinema', 'parqe', 'sheshe', 'teatro', 'arsimi'],
      arsimi_opt: ['arsimi 9-vjecar', 'arsimi I larte', 'arsimi I mesem', 'arsimi parashkollor', 'cerdhe', 'dekanat', 'institucione arsimore', 'arti'],
      arti_opt: ['kercim-balet', 'muzike', 'pikture', 'auto'],
      auto_opt: ['distributor dhe koncesionar', 'dogana', 'kontroli fizik I automjeteve', 'parkim', 'pjese te perdorura', 'servise', 'shes blej makina', 'banka dhe exchange'],
      banka_opt: ['banka', 'bankomat atm', 'exchange', 'kompani sigurimesh', 'imobiliare'],
      imo_opt: ['jep-merr me qera', 'shes-blej', 'referenca', 'hoteleri,turizem'],
      hot_opt: ['bar', 'hotele', 'restorante', 'diaspora'],
      dia_opt: ['afrika', 'azia', 'amerika jugut', 'amerika veriut', 'europa', 'australia', 'histori suksesi', 'punesimi'],
      pun_opt: ['njoftime pune', 'institucione fetare '],
      fet_opt: ['komuniteti bektashian', 'komuniteti musliman', 'komuniteti katolike', 'komuniteti ortodokse', 'institucione shteterore'],
      sht_opt: ['gjyqesori', 'pushteti qendror', 'pushteti vendor', 'libri dhe kancelari'],
      lib_opt: ['autor', 'librari', 'biblioteke', 'kancelari', 'markete dhe tregje'],
      mar_opt: ['markete  ', 'treg industrial', 'treg agroushqimor', 'furra buke', 'profesionet e lira'],
      pro_opt: ['avokate', 'designer', 'elektricist', 'hidraulik', 'marangoz', 'notere', 'parukeri', 'qendra tregetare'],
      qen_opt: ['qendra tregetare', 'shendetesia'],
      shen_opt: ['klinik', 'poliklinik', 'urgjence', 'spitale', 'farmaci', 'sociale '],
      soc_opt: ['shoqata humanitare', 'shtepia e femijes', 'projekte humanitare', 'projekte zhvellimore', 'sporte'],
      spo_opt: ['impiante sportive', 'palestra', 'qendra stervitore', 'ekipe elitare', 'ekipe zinxhire', 'teknologji'],
      tek_opt: ['dyqane servise', 'market shitblerje', 'telekomunikacion', 'risi', 'turizem kulture'],
      tur_opt: ['arkeologji', 'institucone mbeshtetese', 'turizem bregdetar', 'udhetime'],
      udh_opt: ['porte', 'aeroporte', 'agjensi udhetimi', 'stacione', 'terminale', 'blegtori bujqesi'],
      bleg_opt: ['blegtori', 'bujqesi ', 'pika grumbullimi '],
      options_marka: ["mercedes-benz","volkswagen","audi","fiat","volvo","ford","iveco","kia","toyota","nisan","porche","range rover","hummer","ferrari","lamborgini","bugatti","BMW"],
      karb_opt: ["benzine", "diesel", "gas"],
      kambio_opt: ["automat", "manual"],
      cmimi_opt: ["euro", "lek"],
      vit_opt: ["2005-2010", "2010-2015", "2015-2020", "2020 e lart"],
      str_opt: ["garsoniere","1+1","2+1","3+1","komercial","zyra","troje"],
      sip_opt: ["0-50 m2","50-100 m2","mbi 100 m2"],
      con_opt: ["part-time", "full-time"],
      successP: false

    }
  },
  beforeMount(){
    
    setTimeout(() => {
      // find data in localstorage 
      this.data = this.$q.localStorage.getItem('account');
      this.coord.lat = this.data.location.latitude
      this.coord.lng = this.data.location.longitude
      this.wait = false
    }, 1000);
  },
  mounted(){
    this.mapel = document.getElementById('map');
    
  }
})
</script>,
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
#saleschart{
  border-radius: 20px;
  width: 100%;
  padding: 15px;
}
.product{
  border-radius: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.innerdope{
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.innerpeace{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
}
.juicer{

}
#mapDivRef{
  width: 100vw;
  height: 70vh;
  
}
@media only screen and (min-width: 1100px) {
  
  .hooper{
    width: 30%
  }
  .main{
    width: 60%;
    
  }
  
}
</style>