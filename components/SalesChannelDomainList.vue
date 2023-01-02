<script setup lang="ts">
const { domains, setDomain, selectedDomain } = useDomain();
</script>

<template>
  <h3>Domain List</h3>
  <div>
    <button v-for="domain in domains" @click="setDomain(domain.id)">
      {{ domain.url }}
    </button>
  </div>
  <p>Selected domain: {{ selectedDomain?.url }}</p>
</template>
