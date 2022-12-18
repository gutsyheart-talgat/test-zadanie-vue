<template>
    <p class="p"><slot></slot></p>
</template>
<style scoped> 
    @media(min-width:768px){
        .p{
            color:black;
            font-family:Roboto;
            font-size:12px;
        }
    }
    @media(min-width:1000px){
        .p{
            color:black;
            font-family:Roboto;
            font-size:16px;
        }
    }
    @media(min-width:1365px){
        .p{
            color:black;
            font-family:Roboto;
            font-size:22px;
        }
    }
    @media(min-width:2730px){
        .p{
            color:black;
            font-family:Roboto;
            font-size:45px;
        }
    }
    
</style>