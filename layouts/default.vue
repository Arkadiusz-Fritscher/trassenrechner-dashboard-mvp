<script setup lang="ts">
const route = useRoute();

const breadcrumb = computed(() => {
  const crumbs = route.path
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, i, arr) => {
      return {
        title: crumb.toUpperCase(),
        disabled: i === arr.length - 1 ? true : false,
        href: `/${arr.slice(0, i + 1).join("/")}`,
      };
    });

  return crumbs.length > 1 ? crumbs : [];
});
</script>

<template>
  <VApp>
    <NavTopNav />
    <!-- <NavSideNav /> -->

    <v-main>
      <div v-if="breadcrumb?.length">
        <v-breadcrumbs :items="breadcrumb">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-right"></v-icon>
          </template>
        </v-breadcrumbs>
      </div>
      <slot />
    </v-main>
  </VApp>
</template>
