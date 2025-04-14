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
          <h1>Mobile App Localization<br/>Made Simple</h1>
          <p class="hero-subtitle">
            The ultimate SDK for seamless mobile app localization. Support multiple languages, 
            manage translations, and deliver a perfect user experience across the globe.
          </p>
          <div class="hero-buttons">
            <button class="primary-button">Start Localizing</button>
            <button class="secondary-button">View Documentation</button>
          </div>
        </div>
        <div class="hero-image">
          <div class="code-preview">
            <pre><code>// Initialize the SDK
L10n.initialize({
  apiKey: 'your-api-key',
  defaultLanguage: 'en'
});

// Use translations
const greeting = L10n.t('welcome.message');
console.log(greeting); // "Welcome!"</code></pre>
          </div>
        </div>
      </section>

      <section id="features" class="features">
        <div class="features-content">
          <h2>Why Choose L10n SDK?</h2>
          <div class="feature-grid">
            <div class="feature-card">
              <div class="feature-icon">📱</div>
              <h3>Multi-platform Support</h3>
              <p>Seamlessly integrate with iOS, Android, and cross-platform frameworks.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">⚡️</div>
              <h3>Real-time Updates</h3>
              <p>Update translations without app store submissions.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🔄</div>
              <h3>Smart Fallbacks</h3>
              <p>Intelligent language fallback system for better user experience.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📊</div>
              <h3>Analytics</h3>
              <p>Track translation usage and identify missing translations.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="code-example">
        <div class="code-example-content">
          <h2>Simple Integration</h2>
          <div class="code-tabs">
            <button class="tab active">iOS</button>
            <button class="tab">Android</button>
            <button class="tab">Flutter</button>
          </div>
          <div class="code-block">
            <pre><code>// Initialize the SDK
L10n.initialize({
  apiKey: 'your-api-key',
  defaultLanguage: 'en'
});

// Use translations
const greeting = L10n.t('welcome.message');
console.log(greeting); // "Welcome to our app!"</code></pre>
          </div>
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
  /* Flutter.dev dark theme colors */
  --primary-color: #0553B1;
  --primary-light: #027DFD;
  --accent-color: #13B9FD;
  --background-dark: #1C2834;
  --background-darker: #152030;
  --text-color: #FFFFFF;
  --text-light: rgba(255, 255, 255, 0.8);
  --text-lighter: rgba(255, 255, 255, 0.6);
  --border-color: rgba(255, 255, 255, 0.1);
  --card-background: rgba(255, 255, 255, 0.05);
  --code-background: #0D1117;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Google Sans', 'Roboto', sans-serif;
  color: var(--text-color);
  line-height: 1.5;
  background: var(--background-dark);
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: var(--background-darker);
  box-shadow: 0 1px 0 var(--border-color);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
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
  color: var(--accent-color);
  text-decoration: none;
  letter-spacing: -0.5px;
}

.nav-right {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-right a {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-right a:hover {
  color: var(--accent-color);
}

.cta-button {
  background: var(--accent-color);
  color: var(--background-darker);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(19, 185, 253, 0.3);
}

.hero {
  background: var(--background-darker);
  padding: 10rem 2rem 6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  position: relative;
  overflow: hidden;
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

.hero-content {
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: 2rem;
}

.hero h1 {
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  font-weight: 700;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-light);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.primary-button, .secondary-button {
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-button {
  background: var(--accent-color);
  color: var(--background-darker);
  border: none;
}

.primary-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(19, 185, 253, 0.3);
}

.secondary-button {
  background: transparent;
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
}

.secondary-button:hover {
  background: rgba(19, 185, 253, 0.1);
}

.hero-image {
  max-width: 600px;
  margin-left: 2rem;
}

.code-preview {
  background: var(--code-background);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.code-preview::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid var(--border-color);
}

.features {
  padding: 6rem 2rem;
  width: 100%;
  background: var(--background-dark);
  position: relative;
  overflow: hidden;
}

.features::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 50%, rgba(19, 185, 253, 0.03) 0%, transparent 70%);
  pointer-events: none;
}

.features-content {
  max-width: 1200px;
  margin: 0 auto;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: var(--text-color);
  font-weight: 700;
  letter-spacing: -0.5px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--card-background);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin-bottom: 1rem;
  color: var(--text-color);
  font-weight: 600;
}

.feature-card p {
  color: var(--text-light);
  line-height: 1.6;
}

.code-example {
  background: var(--background-darker);
  padding: 6rem 2rem;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.code-example::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 70% 50%, rgba(19, 185, 253, 0.03) 0%, transparent 70%);
  pointer-events: none;
}

.code-example-content {
  max-width: 1200px;
  margin: 0 auto;
}

.code-example h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
  font-weight: 700;
  letter-spacing: -0.5px;
}

.code-tabs {
  max-width: 800px;
  margin: 0 auto 1rem;
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
}

.tab {
  padding: 0.5rem 1rem;
  background: transparent;
  border: none;
  color: var(--text-light);
  cursor: pointer;
  font-weight: 500;
  border-bottom: 2px solid transparent;
}

.tab.active {
  color: var(--accent-color);
  border-bottom-color: var(--accent-color);
}

.code-block {
  max-width: 800px;
  margin: 0 auto;
  background: var(--code-background);
  padding: 2rem;
  border-radius: 12px;
  overflow-x: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.code-block pre {
  color: var(--text-color);
  font-family: 'JetBrains Mono', 'Monaco', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
}

.footer {
  background: var(--background-darker);
  padding: 4rem 2rem 2rem;
  margin-top: auto;
  border-top: 1px solid var(--border-color);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 4rem;
}

.footer-section h4 {
  margin-bottom: 1rem;
  color: var(--text-color);
  font-weight: 600;
}

.footer-section a {
  display: block;
  color: var(--text-light);
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: color 0.2s ease;
}

.footer-section a:hover {
  color: var(--accent-color);
}

.footer-bottom {
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
  color: var(--text-lighter);
}

@media (max-width: 768px) {
  .nav-right {
    display: none;
  }
  
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 8rem 1rem 4rem;
  }
  
  .hero-content {
    text-align: center;
    margin: 0 auto;
  }
  
  .hero-image {
    margin: 0 auto;
    max-width: 100%;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
