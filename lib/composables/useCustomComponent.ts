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
        placeholder: props.placeholder,
        label: props.label,
        type: props.type,
        options: props.options,
        accept: props.accept,
        rows: props.rows,
        cols: props.cols,
        errors: props?.errors,
        modelValue: props.modelValue,
        pristine: props.pristine,
        'onChange': props.type === 'file' ? props.onFileUpload : null,
        'onUpdate:modelValue': onUpdate,
    })
}