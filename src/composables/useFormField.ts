import { h } from 'vue'
import { useInput } from './useInput'
import { useRadioOrCheckbox } from './useRadioOrCheckbox'

export interface Validation {
    role: void | string
    message: string
}

export interface FormField {
    component: 'input' | 'textarea' | 'select' | 'datalist'
    name: string
    label: string
    type: string
    value: any,
    formData: any
    options: any[]
    errors?: string[]
    validation?: Validation[]

}

export function useFormField(props: FormField) {

    function renderFromField(props: FormField) {
        switch (props.component) {
            case 'input':
                if (props.type === 'radio' || props.type === 'checkbox') {
                    return useRadioOrCheckbox(props)
                }
                return useInput(props)
            default: null
        }
    }

    return h(
        'div',
        {
            class: 'form-field-wrapper'

        },
        [
            h(
                'label',
                {
                    for: props.label,
                    class: 'form-field-label'


                }, props.label),
            renderFromField(props)
        ],
    )
}