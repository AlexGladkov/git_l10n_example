<script setup lang="ts">
import { ref, computed } from 'vue'

// Import the content components
import HomeContent from '@/components/documentation/HomeContent.vue'
import GetStartedContent from '@/components/documentation/GetStartedContent.vue'
import OverviewContent from '@/components/documentation/OverviewContent.vue'
import WhatsNewContent from '@/components/documentation/WhatsNewContent.vue'
import GuidesContent from '@/components/documentation/GuidesContent.vue'
import ApiReferenceContent from '@/components/documentation/ApiReferenceContent.vue'

const activeSection = ref('home')

// Simplified sections just for the sidebar titles
const sections = {
  'home': { title: 'Home' },
  'get-started': { title: 'Get Started' },
  'overview': { title: 'L10n Overview' },
  'whats-new': { title: "What's New" },
  'guides': { title: 'Guides' },
  'api': { title: 'API Reference' },
}

// Map section keys to their components
const componentMap = {
  home: HomeContent,
  'get-started': GetStartedContent,
  overview: OverviewContent,
  'whats-new': WhatsNewContent,
  guides: GuidesContent,
  api: ApiReferenceContent,
}

// Compute the active component based on the activeSection ref
const activeComponent = computed(() => {
  return componentMap[activeSection.value] || HomeContent // Fallback to HomeContent
})
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
      
      <!-- Dynamically render the active component -->
      <component :is="activeComponent" />
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
  margin-left: 300px;
  flex: 1;
  padding: 0;
}

.content h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  padding-left: 16px;
  color: var(--text-color);
  text-align: left;
}

/* Dynamic component will fill this container */
.content :deep(> *) {
  padding: 0 16px;
  width: 100%;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .documentation {
    flex-direction: column;
  }
  
  .sidebar {
    position: relative;
    top: 0;
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }
  
  .content {
    margin-left: 0;
    width: 100%;
  }

  .content h1 {
    padding: 16px 16px 0 16px;
  }

  .content :deep(> *) {
    padding: 0 16px 16px 16px;
  }
}
</style> 