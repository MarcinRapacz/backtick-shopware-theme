<script lang="ts" setup>
const { domainSnippetSet, selectedSnippetSet, setSnippetSet, snippetSets } =
  useSnippetSet();
</script>

<template>
  <h3>Snippet set List</h3>
  <div>
    <button
      v-for="snippetSet in snippetSets"
      @click="setSnippetSet(snippetSet.id)"
    >
      {{ snippetSet.name }}
    </button>
  </div>
  <p>Selected language: {{ selectedSnippetSet?.name }}</p>
  <p>Domain language {{ domainSnippetSet?.name }}</p>
</template>
