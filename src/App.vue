<script setup>
import { ref } from 'vue'
import { useForm } from './composables/useForm'

const fromData = ref(
  {
    email: '',
    password: '',
    gender: '',
    hobby: [],
  }
)

const MyForm = useForm({
  legend: 'Register',
  formData: fromData.value,
  fields:
    [
      {
        component: 'input',
        type: 'email',
        name: 'email',
        label: 'email',

        value: fromData.value.email,
      }, {
        component: 'input',
        type: 'password',
        name: 'password',
        label: 'password',

        value: fromData.value.password,
      },
      {
        component: 'input',
        type: 'radio',
        name: 'gender',
        label: 'gender',
        options: ['female', 'male', 'custom'],
        value: fromData.value.password,
      },
      {
        component: 'input',
        type: 'checkbox',
        name: 'hobby',
        label: 'hobby',
        options: ['sport', 'music', 'book'],
        value: fromData.value.password,
      }
    ]
})
</script>

<template>
  <MyForm />
  <pre>{{ fromData }}</pre>
</template>