<template>
  <div>
    <div class="row justify-center q-gutter-xl q-mt-xl">
      <div class="col-md-6 col-sm-6 col-xs-12">
        <div class="text-h6 q-mb-xs">Home Garden Cleanning</div>
        <div class="row no-wrap items-center q-pb-md">
          <q-rating size="28px" v-model="stars" :max="5" color="red" />
          <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
          <span class="text-caption text-red q-ml-sm">6 Orders in Queue</span>
        </div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          eligendi tempore voluptatibus quae ipsam rerum eum Facilis eligendi
          tempore voluptatibus quae ipsam rerum eum Facilis eligendi tempore
          voluptatibus quae ipsam rerum eum Facilis eligendi tempore
          voluptatibus quae ipsam rerum eum Facilis eligendi tempore
          voluptatibus quae ipsam rerum eum magni illo
        </div>
        <div class="q-pt-md q-pb-md">
          <q-carousel swipeable animated v-model="slide" thumbnails infinite>
            <q-carousel-slide
              :name="1"
              img-src="https://cdn.quasar.dev/img/mountains.jpg"
            />
            <q-carousel-slide
              :name="2"
              img-src="https://cdn.quasar.dev/img/parallax1.jpg"
            />
            <q-carousel-slide
              :name="3"
              img-src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
            <q-carousel-slide
              :name="4"
              img-src="https://cdn.quasar.dev/img/quasar.jpg"
            />
          </q-carousel>
        </div>
        <q-item class="col-6">
          <q-item-section avatar>
            <q-avatar>
              <div
                class="absolute bg-green"
                style="right: 0px;transform: translateY(-50%);width: 12px;height: 12px;bottom: -8px;border-radius: inherit;"
              ></div>
              <img
                src="https://uploads.toptal.io/user/photo/1405543/large_7492aa6fde98b73aaae8ebe072d75ec9.jpg"
              />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Shariful Islam</q-item-label>

            <q-item-label caption>
              Professional Cleaner
            </q-item-label>
          </q-item-section>

          <q-btn flat round color="balck" icon="mail" />
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-item>
        <q-separator />
      </div>
      <div class="col-md-2 col-sm-6 col-xs-12">
        <q-card class="my-card">
          <q-img
            src="https://uploads.toptal.io/user/photo/1405543/large_7492aa6fde98b73aaae8ebe072d75ec9.jpg"
          />

          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                Shariful Islam
              </div>
              <div
                class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
              >
                <q-icon name="place" />
                Khulna
              </div>
            </div>

            <q-rating color="red" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              Professional Freelancer
            </div>
            <div class="text-caption text-grey">
              Small plates, salads & sandwiches in an intimate setting.
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat color="primary">
              Request for Quote
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 1
    };
  }
};
</script>
