import { FormField } from "@/types/types";
import { ref } from "vue";

export function validate(field: FormField) {

    if (field.pristine.value) {
        return
    }

    field.errors.value = []

    const value = field.formData.value[field.name]
    console.log(field.formData.value[field.name])
    field.validation?.forEach(element => {
        if (element.role === 'required' && !value) {
            field.errors.value.push(element.message)
        } else {
            const regex = new RegExp(element.role)
            if (!regex.test(value)) {
                field.errors.value.push(element.message)
            }
        }
    })

    console.log(field.errors.value)
}   