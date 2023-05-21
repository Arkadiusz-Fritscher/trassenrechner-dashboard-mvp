<script setup lang="ts">
const route = useRoute();
import { VDataTable } from "vuetify/labs/VDataTable";

const { data: readings, pending } = await useFetch(`/api/readings?id=${route.params.id}`);

const itemsPerPage = ref(30);

const headers = computed(() => {
  if (!readings.value?.length) {
    return [];
  } else {
    return Object.keys(readings.value[0]).map((key) => {
      return {
        title: key,
        key: key,
      };
    });
  }
});
</script>

<template>
  <VContainer fluid>
    <section id="device">
      <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="readings"
        item-value="id"
        :loading="pending"
        class="elevation-1"
      ></v-data-table>
    </section>
  </VContainer>
</template>

<style scoped lang="scss"></style>
