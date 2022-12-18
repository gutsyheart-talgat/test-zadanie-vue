<template>
    <div class="recomm">
        <H3>Рекомендации</H3>
        <div class="div">
            <input @input="updateText" class="text" type="text" placeholder="Текст рекомендации пациенту">
            <button class="plus" @click="updateRecomm"><strons>+</strons></button>
        </div>
        <div class="textarea">{{rec.text === '' ? "Рекомендации лечащего врача": rec.text}}</div>
        <div class="div">
            <div class="div">
                <img src="./calendar.svg" class="img">
                <P>{{new Date().toLocaleString()}}</P>
            </div>
            <div class="div">
                <img src="./doctor.svg" class="img">
                <P>Имя лечащего врача должность</P>
            </div>
        </div>
        <AddBtn @click="updateData">Сохранить назначения</AddBtn>
    </div>

</template>
<script>
import AddBtn from 'components/UI/AddBtn.vue'
import Dialog from 'components/UI/Dialog.vue'
import H3 from 'components/UI/H3.vue'
import P from 'components/UI/P.vue'
import { useStore } from 'src/stores/tz-store'
const store = useStore()
export default{
    components:{
        AddBtn,H3,P,Dialog
    },
    data(){
        return{
            text:'',
            rec:store.recommend
        }
    },
    methods:{
        updateText(event){
            this.text = event.target.value
        },
        updateRecomm(){
            store.setRec(this.text)
        },
        updateData(){
            store.setData()
        }
    }
}
</script>
<style scoped>
    @media(min-width:768px){
        .recomm{
            margin-top:30px;
        }
        .div{
            margin-top:10px;
            display:flex;
            grid-gap:10px;
        }
        .text{
            width:420px;
            height:25px;
            color:black;
            font-family:Roboto;
            font-size:12px;
            border:1px solid black;
            display:flex;
            align-items:center;
        }
        .plus{
            width:30px;
            height:25px;
            display:flex;
            justify-content:center;
            align-items:center;
            color:black;
            font-family:Roboto;
            font-size:15px;
            background:white;
            border:1px solid black;
        }
        .textarea{
            width:460px;
            height:75px;
            color:black;
            font-family:Roboto;
            font-size:12px;
            margin-top:10px;
            border:1px solid black;
        }
        .img{
            height: 15px;
        }
    }
    @media(min-width:1000px){
        .recomm{
            margin-top:30px;
        }
        .div{
            margin-top:15px;
            display:flex;
            grid-gap:15px;
        }
        .text{
            width:550px;
            height:50px;
            color:black;
            font-family:Roboto;
            font-size:22px;
            border:1px solid black;
            display:flex;
            align-items:center;
        }
        .plus{
            width:60px;
            height:50px;
            display:flex;
            justify-content:center;
            align-items:center;
            color:black;
            font-family:Roboto;
            font-size:30px;
            background:white;
            border:1px solid black;
        }
        .textarea{
            width:625px;
            height:200px;
            color:black;
            font-family:Roboto;
            font-size:22px;
            margin-top:20px;
            border:1px solid black;
        }
        .img{
            height: 20px;
        }
    }
    @media(min-width:1365px){
        .recomm{
            margin-top:60px;
        }
        .div{
            margin-top:30px;
            display:flex;
            grid-gap:30px;
        }
        .text{
            width:1040px;
            height:70px;
            color:black;
            font-family:Roboto;
            font-size:22px;
            border:1px solid black;
            display:flex;
            align-items:center;
        }
        .plus{
            width:80px;
            height:70px;
            display:flex;
            justify-content:center;
            align-items:center;
            color:black;
            font-family:Roboto;
            font-size:30px;
            background:white;
            border:1px solid black;
        }
        .textarea{
            width:1150px;
            height:200px;
            color:black;
            font-family:Roboto;
            font-size:22px;
            margin-top:30px;
            border:1px solid black;
        }
        .img{
            height: 30px;
        }
    }
    @media(min-width:2730px){
        .recomm{
            margin-top:120px;
        }
        .div{
            margin-top:60px;
            display:flex;
            grid-gap:60px;
        }
        .text{
            width:2100px;
            height:120px;
            color:black;
            font-family:Roboto;
            font-size:45px;
            border:1px solid black;
            display:flex;
            align-items:center;
        }
        .plus{
            width:150px;
            height:120px;
            display:flex;
            justify-content:center;
            align-items:center;
            color:black;
            font-family:Roboto;
            font-size:30px;
            background:white;
            border:1px solid black;
        }
        .textarea{
            width:2310px;
            height:380px;
            color:black;
            font-family:Roboto;
            font-size:45px;
            margin-top:60px;
            border:1px solid black;
        }
        .img{
            height: 50px;
        }
    }
</style>