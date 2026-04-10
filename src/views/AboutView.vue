<template>
  <!-- Marketing messaging and featurettes
    ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. -->

  <div
    id="myCarousel"
    class="carousel slide carousel-static"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="@/assets/media/images/gallery/trail_building_1.jpg"
          class="img-fluid"
          alt=""
          style="filter: brightness(60%)"
        />

        <div class="container">
          <div class="carousel-caption text-start">
            <h1>À Propos</h1>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container my-5">
    <!-- Pour une passion accessible -->
    <div class="row justify-content-center mb-5 pb-5" data-aos="fade-up">
      <div class="col-md-8 text-center">
        <h2 class="display-5 fw-bold text-primary mb-4">
          Pour une passion accessible
        </h2>
        <p class="lead text-muted mb-4">
          Vélo Saguenay coordonne le développement et l’entretien de deux sites
          exceptionnels de vélo de montagne en milieu urbain : Le Centre de vélo
          de montagne Le Panoramique à Chicoutimi et le Mont-Bélu Véloparc de La
          Baie.
        </p>
        <p class="text-muted">
          Émotions fortes, activité modérée ou plein air en famille, nos sites
          gagnent en popularité. Stationnement, piste de type dirt jump, aire
          protégée pour les repas : nous travaillons fort pour que la communauté
          bénéficie d’un espace accessible et bien entretenu.
        </p>
      </div>
    </div>

    <!-- CA Members -->
    <div class="mb-5 pb-5">
      <div class="text-center mb-5" data-aos="fade-up">
        <h2 class="h1 fw-bold text-dark">
          Membres du conseil d'administration
        </h2>
        <div class="d-flex justify-content-center mt-3">
          <div
            style="
              width: 50px;
              height: 4px;
              background-color: var(--bs-primary);
              border-radius: 2px;
            "
          ></div>
        </div>
      </div>

      <div class="row g-4 justify-content-center">
        <div
          v-for="(member, index) in boardMembers"
          :key="member.name"
          class="col-md-4 col-sm-6"
          data-aos="fade-up"
          :data-aos-delay="index * 50"
        >
          <div
            class="bg-white rounded-4 shadow-sm p-4 h-100 text-center d-flex flex-column justify-content-center border-top border-primary border-4"
          >
            <h3 class="h5 fw-bold mb-2">{{ member.name }}</h3>
            <p class="text-muted small mb-0">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Direction Générale -->
    <div class="mb-5 pb-5 mt-5 pt-4">
      <div class="text-center mb-5" data-aos="fade-up">
        <h2 class="h1 fw-bold text-dark">Direction générale</h2>
        <div class="d-flex justify-content-center mt-3">
          <div
            style="
              width: 50px;
              height: 4px;
              background-color: var(--bs-primary);
              border-radius: 2px;
            "
          ></div>
        </div>
      </div>

      <div class="row g-4 justify-content-center">
        <div class="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="100">
          <div
            class="bg-white rounded-4 shadow-sm p-4 h-100 text-center d-flex flex-column justify-content-center border-top border-primary border-4"
          >
            <h3 class="h5 fw-bold mb-2">Frédéric Perron</h3>
            <p class="text-muted small mb-0">Directeur général</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Contactez-nous section -->
  <div class="container mb-5 pb-5" data-aos="zoom-in">
    <div class="bg-primary bg-opacity-10 rounded-4 p-5 text-center">
      <h2 class="h1 fw-bold text-dark mb-3">Contactez-nous</h2>
      <p class="lead text-dark col-md-8 mx-auto mb-4">
        Vous avez des questions, des commentaires ou souhaitez communiquer avec
        l'équipe de Vélo Saguenay? Le meilleur moyen de nous joindre est par
        notre page Facebook.
      </p>
      <div class="d-flex justify-content-center gap-3 flex-wrap">
        <a
          href="https://www.facebook.com/VeloSaguenay/"
          target="_blank"
          class="btn btn-lg btn-primary d-inline-flex align-items-center"
        >
          <i class="bi bi-facebook me-2" aria-hidden="true"></i>
          Page Facebook
        </a>
        <RouterLink
          to="/involvement"
          class="btn btn-lg btn-outline-primary d-inline-flex align-items-center"
        >
          <i class="bi bi-person-heart me-2" aria-hidden="true"></i>
          Impliquez-vous !
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const boardMembers = [
  { name: "Sébastien Bouchard", role: "Président, responsable Mont-Bélu" },
  {
    name: "Jean-François Garon",
    role: "Vice-président, responsable Mont-Bélu",
  },
  { name: "Yves Larouche", role: "Trésorier" },
  {
    name: "Vincent Desautels",
    role: "Administrateur et responsable des communications",
  },
  { name: "Maxime Beaudoin", role: "Administrateur et webmestre" },
  {
    name: "Jean-Simon Vermette",
    role: "Administrateur et responsable du programme de partenariat",
  },
  { name: "Pascal Tremblay", role: "Administrateur" },
  { name: "Réjean Côté", role: "Administrateur" },
  { name: "Pascal Bejjani", role: "Administrateur" },
  { name: "Charles Sexton", role: "Administrateur" },
  { name: "Patrice Dallaire", role: "Administrateur" },
];
</script>
