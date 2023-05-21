<script setup></script>

<template>
  <VContainer fluid>
    <VRow align="start">
      <VCol cols="12" md="6">
        <DeviceLastReadings />
      </VCol>
      <VCol cols="12" md="3">
        <DeviceMeta />
      </VCol>
    </VRow>
  </VContainer>
</template>

<style lang="scss" scoped>
#device-dashboard {
  gap: 1rem;
}
</style>
