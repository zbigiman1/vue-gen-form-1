import { h, ref } from 'vue'
import { useInput } from "../composables/useInput"
import { Form, FormField } from '@/types/types'



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
                    modelValue: field.modelValue,
                    formData: props.formData,
                    validation: field.validation,
                    errors: ref([])
                })
            default: null
        }
    }


    return () => h('form',
        props.fields.map((field: FormField) => renderFromField(field))
    )
}