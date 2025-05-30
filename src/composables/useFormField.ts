import { h } from 'vue'
import { useInput } from './useInput'

export interface Validation {
    role: void | string
    message: string
}

export interface FormField {
    component: 'input' | 'select' | 'radio' | 'checkbox'
    name: string
    label: string
    type: string
    errors?: string[]
    validation?: Validation[]

}

export function useFormField(props: FormField) {

    function renderFromControl(props: FormField) {
        switch (props.component) {
            case 'input':
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
            renderFromControl(props)
        ],
    )
}