import { Ref } from "vue"

export interface Validation {
    role: 'required' | void | string
    message: string
}

export interface FormField {
    component: 'input' | 'textarea' | 'select'
    name: string
    label: string
    type: string
    modelValue: any
    formData: Ref<any>
    pristine?: Ref<boolean>
    validation?: Validation[]
    errors?: Ref<string[]>
}


export interface Form {
    formData: any,
    fields: FormField[]
}