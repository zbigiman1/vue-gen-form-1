<script setup>
import { ref } from 'vue'
import { useForm } from './composables/useForm'

const fromData = ref({
  email: ''
},
{
  password: ''
})

const MyForm = useForm({
  legend: 'Login',
  formData: fromData.value,
  fields:
    [
      {
        component: 'input',
        name: 'email',
        label: 'email',
        type: 'email',
        value: fromData.value.email,
      }, {
        component: 'input',
        name: 'password',
        label: 'password',
        type: 'password',
        value: fromData.value.password,
      }
    ]
})
</script>

<template>
  <MyForm />
  <pre>{{ fromData  }}</pre>
</template>