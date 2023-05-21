<script setup lang="ts">
const utils = useUtils();
const route = useRoute();

const { data: device, pending, error } = await useFetch(`/api/device?id=${route.params.id}`);

const usersHeader = useHeaders();

const headers = computed(() => {
  if (usersHeader) {
    if (Object.keys(usersHeader).includes("device-meta")) {
      // @ts-ignore
      return usersHeader["device-meta"];
    }
  }

  if (device.value) {
    const deviceKeys = utils.objectKeys(device.value);
    return deviceKeys;
  }

  return [];
});
</script>

<template>
  <v-card :loading="pending">
    <v-card-item>
      <v-card-title class="d-flex justify-space-between align-center">
        Device Meta
        <v-btn
          icon="mdi-settings-outline"
          :to="{ name: 'devices-id-settings', params: { id: route.params.id } }"
        ></v-btn>
      </v-card-title>

      <v-row v-for="(header, i) in headers" :key="header.key">
        <v-col> {{ header.title }}</v-col>
        <v-col> {{ device[header.key] }}</v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>

<style scoped></style>
