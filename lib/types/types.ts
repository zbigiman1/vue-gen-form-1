import type { Component } from 'vue'
import { Ref } from "vue"

export interface Validation {
    role: 'required' | RegExp | Function
    message: string
}

export interface FormField {
    component: 'input' | 'textarea' | 'select' | Component
    modelValue: any
    name: string
    label: string
    attrs?: any
    options?: string[]
    onFileUpload?: Function
    condition?: Function
    validation: Validation[]
    section?: string
}

export interface FormFieldExtended extends FormField {
    formData: Ref<any>
    pristine: Ref<boolean>
    errors: Ref<string[]>
}

export interface Form {
    formData: any
    legend?: string
    fields: FormField[]
    action: Function,
    submitButtonText: string
}