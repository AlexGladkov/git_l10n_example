<template>
  <div>
    <div class="section-content">
      <h2>Best Practices</h2>
      <div v-html="guidesContent"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const guidesContent = `
  <h3>Translation Keys</h3>
  <ul>
    <li>Use descriptive, hierarchical keys (e.g., 'auth.login.title')</li>
    <li>Keep keys consistent across platforms</li>
    <li>Use placeholders for dynamic content</li>
  </ul>
  
  <h3>Language Management</h3>
  <ul>
    <li>Always provide a fallback language</li>
    <li>Use language codes following ISO 639-1</li>
    <li>Consider RTL languages in your UI design</li>
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