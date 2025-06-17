import { h } from 'vue'
import TextareaComponent from '../components/TextareaComponent.vue'
import { FormFieldExtended } from '../types/types'
import { useValidation } from './useValidation'

const { validateField } = useValidation()

export function useTextarea(props: FormFieldExtended) {
    function onUpdate(value: any) {
        props.formData.value[props.name] = value
        validateField(props)
    }

    return h(TextareaComponent, {
        name: props.name,
        label: props.label,
        type: props.type,
        rows: props.rows,
        cols: props.cols,
        errors: props.errors,
        modelValue: props.modelValue,
        pristine: props.pristine,
        'onUpdate:modelValue': onUpdate,
    })
}