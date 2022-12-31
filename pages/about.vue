<template>
  <h1>About</h1>
  <p>{{ salesChannel.createdAt }}</p>
</template>

<script setup lang="ts">
import { useSalesChannel } from "#imports";
const { salesChannel } = useSalesChannel();
</script>
