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
                <q-tab class="text-primary" name="client" icon="shopping_cart" label="Klient" />
                <q-tab class="text-primary" name="seller" icon="store" label="Shites" />
            </q-tabs>
        </div>
        <div class="fr2 q-mb-md animated-fade" v-if="tab=='client'">
            <q-input class="q-my-lg fullwidth" standout="bg-grey text-white" v-model="username" label="Username"/>
            <q-input class="q-mb-lg fullwidth" standout="bg-grey text-white" v-model="email" label="Email" />
            <q-input class="q-mb-lg fullwidth" standout="bg-grey text-white" v-model="pass" label="Password" />
        </div>
        <div class="fr2 q-mb-md animated-fade" v-if="tab=='seller'">
            <q-input class="q-my-lg fullwidth" standout="bg-grey text-white" v-model="username" label="Username" />
            <q-input class="q-mb-lg fullwidth" standout="bg-grey text-white" v-model="email" label="Email" />
            <q-input class="q-mb-lg fullwidth" standout="bg-grey text-white" v-model="password" type="password" label="Password" />
            <div class="q-mb-lg">
                <p class="text-p popreg text-grey">Lokacioni - Percillni vendndodhjen e dyqanit tuaj</p>
                <div class="fullwidth row justify-between">
                    <q-btn flat color="primary" dense label="Automatikisht" @click="autoget"/>
                    <q-btn flat color="primary" dense label="Manualisht" />
                </div>
            </div>
        </div>
        <div class="fr2">
            <q-btn color="primary" label="Regjistrohu" @click="register" :loading="btnload"/>
            

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
        tab: ref('client'),
        username: "",
        email: "",
        password: "",
        wrong: false,
        poswrong: false,
        btnload: false
    }
  },
  validations () {
    return {
      username: { required,minLength:minLength(3) }, // Matches this.firstName
      email: { required,email }, // Matches this.lastName
      password: {required}
    }
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
        const result = await this.v$.$validate()
        if (!result) {
            // notify user form is invalid
            this.wrong = true
            return
        }
        this.btnload = true;
        try{
            await firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(async () =>{
                const user = firebase.auth().currentUser;
                // send the signed in user a verification email
                user.sendEmailVerification();
            })
            const data = {
                "name": this.username,
                "password": this.password,
                "email": this.email,
                "sales": 0,
                "type": "normal",
                "joined": Date.now(),
                "location": this.position.toString()
            }
            await firebase.firestore().collection("accounts").doc(this.email).set(data)
            this.$q.localStorage.set("account", data)
        } catch(e){
            this.btnload = false;
            this.internalerror = true;
        }
        this.confirm = true;
        this.btnload = false;
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
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.spacer{
    height: 100px;
}
</style>