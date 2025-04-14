<template>
  <div>
    <div class="section-content">
      <h2>Get started with L10n</h2>
      <div v-html="homeContent"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const homeContent = `
  <p class="text-right">L10n is a modern and powerful localization framework designed to make managing translations across your applications easier and more efficient. It's flexible, developer-friendly, and provides many ways to handle localization across multiple platforms.</p>
`;
</script>

<style scoped>
.section-content {
  margin-bottom: 3rem;
  width: 100%;
}

.section-content h2 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  text-align: left;
  width: 100%;
}

:deep(.text-right) {
  text-align: left; /* Ensure left alignment */
  width: 100%;
}
</style> 