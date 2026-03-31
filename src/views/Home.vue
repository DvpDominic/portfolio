<script setup>
import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
</script>

<template>
  <div>
    <!-- About / Information Section -->
    <section class="information-section">
      <h2 class="information-header">{{ profile.aboutHeading }}</h2>
      <p class="information-text" v-html="profile.aboutText"></p>
    </section>

    <!-- Extra About Text -->
    <section class="part" v-if="profile.aboutExtra">
      <p v-html="profile.aboutExtra"></p>
    </section>

    <!-- Projects Section -->
    <section class="part">
      <h2 class="part-header">Projects</h2>
      <div class="experience">
        <router-link
          v-for="project in projects"
          :key="project.slug"
          :to="`/portfolio/${project.slug}`"
          class="job-card"
        >
          <div class="job-card-video">
            <img
              :src="project.thumbnail"
              :alt="project.title"
              loading="lazy"
            />
          </div>
          <div class="clickable-card-header">
            <span>{{ project.title }} ({{ project.year }})</span>
            <fa class="clickable-header-icon" :icon="['fas', 'arrow-down']" />
            <small>{{ project.tagline }}</small>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>
