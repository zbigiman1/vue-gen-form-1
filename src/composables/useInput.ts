import { h, defineEmits } from 'vue'
import { FormField } from './useFormField'

export interface Validation {
    role: void | string
    message: string
}



export function useInput(props: FormField) {

    function setValue(name:string, event) {
      const target = event.target
      props.formData[name] = target.value
    }

    return h(
        'input', 
        { 
          name: props.name,
          type: props.type, 
          value: props.value,
          class: 'form-input', 
          onInput: (event) => setValue(props.name, event)
        })
}