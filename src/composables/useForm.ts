import { h, ref } from 'vue'
import { useInput } from "../composables/useInput"
import { Form, FormField } from '@/types/types'
import { useTextarea } from './useTextarea'



export function useForm(props: Form) {

    function renderFromField(field: FormField) {
        switch(field.component) {
            case 'input':
                return useInput(
                { 
                    name: field.name,
                    label: field.label,
                    type: field.type,
                    component: field.component,
                    value: field.value,
                    modelValue: field.modelValue,
                    formData: props.formData,
                    options: field.options,
                    validation: field.validation,
                    errors: ref([]),
                    pristine: ref(true)
                })
            case 'textarea':
                return useTextarea(
                { 
                    name: field.name,
                    label: field.label,
                    type: field.type,
                    component: field.component,
                    rows: field.rows,
                    value: field.value,
                    modelValue: field.modelValue,
                    formData: props.formData,
                    validation: field.validation,
                    errors: ref([]),
                    pristine: ref(true)
                })
            default: null
        }
    }


    return () => h('form',
        props.fields.map((field: FormField) => renderFromField(field))
    )
}