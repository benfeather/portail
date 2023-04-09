<template>
  <div class="portal">
    <webview :key="portal.id" :src="portal.src"></webview>
  </div>
</template>

<script setup lang="ts">
  import { PortalConfig } from '@types'

  defineProps<{
    portal: PortalConfig
  }>()
</script>

<style lang="scss">
  .portal {
    display: block;

    > webview {
      width: 100%;
      height: 100%;
    }
  }
</style>
