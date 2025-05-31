import { h } from 'vue'
import { FormField } from './useFormField'
import { ifArrayIcludes } from '@/helpers/helpers'

export interface Validation {
  role: void | string
  message: string
}

function setChecked(props: FormField) {
  switch (props.type) {
    case 'checkbox':
      return ifArrayIcludes(props.formData[props.name], props.value)
    case 'radio':
      return props.formData[props.name] === props.value
    default:
      return false
  }
}

export function useInput(props: FormField) {
  function setValue(name: string, event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value

    if (props.type === 'checkbox') {
      if (!ifArrayIcludes(props.formData[name],value)) {
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
      // checked: true,
      checked: setChecked(props),
      onInput: (event) => setValue(props.name, event)
    })
}