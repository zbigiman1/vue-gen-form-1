import { h } from 'vue'
import TextareaComponent from '@/components/TextareaComponent.vue'
import { FormField } from '@/types/types'
import { validateField } from './useValidation'

export function useTextarea(props: FormField) {
    function onUpdate(value) {
        props.formData.value[props.name] = value
        validateField(props)
    }

    return h(TextareaComponent, {
        name: props.name,
        label: props.label,
        type: props.type,
        rows: props.rows,
        errors: props.errors,
        modelValue: props.modelValue,
        pristine: props.pristine,
        formData: props.formData,
        'onUpdate:modelValue': onUpdate,
    })
}