<script lang="ts" setup>
import { useCurrency } from "#imports";

const { currencies, domainCurrency, selectedCurrency, setCurrency } =
  useCurrency();
</script>

<template>
  <h3>Currency List</h3>
  <div>
    <button v-for="currency in currencies" @click="setCurrency(currency.id)">
      {{ currency.name }}
    </button>
  </div>
  <p>Selected currency: {{ selectedCurrency?.name }}</p>
  <p>Domain currency {{ domainCurrency?.name }}</p>
</template>
