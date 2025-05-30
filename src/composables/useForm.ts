import { h } from 'vue'
import { FormField, useFormField } from './useFormField'

export interface Form {
    legend?: string
    formData: any
    fields: FormField[]
}

export function useForm(props: Form) {
    console.log(props)
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
                        type: field.type,
                        value: field.value,
                        formData: props.formData

                    })
            )
        ]
        )
    )
}