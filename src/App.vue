<script setup>
import { ref } from 'vue'
import { useForm } from "./composables/useForm"

const formData = ref({
  email: 'test',
  password: ''
})

const formShema = 
  {
  formData: formData,
  fields:
    [
      {
        name: 'email',
        label: 'email',
        type: 'email',
        component: 'input',
        modelValue: ref(formData.value.email),
        validation: [{
          role: 'required',
          message: 'Email is required'
        }]
      }, {
        name: 'password',
        label: 'password',
        type: 'password',
        component: 'input',
        modelValue: ref(formData.value.password)
      }
    ]
}


const MyForm = useForm(formShema)
</script>

<template>
  <MyForm />
  <pre>
    {{ formData }}
  </pre>
</template>