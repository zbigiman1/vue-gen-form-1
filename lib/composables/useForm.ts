import { h, ref } from 'vue'
import { Form, FormFieldExtended } from '../types/types'
import { useCustomComponent } from './useCustomComponent'
import { useInput } from "./useInput"
import { useSelect } from './useSelect'
import { useTextarea } from './useTextarea'
import { useValidation } from './useValidation'

const { validiateForm } = useValidation()

export function useForm(props: Form) {

    const sections = Array.from(new Set(props.fields.map(field => {
        if(field.section) {
            return field.section
        } 
    })))

    function onFormSubmit(event: Event) {
        event.preventDefault()
        if (validiateForm(props.fields as any)) {
            props.action()
        }
    }

    function renderFromField(field: FormFieldExtended) {
        field.errors = ref([])
        field.pristine = ref(true)
        field.formData = props.formData

        if (field.condition && !field.condition()) {
            return
        }

        if (typeof field.component === 'string') {

            switch (field.component) {
                case 'input':
                    return useInput(
                        {
                            name: field.name,
                            label: field.label,
                            type: field.type,
                            options: field.options,
                            accept: field.accept,
                            component: field.component,
                            modelValue: field.modelValue,
                            onFileUpload: field.onFileUpload,
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
                        options: field.options,
                        component: field.component,
                        modelValue: field.modelValue,
                        formData: props.formData,
                        validation: field.validation,
                        pristine: field.pristine,
                        errors: field.errors
                    })

                default: null
            }
        } else {
            
            return useCustomComponent(
                {
                    name: field.name,
                    label: field.label,
                    type: field.type,
                    options: field.options,
                    accept: field.accept,
                    component: field.component,
                    modelValue: field.modelValue,
                    onFileUpload: field.onFileUpload,
                    formData: field.formData,
                    validation: field.validation,
                    pristine: field.pristine,
                    errors: field.errors
                })
        }
    }

    function renderFormSections() {    
        
        return sections.map(section => {
            const sectionFields = props.fields.filter(
            field => field.section === section && !(field.condition && !field.condition()))

            if (!sectionFields.length) {
                return
            }

            return h('fieldset', {
                class: 'form__section'
            },[
                h('legend', { class: 'form__section__legend' }, section),
                sectionFields.map(field => renderFromField(field as FormFieldExtended))
            ])
        })
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
            renderFormSections(),
            h('button',
                {
                    type: 'submit',
                    class: 'form__submit-button'
                }, props.submitButtonText)
        ]))
}