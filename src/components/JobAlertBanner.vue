<template>
  <div
    v-if="!isClosed"
    class="alert alert-warning alert-dismissible fade show mb-0 rounded-0 border-0 shadow-sm"
    role="alert"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-9 text-center text-md-start mb-2 mb-md-0">
          <strong class="me-2">🎯 Nous embauchons!</strong>
          <span class="d-inline-block">
            Directeur(trice) des opérations ski et vélo - Poste permanent à
            l'année
          </span>
        </div>
        <div class="col-md-3 text-center text-md-end">
          <RouterLink
            to="/emploi"
            class="btn btn-sm btn-dark fw-bold"
            @click="trackClick"
          >
            Voir l'offre →
          </RouterLink>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="btn-close"
      aria-label="Fermer"
      @click="closeBanner"
    ></button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const isClosed = ref(false);

onMounted(() => {
  // Check if user has previously closed the banner
  const bannerClosed = localStorage.getItem("jobBannerClosed");
  if (bannerClosed === "true") {
    isClosed.value = true;
  }
});

function closeBanner(): void {
  isClosed.value = true;
  localStorage.setItem("jobBannerClosed", "true");
}

function trackClick(): void {
  // Optional: Add analytics tracking here
  console.log("Job offer banner clicked");
}
</script>

<style scoped>
.alert-warning {
  background-color: #fff3cd;
  border-bottom: 3px solid #ffc107;
}

.btn-close {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
}

@media (max-width: 768px) {
  .btn-close {
    top: 0.5rem;
    transform: none;
  }
}
</style>
