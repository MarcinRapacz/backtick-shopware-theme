<template>
  <h1>Index</h1>
  <SalesChannelDomainList />
  <LanguageList />
  <CurrencyList />
</template>

<script setup lang="ts">
import { useSalesChannel } from "#imports";
const { salesChannel } = useSalesChannel();
</script>
