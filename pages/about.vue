<template>
  <h1>About</h1>
  <p>{{ salesChannel.createdAt }}</p>
  <SalesChannelDomainList />
  <LanguageList />
  <CurrencyList />
  <SnippetSetList />
  <!-- <p>$t("headless.homepage.title"): {{ $t("headless.homepage.title") }}</p> -->
  <!-- <p>
    $t("headless.homepage.description"):
    {{ $t("headless.homepage.description") }}
  </p> -->
</template>

<script setup lang="ts">
const { salesChannel } = useSalesChannel();
</script>
