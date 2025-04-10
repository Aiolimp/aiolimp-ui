<template>
  <button :class="['px-4 py-2 rounded text-white', type === 'primary' ? 'bg-blue-500' : 'bg-gray-400']">
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  type: {
    type: String,
    default: 'default',
    validator: function (value: unknown): boolean {
      return typeof value === 'string' && ['primary', 'default'].includes(value);
    },
  },
});
</script>
