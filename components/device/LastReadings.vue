<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";
const utils = useUtils();
const maxReadings = 5;
const route = useRoute();

const {
  data: readings,
  pending,
  error,
} = await useFetch(`/api/last-readings?id=${route.params.id}&limit=${maxReadings}`);

const usersHeader = useHeaders();

const formattedReadings = computed(() => {
  return readings.value?.map((reading) => {
    return { ...reading, measuredAt: utils.formatDate(reading.measuredAt) };
  });
});

const headers = computed(() => {
  if (usersHeader) {
    if (Object.keys(usersHeader).includes("last-readings")) {
      // @ts-ignore
      return usersHeader["last-readings"];
    }
  }

  if (readings.value?.length) {
    const readingsKeys = utils.objectKeys(readings.value.at(-1));
    return readingsKeys;
  }

  return [];
});
</script>

<template>
  <v-card :loading="pending" :title="`Last ${maxReadings} readings`">
    <v-card-text>
      <v-data-table
        density="compact"
        hide-default-footer
        :items-per-page="maxReadings"
        :headers="headers"
        :items="formattedReadings"
        item-value="id"
        :loading="pending"
      >
        <template v-slot:bottom> </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
