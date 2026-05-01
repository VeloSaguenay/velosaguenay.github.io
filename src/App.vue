<script setup lang="ts">
import { nextTick, onMounted } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import AOS from "aos";
import WaiverAlertBanner from "@/components/WaiverAlertBanner.vue";
import "aos/dist/aos.css";

const router = useRouter();

onMounted(() => {
  AOS.init({
    duration: 400,
    easing: "ease-in-out",
    once: true,
  });
});

router.afterEach(() => {
  // Give time for the DOM to render the new route before refreshing AOS
  setTimeout(() => {
    AOS.refresh();
  }, 100);
});

async function navigateToSection(sectionId: string): Promise<void> {
  if (router.currentRoute.value.name !== "home") {
    await router.push({ name: "home" });
  }

  await nextTick();

  window.requestAnimationFrame(() => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
</script>

<template>
  <WaiverAlertBanner />

  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-1">
      <RouterLink
        to="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <span class="fs-4">Vélo Saguenay</span>
      </RouterLink>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a
            href="#"
            class="nav-link link-dark"
            @click.prevent="navigateToSection('le-panoramique-section')"
            >Le Panoramique</a
          >
        </li>
        <li>
          <a
            href="#"
            class="nav-link link-dark"
            @click.prevent="navigateToSection('mont-belu-section')"
            >Mont-Bélu</a
          >
        </li>
        <li>
          <RouterLink to="/involvement" class="nav-link link-dark"
            >Impliquez-vous</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/about" class="nav-link link-dark"
            >À propos</RouterLink
          >
        </li>
      </ul>
    </header>
  </div>

  <main>
    <RouterView />

    <footer class="footer mt-auto py-3 bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <span class="text-muted">&copy; 2024 Vélo Saguenay</span>
            <a
              class="float-end d-block"
              href="https://www.facebook.com/VeloSaguenay/"
              target="_blank"
              ><i class="bi bi-facebook" style="color: #c0926a"></i
            ></a>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
