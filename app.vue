<template>
  <p>{{ salesChannel.name }}</p>
  <nav class="nav">
    <SwLink to="/">Homepage</SwLink>
    <SwLink to="/about">About</SwLink>
    <SwLink to="/contact">Contact</SwLink>
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
