import { h } from 'vue'
import InputComponent from '@/components/InputComponent.vue'
import { FormField } from '@/types/types'
import { validate } from './useValidation'
import { ifArrayIcludes } from '@/helpers/helpers'



export function useInput(props: FormField) {
    function onUpdate(value) {
        console.log(value)
        props.formData.value[props.name] = value
        validate(props)
    }

    function setChecked() {
        return ifArrayIcludes(props.formData.value[props.name], props.value)
    }

    return h(InputComponent, {
        name: props.name,
        label: props.label,
        type: props.type,
        options: props.options,
        errors: props.errors,
        modelValue: props.modelValue,
        pristine: props.pristine,
        formData: props.formData,
        checked: setChecked,
        'onUpdate:modelValue': onUpdate,
    })
}