<template>
  <div class="get-started-wrapper">
    <p class="intro-text">
      L10n is a modern but already mature localization framework designed to make developers happier. It's concise, safe, interoperable with multiple platforms, and provides many ways to manage translations across your applications.
    </p>

    <p class="intro-text">
      To start, why not take our tour of L10n? This tour covers the fundamentals of the localization framework and can be completed entirely within your browser.
    </p>

    <a href="#" class="start-tour">
      Start L10n tour →
    </a>

    <h2>Install L10n</h2>
    <p>L10n is available for multiple platforms. Choose your preferred package manager to install:</p>
    <div class="code-block">
      <pre><code># For web applications
npm install @l10n/sdk
# or
yarn add @l10n/sdk

# For iOS applications
pod install

# For Android applications
implementation 'com.l10n:sdk:1.0.0'

# For Flutter applications
flutter pub add l10n_sdk</code></pre>
    </div>

    <h2>Choose your L10n use case</h2>
    <div class="platform-tabs">
      <button class="tab active">Web</button>
      <button class="tab">Backend</button>
      <button class="tab">Cross-platform</button>
      <button class="tab">Mobile</button>
      <button class="tab">Data analysis</button>
    </div>

    <div class="platform-content">
      <p>Here you'll learn how to develop localized web applications with L10n.</p>
      <div class="code-block">
        <pre><code>// Initialize in your web app
import { L10n } from '@l10n/sdk';

L10n.initialize({
  apiKey: 'your-api-key',
  defaultLanguage: 'en'
});</code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.get-started-wrapper {
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
}

.intro-text {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

h2 {
  font-size: 2.5rem;
  font-weight: normal;
  margin: 3rem 0 1.5rem;
  color: var(--text-color);
}

.start-tour {
  display: inline-flex;
  align-items: center;
  background: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.25rem;
  margin: 2rem 0;
}

.code-block {
  background: var(--code-background);
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  width: 100%;
  box-sizing: border-box;
}

pre {
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  overflow-x: auto;
}

.platform-tabs {
  display: flex;
  gap: 0.5rem;
  margin: 2rem 0 1rem;
  border-bottom: 1px solid var(--border-color);
}

.tab {
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  color: var(--text-light);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
}

.tab.active {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}

.platform-content {
  margin-top: 1.5rem;
}

.platform-content p {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
</style>

<script setup lang="ts">
const installContent = `
  <p class="text-right">L10n is available for multiple platforms. Choose your preferred package manager to install:</p>
  <div class="code-block">
    <pre><code># For web applications
npm install @l10n/sdk
# or
yarn add @l10n/sdk

# For iOS applications
pod install

# For Android applications
implementation 'com.l10n:sdk:1.0.0'

# For Flutter applications
flutter pub add l10n_sdk</code></pre>
  </div>
`;

const useCaseContent = `
  <div class="use-cases">
    <div class="use-case">
      <h3>Web Applications</h3>
      <p class="text-right">Build localized web applications with L10n's powerful JavaScript SDK. Perfect for React, Vue, Angular, and other modern web frameworks.</p>
      <div class="code-block">
        <pre><code>// Initialize in your web app
import { L10n } from '@l10n/sdk';

L10n.initialize({
  apiKey: 'your-api-key',
  defaultLanguage: 'en'
});

// Use in your components
const greeting = L10n.t('welcome_message');</code></pre>
      </div>
    </div>

    <div class="use-case">
      <h3>Android Applications</h3>
      <p class="text-right">Seamlessly integrate L10n into your Android applications with our Kotlin-first SDK. Supports both Java and Kotlin codebases.</p>
      <div class="code-block">
        <pre><code>// Initialize in your Application class
L10n.initialize(
  apiKey = "your-api-key",
  defaultLanguage = "en"
)

// Use in your activities
val greeting = L10n.t("welcome_message")</code></pre>
      </div>
    </div>

    <div class="use-case">
      <h3>iOS Applications</h3>
      <p class="text-right">Localize your iOS applications with L10n's Swift SDK. Works great with both Swift and Objective-C projects.</p>
      <div class="code-block">
        <pre><code>// Initialize in AppDelegate
L10n.initialize(
  apiKey: "your-api-key",
  defaultLanguage: "en"
)

// Use in your view controllers
let greeting = L10n.t("welcome_message")</code></pre>
      </div>
    </div>

    <div class="use-case">
      <h3>Flutter Applications</h3>
      <p class="text-right">Add localization to your Flutter apps with L10n's Dart package. Works seamlessly with Flutter's widget system.</p>
      <div class="code-block">
        <pre><code>// Initialize in main.dart
await L10n.initialize(
  apiKey: 'your-api-key',
  defaultLanguage: 'en'
);

// Use in your widgets
final greeting = L10n.t('welcome_message');</code></pre>
      </div>
    </div>
  </div>
`;
</script> 