import type { Component } from 'vue'
import { Ref } from "vue"

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
    placeholder?: string
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
    legend?: string
    fields: FormField[]
    action: Function,
    submitButtonText: string
}