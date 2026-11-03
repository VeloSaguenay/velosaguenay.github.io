<template>
  <div v-if="!isClosed" class="season-closed-banner" role="status">
    <div
      class="container d-flex align-items-center justify-content-between gap-3"
    >
      <span>
        <i class="bi bi-snow2 me-2" aria-hidden="true"></i>
        <strong>Merci pour cette belle saison estivale !</strong>
        Les sentiers sont maintenant fermés. On se retrouve dès les premières
        neiges pour la saison de fatbike !
        <a
          href="https://www.facebook.com/VeloSaguenay/"
          class="fw-bold ms-1"
          target="_blank"
          rel="noopener"
          >Suivez-nous sur Facebook →</a
        >
      </span>
      <button
        type="button"
        class="btn-close btn-close-sm flex-shrink-0"
        aria-label="Fermer"
        @click="closeBanner"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isClosed = ref(false);

onMounted(() => {
  if (localStorage.getItem("seasonClosedBannerClosed2026") === "true") {
    isClosed.value = true;
  }
});

function closeBanner(): void {
  isClosed.value = true;
  localStorage.setItem("seasonClosedBannerClosed2026", "true");
}
</script>

<style scoped>
.season-closed-banner {
  background-color: #e8f4fb;
  border-bottom: 3px solid #8ec5e6;
  padding: 0.5rem 0;
  font-size: 0.9rem;
}

.season-closed-banner .bi-snow2 {
  color: #3a8bbf;
}

.season-closed-banner a {
  color: #a84d16;
}

.btn-close {
  display: block;
}
</style>
