<script>
import {defineComponent} from 'vue'
import {mapActions, mapState} from 'pinia';
import Modal from '../UI/Modal.vue';
import FormField from "../UI/Form/FormField.vue";
import FormSelect from "../UI/Form/FormSelect.vue";
import FormInput from "../UI/Form/FormInput.vue";
import {InputList,NameModal,SelectLabel,SelectPlaceholder} from './constants';
import {useUserStore} from '../../stores/user';


export default defineComponent({
  name: "AddUser",
  components: {
    FormInput,
    FormSelect,
    FormField,
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
      director: '',
      InputList,
      NameModal,
      SelectLabel,
      SelectPlaceholder,
    }
  },
  computed: {
    ...mapState(useUserStore, [
      'getAllUsers',
      'usersLength'
    ]),
    getUserData() {
      const userData = {}
      for (let i = 0; i < this.InputList.length; i++) {
        userData[this.InputList[i].key] = this.InputList[i].value
      }
      userData.id = this.usersLength
      userData.children = []
      return userData
    },
    isCompletedForm () {
      return !this.getUserData.name || !this.getUserData.phone
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
      this.director = '';
      this.isModalVisible = false;
    },
    submit() {
      this.addUser(this.getUserData, this.director)
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
          <FormField v-for="input in InputList" :key="input.id" :label="input.label">
            <FormInput
              :type="input.type"
              :maska="input.maska"
              :placeholder="input.placeholder"
              :value.sync="input.value"
            />
          </FormField>
          <FormField :label="SelectLabel" v-if="usersLength">
            <FormSelect
              :options="getAllUsers"
              :placeholder="SelectPlaceholder"
              :value.sync="director"
              :selected="director"
            />
          </FormField>
        </template>

        <template v-slot:footer>
          <button class="btn" @click="submit" :disabled="isCompletedForm">
            Сохранить
          </button>
        </template>
      </Modal>
    </transition>
  </div>
</template>

<style scoped>

</style>
