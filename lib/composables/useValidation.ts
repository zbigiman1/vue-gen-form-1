import { FormFieldExtended } from "../types/types";

export function useValidation() {

    function validateField(field: FormFieldExtended) {

        if (field.pristine.value) {
            return
        }

        field.errors.value = []
        const value = field.formData.value[field.name]

        field.validation?.forEach(element => {

            if (typeof element.role === 'function') {
                if (!element.role()) {
                    field.errors.value.push(element.message)
                }
            } else {
                if (element.role === 'required') {
                    if (!value || !value.length) {
                        field.errors.value.push(element.message)
                    }
                } else {
                    const regex = new RegExp(element.role)
                    if (!regex.test(value)) {
                        field.errors.value.push(element.message)
                    }
                }
            }
        })
    }

    function validiateForm(fields: FormFieldExtended[]) {
        let isFormValid = true
        fields.forEach((field) => {
            field.pristine.value = false
            validateField(field)
            if (field.errors.value.length) {
                isFormValid = false
            }
        })
        return isFormValid
    }
    return {
        validateField,
        validiateForm
    }
}