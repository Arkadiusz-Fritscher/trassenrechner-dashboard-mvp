<script setup lang="ts">
const links = ref([
  {
    title: "Geräte",
    icon: "mdi-home",
    links: [
      {
        title: "Alle Geräte",
        icon: "mdi-account-multiple-outline",
        to: { name: "devices" },
      },
      // { title: "Neues Gerät hinzufügen", icon: "mdi-account-multiple-outline", to: "/devices/add" },
      // { title: "Settings", icon: "mdi-cog-outline", to: "/settings" },
    ],
  },
  {
    title: "Users",
    icon: "mdi-account-multiple-outline",
    links: [
      { title: "Neuer User", icon: "mdi-account-multiple-outline", to: "/" },
      { title: "Settings", icon: "mdi-cog-outline", to: "/" },
    ],
  },
  {
    title: "Settings",
    icon: "mdi-cog-outline",
    links: [
      { title: "Neuer User", icon: "mdi-account-multiple-outline", to: "/" },
      { title: "Settings", icon: "mdi-cog-outline", to: "/" },
    ],
  },
]);

const user = useUser();
</script>

<template>
  <v-app-bar class="border-b">
    <template v-slot:prepend>
      <v-toolbar-title>Home</v-toolbar-title>
    </template>

    <template v-slot:append>
      <v-menu
        v-for="(link, i) in links"
        :key="i"
        :open-on-hover="link.links?.length ? true : false"
      >
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">
            <template v-if="link.icon">
              <v-icon>{{ link.icon }}</v-icon>
            </template>
            {{ link.title }}
          </v-btn>
        </template>

        <v-list v-if="link.links?.length" nav rounded variant="flat">
          <v-list-item
            v-for="(subLink, index) in link.links"
            :key="index"
            :prepend-icon="subLink.icon"
            :to="subLink.to"
            link
          >
            <v-list-item-title>{{ subLink.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<style scoped lang="scss"></style>
