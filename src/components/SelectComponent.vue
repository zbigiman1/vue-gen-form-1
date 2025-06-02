<template>
    <div class="form-field">
        <label class="form-field__label" :for="name">{{ label }}</label>
        <select class="'form-field__select'" :name="name" :multiple="multiple"
            v-model="modelValue" @blur="onBlur">
            <template v-for="option in options">
                <option>{{ option }}</option>
            </template>
        </select>
        <div class="form-field__errors">
            <template v-for="error in errors">
                <span class="form-field__errors__item">{{ error }}</span>
            </template>
        </div>
    </div>


</template>

<script setup lang="ts">
import { onMounted, ref, Ref, toRefs, watch } from 'vue'

const props = defineProps<{
    name: string
    label: string
    modelValue: any
    options: string[]
    multiple: boolean
    value?: any
    errors: Ref<string[]>
    pristine: Ref<boolean>
}>()
const { modelValue, options, errors, multiple, pristine } = toRefs(props)
const emit = defineEmits(['update:modelValue'])

function onBlur() {
    pristine.value = false
    emit('update:modelValue', modelValue.value)
}

watch(modelValue, (value) => {
    emit('update:modelValue', value)
})

</script>

<style scoped></style>