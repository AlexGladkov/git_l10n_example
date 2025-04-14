<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleRoleSelect = (role: string) => {
  router.push({
    path: '/documentation',
    query: { role }
  })
}
</script>

<template>
  <main>
    <section class="hero">
      <div class="hero-inner">
        <div class="role-selection-content">
          <h1>Choose Your Role</h1>
          <div class="role-grid">
            <div class="role-card" @click="handleRoleSelect('cto')">
              <div class="role-icon">👔</div>
              <h2>I'm CTO</h2>
              <p>Learn how L10n can streamline your localization process</p>
            </div>
            <div class="role-card" @click="handleRoleSelect('translator')">
              <div class="role-icon">🌐</div>
              <h2>I'm Translator</h2>
              <p>Access translation guides and best practices</p>
            </div>
            <div class="role-card" @click="handleRoleSelect('developer')">
              <div class="role-icon">💻</div>
              <h2>I'm Developer</h2>
              <p>Get started with our SDK integration</p>
            </div>
            <div class="role-card" @click="handleRoleSelect('other')">
              <div class="role-icon">❓</div>
              <h2>Other</h2>
              <p>Explore our documentation</p>
            </div>
          </div>
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

.hero {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: var(--background-darker);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 72px;
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

.hero-inner {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.role-selection-content {
  max-width: 800px;
  width: 100%;
  text-align: center;
  padding: 4rem 0;
}

.role-selection-content h1 {
  font-size: 3rem;
  margin-bottom: 3rem;
  color: var(--text-color);
  font-weight: 700;
  letter-spacing: -1px;
}

.role-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 0 auto;
  max-width: 600px;
}

.role-card {
  background: var(--card-background);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.role-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  border-color: var(--accent-color);
}

.role-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.role-card h2 {
  margin-bottom: 0.75rem;
  color: var(--text-color);
  font-weight: 600;
  font-size: 1.25rem;
}

.role-card p {
  color: var(--text-light);
  line-height: 1.4;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 4rem 0;
  }
  
  .role-selection-content h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .role-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 300px;
  }
  
  .role-card {
    padding: 1.25rem;
  }
  
  .role-icon {
    font-size: 2rem;
  }
  
  .role-card h2 {
    font-size: 1.1rem;
  }
  
  .role-card p {
    font-size: 0.85rem;
  }
}
</style> 