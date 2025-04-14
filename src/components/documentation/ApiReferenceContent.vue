<template>
  <div>
    <div class="section-content">
      <h2>Core Methods</h2>
      <div v-html="apiContent"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const apiContent = `
  <h3>Translation Methods</h3>
  <div class="code-block">
    <pre><code>// Get translation
L10n.t(key: string, params?: object): string

// Get translation with context
L10n.tc(key: string, context: string, params?: object): string

// Get pluralized translation
L10n.tp(key: string, count: number, params?: object): string</code></pre>
  </div>
  
  <h3>Language Management</h3>
  <div class="code-block">
    <pre><code>// Set language
L10n.setLanguage(language: string): void

// Get current language
L10n.getLanguage(): string

// Get available languages
L10n.getAvailableLanguages(): string[]</code></pre>
  </div>
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

/* Use deep selectors for styles affecting v-html content */
:deep(.code-block) {
  background: var(--code-background);
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  overflow-x: auto;
  width: 100%;
  box-sizing: border-box;
}

:deep(pre) {
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

:deep(code) {
  color: var(--text-color);
}
</style> 