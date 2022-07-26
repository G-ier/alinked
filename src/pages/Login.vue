<template>
  <q-page class="flex animated-fade">
    <div class="main">
        <div class="fr1 q-py-xl">
            <h4 class="text-h4 popreg main-blue q-pa-none q-ma-none" >Logohu ne platformen tone.</h4>
        </div>
        <div class="fr2 q-mb-md">
            <q-input class="q-mb-lg fullwidth" standout="bg-grey text-white" v-model="email" label="Email" />
            <q-input class="q-mb-lg fullwidth" standout="bg-grey text-white" v-model="password" label="Password" type="password" />
        </div>
        <div class="fr2">

            <q-btn color="primary" label="Login" @click="signInExistingUser(email,password)"/>
            
            <q-btn flat label="Harrove passwordin?" no-caps class="q-mt-md" @click="forgot=true"/>

            <q-btn flat label="Perdorues i ri?" no-caps class="" to="register"/>
        </div>
    </div>
    <q-dialog v-model="forgot" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Ndrysho passwordin nepermjet Email</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="forgotemail" autofocus @keyup.enter="prompt = false" label="Jepni Email tuaj ketu" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Dergo" v-close-popup @click="resetPassword(forgotemail)"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, getRedirectResult} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { useQuasar } from 'quasar'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export default defineComponent({
  name: 'LoginPage',
  setup(){
    const $q = useQuasar()
    return{
        forgot: ref(false),
        email: ref(null),
        password: ref(null),
        async signInExistingUser (email, password) {
          const auth = getAuth();
          signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
              try {
                $q.localStorage.set("credentials", userCredential)
                //let db = getFirestore();
                console.log(userCredential.user.email)
                const data = await firebase.firestore().collection("accounts").doc(userCredential.user.email).get()
                const data2 = data.data()
                
                //console.log(data2)
                $q.localStorage.set("account", data2)
              } catch (e) {
                // data wasn't successfully saved due to
                // a Web Storage API error
                console.log(e);
              }
              this.$q.notify({message: 'Mireseerdhet!', type: 'positive'})
              this.$router.push('/dashboard')
            })
            .catch(error => { console.log(error)})
        }
    }
    
  },
  data(){
    return{
      forgotemail: ref(null)
    }
  },
  methods: {
    resetPassword () {
      const auth = getAuth();
      sendPasswordResetEmail(auth, this.forgotemail)
        .then(() => {
          this.forgotemail = ""
          this.$q.notify({message: 'Kontrolloni email dhe ndiqni linkun e posacem.', type: 'info'})
        })
        .catch(error => console.log(error))
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
</style>