<script setup lang="ts">
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
  <main>
    <section class="hero">
      <div class="hero-inner">
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
          <button 
            class="tab" 
            :class="{ active: activeTab === 'ios' }"
            @click="activeTab = 'ios'"
          >iOS</button>
          <button 
            class="tab" 
            :class="{ active: activeTab === 'android' }"
            @click="activeTab = 'android'"
          >Android</button>
          <button 
            class="tab" 
            :class="{ active: activeTab === 'flutter' }"
            @click="activeTab = 'flutter'"
          >Flutter</button>
        </div>
        <div class="code-block">
          <pre><code>{{ codeExamples[activeTab] }}</code></pre>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero,
.features,
.code-example {
  width: 100%;
  background: var(--background-darker);
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
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
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
  padding-top: 6rem;
  padding-bottom: 6rem;
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
  padding-top: 6rem;
  padding-bottom: 6rem;
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

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 6rem 0;
  }
  
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-content {
    margin: 0 auto;
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
