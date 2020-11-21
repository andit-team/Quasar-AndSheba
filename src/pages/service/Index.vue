<template>
  <div>
    <!-- Flex Test -->
    <!--<div class="row justify-center items-center bg-grey-2 q-pa-xl">
        <div class="col-4 bg-red-1 row"><span>asdasd</span></div>
        <div class="col-4 bg-red-2 row justify-end"><img src="https://andsheba.com/_nuxt/img/logo.0f218c1.png" alt="" width="200px" class="bg-blue-1"></div>
      </div> -->
    <!-- Search Bar -->
    <div class="row justify-center q-pa-xl">
      <q-input square outlined label="Select service type" class="col-3" />
      <q-input square outlined label="Enter a location" class="col-3" />
      <q-btn color="teal" class="col-2">
        <q-icon left size="2em" name="search" />
        <div v-if="$q.screen.gt.sm">খুঁজুন</div>
      </q-btn>
    </div>
    <!-- Search Result -->
    <div class="q-pa-sm row justify-center">
      <q-card class="my-card col-9">
        <q-card-section horizontal>
          <q-img class="col-3" src="https://cdn.quasar.dev/img/parallax1.jpg" />

          <q-card-section class="col-6">
            <div class="text-h6 q-mb-xs">Our Changing Planet</div>
            <div class="row no-wrap items-center q-pb-md">
              <q-rating size="28px" v-model="stars" :max="5" color="yellow" />
              <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
            </div>
            <div class="text-subtitle1 q-mb-sm">
               <q-icon color="green" name="stars" size="sm"/> Top Rated
            </div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              eligendi tempore voluptatibus quae ipsam rerum eum magni illo,
              doloribus facere distinctio laborum inventore laboriosam, culpa
              eligendi tempore voluptatibus quae ipsam rerum eum magni illo,
              doloribus facere distinctio laborum inventore laboriosam, culpa
              eligendi tempore voluptatibus quae ipsam rerum eum magni illo,
              doloribus facere distinctio laborum inventore laboriosam, culpa
              consequatur consequuntur modi neque unde!
            </div>
            <div class="text-subtitle3 q-mt-sm">
               <q-icon name="place" size="sm"/> 32 Choto Mirzapur, Khulna, Bangladesh
            </div>
            <q-card-section>
            
            </q-card-section>
          </q-card-section>

          <q-separator vertical />

          <q-card-section >
            <div class="text-h2">BDT</div>
            <div class="text-h5">80 TK / Day</div>
            <div class="text-h6">(আনুমানিক খরচ)</div>
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-item class="col-4">
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Shariful Islam</q-item-label>
              <q-item-label caption>
                Professional Plumber
              </q-item-label>
            </q-item-section>

            <q-btn flat round color="balck" icon="lock" />
            <q-btn flat round color="red" icon="favorite" />
            <q-btn flat round color="accent" icon="bookmark" />
            <q-btn flat round color="primary" icon="share" />
          
          </q-item>

          <q-item class="col-5 justify-start">
              <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          9AM
        </q-btn>
        <q-btn flat color="primary">
          5PM
        </q-btn>
          </q-item>

          <q-item class="col-3 justify-center q-gutter-md">
              <q-btn color="primary" label="Message" icon="inbox" size="md" class="q-pa-xs"/>
              <q-btn color="secondary" label="Contact" icon="phone" size="md" class="q-pa-xs"/>
          </q-item>

          
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
