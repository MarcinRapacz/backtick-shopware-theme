<script lang="ts" setup>
const props = defineProps<{
  to: string;
}>();

const { selectedDomain } = useDomain();

const generateRoute = (to: string) => {
  const path =
    selectedDomain.value?.path === "/" ? "" : selectedDomain.value?.path;
  return `${path}${to}`;
};
</script>

<template>
  <NuxtLink :to="generateRoute(props.to)"><slot /></NuxtLink>
</template>
