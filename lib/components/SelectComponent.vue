<template>
    <div class="form__field">
        <label class="form__field__label" :for="name">{{ label }}</label>
        <select class="form__field__select" :name="name" v-model="modelValue" v-bind="{ ...attrs }" @blur="onBlur">
            <template v-for="option in options">
                <option>{{ option }}</option>
            </template>
        </select>
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
    options: string[] | undefined
    attrs?: any
    value?: any
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