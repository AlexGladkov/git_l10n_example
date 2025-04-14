<script setup lang="ts">
// GitHub content component
</script>

<template>
  <div class="github-content">
    <h2>GitHub Community</h2>
    <p>Contribute to L10n and help shape the future of mobile app localization.</p>
    
    <div class="github-stats">
      <div class="stat-card">
        <h3>Stars</h3>
        <p>1,000+</p>
      </div>
      <div class="stat-card">
        <h3>Forks</h3>
        <p>200+</p>
      </div>
      <div class="stat-card">
        <h3>Contributors</h3>
        <p>50+</p>
      </div>
    </div>

    <div class="contribution-guide">
      <h3>How to Contribute</h3>
      <div class="steps">
        <div class="step">
          <h4>1. Fork the Repository</h4>
          <p>Start by forking the main L10n repository to your GitHub account.</p>
        </div>
        <div class="step">
          <h4>2. Create a Branch</h4>
          <p>Create a new branch for your feature or bug fix.</p>
        </div>
        <div class="step">
          <h4>3. Make Changes</h4>
          <p>Implement your changes following our coding standards.</p>
        </div>
        <div class="step">
          <h4>4. Submit a Pull Request</h4>
          <p>Create a pull request with a clear description of your changes.</p>
        </div>
      </div>
    </div>

    <div class="github-links">
      <a href="https://github.com/l10n" target="_blank" class="github-button">
        View on GitHub
      </a>
    </div>
  </div>
</template>

<style scoped>
.github-content {
  max-width: 1200px;
  margin: 0 auto;
}

.github-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.stat-card {
  background: var(--card-background);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--border-color);
}

.stat-card h3 {
  color: var(--text-light);
  margin-bottom: 1rem;
}

.stat-card p {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-color);
}

.contribution-guide {
  margin-top: 4rem;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.step {
  background: var(--card-background);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.step h4 {
  color: var(--text-color);
  margin-bottom: 1rem;
}

.step p {
  color: var(--text-light);
}

.github-links {
  text-align: center;
  margin-top: 3rem;
}

.github-button {
  display: inline-block;
  background: #24292e;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.github-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(36, 41, 46, 0.3);
}
</style> 