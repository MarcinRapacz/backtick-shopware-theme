<template>
  <h1>Index</h1>
  <p>{{ salesChannel.accessKey }}</p>
  <SalesChannelDomainList />
  <LanguageList />
</template>

<script setup lang="ts">
import { useSalesChannel } from "#imports";
const { salesChannel } = useSalesChannel();
</script>
