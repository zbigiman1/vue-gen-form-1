import { h } from 'vue'
import { FormField, useFormField } from './useFormField'

export interface Form {
    legend?: string
    fields: FormField[]
}

export function useForm(props: Form) {
    return () => h(
        'form',
        h('fieldset', [
            h('legend', props.legend),
            props.fields.map((field: FormField) =>
                useFormField(
                    {
                        component: field.component,
                        name: field.name,
                        label: field.label,
                        type: field.type

                    })
            )
        ]
        )
    )
}