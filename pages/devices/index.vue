<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";
import type { Headers } from "@/types";
const router = useRouter();
const itemsPerPage = ref(25);
const user = useUser();

const {
  data: devices,
  pending,
  error,
  refresh,
} = await useAsyncData("devices", () => $fetch(`/api/devices?company=${user.value?.company}`));

const usersHeader = useHeaders();

const headers = computed(() => {
  if (usersHeader && usersHeader["devices"]) {
    return usersHeader["devices"];
  }

  const deviceKeys = Object.keys(devices[0]).map((key) => {
    return {
      title: key,
      key: key,
    } as Headers;
  });
  return deviceKeys;
});

const onClick = (event: Event, item: any) => {
  const deviceId = item.item.value;
  if (deviceId) {
    router.push({ path: `/device/${deviceId}` });
  }
};
</script>

<template>
  <VContainer fluid>
    <VRow align="baseline">
      <VCol cols="12" md="6">
        <h1>Devices</h1>
      </VCol>
      <VCol cols="12" md="6">
        <DevicesMeta />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <v-card v-if="devices">
          <v-data-table
            @click:row="onClick"
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items="devices"
            item-value="id"
            class="elevation-1"
            :loading="pending"
          ></v-data-table>
        </v-card>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped lang="scss"></style>
