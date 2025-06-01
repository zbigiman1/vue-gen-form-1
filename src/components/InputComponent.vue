<template>
    <div class="form-field">
        <label class="form-field__label" :for="name">{{ label }}</label>
        <input class="form-field__input" :name="name" :type="type" v-model="modelValue">
        <div class="form-field__errors">
            <template v-for="error in errors">
                <span class="form-field__errors__item">{{ error }}</span>
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
    type: string
    errors: Ref<string[]>
}>()

const { modelValue, type, errors } = toRefs(props)
const emit = defineEmits(['update:modelValue'])

watch(modelValue, (value) => {
    emit('update:modelValue', value)
})
</script>

<style scoped>

</style>