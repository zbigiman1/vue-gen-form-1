<script setup>
import { ref } from 'vue'
import { useForm } from './composables/useForm'

const fromData = ref(
  {
    email: 'test@email.com',
    password: '',
    gender: 'male',
    hobby: ['book', 'music'],
  }
)

const formShema = ref({
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

const MyForm = useForm(formShema.value)
</script>

<template>
  <MyForm />
  <h3>Form data</h3>
  <pre>{{ fromData }}</pre>
  <h3>Form shema</h3>
  <pre>{{ formShema }}</pre>
</template>