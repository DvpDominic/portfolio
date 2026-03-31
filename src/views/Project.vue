<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects.js'

const route = useRoute()

const project = computed(() => {
  return projects.find((p) => p.slug === route.params.slug)
})
</script>

<template>
  <div v-if="project">
    <!-- Back Button -->
    <div class="portfolio-header">
      <router-link class="portfolio-close" to="/">
        <fa :icon="['fas', 'arrow-left']" />
        <small>Back</small>
      </router-link>
    </div>

    <!-- Hero Image/Video -->
    <div class="portfolio-top">
      <img
        :src="project.thumbnail"
        :alt="project.title"
      />
      <h2>{{ project.title }} ({{ project.year }})</h2>
    </div>

    <!-- Project Info -->
    <section class="part project-info">
      <h3 class="part-header">Project Info</h3>
      <ul>
        <li>
          <fa class="list-icon" :icon="['fas', 'user']" />
          Role: {{ project.role }}
        </li>
        <li>
          <fa class="list-icon" :icon="['fas', 'users']" />
          Team Size: {{ project.teamSize }}
        </li>
        <li>
          <fa class="list-icon" :icon="['fas', 'clock']" />
          Time frame: {{ project.timeFrame }}
        </li>
        <li>
          <fa class="list-icon" :icon="['fas', 'screwdriver-wrench']" />
          Engine: {{ project.engine }}
        </li>
      </ul>
    </section>

    <!-- Description -->
    <section class="part">
      <h3 class="part-header">About the Project</h3>
      <div v-html="project.description"></div>
    </section>

    <!-- Links -->
    <section class="part" v-if="project.links && project.links.length">
      <h3 class="part-header">Links</h3>
      <p v-for="link in project.links" :key="link.url">
        <a class="url-link" :href="link.url" target="_blank">{{ link.label }}</a>
      </p>
    </section>

    <!-- Media Gallery -->
    <section class="part" v-if="project.media && project.media.length">
      <h3 class="part-header">Gallery</h3>
      <div class="videos">
        <div
          v-for="(item, index) in project.media"
          :key="index"
          class="content-placeholder"
        >
          <video
            v-if="item.type === 'video'"
            :src="item.src"
            controls
            muted
            loop
            playsinline
          ></video>
          <img
            v-else
            :src="item.src"
            :alt="item.caption || project.title"
            loading="lazy"
          />
          <p v-if="item.caption" class="video-text">{{ item.caption }}</p>
        </div>
      </div>
    </section>
  </div>

  <!-- Not Found -->
  <div v-else class="part">
    <h2 class="part-header">Project not found</h2>
    <p>
      <router-link class="url-link" to="/">Go back home</router-link>
    </p>
  </div>
</template>
