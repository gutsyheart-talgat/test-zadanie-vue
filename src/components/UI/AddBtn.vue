<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
    
</script>
<style scoped>
    @media(min-width: 768px){
        .btn{
            width:150px;
            display:flex;
            justify-content:center;
            align-items:center;
            height:25px;
            color:#999999;
            background:white;
            border:2px solid #999999;
            border-radius:10px;
            font-size:12px;
            font-family:Roboto;
            margin-top:40px;
        }
    }
    @media(min-width: 1000px){
        .btn{
            width:200px;
            display:flex;
            justify-content:center;
            align-items:center;
            height:50px;
            color:#999999;
            background:white;
            border:2px solid #999999;
            border-radius:10px;
            font-size:18px;
            font-family:Roboto;
            margin-top:40px;
        }
    }
    @media (min-width: 1365px){
        .btn{
            width:380px;
            display:flex;
            justify-content:center;
            align-items:center;
            height:70px;
            color:#999999;
            background:white;
            border:2px solid #999999;
            border-radius:10px;
            font-size:25px;
            font-family:Roboto;
            margin-top:40px;
        }
    }
    @media (min-width: 2730px){
        .btn{
            width:755px;
            display:flex;
            justify-content:center;
            align-items:center;
            height:120px;
            color:#999999;
            background:white;
            border:2px solid #999999;
            border-radius:10px;
            font-size:45px;
            font-family:Roboto;
            margin-top:100px;
        }
    }
    
    .btn:hover{
        color: white;
        background: #999999;
    }
</style>