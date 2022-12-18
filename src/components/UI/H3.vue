<template>
    <h3 class="h3"><slot></slot></h3>
</template>
<style scoped>
    @media(min-width:768px){
        .h3{
            color:black;
            font-family:Roboto;
            font-size:15px;
        }
    }
    @media(min-width:1000px){
        .h3{
            color:black;
            font-family:Roboto;
            font-size:20px;
        }
    }
    @media(min-width:1365px){
        .h3{
            color:black;
            font-family:Roboto;
            font-size:30px;
        }
    }
    @media(min-width:2730px){
        .h3{
            color:black;
            font-family:Roboto;
            font-size:50px;
        }
    }
    
</style>