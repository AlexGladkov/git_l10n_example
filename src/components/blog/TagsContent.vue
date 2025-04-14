<script setup lang="ts">
// Tags content component
</script>

<template>
  <div class="tags-content">
    <h2>Blog Tags</h2>
    <p>Browse posts by tags</p>
    
    <div class="tags-cloud">
      <a href="#" class="tag">Localization</a>
      <a href="#" class="tag">Mobile Apps</a>
      <a href="#" class="tag">Translation</a>
      <a href="#" class="tag">iOS</a>
      <a href="#" class="tag">Android</a>
      <a href="#" class="tag">Best Practices</a>
      <a href="#" class="tag">Tutorials</a>
      <a href="#" class="tag">Case Studies</a>
      <a href="#" class="tag">Updates</a>
      <a href="#" class="tag">Tips & Tricks</a>
      <a href="#" class="tag">API</a>
      <a href="#" class="tag">Integration</a>
    </div>
  </div>
</template>

<style scoped>
.tags-content {
  max-width: 1200px;
  margin: 0 auto;
}

.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.tag {
  background: var(--card-background);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.tag:hover {
  background: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
  transform: translateY(-2px);
}
</style> 