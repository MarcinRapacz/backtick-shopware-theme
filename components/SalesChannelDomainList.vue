<script setup lang="ts">
import { useSalesChannelDomains } from "#imports";

const {
  salesChannelDomains,
  setSalesChannelDomain,
  selectedSalesChannelDomain,
} = useSalesChannelDomains();
</script>

<template>
  <h3>SalesChannelDomainList</h3>
  <div>
    <button
      v-for="salesChannelDomain in salesChannelDomains"
      @click="setSalesChannelDomain(salesChannelDomain.id)"
    >
      {{ salesChannelDomain.url }}
    </button>
  </div>
  <p>Selected salesChannelDomains: {{ selectedSalesChannelDomain?.url }}</p>
</template>
