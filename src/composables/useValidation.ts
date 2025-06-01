import { FormField } from "@/types/types";

export function validate(field: FormField) {
    field.validation.forEach(element => {
        field.errors.value = []
        if (element.role === 'required' && !field.formData.value[field.name]) {
            console.log(element.message)
            field.errors.value.push(element.message)
        }
    });
}