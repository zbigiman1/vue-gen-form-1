import { h } from 'vue'
import { FormField } from './useFormField'

export interface Validation {
    role: void | string
    message: string
}



export function useInput(props: FormField) {
    return h(
        'input', 
        { type: props.type, 
          class: 'form-input'  
        })
}