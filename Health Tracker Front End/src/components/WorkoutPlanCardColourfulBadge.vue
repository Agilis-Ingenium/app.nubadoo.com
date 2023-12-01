<script setup>
import {
    classString
} from "./helpers/workplan-helpers"

defineProps({
    text: {
        type: String,
        required: true
    },
    planId: {
        required: true
    }
})
</script>

<template>
    <span :class="[classString(planId)]">
        {{ text }}
    </span>
</template>