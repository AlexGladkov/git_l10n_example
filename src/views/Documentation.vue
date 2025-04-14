<script setup lang="ts">
import { ref } from 'vue'

const activeSection = ref('getting-started')

const sections = {
  'getting-started': {
    title: 'Getting Started',
    content: [
      {
        title: 'Installation',
        content: `
          <p>Install the L10n SDK using your preferred package manager:</p>
          <div class="code-block">
            <pre><code>npm install @l10n/sdk
# or
yarn add @l10n/sdk
# or
pod install # for iOS</code></pre>
          </div>
        `
      },
      {
        title: 'Initialization',
        content: `
          <p>Initialize the SDK in your application:</p>
          <div class="code-block">
            <pre><code>// Initialize the SDK
L10n.initialize({
  apiKey: 'your-api-key',
  defaultLanguage: 'en'
});</code></pre>
          </div>
        `
      }
    ]
  },
  'features': {
    title: 'Features',
    content: [
      {
        title: 'Real-time Updates',
        content: `
          <p>Update your translations in real-time without requiring app store submissions.</p>
          <div class="code-block">
            <pre><code>// Listen for translation updates
L10n.onUpdate(() => {
  // Refresh your UI with new translations
});</code></pre>
          </div>
        `
      },
      {
        title: 'Language Fallback',
        content: `
          <p>Intelligent language fallback system ensures users always see content in their preferred language.</p>
          <div class="code-block">
            <pre><code>// Set fallback language
L10n.setFallbackLanguage('en');</code></pre>
          </div>
        `
      }
    ]
  },
  'api': {
    title: 'API Reference',
    content: [
      {
        title: 'Core Methods',
        content: `
          <p>Main methods for working with translations:</p>
          <div class="code-block">
            <pre><code>// Get translation
const text = L10n.t('key');

// Get translation with parameters
const text = L10n.t('key', { name: 'John' });

// Change language
L10n.setLanguage('es');

// Get current language
const lang = L10n.getLanguage();</code></pre>
          </div>
        `
      }
    ]
  }
}
</script>

<template>
  <div class="documentation">
    <div class="sidebar">
      <h2>Documentation</h2>
      <nav>
        <button 
          v-for="(section, key) in sections" 
          :key="key"
          :class="{ active: activeSection === key }"
          @click="activeSection = key"
        >
          {{ section.title }}
        </button>
      </nav>
    </div>
    
    <div class="content">
      <h1>{{ sections[activeSection].title }}</h1>
      
      <div v-for="(item, index) in sections[activeSection].content" 
           :key="index" 
           class="section-content">
        <h2>{{ item.title }}</h2>
        <div v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.documentation {
  display: flex;
  min-height: calc(100vh - 72px);
  margin-top: 72px;
  background: var(--background-darker);
}

.sidebar {
  width: 300px;
  padding: 2rem;
  background: var(--background-dark);
  border-right: 1px solid var(--border-color);
  position: fixed;
  height: calc(100vh - 72px);
  overflow-y: auto;
}

.sidebar h2 {
  margin-bottom: 2rem;
  color: var(--text-color);
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sidebar button {
  text-align: left;
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  color: var(--text-light);
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.sidebar button:hover {
  background: rgba(255, 255, 255, 0.05);
}

.sidebar button.active {
  background: var(--primary-color);
  color: white;
}

.content {
  flex: 1;
  padding: 2rem;
  margin-left: 300px;
  max-width: 800px;
}

.content h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.section-content {
  margin-bottom: 3rem;
}

.section-content h2 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

:deep(.code-block) {
  background: var(--code-background);
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  overflow-x: auto;
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

@media (max-width: 768px) {
  .documentation {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    position: relative;
    height: auto;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }
  
  .content {
    margin-left: 0;
    padding: 1rem;
  }
}
</style> 