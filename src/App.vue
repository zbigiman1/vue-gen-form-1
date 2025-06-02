<script setup>
import { ref } from 'vue'
import { useForm } from "./composables/useForm"

const formData = ref({
  email: '',
  password: '',
  gender: 'male',
  hobby: ['sport', 'books'],
  bio: "Some text"
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
      {
        name: 'hobby',
        label: 'hobby',
        type: 'checkbox',
        options: ['sport', 'music', 'books'],
        component: 'input',
        value: formData.value.hobby,
        modelValue: ref(formData.value.hobby)
      },
      {
        name: 'bio',
        label: 'bio',
        type: 'bio',
        rows: 10,
        component: 'textarea',
        modelValue: ref(formData.value.email),
        validation: [{
          role: 'required',
          message: 'Bio is required'
        }]
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