import { h } from 'vue'
import InputComponent from '../components/InputComponent.vue'
import { FormFieldExtended } from '../types/types'
import { ifArrayIcludes } from '../utils/utils'
import { useValidation } from './useValidation'

const { validateField } = useValidation()

export function useInput(props: FormFieldExtended) {
    function onUpdate(value: any) {
        props.formData.value[props.name] = value
        validateField(props)
    }

    function setChecked() {
        return ifArrayIcludes(props.formData.value[props.name], props.modelValue.value)
    }

    return h(InputComponent, {
        name: props.name,
        label: props.label,
        type: props.type,
        options: props.options,
        accept: props.accept,
        errors: props?.errors,
        modelValue: props.modelValue,
        pristine: props.pristine,
        checked: setChecked,
        'onChange': props.type === 'file' ? props.onFileUpload : null,
        'onUpdate:modelValue': onUpdate,
    })
}