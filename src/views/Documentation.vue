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
  <div class="documentation">
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
      <!-- Content will be dynamically loaded based on activeMenuItem -->
      <h1>{{ menuItems[activeMenuItem] }}</h1>
      <!-- Add your content sections here -->
      <component :is="activeComponent" />
    </div>
  </div>
</template>

<style scoped>
.documentation {
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
  background: var(--background-darker);
}

.documentation-sidebar {
  background: var(--card-background);
  padding: 2rem;
  border-right: 1px solid var(--border-color);
}

.documentation-sidebar h2 {
  color: var(--text-color);
  margin-bottom: 2rem;
  font-weight: 600;
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
  transition: background-color 0.2s ease;
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
  padding: 2rem;
  color: var(--text-color);
}

@media (max-width: 768px) {
  .documentation {
    grid-template-columns: 1fr;
  }
  
  .documentation-sidebar {
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }
}
</style> 