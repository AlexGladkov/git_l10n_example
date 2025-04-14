<script setup lang="ts">
// Community home content component
</script>

<template>
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-content">
        <h1>Get involved in the community</h1>
        <p class="hero-text">
          Find online resources and information about community activities.
          Can't find any? Organize your own — we are always here to support you!
        </p>
      </div>
    </div>
  </section>

  <section class="keep-in-touch">
    <div class="section-content">
      <h2>Keep in Touch</h2>
      <div class="social-grid">
        <a href="https://t.me/+qMWsS4J7UwozYWUy" target="_blank" rel="noopener" class="social-card">
          <div class="icon telegram-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
            </svg>
          </div>
          <h3>Telegram</h3>
          <p>Join our Telegram channel for updates and discussions.</p>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero,
.keep-in-touch {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero {
  min-height: 30vh;
  padding-top: calc(72px + 10vh);
  padding-bottom: 0;
  position: relative;
}

.hero::before {
  display: none;
}

.hero-inner,
.section-content {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
}

.hero-content {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero h1 {
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 0.75rem;
  color: var(--text-color);
  font-weight: 700;
  letter-spacing: -1.5px;
}

.hero-text {
  font-size: 1.25rem;
  color: var(--text-light);
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.keep-in-touch {
  padding: 6rem 0;
}

.section-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.keep-in-touch h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: var(--text-color);
  font-weight: 700;
  letter-spacing: -0.5px;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
}

.social-card {
  background: var(--card-background);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
}

.social-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.icon {
  width: 32px;
  height: 32px;
  margin-bottom: 1rem;
}

.telegram-icon {
  color: #27A7E7;
}

.social-card h3 {
  color: var(--text-color);
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.social-card p {
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding-top: calc(72px + 5vh);
    padding-bottom: 0;
  }

  .hero-inner {
    padding: 1.5rem 0;
  }

  .hero h1 {
    font-size: 3rem;
  }

  .hero-text {
    font-size: 1.125rem;
  }

  .keep-in-touch {
    padding: 4rem 0;
  }

  .social-grid {
    grid-template-columns: 1fr;
  }

  .hero-inner,
  .section-content {
    padding: 0 1.5rem;
  }
}
</style>