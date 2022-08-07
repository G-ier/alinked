<template>
  <q-page class="flex flex-center animated-fade">
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
        <q-space/>
        <q-btn color="primary" flat label="Sign out" @click="logout"/>
      </div>
      <div class="width90 columny">
        <q-btn flat label="Blerjet tuaja" @click="blerje=true"/>
        <q-btn flat label="Te dhenat e ofilit" @click="profile=true"/>
      </div>pr
    </div>
    <div class="main" v-if="data.type == 'seller' && wait==false">
      <div class="row width90 q-mb-lg">
        <h5 class="text-h5 popreg">Dashboard</h5>
        <q-space/>
        <q-btn color="primary" flat label="Sign out" @click="logout"/>
      </div>
      <div class="width90 row">
        <div id="saleschart" class="row main-blue-bg">
          <p class="popreg text-white text-h5">Sales</p>
          <q-space/>
          <p class="popreg text-white text-h5">{{data.sales}}</p>
        </div>
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
      <div class="width90 columny">
        <q-btn flat label="Te dhenat e profilit" @click="profileP=true"/>
      </div>
    </div>
    <div class="main" v-if="data.type == 'institution' && wait==false">
      <q-banner dense inline-actions class="text-white bg-red" v-if="(data.wantsToBe == 'institution' || data.wantsToBe == 'seller') && data.type == 'normal'">
        Llogaria juaj po vertetohet. Sapo te kryhet vertetimi do te perfitoni akses te plote.
        
      </q-banner>
      <div class="row width90 items-center q-mb-lg">
        <h5 class="text-h5 popreg">Dashboard</h5>
        <q-space/>
        <q-icon name="settings" size="sm" class="q-mr-lg" @click="profileP=true"/>
        <q-icon name="logout" size="sm" @click="logout"/>
      </div>
      <div class="width90 row">
        <div id="saleschart" class="row main-blue-bg">
          <p class="popreg text-white text-h5">Sales</p>
          <q-space/>
          <p class="popreg text-white text-h5">{{data.sales}}</p>
        </div>
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
      v-model="blerje"
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
          <div class="text-h6">Blerjet tuaja</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="width90 columny">
            <q-list bordered separator>
              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label overline>Blerja 1</q-item-label>
                  <q-item-label>Data</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label overline>Blerja 2</q-item-label>
                  <q-item-label>Data</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="profile"
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
          <div class="text-h6">Ndryshoni te dhenat tuaja</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="width90 columny">
            <q-input class="q-mb-lg fullwidth" standout="bg-white text-grey" color="white" v-model="data.name" label="Emri" />
            <q-input class="q-mb-lg fullwidth" standout="bg-white text-grey" v-model="data.email" label="Email" />
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
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Ndryshoni te dhenat tuaja</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="width90 columny">
            <q-input class="q-mb-lg fullwidth" standout="text-grey-5" color="grey-5" bg-color="white" v-model="data.name" label="Emri" />
            <q-input class="q-mb-lg fullwidth" standout="text-grey-5" color="grey-5" bg-color="white" v-model="data.email" label="Email" />
            <div class="fullwidth row">
              <p class="text-p popreg text-white q-pa-none q-ma-none">Lokacioni - </p>
              <q-space/>
              <q-btn flat color="white" dense no-caps label="Percakto aktualin" @click="autoget"/>
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
          <div class="text-h6">Produkt ose sherbim i ri</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="width90 columny">
            <q-input standout="text-grey" bg-color="white" class="q-mb-lg" color="grey-5" co v-model="product.name" label="Emri i produktit/sherbimit" :dense="true" />
            <q-input standout="text-grey" bg-color="white" class="q-mb-md" v-model="product.price" label="Cmimi - (Opsional)" :dense="true" type="number" hint="Cdo cmime eshte ne leke." />
            <q-input standout="text-grey" bg-color="white" class="q-mb-lg" v-model="product.contact" label="Kontakt specifik - (Opsional)" :dense="true" />
            <q-uploader
              style="max-width: 300px"
              url="http://localhost:4444/upload"
              label="Numri maksimal i fotove (3)"
              multiple
              max-files="3"
              @rejected="onRejected"
            />
            
          </div>
        </q-card-section>
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
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default defineComponent({
  name: 'DashboardPage',
  methods: {
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
    }
  },
  data(){
    const $q = useQuasar();
    return{
      wait: true,
      data: {
        name: null,
        type: 'normal',
        email: null,
        location: null,
        password: null,
        joined: Date.now(),
        sales: 0
      },
      product: {
        uuid: null,
        name: null,
        price: 0,
        owner: null,
        ownerName: null,
        photoUrl: null,
        joined: Date.now(),
        sales: 0,
        createdAt: null,
        contact: null
      },
      $q,
      blerje: false,
      profile: false,
      profileP: false,
      newproduct: false
    }
  },
  beforeMount(){
  
    setTimeout(() => {
      // find data in localstorage 
      this.data = this.$q.localStorage.getItem('account');
      this.wait = false
    }, 2000);
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
</style>