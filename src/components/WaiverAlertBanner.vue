<template>
  <div
    v-if="!isClosed"
    class="waiver-banner"
    role="alert"
  >
    <div class="container d-flex align-items-center justify-content-between gap-3">
      <span>
        <i class="bi bi-exclamation-triangle-fill me-2" aria-hidden="true"></i>
        <strong>Le Panoramique — 14 ans et moins :</strong>
        décharge de responsabilité parentale obligatoire avant l'accès aux sentiers.
        <a href="documents/waivers-2026.pdf" class="fw-bold ms-1" target="_blank">Télécharger le formulaire →</a>
      </span>
      <button type="button" class="btn-close btn-close-sm flex-shrink-0" aria-label="Fermer" @click="closeBanner"></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isClosed = ref(false);

onMounted(() => {
  if (localStorage.getItem("dechargeBannerClosed2026") === "true") {
    isClosed.value = true;
  }
});

function closeBanner(): void {
  isClosed.value = true;
  localStorage.setItem("dechargeBannerClosed2026", "true");
}
</script>

<style scoped>
.waiver-banner {
  background-color: #fff3cd;
  border-bottom: 3px solid #ffc107;
  padding: 0.5rem 0;
  font-size: 0.9rem;
}

.btn-close {
  display: block;
}
</style>
