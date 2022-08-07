<template>
  <q-page class="flex animated-fade">
    <div class="main">
        <div class="fr1 q-py-xl">
            <h4 class="text-h4 popreg main-blue q-pa-none q-ma-none" >Forma e regjistrimit</h4>
        </div>
        <div class="fr2 q-mb-md">
            <q-tabs
                v-model="tab"
                narrow-indicator
                dense
                align="justify"
            >
                <q-tab class="text-primary" name="normal" icon="shopping_cart" label="Perdorues" />
                <q-tab class="text-primary" name="seller" icon="store" label="Biznes" />
                <q-tab class="text-primary" name="institution" icon="assured_workload" label="Institucion" />
            </q-tabs>
        </div>
        <div class="fr2 q-mb-md animated-fade" v-if="tab=='normal'">
            <q-input class="q-my-lg fullwidth" standout="bg-grey text-white" v-model="username" error-message="Korigjoni fushen" :error="nameError" label="Username"/>
            <q-input class="q-mb-lg fullwidth" standout="bg-grey text-white" v-model="email" error-message="Korigjoni fushen" :error="emailError" label="Email" />
            <q-input class="q-mb-lg fullwidth" standout="bg-grey text-white" v-model="pass" error-message="Korigjoni fushen" :error="passError" label="Password" />
        </div>
        <div class="fr2 q-mb-md animated-fade" v-if="tab=='seller'">
            <q-stepper
            v-model="steperi"
            ref="stepperi"
            color="primary"
            animated
          >
            <q-step
                :name="1"
                icon="settings"
                :done="steperi > 1"
              >
                <q-input class="q-my-lg fullwidth" standout="bg-grey text-white" v-model="username" error-message="Korigjoni fushen" :error="nameError" label="Emri zyrtar" />
                <q-input class="q-mb-lg fullwidth" standout="bg-grey text-white" v-model="email" error-message="Korigjoni fushen" :error="emailError" label="Email" />
                <q-input class="q-mb-lg fullwidth" standout="bg-grey text-white" v-model="password" error-message="Korigjoni fushen" :error="passError" type="password" label="Password" />
              </q-step>

              <q-step
                :name="2"

                icon="create_new_folder"
                :done="steperi > 2"
              >
                <q-tree
                  :nodes="simple"
                  node-key="label"
                  selected-color="primary"
                  v-model:selected="selected"
                  accordion
                  no-connectors
                />
              </q-step>

              <q-step
                :name="3"

                icon="pin_drop"
                :done="steperi > 3"
              >
                <div class="q-mb-lg fullwidth">
                    <p class="text-black">Detaje plotesuese</p>
                    <q-input class="q-mb-lg fullwidth" standout="bg-grey text-white" v-model="qyteti" label="Qyteti" hint="Opsionale" />
                    <q-checkbox v-model="privat" label="Biznes Privat" hint="Opsionale"/>
                    <q-checkbox v-model="publik" label="Biznes Publik" hint="Opsionale"/>
                    <q-input class="q-mb-lg fullwidth" standout="bg-grey text-white" v-model="marka"  label="Makra" hint="Opsionale" />
                </div>
              </q-step>

              <q-step
                :name="4"

                icon="pin_drop"
                :done="steperi > 4"
              >
                <div class="q-mb-lg fullwidth">
                    <div class="row fullwidth"><p class="text-p popreg text-grey q-ml-xs">Lokacioni juaj ekzakt</p></div>
                    <div class="fullwidth row justify-between">
                        <q-space/>
                        <q-btn flat color="primary" dense label="Perzgjidh ne harte" @click="openmap"/>
                        <q-space/>
                    </div>
                </div>
              </q-step>

              

              <template v-slot:navigation>
                <q-stepper-navigation>
                  <q-btn @click="$refs.stepperi.next()" color="primary" label="Vazhdo" v-if="steperi < 4" />
                  <q-btn @click="register" color="primary" label="Mbaro" v-if="steperi == 4" />
                  <q-btn v-if="steperi > 1" flat color="primary" @click="$refs.stepperi.previous()" label="Back" class="q-ml-sm" />
                </q-stepper-navigation>
              </template>
            </q-stepper>
        </div>
        <div class="fr2 q-mb-md animated-fade" v-if="tab=='institution'">
          <q-stepper
            v-model="steper"
            ref="stepper"
            color="primary"
            animated
          >
            <q-step
                :name="1"
                icon="settings"
                :done="steper > 1"
              >
                <q-input class="q-my-lg fullwidth" standout="bg-grey text-white" v-model="username" error-message="Korigjoni fushen" :error="nameError" label="Emri zyrtar" />
                <q-input class="q-mb-lg fullwidth" standout="bg-grey text-white" v-model="email" error-message="Korigjoni fushen" :error="emailError" label="Email" />
                <q-input class="q-mb-lg fullwidth" standout="bg-grey text-white" v-model="password" error-message="Korigjoni fushen" :error="passError" type="password" label="Password" />
              </q-step>

              <q-step
                :name="2"

                icon="create_new_folder"
                :done="steper > 2"
              >
                <q-tree
                  :nodes="simple"
                  node-key="label"
                  selected-color="primary"
                  v-model:selected="selected"
                  accordion
                  no-connectors
                />
              </q-step>

              <q-step
                :name="3"

                icon="pin_drop"
                :done="steper > 3"
              >
                <div class="q-mb-lg fullwidth">
                    <p class="text-black">Detaje plotesuese</p>
                    <q-input class="q-mb-lg fullwidth" filled v-model="qyteti" label="Qyteti" dense hint="Opsionale" />
                    <q-checkbox v-model="privat" label="Institucion Privat" hint="Opsionale"/>
                    <q-checkbox v-model="publik" label="Institucion Publik" hint="Opsionale"/>
                    <q-input class="q-mb-lg fullwidth" filled v-model="marka"  label="Makra" dense hint="Opsionale" />
                </div>
              </q-step>

              <q-step
                :name="4"

                icon="pin_drop"
                :done="steper > 4"
              >
                <div class="q-mb-lg fullwidth">
                    <div class="row fullwidth"><p class="text-p popreg text-grey q-ml-xs">Lokacioni juaj ekzakt</p></div>
                    <div class="fullwidth row justify-between">
                        <q-space/>
                        <q-btn flat color="primary" dense label="Perzgjidh ne harte" @click="openmap"/>
                        <q-space/>
                    </div>
                </div>
              </q-step>

              

              <template v-slot:navigation>
                <q-stepper-navigation>
                  <q-btn @click="$refs.stepper.next()" color="primary" label="Vazhdo" v-if="steper < 4" />
                  <q-btn @click="register" color="primary" label="Mbaro" v-if="steper == 4" />
                  <q-btn v-if="steper > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                </q-stepper-navigation>
              </template>
            </q-stepper>
            
        </div>
        <div class="fr2">
            <q-btn color="primary" label="Regjistrohu" @click="register" :loading="btnload" v-if="tab == 'normal'"/>
            

            <q-btn flat label="Login" no-caps class="q-mt-md" to="login"/>
        </div>
    <div class="spacer"></div>
    </div>
    <q-dialog v-model="confirm">
      <q-card>
        <q-card-section>
          <div class="text-h6">Konfirmoni email</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Hapi i fundit ne regjistrimin tuaj tek ne eshte konfirmimi i emailit. Pasi ta keni perfunduar kete hap mund te logoheni nomalisht.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="wrong">
      <q-card>
        <q-card-section>
          <div class="text-h6">Te dhenat jane gabim</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            Ju lutem vendosni te dhenat sakte.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="wrong">
      <q-card>
        <q-card-section>
          <div class="text-h6">Gjeolokacioni nuk eshte percaktuar</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            Ju lutem percaktoni automatikisht lokacionin tuaj nepermjet butonit automatikisht.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="internalerror">
      <q-card>
        <q-card-section>
          <div class="text-h6">Internal Error</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            Kontaktoni adminin e faqes.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="mapSpace"
      full-height
      full-width
    >
      <div id="mapDivRef" ref="mapDivRef">
                    
      </div>
      
      <div id="over_map">
        <q-btn color="primary" class="width80" label="Select" disable v-if="markerinfo.coordinate.lat == 0 && markerinfo.coordinate.lng == 0"/>
        <q-btn color="primary" class="width80" label="Select" @click="mapSpace = false" v-else/>
      </div>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { onMounted, onBeforeUnmount } from 'vue'
