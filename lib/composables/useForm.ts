import { h, ref } from 'vue'
import { useInput } from "./useInput"
import { Form, FormField } from '../types/types'
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

    function renderFromField(field: FormField) {
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
                        options: field.options,
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
            case 'select':
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
            default: null
        }
    }
    return () => h('form',
        {
            class: 'form',
            onSubmit: onFormSubmit
        },
        h('fieldset', {
            class: 'form__fieldset'
        }, [
            h('legend',
                {
                    class: 'form__fieldset__legend'
                }, props.legend),
            props.fields.map((field: FormField) => renderFromField(field)),
            h('button',
                {
                    type: 'submit',
                    class: 'form__submit-button'
                }, props.submitButtonText)
        ]))
}