<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from "../lib/composables/useForm"
import { REGEX } from '../lib/const/regex'
import PasswordField from './components/PasswordField.vue'

const formData = ref({
  email: '',
  password: '',
  repeatPassword: '',
  gender: 'male',
  hobby: ['music','sport'],
  bio: '',
  photo: null,
  country: ''
})
const onsubmit = () => {
  console.log(formData.value)
}

function onPhotoUpload(event: Event) {
  const input = event.target as HTMLInputElement
  const files = Array.from(input?.files || [])
  formData.value.photo = files[0]
  console.log(files[0])
}

const MyForm = useForm({
  formData: formData,
  legend: 'Register Form',
  action: onsubmit,
  submitButtonText: 'Submit',
  fields:
    [
      {
        name: 'email',
        label: 'Email',
        placeholder: 'Email',
        type: 'email',
        component: 'input',
        section: 'Email',
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
        label: 'Password',
        placeholder: 'Password',
        type: 'password',
        component: PasswordField,
        section: 'Password',
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
        label: 'Repeat password',
        placeholder: 'Repeat password',
        type: 'password',
        component: PasswordField,
        section: 'Password',
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
        label: 'Gender',
        type: 'radio',
        options: ['female', 'male', 'custom'],
        component: 'input',
        section: 'Additional info',
        modelValue: ref(formData.value.gender),
        validation: [{
          role: 'required',
          message: 'The gender is required'
        }]
      },
      {
        name: 'hobby',
        label: 'Hobby',
        type: 'checkbox',
        options: ['sport', 'music', 'books'],
        component: 'input',
        section: 'Additional info',
        modelValue: ref(formData.value.hobby),
        validation: [{
          role: 'required',
          message: 'The hobbby is required'
        }]
      },
      {
        name: 'bio',
        label: 'Bio',
        placeholder: 'Bio',
        rows: 4,
        cols: 1,
        component: 'textarea',
        section: 'Additional info',
        modelValue: ref(formData.value.bio),
        validation: [{
          role: 'required',
          message: 'The bio is required'
        }]
      },
      {
        name: 'photo',
        label: 'Photo',
        placeholder: 'Photo',
        type: 'file',
        accept: 'image/png, image/jpeg',
        component: 'input',
        section: 'Additional info',
        modelValue: ref(formData.value.photo),
        onFileUpload: onPhotoUpload,
        validation: [{
          role: 'required',
          message: 'The photo is required'
        }]
      },
      {
        name: 'country',
        label: 'Country',
        options: ['US', 'UK'],
        component: 'select',
        section: 'Additional info',
        modelValue: ref(formData.value.country),
        validation: [{
          role: 'required',
          message: 'The country is required'
        }]
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