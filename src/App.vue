<script setup>
import { ref } from 'vue'
import { useForm } from "./composables/useForm"

const formData = ref({
  email: '',
  password: '',
  gender: 'male',
  hobby: ['books', 'sport']
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
      },
      {
        name: 'password',
        label: 'password',
        type: 'password',
        component: 'input',
        modelValue: ref(formData.value.email),
        validation: [{
          role: 'required',
          message: 'Password is required'
        }]

      }, {
        name: 'gender',
        label: 'gender',
        type: 'radio',
        options: ['female', 'male', 'custom'],
        component: 'input',
        value: formData.value.gender,
        modelValue: ref(formData.value.gender)
      },
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