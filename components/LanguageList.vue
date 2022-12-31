<script lang="ts" setup>
import { useLanguage } from "#imports";

const { languages, selectedLanguage, setLanguage } = useLanguage();
</script>

<template>
  <h3>LanguageList</h3>
  <div>
    <button v-for="language in languages" @click="setLanguage(language.id)">
      {{ language.name }}
    </button>
  </div>
  <p>Selected selectedLanguage: {{ selectedLanguage?.name }}</p>
</template>
