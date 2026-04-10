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
              <button
                type="button"
                class="btn btn-lg btn-primary"
                @click="scrollToSection('le-panoramique-section')"
              >
                Découvrir la section
              </button>
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
          src="@/assets/media/images/gallery/belu_3.jpg"
          class="img-fluid"
          alt=""
          style="filter: brightness(75%)"
        />
        <div class="container">
          <div class="carousel-caption">
            <h1>Mont-Bélu Véloparc</h1>
            <p>
              <button
                type="button"
                class="btn btn-lg btn-primary"
                @click="scrollToSection('mont-belu-section')"
              >
                Découvrir la section
              </button>
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

    <div class="row align-items-start g-5 mb-5 mt-2 home-intro-row">
      <div class="col-lg-8 mb-4 mb-lg-0">
        <h2 class="featurette-heading">
          Vélo Saguenay, pour une passion accessible
        </h2>
        <p class="lead">
          Vélo Saguenay coordonne le développement et l'entretien de deux sites
          exceptionnels de vélo de montagne en milieu urbain : Le Panoramique à
          Chicoutimi et le Mont-Bélu Véloparc à La Baie.
        </p>
        <p>
          Notre mission est d'offrir des lieux de pratique accessibles,
          sécuritaires et bien entretenus pour toute la communauté. Que vous
          soyez à la recherche d'une sortie en famille, d'un défi sportif ou
          d'une expérience de plein air au cœur du Saguenay, nos réseaux de
          sentiers sont pensés pour accueillir les passionnés de tous les
          niveaux.
        </p>
        <p class="mb-0">
          Derrière chaque saison se trouve le travail d'une organisation
          engagée, soutenue par des partenaires, des bénévoles et une communauté
          qui croit au développement durable du vélo de montagne dans la région.
        </p>
      </div>

      <div class="col-lg-4">
        <div class="card border-0 shadow-sm bg-light h-100">
          <div class="card-body p-4">
            <h3 class="h4 mb-3 d-flex align-items-center">
              <i class="bi bi-bicycle text-primary me-2" aria-hidden="true"></i>
              Pourquoi choisir Vélo Saguenay ?
            </h3>
            <ul class="list-unstyled mb-4">
              <li class="mb-3 d-flex align-items-start">
                <i
                  class="bi bi-check-circle-fill text-primary me-2 mt-1"
                  aria-hidden="true"
                ></i>
                <span>Deux sites complémentaires en milieu urbain</span>
              </li>
              <li class="mb-3 d-flex align-items-start">
                <i
                  class="bi bi-check-circle-fill text-primary me-2 mt-1"
                  aria-hidden="true"
                ></i>
                <span>Des sentiers entretenus et en constante évolution</span>
              </li>
              <li class="mb-3 d-flex align-items-start">
                <i
                  class="bi bi-check-circle-fill text-primary me-2 mt-1"
                  aria-hidden="true"
                ></i>
                <span>Une expérience adaptée aux familles et aux experts</span>
              </li>
              <li class="d-flex align-items-start">
                <i
                  class="bi bi-check-circle-fill text-primary me-2 mt-1"
                  aria-hidden="true"
                ></i>
                <span>Une communauté locale active et accueillante</span>
              </li>
            </ul>

            <div class="d-grid gap-2">
              <RouterLink to="/about" class="btn btn-primary"
                >Découvrir Vélo Saguenay</RouterLink
              >
              <RouterLink to="/involvement" class="btn btn-outline-secondary"
                >S'impliquer avec nous</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="featurette-divider" />

    <div
      id="le-panoramique-section"
      class="row featurette align-items-center g-5 mb-5 home-featurette-row"
    >
      <div class="col-md-7">
        <h2 class="featurette-heading">Le Panoramique</h2>
        <p class="lead">
          Le Panoramique possède un réseau de plus de 41 km répartis sur 40
          sentiers aménagés, en faisant l'un des lieux incontournables pour
          pratiquer le vélo de montagne au Saguenay.
        </p>
        <p>
          Situé à Chicoutimi, le site propose une expérience accessible et
          diversifiée, autant pour les cyclistes qui souhaitent découvrir la
          discipline que pour les adeptes qui veulent progresser et rouler plus
          régulièrement dans un environnement de qualité.
        </p>
        <p>
          En plus du réseau principal, Le Panoramique se démarque par ses
          aménagements complémentaires comme le pumptrack, la piste d'agilité et
          des espaces pensés pour profiter pleinement d'une journée en plein
          air.
        </p>
        <p>
          Pour planifier votre visite, vous pouvez consulter la carte des
          sentiers, la billetterie et les ressources en ligne avant de vous
          déplacer. L'objectif est simple : offrir une expérience fluide et
          agréable dès votre arrivée sur le site.
        </p>
        <div class="row g-3 mb-4">
          <div class="col-sm-6">
            <div class="border rounded p-3 h-100 bg-light home-info-card">
              <div class="d-flex align-items-center mb-2">
                <i
                  class="bi bi-signpost-split-fill text-primary me-2"
                  aria-hidden="true"
                ></i>
                <strong>Réseau développé</strong>
              </div>
              <p class="mb-0 small">
                40 sentiers aménagés pour rouler et progresser.
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="border rounded p-3 h-100 bg-light home-info-card">
              <div class="d-flex align-items-center mb-2">
                <i
                  class="bi bi-geo-alt-fill text-primary me-2"
                  aria-hidden="true"
                ></i>
                <strong>Accessible</strong>
              </div>
              <p class="mb-0 small">
                Un site urbain facile d'accès pour la communauté.
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="border rounded p-3 h-100 bg-light home-info-card">
              <div class="d-flex align-items-center mb-2">
                <i
                  class="bi bi-people-fill text-primary me-2"
                  aria-hidden="true"
                ></i>
                <strong>Pour tous les styles</strong>
              </div>
              <p class="mb-0 small">
                Sortie familiale, entraînement ou journée sportive.
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="border rounded p-3 h-100 bg-light home-info-card">
              <div class="d-flex align-items-center mb-2">
                <i class="bi bi-stars text-primary me-2" aria-hidden="true"></i>
                <strong>Installations variées</strong>
              </div>
              <p class="mb-0 small">
                Pumptrack, piste d'agilité et services saisonniers.
              </p>
            </div>
          </div>
        </div>
        <p>
          <a
            href="documents/trails_map.pdf"
            class="btn btn-lg btn-primary me-2 mb-2"
            target="_blank"
            >Carte des sentiers</a
          >
          <a
            href="https://www.trailforks.com/region/centre-de-velo-de-montagne-le-panoramique/"
            class="btn btn-lg btn-outline-primary me-2 mb-2"
            target="_blank"
            >Trailfork</a
          >
          <a
            href="https://app.endorphine.ca/c/lepanoramique"
            class="btn btn-lg btn-outline-primary me-2 mb-2"
            target="_blank"
            >Billetterie</a
          >
          <a
            href="https://www.facebook.com/VeloSaguenay/"
            class="btn btn-lg btn-outline-secondary me-2 mb-2 d-inline-flex align-items-center"
            target="_blank"
          >
            <i class="bi bi-facebook me-2" aria-hidden="true"></i>
            Facebook
          </a>
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

    <div
      id="mont-belu-section"
      class="row featurette align-items-center g-5 mb-5 home-featurette-row"
    >
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">Mont-Bélu Véloparc</h2>
        <p class="lead">
          Le Mont-Bélu Véloparc est un site phare de descente et d'enduro situé
          à La Baie, reconnu pour son caractère unique, ses pistes travaillées
          avec passion et ses panoramas impressionnants sur le Fjord du
          Saguenay.
        </p>
        <p>
          Depuis 2012, le site propose un sentier d'ascension ainsi que
          plusieurs descentes de niveaux intermédiaire à expert. Une grande
          partie des sentiers a été sculptée à la main afin d'offrir une
          expérience plus naturelle, technique et engageante pour les amateurs
          de vélo de montagne.
        </p>
        <p>
          Avec sa remontée mécanique en T-Bar durant la saison estivale et son
          ambiance résolument orientée vers la progression, Mont-Bélu attire les
          cyclistes à la recherche d'action, de variété et d'un terrain de jeu
          distinctif en plein cœur de la région.
        </p>
        <p>
          C'est un site parfait pour les adeptes qui veulent enchaîner les
          descentes, travailler leur technique et profiter d'un secteur qui a su
          conserver un caractère brut, sportif et spectaculaire.
        </p>
        <div class="row g-3 mb-4">
          <div class="col-sm-6">
            <div class="border rounded p-3 h-100 bg-light home-info-card">
              <div class="d-flex align-items-center mb-2">
                <i
                  class="bi bi-lightning-charge-fill text-primary me-2"
                  aria-hidden="true"
                ></i>
                <strong>Style enduro et descente</strong>
              </div>
              <p class="mb-0 small">
                Des lignes pensées pour la vitesse, la technique et le plaisir.
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="border rounded p-3 h-100 bg-light home-info-card">
              <div class="d-flex align-items-center mb-2">
                <i
                  class="bi bi-arrow-repeat text-primary me-2"
                  aria-hidden="true"
                ></i>
                <strong>Remontée mécanique</strong>
              </div>
              <p class="mb-0 small">
                Ouverte le mercredi de 16 h à 20 h et le dimanche de 10 h à 16
                h.
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="border rounded p-3 h-100 bg-light home-info-card">
              <div class="d-flex align-items-center mb-2">
                <i class="bi bi-tools text-primary me-2" aria-hidden="true"></i>
                <strong>Sentiers façonnés à la main</strong>
              </div>
              <p class="mb-0 small">
                Un terrain modelé par des passionnés pour une expérience unique.
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="border rounded p-3 h-100 bg-light home-info-card">
              <div class="d-flex align-items-center mb-2">
                <i
                  class="bi bi-clock-fill text-primary me-2"
                  aria-hidden="true"
                ></i>
                <strong>Sentier d'ascension</strong>
              </div>
              <p class="mb-0 small">
                Accès tous les jours de 7 h à 20 h pour prolonger les sorties.
              </p>
            </div>
          </div>
        </div>
        <p>
          <a
            href="https://www.trailforks.com/region/montbelu-bike-park"
            class="btn btn-lg btn-primary me-2 mb-2"
            target="_blank"
            >Carte des sentiers</a
          >
          <a
            href="https://app.reservationpresence.com/montbelubike"
            class="btn btn-lg btn-outline-primary me-2 mb-2"
            target="_blank"
            >Billetterie</a
          >
          <a
            href="https://www.facebook.com/montbelubikepark/"
            class="btn btn-lg btn-outline-secondary me-2 mb-2 d-inline-flex align-items-center"
            target="_blank"
          >
            <i class="bi bi-facebook me-2" aria-hidden="true"></i>
            Facebook Mont-Bélu
          </a>
        </p>
      </div>
      <div class="col-md-5 order-md-1">
        <img
          src="@/assets/media/images/gallery/belu_2_500.jpg"
          class="rounded img-fluid mb-3"
          alt="Mont-Bélu Véloparc"
        />
        <div
          class="home-video-wrapper bg-dark rounded overflow-hidden shadow-sm"
        >
          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/jCSda8AfpVc"
              title="Vidéo du Mont-Bélu Véloparc"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <hr class="featurette-divider" />

    <!-- Three columns of text below the carousel -->
    <div class="row g-4 home-location-row">
      <div class="col-lg-6">
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
      <div class="col-lg-6">
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
<script setup lang="ts">
function scrollToSection(sectionId: string): void {
  document
    .getElementById(sectionId)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}
</script>

<style scoped>
.home-intro-row .featurette-heading,
.home-featurette-row .featurette-heading {
  margin-top: 0;
}

.home-featurette-row {
  scroll-margin-top: 1.5rem;
}

.home-info-card i {
  font-size: 1.1rem;
}

.home-video-wrapper {
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.home-location-row {
  margin-bottom: 1rem;
}

@media (min-width: 62em) {
  .home-intro-row .featurette-heading,
  .home-featurette-row .featurette-heading {
    margin-top: 0;
  }
}
</style>
