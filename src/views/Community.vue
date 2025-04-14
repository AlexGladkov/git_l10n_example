<script setup lang="ts">
import CommunityHomeContent from '@/components/community/CommunityHomeContent.vue'
</script>

<template>
  <main>
    <nav class="top-nav">
      <div class="nav-content">
        <h1>Community</h1>
        <div class="nav-links">
          <a href="#" class="active">Overview</a>
          <a href="#">Kotlin User Groups</a>
        </div>
      </div>
    </nav>
    <CommunityHomeContent />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: var(--background-darker);
}

.top-nav {
  width: 100vw;
  position: fixed;
  top: 0;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 64px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 100;
}

.nav-content {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 48px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-content h1 {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-color);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--text-color);
}

.nav-links a.active {
  color: #C88CFF;
}

@media (max-width: 768px) {
  .nav-content {
    padding: 0 24px;
  }
}
</style> 