import { h } from 'vue'
import SelectComponent from '@/components/SelectComponent.vue'
import { FormField } from '@/types/types'
import { validate } from './useValidation'

export function useSelect(props: FormField) {
    function onUpdate(value) {
        props.formData.value[props.name] = value
        validate(props)
    }

    return h(SelectComponent, {
        name: props.name,
        label: props.label,
        options: props.options,
        multiple: props.multiple,
        errors: props.errors,
        modelValue: props.modelValue,
        pristine: props.pristine,
        formData: props.formData,
        'onUpdate:modelValue': onUpdate,
    })
}