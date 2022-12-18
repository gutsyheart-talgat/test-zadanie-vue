<template>
    <div class="dialog-back" v-if="show">
        <div class="dialog">
            <H3>{{content.title}}</H3>
            <button class="btn-close" @click="hide">Закрыть</button>
            <div class="poisk">
                <div class="poisk-div">Поиск позиции по первым символам</div>
                <button class="poisk-btn"><img src="./lupa.svg" class="img"></button>
            </div>
            <div class="poisk">
                <div class="poisk-div">Добавить новую запись</div>
                <button class="poisk-btn">+</button>
            </div>
            <div class="type" v-for="cont in content.content" :key="cont.id">
                <div class="type-div">{{cont.title}}</div>
                <button class="type-btn" @click="update" :value="cont.title">></button>
            </div>
        </div>
    </div>
</template>
<script>
import H3 from 'components/UI/H3.vue'
export default{
    components:{
        H3
    },
    props:{
        content:{
            type:Object,
        },
        show:{
            type:Boolean,
            default:false
        },
        data:{
            type:String,
        },
        setData:{
            type:Function,
        }

    },
    methods:{
        hide(){
            this.$emit('update:show',false)
        },
        update(event){
            this.$emit('update',event.target.value)      
        }
    }
}
</script>
<style scoped>
    @media(min-width:768px){
        .dialog{
            padding: 25px 20px;
            background: white;
            border-radius: 10px;
        }
        .btn-close{
            display:flex;
            justify-content:center;
            align-items:center;
            color:#999999;
            background:white;
            border:2px solid #999999;
            border-radius:10px;
            font-family:Roboto;
            padding: 10px;
            margin: 20px 0;
            font-size:12px;
        }
        
        .poisk{
            display: flex;
            grid-gap: 10px;
            margin-bottom: 10px;
        }
        .poisk-div{
            width: 300px;
            height: 25px;
            font-family:Roboto;
            font-size: 12px;
            border: 1px solid black;
            display: flex;
            align-items: center;
        }
        .poisk-btn,.type-btn{
            width: 40px;
            height: 25px;
            border: 1px solid black;
            background: white;
            font-size: 12px;
            font-weight: 900;
        }
        .img{
            height: 15px;
        }
        .type{
            display: flex;
        }
        .type-div{
            font-family:Roboto;
            font-size: 12px;
            border: 1px solid black;
            display: flex;
            align-items: center;
            height: 25px;
            width: 310px;
        }
    }
    @media(min-width:1000px){
        
        .dialog{
            padding: 35px 25px;
            background: white;
            border-radius: 10px;
        }
        .btn-close{
            display:flex;
            justify-content:center;
            align-items:center;
            color:#999999;
            background:white;
            border:2px solid #999999;
            border-radius:10px;
            font-family:Roboto;
            padding: 15px;
            margin: 25px 0;
            font-size:16px;
        }
        
        .poisk{
            display: flex;
            grid-gap: 15px;
            margin-bottom: 15px;
        }
        .poisk-div{
            width: 400px;
            height: 35px;
            font-family:Roboto;
            font-size: 16px;
            border: 1px solid black;
            display: flex;
            align-items: center;
        }
        .poisk-btn,.type-btn{
            width: 50px;
            height: 35px;
            border: 1px solid black;
            background: white;
            font-size: 16px;
            font-weight: 900;
        }
        .img{
            height: 18px;
        }
        .type{
            display: flex;
        }
        .type-div{
            font-family:Roboto;
            font-size: 16px;
            border: 1px solid black;
            display: flex;
            align-items: center;
            height: 35px;
            width: 415px;
        }
    }
    @media(min-width:1365px){
        .dialog{
            padding: 70px 45px;
            background: white;
            border-radius: 10px;
        }
        .btn-close{
            display:flex;
            justify-content:center;
            align-items:center;
            color:#999999;
            background:white;
            border:2px solid #999999;
            border-radius:10px;
            font-family:Roboto;
            padding: 20px;
            margin: 50px 0;
            font-size:25px;
        }
        
        .poisk{
            display: flex;
            grid-gap: 30px;
            margin-bottom: 30px;
        }
        .poisk-div{
            width: 750px;
            height: 65px;
            font-family:Roboto;
            font-size: 25px;
            border: 1px solid black;
            display: flex;
            align-items: center;
        }
        .poisk-btn,.type-btn{
            width: 100px;
            height: 65px;
            border: 1px solid black;
            background: white;
            font-size: 30px;
            font-weight: 900;
        }
        .img{
            height: 30px;
        }
        .type{
            display: flex;
        }
        .type-div{
            font-family:Roboto;
            font-size: 25px;
            border: 1px solid black;
            display: flex;
            align-items: center;
            height: 65px;
            width: 780px;
        }
    }
    @media(min-width:2730px){
        .dialog{
            padding: 100px 70px;
            background: white;
            border-radius: 10px;
        }
        .btn-close{
            display:flex;
            justify-content:center;
            align-items:center;
            color:#999999;
            background:white;
            border:2px solid #999999;
            border-radius:10px;
            font-family:Roboto;
            padding: 35px;
            margin: 60px 0;
            font-size:45px;
        }
        
        .poisk{
            display: flex;
            grid-gap: 60px;
            margin-bottom: 60px;
        }
        .poisk-div{
            width: 1070px;
            height: 100px;
            font-family:Roboto;
            font-size: 45px;
            border: 1px solid black;
            display: flex;
            align-items: center;
        }
        .poisk-btn,.type-btn{
            width: 130px;
            height: 100px;
            border: 1px solid black;
            background: white;
            font-size: 45px;
            font-weight: 900;
        }
        .img{
            height: 50px;
        }
        .type{
            display: flex;
        }
        .type-div{
            font-family:Roboto;
            font-size: 45px;
            border: 1px solid black;
            display: flex;
            align-items: center;
            height: 100px;
            width: 1130px;
        }
    }
    .dialog-back{
        position: fixed;
        top:0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,0.5);
    }
    .btn-close:hover{
        color: white;
        background: #999999;
    }

</style>