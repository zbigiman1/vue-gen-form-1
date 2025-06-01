import { FormField } from "@/types/types";

export function validate(field: FormField) {

    if (field.pristine.value) {
        return
    }

    field.validation?.forEach(element => {
        field.errors.value = []
        if (element.role === 'required' && !field.formData.value[field.name]) {
            field.errors.value.push(element.message)
        }
    });
}