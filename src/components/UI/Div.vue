<template>
    <div class="name"><slot></slot></div>
</template>
<style scoped>
    @media(min-width:768px){
        .name{
            border:1px solid black;
            height:25px;
            font-size:12px;
            color:black;
            font-family:Roboto;
            display:flex;
            align-items:center;
        }
    }
    @media(min-width:1000px){
        .name{
            border:1px solid black;
            height:50px;
            font-size:16px;
            color:black;
            font-family:Roboto;
            display:flex;
            align-items:center;
        }
    }
    @media(min-width:1365px){
        .name{
            border:1px solid black;
            height:70px;
            font-size:25px;
            color:black;
            font-family:Roboto;
            display:flex;
            align-items:center;
        }
    }
    @media(min-width:2730px){
        .name{
            border:1px solid black;
            height:120px;
            font-size:45px;
            color:black;
            font-family:Roboto;
            display:flex;
            align-items:center;
        }
    }
    
</style>