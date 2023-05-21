<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";
const router = useRouter();
const itemsPerPage = ref(10);

const {
  data: devices,
  pending,
  error,
  refresh,
} = await useAsyncData("devices", () => $fetch("/api/devices"));

const headers = ref([
  {
    title: "Id",
    align: "start",
    key: "device_id",
  },

  { title: "Name", align: "end", key: "device_name" },
  { title: "Hersteller", align: "end", key: "manufacturer" },
  { title: "Type", align: "end", key: "device_type" },
  { title: "Status", align: "end", key: "device_status" },
]);

const onClick = (event: Event, item: any) => {
  const deviceId = item.item.value;
  if (deviceId) {
    router.push({ path: `/device/${deviceId}` });
  }
};
</script>

<template>
  <VContainer fluid>
    <section id="devices">
      <v-card v-if="devices">
        <v-data-table
          @click:row="onClick"
          v-model:items-per-page="itemsPerPage"
          :headers="headers"
          :items="devices"
          item-value="device_id"
          class="elevation-1"
          :loading="pending"
        ></v-data-table>
      </v-card>
    </section>
  </VContainer>
</template>

<style scoped lang="scss"></style>
