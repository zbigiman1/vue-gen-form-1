import { h, ref } from 'vue'
import { useInput } from "./useInput"
import { Form, FormField, FormFieldSelect } from '../types/types'
import { useTextarea } from './useTextarea'
import { useSelect } from './useSelect'
import { useValidation } from './useValidation'

const { validiateForm } = useValidation()

export function useForm(props: Form) {

    function onFormSubmit(event: Event) {
        event.preventDefault()
        if (validiateForm(props.fields)) {
            props.action()
        }
    }

    function renderFromFieldSelect(field: FormFieldSelect) {
        field.errors = ref([])
        field.pristine = ref(true)
        field.formData = props.formData

        if (field.condition && !field.condition()) {
            return
        }

        return useSelect({
            name: field.name,
            label: field.label,
            type: field.type,
            component: field.component,
            value: field.value,
            modelValue: field.modelValue,
            formData: props.formData,
            options: field.options,
            validation: field.validation,
            pristine: field.pristine,
            errors: field.errors
        })
    }

    function renderFromField(field: FormField) {
        if (field.type === 'select') {
            field = field as FormFieldSelect
        }
        field.errors = ref([])
        field.pristine = ref(true)
        field.formData = props.formData

        if (field.condition && !field.condition()) {
            return
        }

        switch (field.component) {
            case 'input':
                return useInput(
                    {
                        name: field.name,
                        label: field.label,
                        type: field.type,
                        component: field.component,
                        value: field.value,
                        modelValue: field.modelValue,
                        formData: field.formData,
                        validation: field.validation,
                        pristine: field.pristine,
                        errors: field.errors
                    })
            case 'textarea':
                return useTextarea(
                    {
                        name: field.name,
                        label: field.label,
                        type: field.type,
                        component: field.component,
                        rows: field.rows,
                        cols: field.cols,
                        value: field.value,
                        modelValue: field.modelValue,
                        formData: props.formData,
                        validation: field.validation,
                        pristine: field.pristine,
                        errors: field.errors
                    })

            default: null
        }
    }
    return () => h('form',
        {
            class: 'form',
            onSubmit: onFormSubmit
        },
        h('fieldset',
            {
                class: 'form__fieldset'
            }, [
            h('legend',
                {
                    class: 'form__fieldset__legend'
                }, props.legend
            ),
            props.fields.map(field => field.type === 'select' ? renderFromFieldSelect(field as FormFieldSelect) : renderFromField(field)),
            h('button',
                {
                    type: 'submit',
                    class: 'form__submit-button'
                }, props.submitButtonText)
        ]))
}