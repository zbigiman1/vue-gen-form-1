<template>
    <div class="form-field">
        <label class="form-field__label" :for="name">{{ label }}</label>
        <textarea :class="'form-field__textarea'" :name="name" :type="type" :rows="rows" v-model="modelValue"
            @blur="onBlur" />
    </div>
    <div class="form-field__errors">
        <template v-for="error in errors">
            <span class="form-field__errors__item">{{ error }}</span>
        </template>
    </div>

</template>

<script setup lang="ts">
import { Ref, toRefs, watch } from 'vue'

const props = defineProps<{
    name: string
    label: string
    modelValue: any
    type: string
    rows?: number
    value?: any
    errors: Ref<string[]>
    pristine: Ref<boolean>
}>()
const { modelValue, type, rows, errors, pristine } = toRefs(props)
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