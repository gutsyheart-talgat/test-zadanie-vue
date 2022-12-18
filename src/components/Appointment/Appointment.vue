<template>
  <div class="appoint">
    <H3>Назначения сеанса гемодиализа</H3>
    <div class="apparats">
        <P>Программа аппарата</P>
        <div class="apparats-name">
            <button @click="setProgram" value="HD" class="apparats-btn" :class="{'btn-checked': appoint.program === 'HD'}">HD</button>
            <button @click="setProgram" value="HDF" class="apparats-btn" :class="{'btn-checked': appoint.program === 'HDF'}">HDF</button>
            <button @click="setProgram" value="UDF" class="apparats-btn" :class="{'btn-checked': appoint.program === 'UDF'}">UDF</button>
        </div>
    </div>
    <div class="dialyz">
        <P>Диализатор</P>
        <div class="dialyz-div">
            <Div class="dialyz-name">{{appoint.dialyz === '' ? 'Спр."Диализаторы"' : appoint.dialyz}}</Div>
            <EnterBtn @click="showDialyz"/>
            <Dialog v-model:content="dialyz" v-model:show="dialyzShow" @update="updateDialyz"/>
        </div>
    </div>
    <div class="concentrator">
        <div>
            <P>Концентратор</P>
            <div class="concentrator-div">
                <Div class="conc-name">{{appoint.concentrator === '' ? 'Спр."Концентраторы"' : appoint.concentrator}}</Div>
                <EnterBtn @click="showConc"/>
                <Dialog v-model:content="concent" v-model:show="concentShow" @update="updateConcent"/>
            </div>
        </div>
        <div class="litr">
            <P>Объем, л</P>
            <button class="concentrator-btn">10 л</button>
        </div>
    </div>
    <div class="injection">
        <P>Тип инъекции</P>
        <div class="injection-div">
            <button value="Игла" class="injection-btn" :class="{'btn-checked': appoint.injection === 'Игла'}" @click="setInjection" >Игла</button>
            <button value="Катетер" class="injection-btn" :class="{'btn-checked': appoint.injection === 'Катетер'}" @click="setInjection">Катетер</button>
        </div>
        
        
        <div v-if="appoint.injection === 'Игла'" class="choise">
            <div class="concentrator-div">
                <Div class="choise-d">{{appoint.igla === '' ? 'Спр."Иглы"' : appoint.igla}}</Div>
                <EnterBtn @click="showIgly"/>
                <Dialog v-model:content="Igl" v-model:show="IglShow" @update="updateIgla"/>
            </div>
            <div class="concentrator-div">
                <Div class="choise-type">{{appoint.typeIgla === '' ? 'Спр."Типы Иглы"' : appoint.typeIgla}}</Div>
                <EnterBtn @click="showTypeIgl"/>
                <Dialog v-model:content="typeIgl" v-model:show="typeIglShow" @update="updateIglaType"/>
            </div>
        </div>
        <div v-else-if="appoint.injection === 'Катетер'" class="choise">
            <div class="concentrator-div">
                <Div class="choise-d">{{appoint.kat === '' ? 'Спр. "Катетер"' : appoint.kat}}</Div>
                <EnterBtn @click="showKateter"/>
                <Dialog v-model:content="kateter" v-model:show="kateterShow" @update="updateKat" />
            </div>
            <div class="concentrator-div">
                <Div class="choise-type">{{appoint.typeKateter === '' ? 'Спр."Типы Катетеров"': appoint.typeKateter}}</Div>
                <EnterBtn @click="showTypeKat"/>
                <Dialog v-model:content="typeKat" v-model:show="typeKatShow" @update="updateKatType"/>
            </div>
        </div>
        <div v-else="appoint.injection === ''"></div>
    </div>
    <div class="info">
        <div class="Bicarbonate" style="text-align: center">
            <P>Бикарбонат</P>
            <div class="Bicarbonate-div">
                <Div class="bicar-">{{appoint.bicarbonat === '' ? 'ХХХ гр / л' : appoint.bicarbonat}}</Div>
                <EnterBtn @click="showBicar"/>
                
            </div>
            <Dialog v-model:content="Bicar" v-model:show="BicarShow" @update="updateBicar"/>
        </div>
        <div class="ves"  style="text-align: center">
            <P class="ves-p">Сухой вес пациента</P>
            <div><Div class="ves-" @click="updateVes">{{appoint.ves === '' ? 'ХХХ' : appoint.ves}} кг</Div></div>
        </div>
        <div class="anti" style="text-align: center">
            <P>Антикоагуляция</P>
            <div class="anti-div">
                <Div class="anti-">Наименование</Div>
                <EnterBtn/>
            </div>
        </div>
        <div class="obyem" style="text-align: center">
            <P >Объем</P>
            <div class="obyem-div"><Div class="obyem-" @click="updateAnti">{{appoint.anti === '' ? 'ХХХ' : appoint.anti}} ед</Div></div>
        </div>
    </div>
    <AddBtn @click="showSeans">Сформировать сеанс</AddBtn>
    <div v-if="appoint.seans" class="appoint_info">
        <H3>Назначения сеанса гемодиализа</H3>
        <table class="appoint_info-icons">
            <tr>
                <td class="td">
                    <div class="icon">
                        <img class="icon-img" src="./program.svg">
                        <p class="icon-p">{{appoint.program}}</p>
                    </div>
                </td>
                <td class="td">
                    <div class="icon">
                        <img class="icon-img" src="./dialyzer.svg">
                        <p class="icon-p">{{appoint.dialyz}}</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="td">
                    <div class="icon">
                        <img class="icon-img" src="./consent.svg">
                        <p class="icon-p">{{appoint.concentrator}}</p>
                    </div>
                </td>
                <td class="td">
                    <div class="icon">
                        <img class="icon-img" src="./igla.svg">
                        <p class="icon-p" v-if="appoint.injection === 'Игла'">{{appoint.igla }} {{appoint.typeIgla}}</p>
                        <p class="icon-p" v-else-if="appoint.injection === 'Катетер'">{{appoint.kat }}{{appoint.typeKateter}}</p>
                        <p class="icon-p" v-else></p>
                    </div>
                </td>
                <td class="td">
                    <div class="icon">
                        <img class="icon-img" src="./bicarbonate.svg">
                        <p class="icon-p">{{appoint.bicarbonat}}</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="td">
                    <div class="icon">
                        <img class="icon-img" src="./bicarbonate.svg">
                        <p class="icon-p">Антикоагуляция {{appoint.anti}} ед.</p>
                    </div>
                </td>
                <td class="td">
                    <div class="icon">
                        <img class="icon-img" src="./vesy.svg">
                        <p class="icon-p">{{appoint.ves}} кг.</p>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <div v-else></div>
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

