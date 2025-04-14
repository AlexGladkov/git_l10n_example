<script setup lang="ts">
// Discord content component
</script>

<template>
  <div class="discord-content">
    <h2>Join Our Discord Community</h2>
    <p>Connect with other developers, get help, and share your experiences with L10n.</p>
    
    <div class="discord-info">
      <div class="info-card">
        <h3>Why Join?</h3>
        <ul>
          <li>Get real-time support from the community</li>
          <li>Share your projects and get feedback</li>
          <li>Stay updated with the latest news</li>
          <li>Connect with other localization experts</li>
        </ul>
      </div>
      
      <div class="info-card">
        <h3>Community Guidelines</h3>
        <ul>
          <li>Be respectful and inclusive</li>
          <li>Share knowledge and help others</li>
          <li>Keep discussions on-topic</li>
          <li>Follow Discord's Terms of Service</li>
        </ul>
      </div>
    </div>

    <div class="join-discord">
      <a href="https://discord.gg/l10n" target="_blank" class="discord-button">
        Join Discord Server
      </a>
    </div>
  </div>
</template>

<style scoped>
.discord-content {
  max-width: 1200px;
  margin: 0 auto;
}

.discord-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.info-card {
  background: var(--card-background);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.info-card h3 {
  color: var(--text-color);
  margin-bottom: 1rem;
}

.info-card ul {
  list-style: none;
  padding: 0;
}

.info-card li {
  color: var(--text-light);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.info-card li::before {
  content: "•";
  color: var(--accent-color);
  position: absolute;
  left: 0;
}

.join-discord {
  text-align: center;
  margin-top: 3rem;
}

.discord-button {
  display: inline-block;
  background: #5865F2;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.discord-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(88, 101, 242, 0.3);
}
</style> 