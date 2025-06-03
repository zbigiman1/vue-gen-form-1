import { FormField } from "@/types/types";
import { ref } from "vue";

export function validateField(field: FormField) {

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
                if (!value) {
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

export function validiateForm(fields: FormField[]) {
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