import { Geolocation } from '@capacitor/geolocation'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { GoogleMap } from '@capacitor/google-maps';
import { uid } from 'quasar'

export default defineComponent({
  name: 'RegisterPage',
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  data(){
    return{
        pos: false,
        confirm: false,
        position: "e",
        tab: ref('normal'),
        username: "",
        email: "",
        password: "",
        wrong: false,
        poswrong: false,
        btnload: false,
        mapSpace: false,
        map: null,
        marker: null,
        markerinfo: {
          coordinate: {
            lat: 0,
            lng: 0
          },
          set: false
        },
        internalerror: false,
        steper: 1,
        steperi: 1,
        selected: null,
        simple: [
          { label: 'Zgjidh kategorine', selectable:false,
            children: 
              [{ label: 'argetim dhe shplodhje',  selectable: false,  children: [{ label: 'jeta e nates'}, { label: 'kende lojrash'}, { label: 'kinema'}, { label: 'parqe '}, { label: 'sheshe'}, { label: 'teatro'}]}, { label: 'arsimi',  selectable: false,  children: [{ label: 'arsimi 9-vjecar'}, { label: 'arsimi I larte'}, { label: 'arsimi I mesem'}, { label: 'arsimi parashkollor '}, { label: 'cerdhe '}, { label: 'dekanat'}, { label: 'institucione arsimore'}]}, { label: 'arti',  selectable: false,  children: [{ label: 'kercim-balet'}, { label: 'muzike'}, { label: 'pikture'}]}, { label: 'auto',  selectable: false,  children: [{ label: 'distributor dhe koncesionar'}, { label: 'dogana'}, { label: 'kontroli fizik I automjeteve '}, { label: 'parkim'}, { label: 'pjese te perdorura'}, { label: 'servise'}, { label: 'shes blej makina '}]}, { label: 'banka dhe exchange',  selectable: false,  children: [{ label: 'banka '}, { label: 'bankomat atm'}, { label: 'exchange'}, { label: 'kompani sigurimesh'}]}, { label: 'imobiliare',  selectable: false,  children: [{ label: 'jep-merr me qera'}, { label: 'shes-blej'}, { label: 'referenca'}]}, { label: 'hoteleri-turizem',  selectable: false,  children: [{ label: 'bar'}, { label: 'hotele '}, { label: 'restorante'}]}, { label: 'diaspora',  selectable: false,  children: [{ label: 'afrika '}, { label: 'azia'}, { label: 'amerika jugut'}, { label: 'amerika veriut'}, { label: 'europa'}, { label: 'australia'}, { label: 'histori suksesi'}]}, { label: 'punesimi',  selectable: false,  children: [{ label: 'njoftime pune'}]}, { label: 'institucione fetare',  selectable: false,  children: [{ label: 'komuniteti bektashian'}, { label: 'komuniteti musliman'}, { label: 'komuniteti katolike'}, { label: 'komuniteti ortodokse'}]}, { label: 'institucione shteterore',  selectable: false,  children: [{ label: 'gjyqesori'}, { label: 'pushteti qendror '}, { label: 'pushteti vendor'}]}, { label: 'libri dhe kancelari',  selectable: false,  children: [{ label: 'autor '}, { label: 'librari'}, { label: 'biblioteke'}, { label: 'kancelari'}]}, { label: 'markete dhe tregje',  selectable: false,  children: [{ label: 'markete  '}, { label: 'treg industrial'}, { label: 'treg agroushqimor'}, { label: 'furra buke'}]}, { label: 'profesionet e lira',  selectable: false,  children: [{ label: 'avokate'}, { label: 'designer'}, { label: 'elektricist'}, { label: 'hidraulik'}, { label: 'marangoz'}, { label: 'notere'}, { label: 'parukeri'}]}, { label: 'qendra tregetare',  selectable: false,  children: [{ label: 'qendra tregetare'}]}, { label: 'shendetesia',  selectable: false,  children: [{ label: 'klinik '}, { label: 'poliklinik'}, { label: 'urgjence'}, { label: 'spitale'}, { label: 'farmaci'}]}, { label: 'sociale ',  selectable: false,  children: [{ label: 'shoqata humanitare'}, { label: 'shtepia e femijes'}, { label: 'projekte humanitare'}, { label: 'projekte zhvellimore'}]}, { label: 'sporte',  selectable: false,  children: [{ label: 'impiante sportive'}, { label: 'palestra'}, { label: 'qendra stervitore'}, { label: 'ekipe elitare'}, { label: 'ekipe zinxhire'}]}, { label: 'teknologji',  selectable: false,  children: [{ label: 'dyqane servise'}, { label: 'market shitblerje'}, { label: 'telekomunikacion'}, { label: 'risi'}]}, { label: 'turizem kulture',  selectable: false,  children: [{ label: 'arkeologji'}, { label: 'institucone mbeshtetese'}, { label: 'turizem bregdetar '}]}, { label: 'udhetime',  selectable: false,  children: [{ label: 'porte'}, { label: 'aeroporte'}, { label: 'agjensi udhetimi '}, { label: 'stacione '}, { label: 'terminale'}]}, { label: 'blegtori bujqesi',  selectable: false,  children: [{ label: 'blegtori'}, { label: 'bujqesi'}]}]
          }
        ],
        qytet: null,
        makra: null,
        privat: false,
        publik: false
    }
  },
  validations () {
    return {
      username: { required,minLength:minLength(3) }, // Matches this.firstName
      email: { required,email }, // Matches this.lastName
      password: {required, minLength:minLength(5)}
    }
  },
  computed:{
    nameError(){
      if(this.v$.username.$error){
        return true
      }
    },
    passError(){
      if(this.v$.password.$error){
        return true
      }
    },
    emailError(){
      if(this.v$.email.$error){
        return true
      }
    },
  },
  methods: {
    autoget(){
        Geolocation.getCurrentPosition().then(newPosition => {
            console.log('Current', newPosition)
            this.position = newPosition
        })
        this.pos = true
    },
    async register(){
        await this.v$.$touch()
        const result = await this.v$.$validate()
        if (!result) {
            // notify user form is invalid
            this.$q.notify({
              message: 'Te dhenat jane plotesuar gabim.',
              type: 'negative',
              position: 'top'
            })
            return
        }
        if(this.markerinfo.set == false){
          this.$q.notify({
              message: 'Vendosni pozicionin tuaj gjeografik.',
              type: 'negative',
              position: 'top'
            })
        }
        this.btnload = true;
        try{
            await firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(async () =>{
                const user = firebase.auth().currentUser;
                // send the signed in user a verification email
                user.sendEmailVerification();
            })
            const uuid = uid()
            const data = {
                "name": this.username,
                "password": this.password,
                "email": this.email,
                "sales": 0,
                "type": "normal",
                "wantsToBe": this.tab,
                "joined": Date.now(),
                "location": new firebase.firestore.GeoPoint(this.markerinfo.coordinate.lat, this.markerinfo.coordinate.lng),
                "photo": null,
                "uuid": uuid
            }
            await firebase.firestore().collection("accounts").doc(this.email).set(data)
            if(this.wantsToBe == 'institution' ||this.wantsToBe == 'seller'){
              await firebase.firestore().collection("places").doc(this.product.name).set({
                uuid: uuid,
                name: this.username,
                kategoria: this.selected,
                photo: null,
                qyteti: this.qytet,
                marka: this.marka,
                privat: this.privat,
                publik: this.publik,
                location: new firebase.firestore.GeoPoint(this.markerinfo.coordinate.lat, this.markerinfo.coordinate.lng)
              })
            }
            this.$q.localStorage.set("account", data)
        } catch(e){
            this.btnload = false;
            this.internalerror = true;
            console.log(e)
        }
        this.confirm = true;
        this.btnload = false;
    },
    async createMap () {
        
        this.mapSpace = true
        
        setTimeout(async () => {
          const mapRef = document.getElementById('mapDivRef');
          
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
          console.log("Map")
          console.log(this.map)
        },1000)
    },
    async openmap(){
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
          }).then(() => {
            this.markerinfo.coordinate.lat = data.latitude
            this.markerinfo.coordinate.lng = data.longitude
            this.markerinfo.set = true
          })
          console.log(this.markerinfo.coordinate.lat)
        })
      },1100)
    }
  }
})
</script>
<style scoped>
.main{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.fr1{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.fr2{
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.spacer{
    height: 100px;
}
#over_map { position: absolute; top: 85%; left: 20%; z-index: 99; background-color: transparent; border: none; box-shadow: none;}
</style>