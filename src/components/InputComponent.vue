<template>
    <div class="form-field">
        <label class="form-field__label" :for="name">{{ label }}</label>
        <template v-if="type === 'radio' || type === 'checkbox'">
            <template v-if="type === 'radio'">
                <div v-for="option in options" class="form-field__option-wraper">
                    <input class="form-field__input--radio"
                        :name="name" :type="type" :value="option" v-model="modelValue" @blur="onBlur">
                    <span class="form-field__input__checkbox-radio-option">{{ option }}</span>
                </div>
            </template>
            <template v-else>
                <div v-for="option in options" class="form-field__option-wraper">
                    <input class="form-field__input--checkbox"
                        :name="name" :type="type" @blur="onBlur">
                    <span class="form-field__input__checkbox-radio-option">{{ option }}</span>
                </div>
            </template>
        </template>
        <template v-else>
            <input :class="'form-field__input--radio'" :name="name" :type="type" v-model="modelValue" @blur="onBlur">
        </template>
        <div class="form-field__errors">
            <template v-for="error in errors">
                <span class="form-field__errors__item">{{ error }}</span>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref, toRefs, watch } from 'vue'

const props = defineProps<{
    name: string
    label: string
    modelValue: any
    type: string
    value?: any
    options?: string[]
    errors: Ref<string[]>
    pristine: Ref<boolean>
}>()

const { modelValue, type, options, errors, pristine } = toRefs(props)
const emit = defineEmits(['update:modelValue'])

function onBlur() {
    pristine.value = false
}

watch(modelValue, (value) => {
    emit('update:modelValue', value)
})
</script>

<style scoped></style>