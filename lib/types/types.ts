import { Ref } from "vue"

export interface Validation {
    role: 'required' | RegExp | Function
    message: string
}

export interface FormField {
    component: 'input' | 'textarea' | 'select'
    modelValue: any
    name: string
    label: string
    type?: string
    rows?: number
    cols?: number
    accept?: string
    options?: string[]
    onFileUpload?: Function
    condition?: Function
    validation: Validation[]

}

export interface FormFieldExtended extends FormField {
    formData: Ref<any>
    pristine: Ref<boolean>
    type: string
    errors: Ref<string[]>

}

export interface Form {
    formData: any
    legend: string
    fields: FormField[]
    action: Function,
    submitButtonText: string
}