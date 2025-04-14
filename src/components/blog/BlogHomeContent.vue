<script setup lang="ts">
// Blog home content component
</script>

<template>
  <div class="blog-home">
    <div class="platform-grid">
      <a href="https://habr.com/ru/company/l10n" target="_blank" rel="noopener" class="platform-card">
        <div class="icon habr-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
        </div>
        <h3>Habr</h3>
        <p>Technical articles and in-depth guides about L10n SDK implementation.</p>
      </a>

      <a href="https://medium.com/@l10n" target="_blank" rel="noopener" class="platform-card">
        <div class="icon medium-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.8 7.2L9 3.5h6l1.2 3.7L12 15.1 7.8 7.2zM5.38 2h13.25L19 8.5l-5.13 12.5L5.38 2z"/>
          </svg>
        </div>
        <h3>Medium</h3>
        <p>Best practices, case studies, and tips for successful app localization.</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
.blog-home {
  max-width: 1400px;
  margin: 0 auto;
}

.platform-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
}

.platform-card {
  background: var(--card-background);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
}

.platform-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.icon {
  width: 32px;
  height: 32px;
  margin-bottom: 1rem;
}

.habr-icon {
  color: #77A2B6;
}

.medium-icon {
  color: #000000;
}

.platform-card h3 {
  color: var(--text-color);
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.platform-card p {
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .platform-grid {
    grid-template-columns: 1fr;
  }
}
</style> 