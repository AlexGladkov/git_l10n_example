<script setup lang="ts">
import { ref, computed } from 'vue'

// Import the content components
import BlogHomeContent from '@/components/blog/BlogHomeContent.vue'
import LatestPostsContent from '@/components/blog/LatestPostsContent.vue'

const activeSection = ref('home')

// Simplified sections just for the sidebar titles
const sections = {
  'home': { title: 'Blog Home' },
  'latest': { title: 'Latest Posts' },
}

// Map section keys to their components
const componentMap = {
  home: BlogHomeContent,
  latest: LatestPostsContent,
}

// Compute the active component based on the activeSection ref
const activeComponent = computed(() => {
  return componentMap[activeSection.value] || BlogHomeContent
})
</script>

<template>
  <main>
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-content">
          <h1>L10n Blog</h1>
          <p class="hero-subtitle">
            Discover comprehensive guides, tutorials, and insights about mobile app localization.
            Our articles cover everything from basic setup to advanced features of the L10n SDK.
          </p>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="content-inner">
        <div class="section-tabs">
          <button 
            v-for="(section, key) in sections" 
            :key="key"
            class="tab"
            :class="{ active: activeSection === key }"
            @click="activeSection = key"
          >
            {{ section.title }}
          </button>
        </div>
        
        <div class="section-content">
          <component :is="activeComponent" />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.hero,
.content {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero {
  min-height: 30vh;
  padding-top: 72px;
  position: relative;
  background: var(--background-darker);
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(19, 185, 253, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.hero-inner,
.content-inner {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
}

.hero-content {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero h1 {
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  font-weight: 700;
  letter-spacing: -1.5px;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-light);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.content {
  padding: 4rem 0;
}

.content-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-tabs {
  max-width: 800px;
  margin: 0 auto 2rem;
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
  width: 100%;
  justify-content: center;
}

.tab {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  color: var(--text-light);
  cursor: pointer;
  font-weight: 500;
  border-radius: 50px;
  transition: all 0.2s ease;
}

.tab:hover {
  background: rgba(19, 185, 253, 0.1);
}

.tab.active {
  background: var(--accent-color);
  color: var(--background-darker);
}

.section-content {
  width: 100%;
  max-width: 1400px;
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 4rem 0;
  }
  
  .hero h1 {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
  }
  
  .section-tabs {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tab {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
  
  .hero-inner,
  .content-inner {
    padding: 0 1.5rem;
  }
}
</style> 