<script>
export default {
  name: 'host-list',
  props: {
    show:{
      type: Boolean,
      default: true,
    },
  },
  methods: {
    closeModal(){
      this.$emit('close', false)
    }
  }
}
</script>

<template>
  <div class="dialog" v-show="show" @click="closeModal">
    <div @click.stop class="dialog__content">
      К сожалению вы написали не существующий url-адрес! Попробуйте ещё раз!
    </div>
  </div>
</template>

<style scoped>
.dialog {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>
