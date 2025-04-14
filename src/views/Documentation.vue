<script setup lang="ts">
import { ref } from 'vue'

const activeSection = ref('home')

const sections = {
  'home': {
    title: 'Home',
    content: [
      {
        title: 'Welcome to L10n',
        content: `
          <p>Welcome to the L10n documentation. Here you'll find everything you need to get started with our localization platform.</p>
        `
      }
    ]
  },
  'get-started': {
    title: 'Get Started',
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
  'overview': {
    title: 'L10n Overview',
    content: [
      {
        title: 'Overview',
        content: `
          <p>L10n is a powerful localization platform that helps you manage translations across your applications.</p>
        `
      }
    ]
  },
  'whats-new': {
    title: "What's New",
    content: [
      {
        title: 'Latest Updates',
        content: `
          <p>Stay up to date with the latest features and improvements in L10n.</p>
        `
      }
    ]
  },
  'guides': {
    title: 'Guides',
    content: [
      {
        title: 'Best Practices',
        content: `
          <p>Learn the best practices for implementing localization in your applications.</p>
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
  padding: 0 2rem 2rem 0;
  background: var(--background-dark);
  border-right: 1px solid var(--border-color);
  position: fixed;
  top: 72px;
  left: 0;
  margin-left: 0;
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
  margin: 0;
}

.sidebar button {
  text-align: left;
  padding: 0.75rem 0 0.75rem 1rem;
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
  width: calc(100% - 300px);
  max-width: none;
  box-sizing: border-box;
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
    width: 100%;
    box-sizing: border-box;
  }
}
</style> 