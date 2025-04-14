<script setup lang="ts">
// Events content component
</script>

<template>
  <div class="events-content">
    <h2>Community Events</h2>
    <p>Join us at our upcoming events and meetups.</p>
    
    <div class="upcoming-events">
      <h3>Upcoming Events</h3>
      <div class="events-grid">
        <div class="event-card">
          <div class="event-date">
            <span class="month">MAR</span>
            <span class="day">15</span>
          </div>
          <div class="event-details">
            <h4>L10n Meetup</h4>
            <p>Virtual meetup discussing the latest features</p>
            <div class="event-meta">
              <span class="time">2:00 PM UTC</span>
              <span class="type">Online</span>
            </div>
          </div>
        </div>
        
        <div class="event-card">
          <div class="event-date">
            <span class="month">APR</span>
            <span class="day">05</span>
          </div>
          <div class="event-details">
            <h4>Localization Workshop</h4>
            <p>Hands-on workshop for beginners</p>
            <div class="event-meta">
              <span class="time">3:00 PM UTC</span>
              <span class="type">Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="past-events">
      <h3>Past Events</h3>
      <div class="events-grid">
        <div class="event-card past">
          <div class="event-date">
            <span class="month">FEB</span>
            <span class="day">20</span>
          </div>
          <div class="event-details">
            <h4>L10n Launch Party</h4>
            <p>Celebrating the official launch</p>
            <div class="event-meta">
              <span class="time">Past Event</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.events-content {
  max-width: 1200px;
  margin: 0 auto;
}

.upcoming-events,
.past-events {
  margin-top: 4rem;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.event-card {
  background: var(--card-background);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.event-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.event-card.past {
  opacity: 0.7;
}

.event-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 80px;
}

.month {
  font-size: 0.875rem;
  color: var(--text-light);
  text-transform: uppercase;
}

.day {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-color);
}

.event-details {
  flex: 1;
}

.event-details h4 {
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.event-details p {
  color: var(--text-light);
  margin-bottom: 1rem;
}

.event-meta {
  display: flex;
  gap: 1rem;
  color: var(--text-lighter);
  font-size: 0.875rem;
}

.type {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}
</style> 