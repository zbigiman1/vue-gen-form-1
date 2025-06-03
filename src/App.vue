<script setup>
import { ref } from 'vue'
import { useForm } from "./composables/useForm"
import { REGEX } from './const/regex'

const formData = ref({
  email: '',
  password: '',
  repeatPassword: '',
  gender: 'male',
  hobby: ['sport', 'books'],
  bio: "Some text"
})

const onsubmit = () => {
  console.log(formData.value)
}

const MyForm = useForm({
  formData: formData,
  legend: 'Register Form',
  action: onsubmit,
  submitButtonText: 'Send',
  fields:
    [
      {
        name: 'email',
        label: 'email',
        type: 'email',
        component: 'input',
        modelValue: ref(formData.value.email),
        validation: [
          {
            role: 'required',
            message: 'The email is required'
          },
          {
            role: REGEX.EMAIL,
            message: 'Please enter the valid email.'
          }]
      },
      {
        name: 'password',
        label: 'password',
        type: 'password',
        component: 'input',
        modelValue: ref(formData.value.password),
        condition: () => formData.value.email,
        validation: [{
          role: 'required',
          message: 'Password is required'
        }, {
          role: REGEX.MIN_LENGTH(8),
          message: 'The password should be at least 8 characters long.'
        },
        {
          role: REGEX.LOWER_AND_UPPER_CASE,
          message: 'The password should contain at least one lowercase and one uppercase character.'
        },
        {
          role: REGEX.AT_LEAST_ONE_SPECIAL_CHARACTER,
          message: 'The password should contain at least one special character.'
        },
        {
          role: REGEX.AT_LEAST_ONE_NUMBER,
          message: 'The password should contain at least one number.'
        }]
      },
      {
        name: 'repeatPassword',
        label: 'repeat password',
        type: 'password',
        component: 'input',
        condition: () => formData.value.email,
        modelValue: ref(formData.value.repeatPassword),
        validation: [{
          role: 'required',
          message: 'The repeat password is required.'
        },
        {
          role: () => {
            return formData.value.password === formData.value.repeatPassword
          },
          message: 'Passwords do not match.'
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
        cols: 2,
        component: 'textarea',
        modelValue: ref(formData.value.bio),
        validation: [{
          role: 'required',
          message: 'Bio is required'
        }]
      },
      {
        name: 'country',
        label: 'country',
        options: ['US', 'UK'],
        component: 'select',
        value: formData.value.country,
        modelValue: ref(formData.value.country)
      },
    ]
})
</script>

<template>
  <MyForm />
  <pre>
    {{ formData }}
  </pre>
</template>