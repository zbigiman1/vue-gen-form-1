import { Ref } from "vue"

export interface Validation {
    role: 'required' | string | Function
    message: string
}

export interface FormField {
    component: 'input' | 'textarea' | 'select'
    modelValue: any
    name: string
    label: string
    type: string
    rows?: number
    cols?: number
    value?: any,
    formData: Ref<any>
    pristine: Ref<boolean>
    validation: Validation[]
    errors: Ref<string[]>
    condition?: Function
}

export interface FormFieldSelect extends FormField {
    options: string[]
}

export interface Form {
    formData: any
    legend: string
    fields: FormField[]
    action: Function,
    submitButtonText: string
}