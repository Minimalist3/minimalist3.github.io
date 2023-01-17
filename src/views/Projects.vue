<template>
  <div class="row pt-4 gx-md-5 gy-5">

    <div class="col-lg-6">
      <div class="p-4 bg-light border border-dark rounded-3 h-100 d-flex flex-column justify-content-between">        
        <h1 class="fw-bold text-center">Granblue Party</h1>

        <div class="row">
          <div class="col-4 align-self-start">
            <img class="h-100 w-100" width="350" height="350" src="../assets/gbfparty.png">
          </div>

          <div class="col-8">
            <p>
              A collection of tools to help players of the Japanese RPG Granblue Fantasy.
            </p>

            <div class="row row-cols-5 align-items-center">
              <div class="tooltip-parent">
                <img class="w-100" src="../assets/vuejs.svg"><span class="tooltip-child">Vue.js 2</span>
              </div>
              <div class="tooltip-parent">
                <img class="w-100" src="../assets/tailwindcss.svg"><span class="tooltip-child">Tailwind CSS</span>
              </div>
              <div class="tooltip-parent">
                <img class="w-100" src="../assets/nodejs.svg"><span class="tooltip-child">Node.js</span>
              </div>
              <div class="tooltip-parent">
                <img class="w-100" src="../assets/postgresql.svg"><span class="tooltip-child">PostgreSQL</span>
              </div>
              <div class="tooltip-parent">
                <img class="w-100" src="../assets/python.svg"><span class="tooltip-child">Python 3</span>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-3 d-flex flex-row flex-wrap justify-content-evenly">
          <a class="btn btn-outline-primary" href="https://www.granblue.party">Go to Website</a>
          <a class="btn btn-outline-primary" href="https://github.com/Minimalist3/GranblueParty">Code on GitHub</a>
        </div>
      </div>
    </div>


    <div class="col-lg-6">
      <div class="p-4 bg-light border border-dark rounded-3 h-100 d-flex flex-column justify-content-between">        
        <h1 class="fw-bold text-center">My Activities</h1>

        <div class="row">
          <img class="col-4 align-self-start" src="../assets/myactivities.svg">

          <div class="col-8">
            <p>
              A mobile App helping you choose meaningful activities instead of procrastinating.
            </p>

            <div class="row row-cols-5 align-items-center">
              <div class="tooltip-parent">
                <img class="w-100" src="../assets/flutter.svg"><span class="tooltip-child">Flutter</span>
              </div>
              <div class="tooltip-parent">
                <img class="w-100" src="../assets/sqlite.svg"><span class="tooltip-child">SQLite</span>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-3 d-flex flex-row flex-wrap justify-content-evenly">
          <div class="tooltip-parent">
            <a class="btn btn-outline-primary" href="https://play.google.com/store/apps/details?id=codes.minimalist.my_activities">Go to Google Play</a>
          </div>
          <div class="tooltip-parent">
            <a class="btn btn-outline-primary disabled" href="https://apps.apple.com/app/?">Go to the App Store</a>
            <span class="tooltip-child">Soon</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>