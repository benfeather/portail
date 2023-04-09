<template>
  <div class="layout">
    <Nav class="layout__nav" :portals="config.portals" @click="handleClick" />

    <main class="layout__content">
      <Portal
        v-for="portal in config.portals"
        :key="portal.id"
        :portal="portal"
        :hidden="portal.id !== activePortal.id"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { Config, PortalConfig } from '@types'
  import Nav from './components/Nav.vue'
  import Portal from './components/Portal.vue'

  const config: Config = {
    portals: [
      {
        id: 0,
        name: 'Github',
        src: 'https://www.github.com/',
      },
      {
        id: 1,
        name: 'VSCode',
        src: 'https://code.visualstudio.com/',
      },
    ],
  }

  const activePortal = ref(config.portals[0])

  function handleClick(portal: PortalConfig) {
    activePortal.value = portal
  }
</script>

<style lang="scss">
  .layout {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    width: 100%;
    height: 100%;

    &__nav {
      grid-row: 1 / 1;
      grid-column: 1 / 1;
    }

    &__content {
      grid-row: 1 / 1;
      grid-column: 2 / 2;
      display: grid;
      width: 100%;
      height: 100%;

      > * {
        grid-row: 1 / 1;
        grid-column: 1 / 1;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
