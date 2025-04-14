<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

const activeTab = ref('ios')

const codeExamples = {
  ios: `// Initialize the SDK
L10n.initialize({
  apiKey: 'your-api-key',
  defaultLanguage: 'en'
});

// Use translations
let greeting = L10n.t("welcome.message")
print(greeting) // "Welcome to our app!"`,
  
  android: `// Initialize the SDK
L10n.initialize(
  context,
  L10nConfig.Builder()
    .setApiKey("your-api-key")
    .setDefaultLanguage("en")
    .build()
);

// Use translations
val greeting = L10n.t("welcome.message")
println(greeting) // "Welcome to our app!"`,
  
  flutter: `// Initialize the SDK
await L10n.initialize(
  apiKey: 'your-api-key',
  defaultLanguage: 'en',
);

// Use translations
final greeting = L10n.t('welcome.message');
print(greeting); // "Welcome to our app!"`
}
</script>

<template>
  <div class="app">
    <header class="header">
      <nav class="nav">
        <div class="nav-left">
          <router-link to="/" class="logo">L10n SDK</router-link>
        </div>
        <div class="nav-right">
          <router-link to="/documentation">Documentation</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/community">Community</router-link>
          <button class="cta-button">Get Started</button>
        </div>
      </nav>
    </header>

    <RouterView />

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
  background: var(--background-darker);
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
  position: relative;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
}

main {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.header {
  background: var(--background-darker);
  box-shadow: 0 1px 0 var(--border-color);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 72px;
  z-index: 1000;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
}

.nav {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
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

.hero,
.features,
.code-example {
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
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 72px;
}

.hero-inner,
.features-content,
.code-example-content {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  justify-items: center;
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
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero h1 {
  font-size: 5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  font-weight: 700;
  letter-spacing: -1.5px;
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
  width: 100%;
}

.code-preview {
  width: 100%;
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
  padding: 6rem 0;
}

.features-content {
  width: min(1400px, 100%);
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.feature-card {
  background: var(--card-background);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: center;
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
  padding: 6rem 0;
}

.code-example-content {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
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
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: var(--background-darker);
  padding: 4rem 0 2rem;
  margin-top: auto;
  border-top: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-content {
  max-width: 1400px;
  width: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
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
  width: 100%;
  max-width: 1400px;
  margin: 2rem auto 0;
  padding: 2rem 2rem 0;
  border-top: 1px solid var(--border-color);
  text-align: center;
  color: var(--text-lighter);
}

@media (max-width: 768px) {
  .nav-right {
    display: none;
  }
  
  .hero {
    min-height: auto;
    padding: 6rem 0;
  }
  
  .hero-content {
    text-align: center;
    align-items: center;
  }
  
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero h1 {
    font-size: 3rem;
  }
  
  .hero-image {
    max-width: 100%;
  }
  
  .code-preview {
    width: 100%;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .features,
  .code-example {
    padding: 4rem 0;
  }
}
</style>
