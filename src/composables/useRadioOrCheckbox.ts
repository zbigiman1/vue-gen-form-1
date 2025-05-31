import { h } from 'vue'
import { useInput } from './useInput'
import { FormField } from './useFormField'

export interface Validation {
    role: void | string
    message: string
}

export function useRadioOrCheckbox(props: FormField) {

    return (props.options.map(option => {
        return h('div', [
            useInput(
                {
                    ...props, ...{
                        value: option
                    }
                }),
            h('span', option)
        ])
    }))
}