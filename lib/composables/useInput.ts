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
        attrs: props.attrs,
        options: props.options,
        errors: props?.errors,
        modelValue: props.modelValue,
        pristine: props.pristine,
        'onChange': props.attrs && props.attrs.type === 'file' ? props.onFileUpload : null,
        'onUpdate:modelValue': onUpdate,
    })
}