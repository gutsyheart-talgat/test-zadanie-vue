<template>
    <div class="treat">
        <H3>Лечение на дому</H3>
        <div class="block">
            <P>Лекарственный препарат</P>
            <div class="div">
                <Div class="med">{{treat.med === '' ? 'Спр. "Препараты"' : treat.med}}</Div>
                <EnterBtn @click="showMed"/>
                <Dialog  v-model:content="Med" v-model:show="MedShow" @update="updateMed"/>
            </div>
        </div>
        <div class="block-div" >
            <div>
                <P>Путь приема</P>
                <div class="div"><Div class="way" @click="showWay">{{treat.way === '' ? 'Спр. "Путь приема"' : treat.way}}</Div></div>
                <Dialog v-model:content="Way" v-model:show="WayShow" @update="updateWay"/>
            </div>
            <div>
                <P>Дозировка</P>
                <div class="div">
                    <Div class="doza">{{treat.doza === '' ? 'Спр. "Дозы Препаратов"' : treat.doza}}</Div>
                    <EnterBtn @click="showDoza"/>
                    <Dialog v-model:content="Doza" v-model:show="DozaShow" @update="updateDoza"/>
                </div>
            </div>
        </div>
        <div style="width:fit-content">
            <div class="block-div" >
                <div>
                    <P>Кратность приема</P>
                    <div class="div">
                        <Div class="kratnost">{{treat.kratnost === '' ? 'Спр. "Кр-ть приема"' : treat.kratnost}}</Div>
                        <EnterBtn @click="showKratnost"/>
                        <Dialog v-model:content="kratnost" v-model:show="kratnostShow" @update="updateKrat"/>
                    </div>
                </div>
                <div>
                    <P>Начало приема</P>
                    <div class="div"><input type="date" class="calendar" @input="updateStart"></div>
                </div>
                <div>
                    <P>Конец приема</P>
                    <div class="div"><input type="date" class="calendar" @input="updateEnd"></div>
                </div>
                
            </div>
            <P style="margin-top:30px; text-align:end;">Количество дней:{{treat.kolvo}}</P>
        </div>
        <AddBtn @click="setSeans">Добавить</AddBtn>
        <div class="block">
            <P>Лечение на дому</P>
            <table v-if="treat.seans" class="table" >
                <tbody>
                    <tr>
                        <td class="td">{{treat.med}}</td>
                        <td class="td">{{treat.way}}</td>
                        <td class="td">5{{treat.doza}}</td>
                    </tr>
                    <tr>
                        <td class="td">{{treat.kratnost}}</td>
                        <td class="td">с {{treat.start}} по {{treat.end}}</td>
                        <td class="td">{{treat.kolvo}} дней</td>
                    </tr>
                </tbody>
            </table>
            <table v-else></table>
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
            treat:store.treat,
            MedShow:false,
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
            kratnostShow:false,
            kratnost:{
                title:"Кратность приема",
                content:[
                    {id:1,title:"1 раз в день"},
                    {id:2,title:"2 раза в день"},
                    {id:3,title:"3 раза в день"},
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
        showKratnost(){
            this.kratnostShow = true
        },
        updateMed(value){
            store.setTreatMed(value)
        },
        updateWay(value){
            store.setTreatWay(value)
        },
        updateDoza(value){
            store.setTreatDoza(value)
        },
        updateKrat(value){
            store.setKratnost(value)
        },
        updateStart(event){
            store.setTreatStart(event.target.value)
        },
        updateEnd(event){
            store.setTreatEnd(event.target.value)
        },
        setSeans(){
            store.showTreatSeans()
        }

    }
}
</script>
<style scoped>
    @media(min-width:768px){
        .treat,.block{
            margin-top:30px;
        }
        .block-div,.div{
            margin-top:20px;
            display: flex;
            grid-gap: 10px;
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
        .kratnost{
            width: 130px;
        }
        .td{
            color:black;
            font-family:Roboto;
            font-size:12px;
        }
        .div{
            margin-top:10px;
            display:flex;
            grid-gap:10px;
        }
        .calendar{
            width:120px;
            height:25px;
            font-size:12px;
        }
        
        .table{
            margin-top:30px;
            border:1px solid black;
            width:460px;
            height:130px;
        }
    }
    @media(min-width:1000px){
        .treat{
            margin-top:30px;
        }
        .block{
            margin-top:30px;
        }
        .block-div,.div{
            margin-top:30px;
            display: flex;
            grid-gap: 15px;
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
        .kratnost{
            width: 170px;
        }
        .td{
            color:black;
            font-family:Roboto;
            font-size:16px;
        }
        .div{
            margin-top:30px;
            display:flex;
            grid-gap:30px;
        }
        .calendar{
            width:160px;
            height:50px;
            font-size:16px;
        }
        
        .table{
            margin-top:30px;
            border:1px solid black;
            width:600px;
            height:180px;
        }
    }
    @media(min-width:1365px){
        .treat{
            margin-top:60px;
        }
        .block{
            margin-top:60px;
        }
        .block-div{
            margin-top:60px;
            display: flex;
            grid-gap: 30px;
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
        .kratnost{
            width: 330px;
        }
        .td{
            color:black;
            font-family:Roboto;
            font-size:22px;
        }
        .div{
            margin-top:30px;
            display:flex;
            grid-gap:30px;
        }
        .calendar{
            width:300px;
            height:70px;
            font-size:22px;
        }
        
        .table{
            margin-top:30px;
            border:1px solid black;
            width:1150px;
            height:360px;
        }
    }
    @media(min-width:2730px){
        .treat,.block{
            margin-top:120px;
        }
        .block-div{
            margin-top:120px;
            display: flex;
            grid-gap: 60px;
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
        .kratnost{
            width: 650px;
        }
        .td{
            color:black;
            font-family:Roboto;
            font-size:45px;
        }
        .div{
            margin-top:60px;
            display:flex;
            grid-gap:60px;
        }
        .calendar{
            width:600px;
            height:130px;
            font-size:45px;
        }
        
        .table{
            margin-top:30px;
            border:1px solid black;
            width:2300px;
            height:680px;
        }
    }
</style>