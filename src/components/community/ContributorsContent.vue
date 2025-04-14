<script setup lang="ts">
// Contributors content component
</script>

<template>
  <div class="contributors-content">
    <h2>Our Contributors</h2>
    <p>Meet the amazing people who help make L10n better every day.</p>
    
    <div class="contributor-types">
      <div class="type-card">
        <h3>Core Team</h3>
        <div class="contributors-grid">
          <div class="contributor">
            <div class="avatar"></div>
            <h4>John Doe</h4>
            <p>Lead Developer</p>
          </div>
          <div class="contributor">
            <div class="avatar"></div>
            <h4>Jane Smith</h4>
            <p>Product Manager</p>
          </div>
        </div>
      </div>
      
      <div class="type-card">
        <h3>Community Contributors</h3>
        <div class="contributors-grid">
          <div class="contributor">
            <div class="avatar"></div>
            <h4>Alex Johnson</h4>
            <p>Documentation</p>
          </div>
          <div class="contributor">
            <div class="avatar"></div>
            <h4>Sarah Wilson</h4>
            <p>Bug Fixes</p>
          </div>
          <div class="contributor">
            <div class="avatar"></div>
            <h4>Mike Brown</h4>
            <p>New Features</p>
          </div>
        </div>
      </div>
    </div>

    <div class="become-contributor">
      <h3>Become a Contributor</h3>
      <p>Join our community of contributors and help improve L10n for everyone.</p>
      <a href="#github" class="contribute-button">Start Contributing</a>
    </div>
  </div>
</template>

<style scoped>
.contributors-content {
  max-width: 1200px;
  margin: 0 auto;
}

.contributor-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.type-card {
  background: var(--card-background);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.type-card h3 {
  color: var(--text-color);
  margin-bottom: 1.5rem;
}

.contributors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.contributor {
  text-align: center;
}

.avatar {
  width: 80px;
  height: 80px;
  background: var(--border-color);
  border-radius: 50%;
  margin: 0 auto 1rem;
}

.contributor h4 {
  color: var(--text-color);
  margin-bottom: 0.25rem;
}

.contributor p {
  color: var(--text-light);
  font-size: 0.875rem;
}

.become-contributor {
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: var(--card-background);
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.become-contributor h3 {
  color: var(--text-color);
  margin-bottom: 1rem;
}

.become-contributor p {
  color: var(--text-light);
  margin-bottom: 2rem;
}

.contribute-button {
  display: inline-block;
  background: var(--accent-color);
  color: var(--background-darker);
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contribute-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(19, 185, 253, 0.3);
}
</style> 