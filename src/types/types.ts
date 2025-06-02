import { Ref } from "vue"

export interface Validation {
    role: 'required' | void | string
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
    multiple?: boolean
    value?: any,
    options?: string[],
    formData: Ref<any>
    pristine?: Ref<boolean>
    validation?: Validation[]
    errors?: Ref<string[]>
}


export interface Form {
    formData: any,
    fields: FormField[]
}