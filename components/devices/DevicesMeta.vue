<script setup lang="ts">
const user = useUser();

const {
  data: deviceMeta,
  pending,
  error,
} = await useFetch("/api/devices-meta?company=" + user.value?.company);

const status = deviceMeta.value?.status;
</script>

<template>
  <v-card class="mx-auto">
    <v-list density="compact">
      <v-list-subheader>
        <VIcon icon="mdi-smoke-detector-outline" />Devices overview
      </v-list-subheader>
      <v-list-item
        v-for="(item, i) in status"
        :key="i"
        :value="item"
        :title="i"
        :subtitle="item"
        density="compact"
        lines="two"
        :link="false"
      >
      </v-list-item>
    </v-list>
  </v-card>
</template>

<style scoped></style>
