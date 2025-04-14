<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="app">
    <header class="header">
      <nav class="nav">
        <div class="nav-left">
          <router-link to="/" class="logo">L10n SDK</router-link>
        </div>
        <div class="nav-right">
          <router-link to="#features">Features</router-link>
          <router-link to="#documentation">Documentation</router-link>
          <router-link to="#community">Community</router-link>
          <router-link to="#blog">Blog</router-link>
          <button class="cta-button">Get Started</button>
        </div>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>Mobile App Localization Made Simple</h1>
          <p class="hero-subtitle">
            The ultimate SDK for seamless mobile app localization. Support multiple languages, 
            manage translations, and deliver a perfect user experience across the globe.
          </p>
          <div class="hero-buttons">
            <button class="primary-button">Start Localizing</button>
            <button class="secondary-button">View Documentation</button>
          </div>
        </div>
      </section>

      <section id="features" class="features">
        <h2>Why Choose L10n SDK?</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>Multi-platform Support</h3>
            <p>Seamlessly integrate with iOS, Android, and cross-platform frameworks.</p>
          </div>
          <div class="feature-card">
            <h3>Real-time Updates</h3>
            <p>Update translations without app store submissions.</p>
          </div>
          <div class="feature-card">
            <h3>Smart Fallbacks</h3>
            <p>Intelligent language fallback system for better user experience.</p>
          </div>
          <div class="feature-card">
            <h3>Analytics</h3>
            <p>Track translation usage and identify missing translations.</p>
          </div>
        </div>
      </section>

      <section class="code-example">
        <h2>Simple Integration</h2>
        <div class="code-block">
          <pre>
            <code>// Initialize the SDK
L10n.initialize({
  apiKey: 'your-api-key',
  defaultLanguage: 'en'
});

// Use translations
const greeting = L10n.t('welcome.message');
console.log(greeting); // "Welcome to our app!"</code>
          </pre>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>L10n SDK</h4>
          <p>Making mobile app localization simple and efficient.</p>
        </div>
        <div class="footer-section">
          <h4>Resources</h4>
          <router-link to="#docs">Documentation</router-link>
          <router-link to="#api">API Reference</router-link>
          <router-link to="#examples">Examples</router-link>
        </div>
        <div class="footer-section">
          <h4>Community</h4>
          <router-link to="#github">GitHub</router-link>
          <router-link to="#twitter">Twitter</router-link>
          <router-link to="#discord">Discord</router-link>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2024 L10n SDK. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
:root {
  --primary-color: #7F52FF;
  --secondary-color: #6B46C1;
  --text-color: #2D3748;
  --light-text: #718096;
  --background: #FFFFFF;
  --light-background: #F7FAFC;
  --border-color: #E2E8F0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
  line-height: 1.5;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: var(--background);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left .logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
}

.nav-right {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-right a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
}

.cta-button {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
}

.hero {
  background: var(--light-background);
  padding: 8rem 2rem 4rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--light-text);
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.primary-button, .secondary-button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
}

.primary-button {
  background: var(--primary-color);
  color: white;
  border: none;
}

.secondary-button {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.features {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.features h2 {
  text-align: center;
  font-size: 2.25rem;
  margin-bottom: 3rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--background);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  margin-bottom: 1rem;
  color: var(--text-color);
}

.feature-card p {
  color: var(--light-text);
}

.code-example {
  background: var(--light-background);
  padding: 4rem 2rem;
}

.code-example h2 {
  text-align: center;
  font-size: 2.25rem;
  margin-bottom: 2rem;
}

.code-block {
  max-width: 800px;
  margin: 0 auto;
  background: #1E1E1E;
  padding: 1.5rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}

.code-block pre {
  color: #D4D4D4;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
}

.footer {
  background: var(--background);
  padding: 4rem 2rem 2rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.footer-section h4 {
  margin-bottom: 1rem;
  color: var(--text-color);
}

.footer-section a {
  display: block;
  color: var(--light-text);
  text-decoration: none;
  margin-bottom: 0.5rem;
}

.footer-bottom {
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
  color: var(--light-text);
}

@media (max-width: 768px) {
  .nav-right {
    display: none;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero-buttons {
    flex-direction: column;
  }
}
</style>
