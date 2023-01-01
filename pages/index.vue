<template>
  <h1>Index</h1>
  <SalesChannelDomainList />
  <LanguageList />
  <CurrencyList />
  <SnippetSetList />
  <p>$t("headless.homepage.title"): {{ $t("headless.homepage.title") }}</p>
  <p>
    $t("headless.homepage.description"):
    {{ $t("headless.homepage.description") }}
  </p>
</template>

<script setup lang="ts"></script>
