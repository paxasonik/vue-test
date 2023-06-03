<script>
import {defineComponent} from 'vue'
import {mapActions} from 'pinia';
import Modal from '../UI/Modal.vue';
import Input from '../UI/Input.vue';
import {InputList,NameModal} from './constants';
import {useUserStore} from '../../stores/user';


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
  computed: {
    getUserData() {
      const userData = {}
      for (let i = 0; i < this.InputList.length; i++) {
        userData[this.InputList[i].key] = this.InputList[i].value
      }
      return userData
    },
    isUserData() {
      return !this.getUserData.name && !this.getUserData.phone
    }
  },
  methods: {
    ...mapActions(useUserStore, ['addUser']),

    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      for (let i = 0; i < this.InputList.length; i++) {
        this.InputList[i].value = ''
      }
      this.isModalVisible = false;
    },
    submit() {
      this.addUser(this.getUserData)
      this.closeModal()
    }
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
          <button class="btn" @click="submit" :disabled="isUserData">
            Сохранить
          </button>
        </template>
      </Modal>
    </transition>
  </div>
</template>

<style scoped>

</style>
