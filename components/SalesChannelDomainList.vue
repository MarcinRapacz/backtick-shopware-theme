<script setup lang="ts">
import { useDomain } from "#imports";

const { domains, setDomain, selectedDomain } = useDomain();
</script>

<template>
  <h3>SalesChannelDomainList</h3>
  <div>
    <button v-for="domain in domains" @click="setDomain(domain.id)">
      {{ domain.url }}
    </button>
  </div>
  <p>Selected setDomain: {{ selectedDomain?.url }}</p>
</template>
