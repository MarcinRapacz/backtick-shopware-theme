<script lang="ts" setup>
const { languages, domainLanguage, selectedLanguage, setLanguage } =
  useLanguage();
</script>

<template>
  <h3>Language List</h3>
  <div>
    <button v-for="language in languages" @click="setLanguage(language.id)">
      {{ language.name }}
    </button>
  </div>
  <p>Selected language: {{ selectedLanguage?.name }}</p>
  <p>Domain language {{ domainLanguage?.name }}</p>
</template>
