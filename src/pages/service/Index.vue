<template>
  <div>
    <!-- Flex Test -->
    <!--<div class="row justify-center items-center bg-grey-2 q-pa-xl">
        <div class="col-4 bg-red-1 row"><span>asdasd</span></div>
        <div class="col-4 bg-red-2 row justify-end"><img src="https://andsheba.com/_nuxt/img/logo.0f218c1.png" alt="" width="200px" class="bg-blue-1"></div>
      </div> -->
    <!-- Search Bar -->
    <div class="row justify-center q-mt-xl q-mb-md">
      <q-input square outlined label="Select service type" class="col-3" />
      <q-input square outlined label="Enter a location" class="col-3" />
      <q-btn color="teal" class="col-2">
        <q-icon left size="2em" name="search" />
        <div v-if="$q.screen.gt.sm">খুঁজুন</div>
      </q-btn>
    </div>
    <div class="row justify-center">
      <q-separator vertical />
      <div class="col-md-2 col-sm-12 col-xs-12">
        <q-toolbar class="bg-primary text-white shadow-2">
          <q-toolbar-title>Filter</q-toolbar-title>
        </q-toolbar>
        <q-list padding>
          <q-item-label header>Extra Service 1</q-item-label>

          <q-item tag="label" v-ripple>
            <q-item-section side top>
              <q-radio v-model="color" val="cyan" color="cyan" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Example 2</q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section side top>
              <q-radio v-model="color" val="red" color="red" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Example 3</q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section side top>
              <q-radio v-model="color" val="green" color="green" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Example 1</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator spaced />
          <q-item-label header>Extra Service</q-item-label>

          <q-item tag="label" v-ripple>
            <q-item-section side top>
              <q-checkbox v-model="check2" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Example 2</q-item-label>
            </q-item-section>
          </q-item>
          <q-item tag="label" v-ripple>
            <q-item-section side top>
              <q-checkbox v-model="check3" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Example 3</q-item-label>
            </q-item-section>
          </q-item>
          <q-item tag="label" v-ripple>
            <q-item-section side top>
              <q-checkbox v-model="check1" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Example 1</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator spaced />
          <q-item-label header>Price Range</q-item-label>

          <q-item>
            <q-item-section side>
              <q-icon color="teal" name="request_quote" />
            </q-item-section>
            <q-item-section>
              <q-range
                v-model="rateRange"
                :min="5"
                :max="100"
                label-always
                color="teal"
              />
            </q-item-section>
            <q-item-section side>
              $/Hour
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <q-separator vertical />
      <div class="col-md-6 col-sm-12 col-xs-12">
        <!-- Search Result -->
        <div class="q-ml-md">
          <q-card class="my-card q-mb-md">
            <q-card-section horizontal>
              <q-img
                class="col-4"
                src="https://cdn.citymapia.com/assets/business/5204/portfolio/21116/5204_637165610990158685.jpg?rendered=true"
              />

              <q-card-section class="col-5">
                <div class="text-h6 q-mb-xs">Weadding Makeover & Closet</div>
                <div class="row no-wrap items-center q-pb-md">
                  <q-rating
                    size="28px"
                    v-model="stars"
                    :max="5"
                    color="red"
                  />
                  <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
                </div>
                <div class="text-subtitle1 q-mb-sm">
                  <q-icon color="green" name="emoji_events" size="sm" /> Top Rated
                </div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis eligendi tempore voluptatibus quae ipsam rerum eum
                  magni illo
                </div>
                <div class="text-subtitle3 q-mt-sm">
                  <q-icon name="place" size="xs" /> 32 Choto Mirzapur, Khulna,
                  Bangladesh
                </div>
                <div class="text-subtitle3 q-mt-sm">
                  <q-icon name="supervised_user_circle" size="xs" /> Hired
                  <span>22</span> Times
                </div>
              </q-card-section>

              <q-card-section class="col-3 column justify-center items-center">
                <div class="text-h4">BDT</div>
                <div class="text-h5">170 TK / Hour</div>
                <div class="text-h6">(আনুমানিক খরচ)</div>
              </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-item class="col-6">
                <q-item-section avatar>
                  <q-avatar>
                    <div
                      class="absolute bg-green"
                      style="right: 0px;transform: translateY(-50%);width: 12px;height: 12px;bottom: -8px;border-radius: inherit;"
                    ></div>
                    <img src="https://i.pinimg.com/564x/59/e6/9d/59e69d382e60e5dc39905a774fa7284a.jpg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>Nishat Zaman</q-item-label>

                  <q-item-label caption>
                    Professional Artist
                  </q-item-label>
                </q-item-section>

                <q-btn flat round color="balck" icon="mail" />
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="accent" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-item>

              <q-item class="col-6 justify-end q-gutter-md">
                <q-btn
                  color="primary"
                  label="Order Now"
                  icon="add_shopping_cart"
                  size="md"
                  class="q-pa-xs"
                />
                <q-btn
                  to="service/single"
                  color="secondary"
                  label="View Details"
                  icon="visibility"
                  size="md"
                  class="q-pa-xs"
                />
              </q-item>
            </q-card-actions>
          </q-card>

          <q-card class="my-card q-mb-md">
            <q-card-section horizontal>
              <q-img
                class="col-4"
                src="https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2020/08/home-cleaning-service.jpg?fit=1024%2C684&ssl=1"
              />

              <q-card-section class="col-5">
                <div class="text-h6 q-mb-xs">Home Garden Cleanning</div>
                <div class="row no-wrap items-center q-pb-md">
                  <q-rating
                    size="28px"
                    v-model="stars"
                    :max="5"
                    color="red"
                  />
                  <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
                </div>
                <div class="text-subtitle1 q-mb-sm">
                  <q-icon color="green" name="emoji_events" size="sm" /> Top Rated
                </div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis eligendi tempore voluptatibus quae ipsam rerum eum
                  magni illo
                </div>
                <div class="text-subtitle3 q-mt-sm">
                  <q-icon name="place" size="xs" /> 32 Choto Mirzapur, Khulna,
                  Bangladesh
                </div>
                <div class="text-subtitle3 q-mt-sm">
                  <q-icon name="supervised_user_circle" size="xs" /> Hired
                  <span>22</span> Times
                </div>
              </q-card-section>

              <q-card-section class="col-3 column justify-center items-center">
                <div class="text-h4">BDT</div>
                <div class="text-h5">80 TK / Hour</div>
                <div class="text-h6">(আনুমানিক খরচ)</div>
              </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-item class="col-6">
                <q-item-section avatar>
                  <q-avatar>
                    <div
                      class="absolute bg-green"
                      style="right: 0px;transform: translateY(-50%);width: 12px;height: 12px;bottom: -8px;border-radius: inherit;"
                    ></div>
                    <img src="https://uploads.toptal.io/user/photo/1405543/large_7492aa6fde98b73aaae8ebe072d75ec9.jpg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>Shariful Islam</q-item-label>

                  <q-item-label caption>
                    Professional Plumber
                  </q-item-label>
                </q-item-section>

                <q-btn flat round color="balck" icon="mail" />
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="accent" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-item>

              <q-item class="col-6 justify-end q-gutter-md">
                <q-btn
                  color="primary"
                  label="Order Now"
                  icon="add_shopping_cart"
                  size="md"
                  class="q-pa-xs"
                />
                <q-btn
                  to="service/single"
                  color="secondary"
                  label="View Details"
                  icon="visibility"
                  size="md"
                  class="q-pa-xs"
                />
              </q-item>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      check1: true,
      check2: false,
      check3: false,

      notif1: true,
      notif2: true,
      notif3: false,
      color: "cayn",
      rateRange: {
        min: 10,
        max: 35
      },
      brightness: 3,
      mic: 8
    };
  }
};
</script>
