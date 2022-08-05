<template>
  <div class="main">

    <div class="headers">
        
            <q-bar class="rounded-borders">
                <div class="cursor-pointer non-selectable">
                    <q-btn dense flat label="Filtrat"  />
                    <q-menu>
                    <q-list dense style="min-width: 100px">
                        
                        <q-item clickable v-ripple v-for="filter in filters" :key="filter.name">
                        <q-item-section>{{filter.name}}</q-item-section>
                        <q-item-section side>
                            <q-icon name="keyboard_arrow_right" />
                        </q-item-section>

                        <q-menu anchor="top right" self="top left">
                            <q-list>
                            <q-item
                                v-for="n in filter.children"
                                :key="n.name"
                                dense
                                clickable
                                @click="n.state = !n.state"
                            >
                                <q-item-section>{{n.name}}</q-item-section>
                                <q-item-section side v-if="n.state == true">
                                    <q-icon size="xs" name="done" />
                                </q-item-section>
                            </q-item>
                            </q-list>
                        </q-menu>
                        </q-item>
                        
                    </q-list>
                    </q-menu>
                </div>
                <q-space />
                <q-btn dense flat label="Vendos"  />
                </q-bar>
    </div>

    <div class="prods">
        <p class="text-p q-pa-none q-ma-none">Rezultate per: {{title}}</p>
        <div class="lister items-start q-gutter-md">
            <div class="card" v-for="item in prods" :key="item.name">
                <q-card class="my-card">
                    <img src="https://cdn.quasar.dev/img/mountains.jpg">

                    <q-card-section>
                        <div class="text-h6">{{item.name}}</div>
                        <div class="text-p">Nga: {{item.autori}}</div>
                    </q-card-section>
                    <q-card-actions>
                        <q-btn color="primary">Kontakto</q-btn>
                        <q-space/>
                        <q-btn flat>Shiko</q-btn>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import Image from '../assets/doctors.jpg'
import Image2 from '../assets/books.jpg'
export default {
  props: {
    route: String,
    title: String
  },
  data(){
    return{
        filters: [
            {
                name: "Lokacioni",
                children: [
                    {
                        name: "Tirane",
                        state: false
                    }
                ]
            },
        ],
        prods: [
            {name: "parku", autori: "cunat"}
        ]
    }
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
</style>