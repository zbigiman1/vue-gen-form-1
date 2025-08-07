<template>
    <div class="form__field">
        <label class="form__field__label" :for="name">{{ label }}</label>
        <template v-if="attrs.type === 'radio' || attrs.type === 'checkbox'">
            <template v-if="attrs.type === 'radio'">
                <div v-for="option in options" class="form__field__option-wraper">
                    <input class="form__field__input--radio" :name="name" :type="attrs.type" :value="option"
                        v-bind="{ ...attrs }" v-model="modelValue">
                    <span class="form__field__input__checkbox-radio-option">{{ option }}</span>
                </div>
            </template>
            <template v-else>
                <div v-for="option in options" class="form__field__option-wraper">
                    <input class="form__field__input--checkbox" :name="name" :value="option" v-model="modelValue"
                        v-bind="{ ...attrs }">
                    <span class="form__field__input__checkbox-radio-option">{{ option }}</span>
                </div>
            </template>
        </template>
        <template v-else>
            <input class="form__field__input" :name="name" v-model="modelValue"
                v-bind="{ ...attrs }" @blur="onBlur">
        </template>
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
    modelValue: any
    attrs?: any
    options?: string[]
    errors: Ref<string[]>
    pristine: Ref<boolean>
}>()

const { modelValue, options, errors, pristine, attrs } = toRefs(props)
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