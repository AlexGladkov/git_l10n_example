<template>
  <div>
    <div class="section-content">
      <h2>Key Features</h2>
      <div v-html="overviewContent"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const overviewContent = `
  <ul>
    <li>Real-time translation updates</li>
    <li>Multi-platform support (Web, iOS, Android)</li>
    <li>Pluralization and formatting support</li>
    <li>Fallback language handling</li>
    <li>Translation memory</li>
    <li>Developer-friendly API</li>
  </ul>
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

:deep(ul) {
  list-style: disc;
  margin-left: 2rem;
  margin-bottom: 1rem;
}

:deep(li) {
  margin-bottom: 0.5rem;
  color: var(--text-color);
}
</style> 