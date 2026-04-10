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
          src="@/assets/media/images/gallery/pano_4.jpg"
          class="img-fluid"
          alt=""
          style="filter: brightness(60%)"
        />

        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Impliquez-vous !</h1>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container my-5 pb-5">
    <div class="text-center mb-5" data-aos="fade-up">
      <h2 class="display-5 fw-bold text-primary">Comment contribuer ?</h2>
      <p class="lead text-muted col-md-8 mx-auto">
        Vélo Saguenay repose sur l'engagement de sa communauté. Que ce soit en
        tant que partenaire financier ou en offrant votre temps, votre aide est
        essentielle.
      </p>
    </div>

    <div class="row g-4 justify-content-center">
      <!-- Partenaire -->
      <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div class="bg-white rounded-4 shadow-sm p-5 h-100 d-flex flex-column">
          <div class="mb-4">
            <i
              class="bi bi-briefcase text-primary"
              style="font-size: 2.5rem"
            ></i>
          </div>
          <h3 class="h4 mb-3">Devenez partenaire</h3>
          <p class="text-muted flex-grow-1">
            Vélo-Saguenay est un organisme à but non lucratif qui veille au
            développement du vélo de montagne à Saguenay. Les disciplines de
            cross-country (XC), d'enduro et de descente (DH) étant en pleine
            croissance, associer votre entreprise à notre industrie est une
            opportunité d'affaires exceptionnelle.
          </p>
          <div class="mt-4">
            <a
              class="btn btn-primary"
              href="https://www.facebook.com/VeloSaguenay/"
              target="_blank"
            >
              <i class="bi bi-facebook me-2"></i> Communiquez avec nous
            </a>
          </div>
        </div>
      </div>

      <!-- Bénévole -->
      <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
        <div class="bg-white rounded-4 shadow-sm p-5 h-100 d-flex flex-column">
          <div class="mb-4">
            <i class="bi bi-people text-primary" style="font-size: 2.5rem"></i>
          </div>
          <h3 class="h4 mb-3">Devenez bénévole</h3>
          <p class="text-muted flex-grow-1">
            Rejoignez notre équipe de bénévoles passionnés ! Vous pouvez
            participer au développement continu de nos sentiers lors des
            corvées, ou même proposer votre candidature comme membre du conseil
            d'administration lors de notre assemblée générale annuelle.
          </p>
          <div class="mt-4">
            <a
              class="btn btn-outline-primary"
              href="https://www.facebook.com/VeloSaguenay/"
              target="_blank"
            >
              <i class="bi bi-facebook me-2"></i> Rejoignez le groupe
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
