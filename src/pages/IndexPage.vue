<template>
  <q-page >
    <div class="app">
      <h1 class="h1">Сеанс гемодиализа</h1>
      <Appointment/>
      <After/>
      <Treatment/>
      <Recommendation/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Appointment from "components/Appointment/Appointment";
import After from "components/After/After";
import Treatment from "components/Treatment/Treatment";
import Recommendation from "components/Recommendation/Recommendation"
export default defineComponent({
  name:"IndexPage",
  components:{
    Appointment,After,Treatment,Recommendation
  }
})
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  @media(min-width:768px){
    .app{
      padding: 25px 55px;
    }
    .h1{
      color:black;
      font-family:Roboto;
      font-size:15px;
    }
  }
  @media(min-width:1000px){
    .app{
      padding: 35px 65px;
    }
    .h1{
      color:black;
      font-family:Roboto;
      font-size:20px;
    }
  }
  @media(min-width:1365px){
    .app{
      padding: 65px 145px
    }
    .h1{
      color:black;
      font-family:Roboto;
      font-size:30px;
    }
  }
  @media(min-width:2100px){
    .app{
      padding: 140px 285px
    }
    .h1{
      color:black;
      font-family:Roboto;
      font-size:50px;
    }
  }
  p{
    margin: 0;
  }
  
</style>
