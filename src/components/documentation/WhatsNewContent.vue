<template>
  <div>
    <div class="section-content">
      <h2>Latest Updates</h2>
      <div v-html="whatsNewContent"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const whatsNewContent = `
  <h3>Version 1.2.0</h3>
  <ul>
    <li>Added support for nested translations</li>
    <li>Improved performance with caching</li>
    <li>New language detection features</li>
    <li>Enhanced error handling</li>
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

:deep(h3) {
  font-size: 1.25rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-light);
  text-align: left;
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