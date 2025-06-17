import { h } from 'vue'
import SelectComponent from '../components/SelectComponent.vue'
import { FormFieldExtended } from '../types/types'
import { useValidation } from './useValidation'

const { validateField } = useValidation()

export function useSelect(props: FormFieldExtended) {
    function onUpdate(value: any) {
        props.formData.value[props.name] = value
        validateField(props)
    }

    return h(SelectComponent, {
        name: props.name,
        label: props.label,
        options: props.options,
        errors: props.errors,
        modelValue: props.modelValue,
        pristine: props.pristine,
        'onUpdate:modelValue': onUpdate,
    })
}