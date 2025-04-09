<template>
  <button :class="['px-4 py-2 rounded text-white', type === 'primary' ? 'bg-blue-500' : 'bg-gray-400']">
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  type?: 'primary' | 'default';
}>();
</script>
