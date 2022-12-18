<template>
    <button class="enter"><img class="enter-img" src="./enter.svg"></button>
</template>
<style scoped>
    @media (min-width:768px) {
        .enter{
            width:30px;
            height:25px;
            display:flex;
            align-items:center;
            justify-content:center;
            background:white;
            border:1px solid black;
        }
        .enter-img{
            height:15px
        }
    }
    @media (min-width:1000px) {
        .enter{
            width:60px;
            height:50px;
            display:flex;
            align-items:center;
            justify-content:center;
            background:white;
            border:1px solid black;
        }
        .enter-img{
            height:20px
        }
    }
    @media(min-width:1365px){
        .enter{
            width:80px;
            height:70px;
            display:flex;
            align-items:center;
            justify-content:center;
            background:white;
            border:1px solid black;
        }
        .enter-img{
            height:30px
        }
    }
    @media(min-width:2730px){
        .enter{
            width:150px;
            height:120px;
            display:flex;
            align-items:center;
            justify-content:center;
            background:white;
            border:1px solid black;
        }
        .enter-img{
            height:50px
        }
    }
</style>