const Store = useStore()
export default {
    components:{
        AddBtn,EnterBtn,Div,H3,P,Dialog
    },
    data(){
        return{
            appoint:Store.appoint,
            dialyzShow:false,
            dialyz:{
                title: 'Диализаторы',
                content:[
                    {id:1,title:"Диализатор №1"},
                    {id:2,title:"Диализатор №2"},
                    {id:3,title:"Диализатор №3"}
                ]
            },
            concentShow:false,
            concent:{
                title: 'Концентраторы',
                content:[
                    {id:1,title:"Концентратор №1"},
                    {id:2,title:"Концентратор №2"},
                    {id:3,title:"Концентратор №3"}
                ]
            },
            kateterShow:false,
            kateter:{
                title:'Лекарственные препараты',
                content:[
                    {id:1,title:"Катетер №1"},
                    {id:2,title:"Катетер №2"},
                    {id:3,title:"Катетер №3"}
                ]
            },
            typeKatShow:false,
            typeKat:{
                title:"Катетеры",
                content:[
                    {id:1,title:"Катетер Фолея"},
                    {id:2,title:"Катетер Малеко"},
                    {id:3,title:"Катетер Пеццера"},
                    {id:4,title:'Катетер Тиманна'},
                    {id:5,title:'Катетер Нелатона'}
                ]
            },
            IglShow:false,
            Igl:{
                title:'Лекарственные препараты',
                content:[
                    {id:1,title:"Игла размер №1"},
                    {id:2,title:"Игла размер №2"},
                    {id:3,title:"Игла размер №3"}
                ]
            },
            typeIglShow:false,
            typeIgl:{
                title:"Иглы",
                content:[
                    {id:1,title:"Венозные"},
                    {id:2,title:"Артериальные"},
                ]
            },
            BicarShow:false,
            Bicar:{
                title:"Бикарбонат",
                content:[
                    {id:1,title:"граммов"},
                    {id:2,title:"литров"},
                ]
            },
            
        }
    },
    methods:{
        showKateter(){
            this.kateterShow = true;
        },
        showTypeKat(){
            this.typeKatShow = true;
        },
        showIgly(){
            this.IglShow = true
        },
        showTypeIgl(){
            this.typeIglShow = true
        },
        showBicar(){
            this.BicarShow = true
        },
        showDialyz(){
            this.dialyzShow = true
        },
        showConc(){
            this.concentShow = true
        },
        updateKat(value){   
            Store.setKat(value)
        },
        setProgram(event){
            Store.setProgram(event.target.value)
        },
        setInjection(event){
            Store.setInjection(event.target.value)
        },
        updateIgla(value){
            Store.setIgla(value)
        },
        updateKatType(value){
            Store.settypeKat(value)
        },
        updateIglaType(value){
            Store.setTypeIgla(value)
        },
        updateBicar(value){
            Store.setBicar(value)
        },
        showSeans(){
            Store.setSeans(true)
        },
        updateDialyz(value){
            Store.setDialyz(value)
        },
        updateConcent(value){
            Store.setConcentrator(value)
        },
        updateVes(){
            const vesy = prompt();
            Store.setVes(vesy)
        },
        updateAnti(){
            const anti = prompt();
            Store.setAnti(anti)
        },
        

    }
}
</script>
<style scoped>
    @media(min-width:768px){
        .appoint{
            margin-top:30px;
        }
        .apparats,.dialyz,.concentrator,.injection,.Bicarbonate,.ves,.anti,.obyem{
            margin-top:20px;
        }
        .apparats-name,.dialyz-div,.concentrator-div,.injection-div,.choise,.Bicarbonate-div,.anti-div,.obyem-div{
            margin-top:10px;
            display:flex;
            grid-gap:10px;
        }
        .apparats-btn,.injection-btn{
            width:85px;
            height:25px;
            background:white;
            border-radius:10px;
            border: 2px solid #9FBA86;
            color:#9FBA86;
            font-size: 12px;
        }
        .btn-checked{
            color: white;
            background:#9FBA86;
        }
        .concentrator{
            display:flex;
            grid-gap:10px;
        }
        .dialyz-name,.conc-name{
            width: 165px;
        }
        .litr{
            width: 50px;
        }
        .concentrator-btn{
            width:30px;
            height:25px;
            display:flex;
            align-items:center;
            justify-content:center;
            background:white;
            border:1px solid black;
            font-size:12px;
            color:black;
            font-family:Roboto;
            margin-top: 10px;
        }
        .info{
            display:flex;
            grid-gap:10px;
        }
        .Bicarbonate{
            width: 150px;
        }
        .choise-type{
            width: 180px;
        }
        .bicar-,.choise-d{
            width: 110px;
        }
        .bicar-,.ves-{
            justify-content: center;
        }
        .ves,.obyem{
            width: 60px;
            text-align:center;
        }
        .ves-p{
            margin-top: -8px;
        }
        .anti{
            width:155px;
        }
        .anti-{
            width: 115px;
            justify-content: center;
        }
        .obyem-{
            width: 90px;
            justify-content: center;
        }
        .Bicarbonate-name,.ves-div ,.anti-name,.obyem-div{
            justify-content:center;
        }
        .appoint_info{
            width:460px;
            height:130px;
            border:1px solid black;
            margin-top:40px;
            padding:12px 10px;
        }
        .appoint_info-h3{
            color:black;
            font-family:Roboto;
            font-size:15px;
            height: 25px;
        }
        .appoint_info-icons{
            width:100%;
            height: 60px;
        }
        .icon{
            display: flex;
            align-items: center;
            height: 15px;
            grid-gap: 10px;
        }
        .icon-img{
            height:15px;
        }
        .icon-p{
            color:black;
            font-family:Roboto;
            font-size:12px;
        }
    }
    @media(min-width:1000px){
        .appoint{
            margin-top:60px;
        }
        .apparats,.dialyz,.concentrator,.injection,.Bicarbonate,.ves,.anti,.obyem{
            margin-top:30px;
        }
        .apparats-name,.dialyz-div,.concentrator-div,.injection-div,.choise,.Bicarbonate-div,.anti-div,.obyem-div{
            margin-top:15px;
            display:flex;
            grid-gap:15px;
        }
        .apparats-btn,.injection-btn{
            width:120px;
            height:40px;
            background:white;
            border-radius:10px;
            border: 2px solid #9FBA86;
            color:#9FBA86;
            font-size: 16px;
        }
        .btn-checked{
            color: white;
            background:#9FBA86;
        }
        .concentrator{
            display:flex;
            grid-gap:30px;
        }
        .dialyz-name,.conc-name{
            width: 220px;
        }
        .litr{
            width: 75px;
        }
        .concentrator-btn{
            width:60px;
            height:50px;
            display:flex;
            align-items:center;
            justify-content:center;
            background:white;
            border:1px solid black;
            font-size:25px;
            color:black;
            font-family:Roboto;
            margin-top: 15px;
        }
        .info{
            display:flex;
            grid-gap:15px;
        }
        .Bicarbonate{
            width: 200px;
        }
        .choise-type{
            width: 180px;
        }
        .bicar-,.choise-d{
            width: 140px;
        }
        .bicar-,.ves-{
            justify-content: center;
        }
        .ves,.obyem{
            width: 90px;
            text-align:center;
        }
        .ves-p{
            margin-top: -10px;
        }
        .anti{
            width:215px;
        }
        .anti-{
            width: 140px;
            justify-content: center;
        }
        .obyem-{
            width: 90px;
            justify-content: center;
        }
        .Bicarbonate-name,.ves-div ,.anti-name,.obyem-div{
            justify-content:center;
        }
        .appoint_info{
            width:600px;
            height:180px;
            border:1px solid black;
            margin-top:100px;
            padding:18px 15px;
        }
        .appoint_info-h3{
            color:black;
            font-family:Roboto;
            font-size:20px;
            
        }
        .appoint_info-icons{
            width:100%;
            height: 100px;
        }
        .icon{
            display: flex;
            align-items: center;
            height: 22px;
            grid-gap: 15px;
        }
        .icon-img{
            height:22px;
        }
        .icon-p{
            color:black;
            font-family:Roboto;
            font-size:16px;
        }
    }
    @media(min-width:1365px){
        .appoint{
        margin-top:115px;
        }
        .apparats,.dialyz,.concentrator,.injection,.Bicarbonate,.ves,.anti,.obyem{
            margin-top:60px;
        }
        .apparats-name,.dialyz-div,.concentrator-div,.injection-div,.choise,.Bicarbonate-div,.anti-div,.obyem-div{
            margin-top:30px;
            display:flex;
            grid-gap:30px;
        }
        .apparats-btn,.injection-btn{
            width:215px;
            height:65px;
            background:white;
            border-radius:10px;
            border: 2px solid #9FBA86;
            color:#9FBA86;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 22px;
        }
        .btn-checked{
            color: white;
            background:#9FBA86;
        }
        .concentrator{
            display:flex;
            grid-gap:55px;
        }
        .dialyz-name,.conc-name{
            width: 400px;
        }
        .concentrator-btn{
            width:80px;
            height:70px;
            display:flex;
            align-items:center;
            justify-content:center;
            background:white;
            border:1px solid black;
            font-size:25px;
            color:black;
            font-family:Roboto;
            margin-top: 0;
        }
        .info{
            display:flex;
            grid-gap:30px;
        }
        .Bicarbonate{
            width: 380px;
        }
        .choise-type{
            width: 350px;
        }
        .bicar-,.choise-d{
            width: 270px;
        }
        .ves,.obyem{
            width:160px;
            text-align:center;
        }
        .ves-p{
            margin-top: -5px;
        }
        .ves-div,.obyem-div{
            width:100%;
        }
        .anti{
            width: 380px;
        }
        .anti-{
            width:270px;
        }
        .Bicarbonate-name,.ves-div ,.anti-name,.obyem-div{
            justify-content:center;
        }
        .appoint_info{
            width:1150px;
            height:350px;
            border:1px solid black;
            margin-top:100px;
            padding:35px 25px;
        }
        .appoint_info-h3{
            color:black;
            font-family:Roboto;
            font-size:25px;
        }
        .appoint_info-icons{
            width:100%;
            height: 205px;
        }
        .icon{
            display: flex;
            align-items: center;
            height: 50px;
            grid-gap: 30px;
        }
        .icon-img{
            height:45px;
        }
        .icon-p{
            color:black;
            font-family:Roboto;
            font-size:22px;
        }
    }
    @media(min-width:2730px){
        .appoint{
            margin-top:230px;
        }
        .apparats,.dialyz,.concentrator,.injection,.Bicarbonate,.ves,.anti,.obyem{
            margin-top:120px;
        }
        .apparats-name,.dialyz-div,.concentrator-div,.injection-div,.choise,.Bicarbonate-div,.anti-div,.obyem-div{
            margin-top:60px;
            display:flex;
            grid-gap:60px;
        }
        .apparats-btn,.injection-btn{
            width:420px;
            height:130px;
            background:white;
            border-radius:10px;
            border: 2px solid #9FBA86;
            color:#9FBA86;
            font-size: 45px;
        }
        .btn-checked{
            color: white;
            background:#9FBA86;
        }
        .concentrator{
            display:flex;
            grid-gap:60px;
        }
        .dialyz-name,.conc-name{
            width: 840px;
        }
        .concentrator-btn{
            width:150px;
            height:120px;
            display:flex;
            align-items:center;
            justify-content:center;
            background:white;
            border:1px solid black;
            font-size:45px;
            color:black;
            font-family:Roboto;
            margin-top: 0;
        }
        .info{
            display:flex;
            grid-gap:60px;
        }
        .Bicarbonate{
            width: 380px;
        }
        .choise-type{
            width: 680px;
        }
        .Bicarbonate{
            width: 740px;
        }
        .bicar-,.choise-d{
            width: 530px;
        }
        .ves,.obyem{
            width:300px;
            text-align:center;
        }
        .obyem-{
            width: 100%;
        }
        .ves-p{
            margin-top: -10px;
        }
        .ves-div,.obyem-div{
            width:100%;
        }
        .anti{
            width: 770px;
        }
        .anti-{
            width:560px;
        }
        .Bicarbonate-name,.ves-div ,.anti-name,.obyem-div{
            justify-content:center;
        }
        .appoint_info{
            width:2300px;
            height:680px;
            border:1px solid black;
            margin-top:100px;
            padding:60px 50px;
        }
        .appoint_info-h3{
            color:black;
            font-family:Roboto;
            font-size:50px;
            height: 100px;
        }
        .appoint_info-icons{
            width:100%;
            height: 500px;
        }
        .icon{
            display: flex;
            align-items: center;
            height: 50px;
            grid-gap: 60px;
        }
        .icon-img{
            height:60px;
        }
        .icon-p{
            color:black;
            font-family:Roboto;
            font-size:45px;
        }
    }
    
</style>