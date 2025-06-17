import { h } from 'vue'
import InputComponent from '../components/InputComponent.vue'
import { FormFieldExtended } from '../types/types'
import { useValidation } from './useValidation'

const { validateField } = useValidation()

export function useInput(props: FormFieldExtended) {
    function onUpdate(value: any) {
        props.formData.value[props.name] = value
        validateField(props)
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
        'onChange': props.type === 'file' ? props.onFileUpload : null,
        'onUpdate:modelValue': onUpdate,
    })
}