import { h } from 'vue'
import InputComponent from '@/components/InputComponent.vue'
import { FormField } from '@/types/types'
import { validate } from './useValidation'



export function useInput(props: FormField) {
    function onUpdate(value) {
        props.formData.value[props.name] = value
        validate(props)
    }
    return h(InputComponent, {
        name: props.name,
        label: props.label,
        type: props.type,
        errors: props.errors,
        modelValue: props.modelValue,
        pristine: props.pristine,
        'onUpdate:modelValue': onUpdate,
    })
}