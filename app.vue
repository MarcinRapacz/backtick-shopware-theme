<template>
  <p>{{ salesChannel.name }}</p>
  <nav class="nav">
    <NuxtLink to="/">Homepage</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
  </nav>
  <NuxtPage />
</template>

<script setup>
import { useSalesChannel } from "#imports";
const { salesChannel } = useSalesChannel();
</script>

<style>
.nav {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>
