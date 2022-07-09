<template>
  <div class="main">
    <div class="imagerow">
      <q-img
          :src="image"
          fit="contain"
          width="40%"
        />
    </div>
    <q-btn unelevated rounded color="primary" label="Institucione shteterore" style="margin-top: 30px"><q-icon name="search" style="padding-left: 10px" /></q-btn>
    <div class="opt">
        <div class="opt-sin bg-blue-4" v-ripple.center:white>
            <q-icon name="style" size="sm" color="white"/>
            <div class="underage">
                <p class="text-h6 text-white" style="padding: 0; margin: 0;">Pushteti qendror</p>
            </div>
        </div>
        <div class="opt-sin bg-blue-4" v-ripple.center:white>
            <q-icon name="style" size="sm" color="white"/>
            <div class="underage">
                <p class="text-h6 text-white" style="padding: 0; margin: 0;">Pushteti vendor</p>
            </div>
        </div>
        <div class="opt-sin bg-blue-4" v-ripple.center:white>
            <q-icon name="style" size="sm" color="white" />
            <div class="underage">
                <p class="text-h6 text-white" style="padding: 0; margin: 0;">Gjyqesori</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Image from '../assets/courthouse.png'
export default {
  setup(){
    const image = Image
    return {
      image,
    }
  }
}
</script>

<style scoped>
.main{
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.imagerow{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
}
.opt{
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.opt-sin{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  padding: 17px 15px 17px 15px;
  border-radius: 13px;
  margin-top: 15px;
  position: relative;
}
.underage{
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>