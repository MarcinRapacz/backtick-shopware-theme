<script setup lang="ts">
const { domains, switchDomain, selectedDomain } = useDomain();
</script>

<template>
  <h3>Domain List</h3>
  <div>
    <button v-for="domain in domains" @click="switchDomain(domain.id)">
      {{ domain.url }}
    </button>
  </div>
  <p>Selected domain: {{ selectedDomain?.url }}</p>
</template>
