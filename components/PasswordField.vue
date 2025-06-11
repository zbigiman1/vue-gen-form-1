<template>
    <div class="form__field">
        <label class="form__field__label" :for="name">{{ label }}</label>
        <input :class="'form__field__input'" :name="name" :type="isShowPassword ? 'text' : type" v-model="modelValue" @blur="onBlur">
        <button type="button" @click="showPassword">
            <template v-if="isShowPassword">
                hide password
            </template>
            <template v-else>
                show password
            </template>            
        </button>
        <div class="form__field__errors">
            <template v-for="error in errors">
                <div class="form__field__errors__item">{{ error }}</div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref, toRefs, watch } from 'vue'

const props = defineProps<{
    name: string
    label: string
    modelValue: any
    type: string
    value?: any
    errors: Ref<string[]>
    pristine: Ref<boolean>
}>()

const { modelValue, type, errors, pristine } = toRefs(props)
const emit = defineEmits(['update:modelValue'])

const isShowPassword = ref(false)

function showPassword() {
    isShowPassword.value = !isShowPassword.value
}

function onBlur() {
    pristine.value = false
    emit('update:modelValue', modelValue.value)
}

watch(modelValue, (value) => {
    emit('update:modelValue', value)
})
</script>

<style scoped></style>