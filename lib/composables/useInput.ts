import { h } from 'vue'
import InputComponent from '../components/InputComponent.vue'
import { FormField } from '../types/types'
import { ifArrayIcludes } from '../utils/utils'
import { useValidation } from './useValidation'

const { validateField } = useValidation()

export function useInput(props: FormField) {
    function onUpdate(value: any) {
        props.formData.value[props.name] = value
        validateField(props)
    }

    function setChecked() {
        return ifArrayIcludes(props.formData.value[props.name], props.value)
    }

    return h(InputComponent, {
        name: props.name,
        label: props.label,
        type: props.type,
        errors: props?.errors,
        modelValue: props.modelValue,
        pristine: props.pristine,
        formData: props.formData,
        checked: setChecked,
        'onUpdate:modelValue': onUpdate,
    })
}