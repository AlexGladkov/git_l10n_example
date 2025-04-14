<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Import the content components
import HomeContent from '@/components/documentation/HomeContent.vue'
import GetStartedContent from '@/components/documentation/GetStartedContent.vue'
import OverviewContent from '@/components/documentation/OverviewContent.vue'
import WhatsNewContent from '@/components/documentation/WhatsNewContent.vue'
import GuidesContent from '@/components/documentation/GuidesContent.vue'
import ApiReferenceContent from '@/components/documentation/ApiReferenceContent.vue'

const route = useRoute()
const activeMenuItem = ref('overview')

const menuItems = {
  overview: 'Overview',
  gettingStarted: 'Getting Started',
  guides: 'Guides',
  api: 'API Reference'
}

onMounted(() => {
  const role = route.query.role as string
  if (role) {
    switch (role) {
      case 'cto':
      case 'developer':
        activeMenuItem.value = 'gettingStarted'
        break
      case 'translator':
        activeMenuItem.value = 'guides'
        break
      case 'other':
        activeMenuItem.value = 'overview'
        break
    }
  }
})

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

// Compute the active component based on the activeMenuItem ref
const activeComponent = ref(componentMap[activeMenuItem.value] || HomeContent)
</script>

<template>
  <div class="documentation-container">
    <div class="documentation-sidebar">
      <h2>Documentation</h2>
      <nav>
        <ul>
          <li 
            v-for="(label, key) in menuItems" 
            :key="key"
            :class="{ active: activeMenuItem === key }"
            @click="activeMenuItem = key"
          >
            {{ label }}
          </li>
        </ul>
      </nav>
    </div>
    <div class="documentation-content">
      <h1>{{ menuItems[activeMenuItem] }}</h1>
      <component :is="activeComponent" />
    </div>
  </div>
</template>

<style scoped>
.documentation-container {
  display: flex;
  width: 100vw;
  min-height: 100vh;
  margin-top: 72px;
  background: var(--background-darker);
}

.documentation-container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(19, 185, 253, 0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.documentation-sidebar {
  width: 20%;
  background: var(--card-background);
  padding: 2rem;
  border-right: 1px solid var(--border-color);
  position: fixed;
  top: 72px;
  left: 0;
  height: calc(100vh - 72px);
  overflow-y: auto;
  z-index: 1;
}

.documentation-sidebar h2 {
  color: var(--text-color);
  margin-bottom: 2rem;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: left;
}

.documentation-sidebar nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.documentation-sidebar nav li {
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  color: var(--text-light);
  transition: all 0.2s ease;
  text-align: left;
}

.documentation-sidebar nav li:hover {
  background: rgba(255, 255, 255, 0.05);
}

.documentation-sidebar nav li.active {
  background: var(--accent-color);
  color: var(--background-darker);
  font-weight: 500;
}

.documentation-content {
  width: 80%;
  margin-left: 20%;
  padding: 0.5rem 0;
  padding-left: 0.25rem;
  color: var(--text-color);
  z-index: 1;
  text-align: left;
}

.documentation-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-align: left;
}

.documentation-content :deep(*) {
  text-align: left;
}

@media (max-width: 1024px) {
  .documentation-sidebar {
    width: 25%;
  }
  
  .documentation-content {
    width: 75%;
    margin-left: 25%;
  }
}

@media (max-width: 768px) {
  .documentation-container {
    flex-direction: column;
    margin-top: 0;
  }

  .documentation-sidebar {
    width: 100%;
    position: relative;
    top: 0;
    height: auto;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
    padding: 1.5rem;
  }

  .documentation-content {
    width: 100%;
    margin-left: 0;
    padding: 0.5rem;
    padding-left: 0.25rem;
  }

  .documentation-content h1 {
    font-size: 2rem;
  }
}
</style> 