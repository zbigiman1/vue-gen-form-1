import { FormField } from "@/types/types";

export function validate(field: FormField) {

    if (field.pristine.value) {
        return
    }
    field.errors.value = []
    const value = field.formData.value[field.name]

    field.validation?.forEach(element => {
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
    })
}   