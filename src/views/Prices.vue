<script setup lang="ts">
import { useRouter } from 'vue-router'
import targetIcon from '../assets/target.svg'
import rocketIcon from '../assets/rocket.svg'
import buildingIcon from '../assets/building.svg'

const router = useRouter()

const handleTryTrial = () => {
  router.push('/documentation/getting-started')
}
</script>

<template>
  <main>
    <section class="hero">
      <div class="hero-inner">
        <div class="pricing-content">
          <h1>Choose Your Plan</h1>
          <p class="subtitle">All plans include a 14-day free trial. No credit card required.</p>
          <div class="pricing-grid">
            <div class="pricing-card">
              <img :src="targetIcon" alt="Starter" class="card-icon" />
              <h2>Starter</h2>
              <div class="price">
                <span class="amount">$0</span>
                <span class="period">/month</span>
              </div>
              <div class="features">
                <div class="feature-item">
                  <div>
                    <span class="check">✓</span>
                    <span>Up to 10,000 translations</span>
                  </div>
                </div>
                <div class="feature-item">
                  <div>
                    <span class="check">✓</span>
                    <span>2 languages</span>
                  </div>
                </div>
                <div class="feature-item">
                  <div>
                    <span class="check">✓</span>
                    <span>Basic support</span>
                  </div>
                </div>
              </div>
              <button class="try-button" @click="handleTryTrial">Try Free</button>
            </div>

            <div class="pricing-card featured">
              <img :src="rocketIcon" alt="Pro" class="card-icon" />
              <h2>Pro</h2>
              <div class="price">
                <span class="amount">$49</span>
                <span class="period">/month</span>
              </div>
              <div class="features">
                <div class="feature-item">
                  <div>
                    <span class="check">✓</span>
                    <span>Unlimited translations</span>
                  </div>
                </div>
                <div class="feature-item">
                  <div>
                    <span class="check">✓</span>
                    <span>Unlimited languages</span>
                  </div>
                </div>
                <div class="feature-item">
                  <div>
                    <span class="check">✓</span>
                    <span>Priority support</span>
                  </div>
                </div>
              </div>
              <button class="try-button" @click="handleTryTrial">Start Free Trial</button>
            </div>

            <div class="pricing-card">
              <img :src="buildingIcon" alt="Enterprise" class="card-icon" />
              <h2>Enterprise</h2>
              <div class="price">
                <span class="amount">Custom</span>
              </div>
              <div class="features">
                <div class="feature-item">
                  <div>
                    <span class="check">✓</span>
                    <span>Everything in Pro</span>
                  </div>
                </div>
                <div class="feature-item">
                  <div>
                    <span class="check">✓</span>
                    <span>Custom integrations</span>
                  </div>
                </div>
                <div class="feature-item">
                  <div>
                    <span class="check">✓</span>
                    <span>Dedicated support</span>
                  </div>
                </div>
              </div>
              <button class="try-button" @click="handleTryTrial">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.hero {
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
  min-height: 100vh;
  padding-top: 72px;
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

.hero-inner {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pricing-content {
  max-width: 1200px;
  width: 100%;
  text-align: center;
  padding: 4rem 0;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  font-weight: 700;
  letter-spacing: -1px;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-light);
  margin-bottom: 3rem;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 0 auto;
  max-width: 1200px;
}

.pricing-card {
  background: rgba(30, 41, 59, 0.5);
  padding: 2.5rem 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
  position: relative;
  overflow: hidden;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  border-color: var(--accent-color);
}

.pricing-card.featured {
  border-color: var(--accent-color);
}

.card-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 1.5rem;
  color: var(--accent-color);
}

.pricing-card h2 {
  margin-bottom: 1rem;
  color: var(--text-color);
  font-weight: 600;
  font-size: 1.75rem;
}

.price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.amount {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-color);
  line-height: 1;
}

.period {
  color: var(--text-light);
  font-size: 1.25rem;
}

.features {
  margin: 0 0 2rem 0;
  width: calc(100% + 4rem);
  margin-left: -2rem;
  margin-right: -2rem;
  background: rgba(15, 23, 42, 0.6);
  padding: 1.5rem 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: var(--text-light);
  font-size: 1rem;
  width: 100%;
}

.feature-item > div {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.feature-item:last-child {
  margin-bottom: 0;
}

.check {
  color: var(--accent-color);
  font-weight: bold;
}

.try-button {
  background: var(--accent-color);
  color: var(--background-darker);
  border: none;
  padding: 1rem;
  border-radius: 100px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
  font-size: 1rem;
}

.try-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(19, 185, 253, 0.3);
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 4rem 0;
  }
  
  .pricing-content h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 400px;
  }
  
  .pricing-card {
    padding: 1.5rem;
  }
  
  .card-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 1rem;
  }
  
  .pricing-card h2 {
    font-size: 1.25rem;
  }
  
  .amount {
    font-size: 2.5rem;
  }
  
  .period {
    font-size: 1rem;
  }

  .features {
    padding: 1.25rem;
  }
}
</style> 