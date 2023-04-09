<template>
  <nav>
    <ul>
      <li v-for="portal in portals" :key="portal.id">
        <button @click="emit('click', portal)">
          {{ portal.name }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import { PortalConfig } from '@types'

  defineProps<{
    portals: PortalConfig[]
  }>()

  const emit = defineEmits<{
    (e: 'click', portal: PortalConfig): void
  }>()
</script>

<style lang="scss" scoped>
  nav {
    padding: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 10px;
  }

  button {
    display: block;
    width: 100%;
  }
</style>
