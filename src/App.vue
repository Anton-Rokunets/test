<script>
import axios from "axios";
import HolstList from "./components/HolstList.vue";
import MyDialog from "./components/MyDialog.vue";
export default {
  components:{
    HolstList, MyDialog
  },
  data(){
    return {
      input: '',
      result: [],
      options: ['Данные хостинга', 'Технологии'],
      selectOption: '',
      isLoading: false,
      isError: false
    }
  },
  methods: {
    async reqHost () {
      try{
        this.result = [];
        this.isLoading = false;
        if(this.selectOption === '') this.selectOption= 'Данные хостинга';
        if(this.selectOption === 'Данные хостинга'){
          this.isLoading = true;
          const response = await axios.get(`https://www.who-hosts-this.com/API/Host?key=6252cf7b9f5534edd8d5e40b4660fe03bcadfb2336018f21986567633b9adb776df7d8&url=${this.input}`);
          this.isLoading = false;
          if(response.status === 200 && response.data.result.code !== 111){
            this.result[0] = response.data.results[0];
          } else{
            this.isError = true;
          }
        }

        if(this.selectOption === 'Технологии'){
          this.isLoading = true;
          const response = await axios.get(`https://whatcms.org/API/Tech?key=6252cf7b9f5534edd8d5e40b4660fe03bcadfb2336018f21986567633b9adb776df7d8&url=${this.input}`);
          this.isLoading = false;
          if(response.status === 200 && response.data.result.code !== 111){
            this.result = response.data.results;
          } else{
            this.isError=true
          }
        }
      } catch (e){
        this.isError=true
        console.log(e)
      }
    },
    closeModal(){
      this.isError=false;
      this.result =[];
      this.input = '';
    }
  }
}
</script>

<template>
  <div class="container">
    <h2>Информация о сайте</h2>
    <div class="header">
      <select @change="selectOption = $event.target.value">
        <option v-for="op in options" :key="op">{{op}}</option>
      </select>
      <input type="text" @input="input = $event.target.value" @keydown.enter="reqHost"
             v-model="input" placeholder="Введите название сайта">
      <button @click="reqHost" >Отправить</button>
    </div>
    <holst-list :result :input :select-option/>
    <div v-show="isLoading" class="isLoading">Идет загрузка...</div>
    <my-dialog v-model:show="isError" @close="closeModal"/>
  </div>
</template>

<style src="./style.css"></style>
