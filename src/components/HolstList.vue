<script>
export default {
  props:{
    selectOption:{
      type: String,
    },
    input:{
      type: String,
    },
    result:{
      type: Array,
    }
  }
}
</script>

<template>
  <div class="result" v-show="result.length !== 0">
    <ul v-show="selectOption === 'Данные хостинга'">
      <li><strong>Данные хостинга</strong>: {{input}}<hr/></li>
      <li v-for="(value, name) in result[0]" :key="value"><strong>{{name}}</strong>: {{value}}<hr/></li>
    </ul>
    <ul>
      <li v-for="item in result" :key="item?.name" v-show="selectOption === 'Технологии'"><strong>Технология:</strong> {{item?.name}}<hr/></li>
    </ul>
  </div>
</template>

<style scoped>

</style>
