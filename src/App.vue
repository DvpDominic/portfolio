<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { profile } from './data/profile.js'

const router = useRouter()
const route = useRoute()
const scrollY = ref(0)
const previousPath = ref(null)

const onScroll = () => {
  scrollY.value = -window.scrollY
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    previousPath.value = oldPath
  }
)

watch(
  () => route.name,
  (name) => {
    const base = `${profile.name} | ${profile.title} - `
    document.title = base + (name || '')
  },
  { immediate: true }
)

const transitionName = computed(() => {
  if (!previousPath.value) return ''
  return previousPath.value === '/' ? 'page-slide-start' : 'page-slide'
})
</script>

<template>
  <div class="content-wrapper">
    <!-- Sticky Header -->
    <div class="header">
      <h1>
        <router-link class="header-link" to="/">{{ profile.name }}</router-link>
        <small>{{ profile.title }}</small>
      </h1>
      <div class="links">
        <a
          v-if="profile.linkedin"
          class="link"
          :href="profile.linkedin"
          target="_blank"
          title="LinkedIn"
        >
          <span class="sr-only">LinkedIn</span>
          <fa class="link-icon" :icon="['fab', 'linkedin']" />
        </a>
        <a
          v-if="profile.github"
          class="link"
          :href="profile.github"
          target="_blank"
          title="GitHub"
        >
          <span class="sr-only">GitHub</span>
          <fa class="link-icon" :icon="['fab', 'github']" />
        </a>
        <a
          v-if="profile.instagram"
          class="link"
          :href="profile.instagram"
          target="_blank"
          title="Instagram"
        >
          <span class="sr-only">Instagram</span>
          <fa class="link-icon" :icon="['fab', 'instagram']" />
        </a>
        <a
          v-if="profile.email"
          class="link"
          :href="'mailto:' + profile.email"
          title="Email"
        >
          <span class="sr-only">Email</span>
          <fa class="link-icon" :icon="['fas', 'envelope']" />
        </a>
        <a
          v-if="profile.resumePDF"
          class="link resume"
          :href="profile.resumePDF"
          download
          target="_blank"
          title="Resume"
        >
          <span class="sr-only">Resume</span>
          <span>Resume</span>
          <fa class="link-icon" :icon="['fas', 'arrow-down']" />
        </a>
      </div>
    </div>

    <!-- Route View with Page Transitions -->
    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <component
          :is="Component"
          class="content"
          :style="{ '--scroll-y': scrollY + 'px' }"
        />
      </transition>
    </router-view>
  </div>
</template>
