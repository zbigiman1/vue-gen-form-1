<template>
    <div class="form__field">
        <label class="form__field__label" :for="name">{{ label }}</label>
        <textarea class="form__field__textarea" :name="name" :placeholder="placeholder" :rows="rows" :cols="cols"
            v-model="modelValue" @blur="onBlur">{{ modelValue }}</textarea>
        <div class="form__field__errors">
            <template v-for="error in errors">
                <div class="form__field__errors__item">{{ error }}</div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref, toRefs, watch } from 'vue';

const props = defineProps<{
    name: string
    label: string
    placeholder?: string
    modelValue: any
    rows?: number
    cols?: number
    value?: any
    errors: Ref<string[]>
    pristine: Ref<boolean>
}>()
const { modelValue, rows, errors, pristine } = toRefs(props)
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