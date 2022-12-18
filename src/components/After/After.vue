<template>
    <div class="after">
        <H3>Назначения после сеанса</H3>
        <div class="block">
            <P>Лекарственный препарат</P>
            <div class="div">
                <Div class="med">{{after.med === '' ? 'Спр. "Препараты"' : after.med}}</Div>
                <EnterBtn @click="showMed"/>
                <Dialog  v-model:content="Med" v-model:show="MedShow" @update="updateMed"/>
            </div>
        </div>
        <div class="block-div">
            <div>
                <P>Путь приема</P>
                <div class="div"><Div class="way" @click="showWay">{{after.way === '' ? 'Спр. "Путь приема"' : after.way}}</Div></div>
                <Dialog v-model:content="Way" v-model:show="WayShow" @update="updateWay"/>
            </div>
            <div>
                <P>Дозировка</P>
                <div class="div">
                    <Div class="doza">{{after.doza === '' ? 'Спр. "Дозы Препаратов"' : after.doza}}</Div>
                    <EnterBtn @click="showDoza"/>
                    <Dialog v-model:content="Doza" v-model:show="DozaShow" @update="updateDoza"/>
                </div>
            </div>
        </div>
        <div class="block">
            <P>Номера сеансов:</P>
            <div class="div">
                <button class="count" :value="1" :class="{'btn-checked': after.number.find(n=> n==1)}" @click="updateNum">1</button>
                <button class="count" :value="2" :class="{'btn-checked': after.number.find(n=> n==2)}" @click="updateNum" >2</button>
                <button class="count" :value="3" :class="{'btn-checked': after.number.find(n=> n==3)}" @click="updateNum" >3</button>
                <button class="count" :value="4" :class="{'btn-checked': after.number.find(n=> n==4)}" @click="updateNum" >4</button>
                <button class="count" :value="5" :class="{'btn-checked': after.number.find(n=> n==5)}" @click="updateNum">5</button>
                <button class="count" :value="6" :class="{'btn-checked': after.number.find(n=> n==6)}" @click="updateNum">6</button>
                <button class="count" :value="7" :class="{'btn-checked': after.number.find(n=> n==7)}" @click="updateNum">7</button>
            </div>
        </div>
        <div class="block-div">
            <div>
                <P>Начало приема</P>
                <div class="div">
                    <input type="date" class="calendar" @input="updateStart">
                </div>
            </div>
            <div>
                <P>Конец приема</P>
                <div class="div" style="align-items:center">
                    <input type="date" class="calendar" @input="updateEnd">
                    <P @click="kolvo">Количество сеансов:{{after.kolvo}}</P>
                </div>
            </div>
        </div>
        <AddBtn @click="setSeans">Сформировать</AddBtn>
        <div class="block">
            <P>Список назначений после сеанса</P>
            <table class="table">
                <tbody>
                    <tr>
                        <td class="td td-preparat">Лекарственный препарат</td>
                        <td class="td td-put">Путь приема</td>
                        <td class="td td-dozirovka">Дозировка</td>
                        <td class="td td-start">Начало приема</td>
                        <td class="td td-end">Конец приема</td>
                        <td class="td td-number">Номер сеанса</td>
                        <td class="td td-days">Дней</td>
                        <td class="td td-delete"> </td>
                    </tr>
                    <tr v-if="after.seans">
                        <td class="td td-preparat">{{after.med}}</td>
                        <td class="td td-put">{{after.way}}</td>
                        <td class="td td-dozirovka">20 {{after.doza}}</td>
                        <td class="td td-start">{{after.start}}</td>
                        <td class="td td-end">{{after.end}}</td>
                        <td class="td td-number">{{after.number.map(n=>n)}}</td>
                        <td class="td td-days">{{after.kolvo}}</td>
                        <td class="td td-delete"> <img src="./trash.svg" class="delete-img"> </td>
                    </tr>
                    <tr v-else></tr>
                </tbody>
            </table>
        </div>
    </div>

