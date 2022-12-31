<template>
  <div>Nuxt module playground!</div>
  <p>{{ salesChannel.name }}</p>
  <nav>
    <NuxtLink to="/">Homepage</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
  </nav>
  <NuxtPage />
</template>

<script setup>
import { useSalesChannel } from "#imports";
const { salesChannel } = useSalesChannel();
</script>
