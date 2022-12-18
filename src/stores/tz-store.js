import { defineStore } from 'pinia';

export const useStore = defineStore('counter', {
  state: () => ({
    appoint:{
      dialyz:'',
      concentrator:'',
      kat:'',
      program:'',
      injection:'',
      igla:'',
      typeIgla:'',
      typeKateter:'',
      bicarbonat:'',
      ves:'',
      anti:'',
      seans:false,
    },
    after:{
      med:'',
      way:'',
      doza:'',
      number:[],
      start:'',
      end:'',
      kolvo:0,
      seans:false,
    },
    treat:{
      med:'',
      way:'',
      doza:'',
      start:'',
      end:'',
      kolvo:0,
      kratnost:'',
      seans:false,
    },
    recommend:{
      text:'',
    },
    allData:[]
  }),
  
  actions: {
    setKat(value){
      this.appoint.kat = value
    },
    setProgram(value){
      this.appoint.program = value
    },
    setIgla(value){
      this.appoint.igla = value
    },
    setTypeIgla(value){
      this.appoint.typeIgla = value
    },
    setInjection(value){
      this.appoint.injection = value
    },
    settypeKat(value){
      this.appoint.typeKateter = value
    },
    setBicar(value){
      this.appoint.bicarbonat = value
    },
    setSeans(value){
      this.appoint.seans = value
    },
    setDialyz(value){
      this.appoint.dialyz= value
    },
    setConcentrator(value){
      this.appoint.concentrator = value
    },
    setVes(value){
      this.appoint.ves = value
    },
    setAnti(value){
      this.appoint.anti = value
    },
    setMed(value){
      this.after.med = value
    },
    setWay(value){
      this.after.way = value
    },
    setDoza(value){
      this.after.doza = value
    },
    setNumber(num){
      const newSet = new Set(num);
      this.after.number = Array.from(newSet)
    },
    setStart(value){
      this.after.start = value
    },
    setEnd(value){
      this.after.end = value;
      const start = new Date(this.after.start);
      const end = new Date(this.after.end);
      this.after.kolvo = end.getDate()-start.getDate()
    },
    showAfterSeans(){
      this.after.seans= true
    },
    setTreatMed(value){
      this.treat.med = value
    },
    setTreatWay(value){
      this.treat.way = value
    },
    setTreatDoza(value){
      this.treat.doza = value
    },
    setTreatStart(value){
      this.treat.start = value
    },
    setTreatEnd(value){
      this.treat.end = value;
      const start = new Date(this.treat.start);
      const end = new Date(this.treat.end);
      this.treat.kolvo = end.getDate()-start.getDate()
    },
    setKratnost(value){
      this.treat.kratnost = value
    },
    showTreatSeans(){
      this.treat.seans = true
    },
    setRec(value){
      this.recommend.text = value
    },
    setData(){
      this.allData.push(this.appoint,this.after,this.treat,this.recommend)
    }
  },
});
