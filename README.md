# vue-gen-form-1

Lightweight, powerful CSS framework agnostic, form generator with validation, sections, conditional fields and custom components.

## Documentation
https://medium.com/@john.stamp/the-vue-gen-form-1-4a17865af9ae

## Install

```sh
npm i vue-gen-form-1
```

## The form schema

### Types
```ts
import { Ref } from "vue"
import type { Component } from 'vue'

export type InputType = 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'month' |
    'number' | 'password' | 'radio' | 'range' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week'

export interface Validation {
    role: 'required' | RegExp | Function
    message: string
}

export interface FormField {
    component: 'input' | 'textarea' | 'select' | Component
    modelValue: any
    name: string
    label: string
    type?: InputType
    rows?: number
    cols?: number
    accept?: string
    options?: string[]
    onFileUpload?: Function
    condition?: Function
    validation: Validation[]
    section?: string
}

export interface FormFieldExtended extends FormField {
    formData: Ref<any>
    pristine: Ref<boolean>
    type: InputType
    errors: Ref<string[]>

}

export interface Form {
    formData: any
    legend: string
    fields: FormField[]
    action: Function,
    submitButtonText: string
}
```

### The example:
https://github.com/zbigiman1/vue-gen-form-1-example

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useForm, REGEX } from "vue-gen-form-1"

const formData = ref({
  email: '',
  password: '',
  repeatPassword: '',
})

const onsubmit = () => {
  console.log(formData.value)
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
        label: 'Password',
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
        label: 'Repeat password',
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
      },      
    ]
})
</script>

<template>
  <main class="flex gap-10">
    <MyForm class="w-1/2" />
    <pre class="w-1/2 p-4 bg-gray-800 text-gray-200">{{ formData }}</pre>
  </main>
</template>
```


