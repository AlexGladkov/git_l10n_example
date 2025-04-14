<script setup lang="ts">
// Latest posts content component
</script>

<template>
  <div class="latest-posts">
    <h2>Latest Posts</h2>
    <p>Browse through our most recent articles and updates.</p>
    
    <div class="posts-list">
      <div class="post-item">
        <div class="post-image"></div>
        <div class="post-content">
          <span class="post-category">Release</span>
          <h3>Introducing L10n 2.0: A New Era of Localization</h3>
          <p class="post-excerpt">Discover the new features and improvements in our latest release.</p>
          <div class="post-meta">
            <span class="date">March 1, 2024</span>
            <span class="author">By John Doe</span>
          </div>
        </div>
      </div>
      
      <div class="post-item">
        <div class="post-image"></div>
        <div class="post-content">
          <span class="post-category">Tutorial</span>
          <h3>Getting Started with L10n</h3>
          <p class="post-excerpt">A comprehensive guide for beginners</p>
          <div class="post-meta">
            <span class="date">February 15, 2024</span>
            <span class="author">By Jane Smith</span>
          </div>
        </div>
      </div>
      
      <div class="post-item">
        <div class="post-image"></div>
        <div class="post-content">
          <span class="post-category">Case Study</span>
          <h3>How Company X Scaled Their App Globally</h3>
          <p class="post-excerpt">Learn from their localization journey</p>
          <div class="post-meta">
            <span class="date">February 1, 2024</span>
            <span class="author">By Alex Johnson</span>
          </div>
        </div>
      </div>
    </div>

    <div class="pagination">
      <button class="pagination-button active">1</button>
      <button class="pagination-button">2</button>
      <button class="pagination-button">3</button>
      <button class="pagination-button">Next →</button>
    </div>
  </div>
</template>

<style scoped>
.latest-posts {
  max-width: 1200px;
  margin: 0 auto;
}

.posts-list {
  margin: 3rem 0;
}

.post-item {
  background: var(--card-background);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  display: flex;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.post-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.post-image {
  width: 300px;
  background: var(--border-color);
  min-height: 200px;
}

.post-content {
  padding: 2rem;
  flex: 1;
}

.post-category {
  display: inline-block;
  background: var(--accent-color);
  color: var(--background-darker);
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.post-excerpt {
  color: var(--text-light);
  margin: 1rem 0;
}

.post-meta {
  color: var(--text-lighter);
  font-size: 0.875rem;
  display: flex;
  gap: 1rem;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
}

.pagination-button {
  background: var(--card-background);
  border: 1px solid var(--border-color);
  color: var(--text-light);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.pagination-button:hover {
  background: rgba(255, 255, 255, 0.05);
}

.pagination-button.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}
</style> 