</template>
<script>
import AddBtn from 'components/UI/AddBtn.vue'
import EnterBtn from 'components/UI/EnterBtn.vue'
import Div from 'components/UI/Div.vue'
import H3 from 'components/UI/H3.vue'
import P from 'components/UI/P.vue'
import Dialog from 'components/UI/Dialog.vue'
import { useStore } from 'src/stores/tz-store'
const store = useStore()
export default{
    components:{
        AddBtn,EnterBtn,Div,H3,P,Dialog
    },
    data(){
        return{
            after:store.after,
            MedShow:false,
            num:[],
            Med:{
                title:"Лекарственный препарат",
                content:[
                    {id:1,title:"Лекарственный препарат №1"},
                    {id:2,title:"Лекарственный препарат №2"},
                ]
            },
            WayShow:false,
            Way:{
                title:"Путь приема",
                content:[
                    {id:1,title:"Перорально"},
                    {id:2,title:"Подкожно"},
                    {id:3,title:"Артериально"},
                ]
            },
            DozaShow:false,
            Doza:{
                title:"Дозы препаратов",
                content:[
                    {id:1,title:"мкг"},
                    {id:2,title:"мл"},
                    {id:3,title:"мг/кг"},
                ]
            },
        }
    },
    methods:{
        showMed(){
            this.MedShow = true
        },
        showWay(){
            this.WayShow = true
        },
        showDoza(){
            this.DozaShow = true
        },
        updateMed(value){
            store.setMed(value)
        },
        updateWay(value){
            store.setWay(value)
        },
        updateDoza(value){
            store.setDoza(value)
        },
        updateNum(event){
            const n = Number(event.target.value)
            this.num.push(n)
            store.setNumber(this.num)
        },
        updateStart(event){
            store.setStart(event.target.value)
        },
        updateEnd(event){
            store.setEnd(event.target.value)
        },
        kolvo(){
            const start = new Date(this.after.start)
            const end = new Date(this.after.end)
            const kolvo = end.getDate()-start.getDate()
            console.log(kolvo)
        },
        setSeans(){
            store.showAfterSeans()
        }
    }
}
</script>
<style scoped>
    @media(min-width:768px){
        .block,.after{
            margin-top:30px;
        }
        .div,.block-div{
            margin-top:10px;
            display:flex;
            grid-gap:10px;
        }
        .med{
            width: 285px;
        }
        .way{
            width: 130px;
        }
        .doza{
            width: 145px;
        }
        .count{
            width:30px;
            height:30px;
            display:flex;
            justify-content:center;
            align-items:center;
            border:1px solid black;
            background:white;
            font-size:15px;
        }
        .btn-checked{
            color: white;
            background: #42A5F2;
            border: none;
        }
        .dates{
            display:flex;
            grid-gap:10px
        }
        .calendar{
            width:120px;
            height:25px;
            font-size:12px;
        }
        .table{
            border-collapse:collapse;
            margin-top:15px;
        }
        .td{
            border:1px solid black;
            height:20px;
            text-align:center;
            color:black;
            font-family:Roboto;
            font-size:12px;
        }
        .td-preparat{
            width:165px;
        }
        .td-put{
            width:80px;
        }
        .td-dozirovka{
            width:70px;
        }
        .td-start{
            width:90px;
        }
        .td-end{
            width:85px;
        }
        .td-number{
            width:85px;
        }
        .td-days{
            width:40px;
        }
        .td-delete{
            width:30px;
        }
        .delete-img{
            height:15px;
        }
    }
    @media (min-width:1000px) and (max-width:1365px){
        .block,.after{
            margin-top:30px;
        }
        .div,.block-div{
            margin-top:15px;
            display:flex;
            grid-gap:15px;
        }
        .med{
            width: 375px;
        }
        .way{
            width: 170px;
        }
        .doza{
            width: 190px;
        }
        .count{
            width:50px;
            height:50px;
            display:flex;
            justify-content:center;
            align-items:center;
            border:1px solid black;
            background:white;
            font-size:25px;
        }
        .btn-checked{
            color: white;
            background: #42A5F2;
            border: none;
        }
        .dates{
            display:flex;
            grid-gap:30px
        }
        .calendar{
            width:160px;
            height:50px;
            font-size:16px;
        }
        .table{
            border-collapse:collapse;
            margin-top:15px;
        }
        .td{
            border:1px solid black;
            height:45px;
            text-align:center;
            color:black;
            font-family:Roboto;
            font-size:16px;
        }
        .td-preparat{
            width:215px;
        }
        .td-put{
            width:100px;
        }
        .td-dozirovka{
            width:90px;
        }
        .td-start{
            width:120px;
        }
        .td-end{
            width:110px;
        }
        .td-number{
            width:110px;
        }
        .td-days{
            width:55px;
        }
        .td-delete{
            width:40px;
        }
        .delete-img{
            height:22px;
        }
    }
    @media(min-width:1365px){
        .after{
        margin-top:60px;
        }
        .block{
            margin-top:60px;
        }
        .div,.block-div{
            margin-top:30px;
            display:flex;
            grid-gap:30px;
        }
        .med{
            width: 720px;
        }
        .way{
            width: 320px;
        }
        .doza{
            width: 365px;
        }
        .count{
            width:80px;
            height:80px;
            display:flex;
            justify-content:center;
            align-items:center;
            border:1px solid black;
            background:white;
            font-size:25px;
        }
        .btn-checked{
            color: white;
            background: #42A5F2;
            border: none;
        }
        .dates{
            display:flex;
            grid-gap:30px
        }
        .calendar{
            width:300px;
            height:70px;
            font-size:22px;
        }
        .table{
            border-collapse:collapse;
            margin-top:30px;
        }
        .td{
            border:1px solid black;
            height:65px;
            text-align:center;
            color:black;
            font-family:Roboto;
            font-size:22px;
        }
        .td-preparat{
            width:410px;
        }
        .td-put{
            width:200px;
        }
        .td-dozirovka{
            width:170px;
        }
        .td-start{
            width:230px;
        }
        .td-end{
            width:215px;
        }
        .td-number{
            width:215px;
        }
        .td-days{
            width:105px;
        }
        .td-delete{
            width:80px;
        }
        .delete-img{
            height:30px;
        }
    }
    @media(min-width:2730px){
        .after,.block{
            margin-top:120px;
        }
        
        .div,.block-div{
            margin-top:60px;
            display:flex;
            grid-gap:60px;
        }
        .med{
            width: 1440px;
        }
        .way{
            width: 640px;
        }
        .doza{
            width: 740px;
        }
        .count{
            width:160px;
            height:160px;
            display:flex;
            justify-content:center;
            align-items:center;
            border:1px solid black;
            background:white;
            font-size:50px;
        }
        .btn-checked{
            color: white;
            background: #42A5F2;
            border: none;
        }
        .dates{
            display:flex;
            grid-gap:60px
        }
        .calendar{
            width:600px;
            height:130px;
            font-size:45px;
        }
        .table{
            border-collapse:collapse;
            margin-top:60px;
        }
        .td{
            border:1px solid black;
            height:130px;
            text-align:center;
            color:black;
            font-family:Roboto;
            font-size:45px;
        }
        .td-preparat{
            width:820px;
        }
        .td-put{
            width:400px;
        }
        .td-dozirovka{
            width:340px;
        }
        .td-start{
            width:460px;
        }
        .td-end,.td-number{
            width:430px;
        }
        .td-days{
            width:210px;
        }
        .td-delete{
            width:160px;
        }
        .delete-img{
            height:60px;
        }
    }
    
</style>