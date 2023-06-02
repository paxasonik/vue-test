<script>
import {defineComponent} from 'vue'
import Modal from '../UI/Modal.vue';
import Input from '../UI/Input.vue';
import {InputList,NameModal} from './constants';

export default defineComponent({
  name: "AddUser",
  components: {
    Modal,
    Input
  },
  data() {
    return {
      isModalVisible: false,
      InputList,
      NameModal
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      for (let i = 0; i < this.InputList.length; i++) {
        this.InputList[i].value = ''
      }
      this.isModalVisible = false;
    },
    addUser() {

    },
  }
})
</script>

<template>
  <div class="add__user">
    <button class="btn" @click="showModal">
      Добавить
    </button>
    <transition name="add__user">
      <Modal
        v-show="isModalVisible"
        :titleModal="NameModal"
        @closeModal="closeModal"
      >
        <template v-slot:content>
          <Input
            v-for="input in InputList"
            :key="input.id"
            v-model="input.value"
            :label="input.label"
            :type="input.type"
            :maska="input.maska"
          />
        </template>

        <template v-slot:footer>
          <button class="btn" @click="addUser">
            Сохранить
          </button>
        </template>
      </Modal>
    </transition>
  </div>
</template>

<style scoped>

</style>
