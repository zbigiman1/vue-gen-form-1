import { h } from 'vue'
import { FormFieldExtended } from '../types/types'
import { useValidation } from './useValidation'

const { validateField } = useValidation()

export function useCustomComponent(props: FormFieldExtended) {
    function onUpdate(value: any) {
        props.formData.value[props.name] = value
        validateField(props)
    }

    return h(props.component, {
        name: props.name,
        label: props.label,
        options: props.options,
        attrs: props.attrs,
        errors: props?.errors,
        modelValue: props.modelValue,
        pristine: props.pristine,
        'onChange': props.attrs.type === 'file' ? props.onFileUpload : null,
        'onUpdate:modelValue': onUpdate,
    })
}