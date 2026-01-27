<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="@/assets/media/images/gallery/pano_1.jpg"
          class="img-fluid"
          alt=""
          style="filter: brightness(60%)"
        />
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Le Panoramique</h1>
            <p>Des sentiers de rêves en été comme en hiver !</p>
            <p>
              <RouterLink to="/le-panoramique" class="btn btn-lg btn-primary"
                >Plus d'informations</RouterLink
              >
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/media/images/gallery/pano_2.jpg"
          class="img-fluid"
          alt=""
          style="filter: brightness(55%)"
        />

        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Contribuez en devenant membre</h1>
            <p>Passe de saison disponible</p>
            <p>
              <a
                class="btn btn-lg btn-primary me-2 mb-2"
                href="https://app.endorphine.ca/c/lepanoramique"
                target="_blank"
                >Billetterie Le Panoramique</a
              >
              <a
                class="btn btn-lg btn-primary mb-2"
                href="https://app.reservationpresence.com/montbelubike"
                target="_blank"
                >Billetterie Mont-Bélu</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/media/images/gallery/belu_2.jpg"
          class="img-fluid"
          alt=""
          style="filter: brightness(75%)"
        />
        <div class="container">
          <div class="carousel-caption">
            <h1>Mont-Bélu Véloparc</h1>
            <p>
              <RouterLink to="/mont-belu" class="btn btn-lg btn-primary"
                >Plus d'informations</RouterLink
              >
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/media/images/gallery/pano_1.jpg"
          class="img-fluid"
          alt=""
          style="filter: brightness(50%)"
        />
        <div class="container">
          <div class="carousel-caption text-center">
            <h1 class="display-4 fw-bold">🎯 Nous embauchons!</h1>
            <p class="lead mb-4">
              Rejoignez notre équipe en tant que Directeur(trice) des opérations
              ski et vélo
            </p>
            <p class="mb-2">
              <span class="badge bg-warning text-dark fs-6 me-2"
                >📍 Saguenay</span
              >
              <span class="badge bg-success fs-6">Poste permanent</span>
            </p>
            <p class="mt-4">
              <RouterLink to="/emploi" class="btn btn-lg btn-warning fw-bold"
                >Découvrir l'offre</RouterLink
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. -->

  <div class="container marketing">
    <!-- START THE FEATURETTES -->

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">Le Panoramique</h2>
        <p class="lead">
          Le panoramique possède un réseau de plus de 41 km de sentiers étendu
          sur 40 sentiers aménagés.
        </p>
        <p>
          <a
            href="documents/trails_map.pdf"
            class="btn btn-lg btn-primary"
            target="_blank"
            >Carte des sentiers</a
          >
        </p>
      </div>
      <div class="col-md-5">
        <img
          src="@/assets/media/images/gallery/pano_1_500.jpg"
          class="rounded img-fluid"
          alt=""
        />
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">Mont-Bélu Véloparc</h2>
        <p class="lead">
          Le centre de vélo de Descente Mont-Bélu Véloparc est situé en plein
          cœur de La Baie. Plusieurs pistes de intermédiaire à expert sauront
          vous convaincre!
        </p>
        <p>
          <RouterLink to="/mont-belu" class="btn btn-lg btn-primary"
            >Plus d'informations</RouterLink
          >
        </p>
      </div>
      <div class="col-md-5 order-md-1">
        <img
          src="@/assets/media/images/gallery/belu_2_500.jpg"
          class="rounded img-fluid"
          alt=""
        />
      </div>
    </div>

    <hr class="featurette-divider" />

    <!-- Rejoignez notre équipe -->
    <div class="row featurette">
      <div class="col-md-12">
        <div class="card border-warning shadow-lg">
          <div class="card-body p-5 bg-light">
            <div class="row align-items-center">
              <div class="col-md-8">
                <h2 class="featurette-heading mb-3">
                  🚴 Rejoignez notre équipe!
                </h2>
                <p class="lead mb-3">
                  Nous recherchons un(e)
                  <strong>Directeur(trice) des opérations ski et vélo</strong>
                  pour assurer le leadership opérationnel de nos activités
                  quatre saisons.
                </p>
                <ul class="list-unstyled mb-0">
                  <li class="mb-2">✅ Poste permanent à l'année</li>
                  <li class="mb-2">✅ Travail terrain et gestion</li>
                  <li class="mb-2">
                    ✅ Accès gratuit aux activités pour vous et votre famille
                  </li>
                  <li class="mb-2">✅ Fonds de pension</li>
                </ul>
              </div>
              <div class="col-md-4 text-center">
                <div class="d-grid gap-3">
                  <RouterLink
                    to="/emploi"
                    class="btn btn-warning btn-lg fw-bold"
                  >
                    📋 Voir l'offre complète
                  </RouterLink>
                  <a
                    href="mailto:Fred.belu@live.ca"
                    class="btn btn-outline-primary btn-lg"
                  >
                    📧 Postuler
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="featurette-divider" />

    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div class="col-lg-4">
        <h4>Le Panoramique</h4>
        <p>1412 Chemin de la Réserve, <br />Chicoutimi, QC G7J 0K2</p>
        <p>
          <a
            class="link-dark"
            href="https://goo.gl/maps/ywCh5kfVbEmQ9UY17"
            target="_blank"
            >Vous rendre &raquo;</a
          >
        </p>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <h4>Mont-Bélu Véloparc</h4>
        <p>4855 Bd de la Grande-Baie-Sud, <br />La Baie, QC G7B 3P6</p>
        <p>
          <a
            class="link-dark"
            href="https://goo.gl/maps/MnKD1uFBZFQsuGJf7"
            target="_blank"
            >Vous rendre &raquo;</a
          >
        </p>
      </div>
      <!-- /.col-lg-4 -->
    </div>
    <!-- /.row -->

    <!-- /END THE FEATURETTES -->
  </div>
  <!-- /.container -->

  <div class="container">
    <hr class="featurette-divider" />

    <h2 class="partners text-center">Les partenaires</h2>

    <hr class="mb-5 mt-5" />

    <div class="row justify-content-center">
      <h4 class="text-center mb-5">Grand Partenaire</h4>
      <div class="col-md-2 mb-2 ms-5">
        <a href="https://www.riotinto.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/riotinto.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-2 mb-2 ms-5">
        <a href="https://ville.saguenay.ca/" target="_blank"
          ><img
            src="@/assets/media/images/partners/ville_saguenay.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-2 mb-2 ms-5">
        <a href="http://www.elkem.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/logo-12.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
    </div>

    <hr class="mb-5 mt-5" />

    <div class="row justify-content-center">
      <h4 class="text-center mb-5">Sentier</h4>
      <div class="col-md-2 mb-2">
        <a href="http://gendronbicycles.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/logo-04.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-2 mb-2 ms-5">
        <a href="https://enssag.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/ensag.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-2 mb-2 ms-5">
        <a href="https://mecaniqueadg.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/mecanique_adg.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-2 mb-2 ms-5">
        <a href="https://electricavenuesaguenay.ca/" target="_blank"
          ><img
            src="@/assets/media/images/partners/electric_avenue.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
    </div>

    <hr class="mb-5 mt-5" />

    <div class="row justify-content-center">
      <h4 class="text-center mb-5">All Mountain</h4>
      <div class="col-md-2 mb-2">
        <a href="https://www.velosexpertsaguenay.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/velo_expert_saguenay.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-2 mb-2">
        <a href="https://www.industrielami.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/group_ami.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-2 mb-2">
        <a href="#"
          ><img
            src="@/assets/media/images/partners/logo-03.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-2 mb-2">
        <a href="https://www.sportsexperts.ca/" target="_blank"
          ><img
            src="@/assets/media/images/partners/sports_experts.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-2 mb-2">
        <a href="http://www.ultravioletsports.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/logo-07.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-2 mb-2 visually-hidden">
        <a href="http://www.devinci.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/logo-08.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-2 mb-2">
        <a href="http://www.distributionddm.ca/" target="_blank"
          ><img
            src="@/assets/media/images/partners/ddm.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-2 mb-2">
        <a href="http://piebraque.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/logo-13.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-2 mb-2">
        <a href="https://spmt.ca" target="_blank"
          ><img
            src="@/assets/media/images/partners/service-petroliers-mt.png"
            alt=""
            class="img-fluid"
            style="max-height: 70px"
        /></a>
      </div>
      <div class="col-md-2 mb-2">
        <a href="#" target="_blank"
          ><img
            src="@/assets/media/images/partners/simard-tremblay-cpa.jpeg"
            alt=""
            class="img-fluid"
            style="max-height: 70px"
        /></a>
      </div>
      <div class="col-md-2 mb-2">
        <a href="https://www.dresto.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/groupe-d-resto.svg"
            alt=""
            class="img-fluid"
            style="max-height: 70px"
        /></a>
      </div>
      <div class="col-md-2 mb-2">
        <a href="https://www.scepterinc.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/scepter.png"
            alt=""
            class="img-fluid"
            style="max-height: 70px"
        /></a>
      </div>
    </div>

    <hr class="mb-5 mt-5" />

    <div class="row justify-content-center">
      <h4 class="text-center mb-5">Grand pignon</h4>
      <div class="col-md-1 mb-2">
        <a href="#" target="_blank"
          ><img
            src="@/assets/media/images/partners/club_uv.jpg"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-2 mb-2">
        <a href="#"
          ><img
            src="@/assets/media/images/partners/club_acidose.jpg"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-1 mb-2">
        <a href="https://www.gravylet.ca/" target="_blank"
          ><img
            src="@/assets/media/images/partners/gravylet.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-2 mb-2 visually-hidden">
        <a href="http://orthomr.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/logo-02.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
    </div>

    <hr class="mb-5 mt-5" />

    <div class="row justify-content-center mb-3">
      <h4 class="text-center mb-5">Moyen pignon</h4>
      <div class="col-md-2 mb-2">
        <a href="http://www.optiquesante.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/logo-10.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-1 mb-2">
        <a href="https://cliniqueremixsante.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/remix-sante.png"
            alt=""
            class="img-fluid"
            style="max-height: 70px"
        /></a>
      </div>
      <div class="col-md-2 mb-2">
        <a href="http://www.velociteconcept.ca/" target="_blank"
          ><img
            src="@/assets/media/images/partners/logo-19.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
    </div>
    <div class="row mb-3 justify-content-center">
      <div class="col-md-2 mb-2">
        <a href="https://www.cervopolygaz.ca/" target="_blank"
          ><img
            src="@/assets/media/images/partners/pgs.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-1 mb-2">
        <a href="http://www.lambertsportphysio.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/physio_lambert.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-2 mb-2">
        <a href="https://www.sportcycleexpert.ca/" target="_blank"
          ><img
            src="@/assets/media/images/partners/sport_cycle.jpg"
            alt=""
            class="img-fluid"
        /></a>
      </div>
    </div>

    <div class="row mb-3 justify-content-center">
      <div class="col-md-2 mb-2 visually-hidden">
        <a href="https://www.facebook.com/jcsport2017" target="_blank"
          ><img
            src="@/assets/media/images/partners/logo-jc-sports.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-2 mb-2 visually-hidden">
        <a href="https://www.lsimmobiliersaguenay.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/libre-services-immobiliers.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-2 mb-2 visually-hidden">
        <a href="https://chiropratiquejonquiere.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/clinique-chiro-jonq.png"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-md-2 mb-2 visually-hidden">
        <a href="https://www.evasion-sport.com/" target="_blank"
          ><img
            src="@/assets/media/images/partners/evasion-sport.jpg"
            alt=""
            class="img-fluid"
        /></a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
