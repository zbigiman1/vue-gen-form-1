import { h } from 'vue'
import { FormField } from './useFormField'

export interface Validation {
  role: void | string
  message: string
}

export function useInput(props: FormField) {

  function setValue(name: string, event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value
    console.log(target)

    if (props.type === 'checkbox') {
      if (!props.formData[name].includes(value)) {
        props.formData[name].push(value)
      } else {
        const index = props.formData[name].indexOf(value)
        props.formData[name].splice(index, 1)
      }
    } else {
      props.formData[name] = value
    }

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