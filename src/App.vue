<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-1">
      <RouterLink to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fs-4">Vélo Saguenay</span>
      </RouterLink>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Le Panoramique</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="documents/trails_map.pdf" target="_blank">Carte des sentiers</a></li>
            <li><a class="dropdown-item" href="https://app.endorphine.ca/c/lepanoramique" target="_blank">Billetterie</a></li>
            <li><RouterLink to="/le-panoramique" class="dropdown-item">En savoir plus</RouterLink></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Mont-Bélu</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://www.trailforks.com/region/montbelu-bike-park" target="_blank">Carte des sentiers</a></li>
            <li><a class="dropdown-item" href="https://app.reservationpresence.com/montbelubike" target="_blank">Billetterie</a></li>
            <li><RouterLink to="/mont-belu"  class="dropdown-item">En savoir plus</RouterLink></li>
          </ul>
        </li>
        <li><RouterLink to="/involvement" class="nav-link link-dark">Impliquez-vous</RouterLink></li>
        <li><RouterLink to="/about" class="nav-link link-dark">À propos</RouterLink></li>
        <li><RouterLink to="/contact" class="nav-link link-dark">Contactez-nous</RouterLink></li>
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
            <a class="float-end d-block" href="https://www.facebook.com/VeloSaguenay/" target="_blank"><i class="bi bi-facebook" style="color:#6C757F"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<style>
@import '@/assets/base.css';
</style>
