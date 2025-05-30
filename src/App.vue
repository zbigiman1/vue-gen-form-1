<script setup>
import { useForm } from "./composables/useForm"


const MyForm = useForm({
  legend: 'Login',
  fields:
    [
      {
        component: 'input',
        mame: 'email',
        label: 'email',
        type: 'email',
      }, {
        component: 'input',
        name: 'password',
        label: 'password',
        type: 'password',
      }
    ]
})
</script>

<template>
  <MyForm />
</template>