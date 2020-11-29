<template>
  <div>
    <!-- Search Bar -->
    <div
      :class="[
        $q.screen.gt.sm ? 'q-mt-xl ' : 'q-mt-md q-pa-xs',
        'row justify-center q-mb-md'
      ]"
    >
      <q-btn-dropdown
        class="glossy col-xs-2 col-sm-2"
        color="primary"
        icon="filter_alt"
        v-if="!$q.screen.gt.sm"
      >
        <div class="row justify-center q-pa-xs">
          <div class="column fit">
            <q-list>
              <q-item-label header class="bg-grey-3">কাজের ধরন</q-item-label>

              <q-item tag="label" v-ripple>
                <q-item-section side top>
                  <q-radio v-model="color" val="cyan" color="cyan" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>মেরামত</q-item-label>
                </q-item-section>
              </q-item>

              <q-item tag="label" v-ripple>
                <q-item-section side top>
                  <q-radio v-model="color" val="red" color="red" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>স্থাপন</q-item-label>
                </q-item-section>
              </q-item>

              <q-item tag="label" v-ripple>
                <q-item-section side top>
                  <q-radio v-model="color" val="green" color="green" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>রক্ষণাবেক্ষণ</q-item-label>
                </q-item-section>
              </q-item>

              <q-item tag="label" v-ripple>
                <q-item-section side top>
                  <q-radio v-model="color2" val="green" color="green" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>সমাবেশ</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator spaced />

              <q-item-label header class="bg-grey-3">ফ্রিকয়েন্সি</q-item-label>

              <q-item tag="label" v-ripple>
                <q-item-section side top>
                  <q-checkbox v-model="check2" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>সপ্তাহে ১ বার</q-item-label>
                </q-item-section>
              </q-item>
              <q-item tag="label" v-ripple>
                <q-item-section side top>
                  <q-checkbox v-model="check3" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>সপ্তাহে ৫ বার</q-item-label>
                </q-item-section>
              </q-item>
              <q-item tag="label" v-ripple>
                <q-item-section side top>
                  <q-checkbox v-model="check1" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>সপ্তাহে ৭ বার</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator spaced />
              <q-item-label header class="bg-grey-3"
                >মূল্য নির্ধারণ</q-item-label
              >

              <q-item>
                <q-item-section side>
                  <q-icon color="teal" name="request_quote" />
                </q-item-section>
                <q-item-section>
                  <q-range
                    v-model="rateRange"
                    :min="5"
                    :max="100"
                    label
                    color="teal"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <div class="column q-pa-sm">
            <q-btn
              color="secondary"
              label="Apply Filter"
              push
              size="md"
              v-close-popup
            />
          </div>
        </div>
      </q-btn-dropdown>
      <q-input
        square
        dense
        outlined
        label="Select service type"
        class="col-xs-4 col-sm-3"
      />
      <q-input
        square
        dense
        outlined
        label="Enter a location"
        class="col-xs-4 col-sm-3"
      />
      <q-btn color="teal" class="col-xs-2 col-sm-2">
        <q-icon left name="search" />
        <div v-if="$q.screen.gt.sm">খুঁজুন</div>
      </q-btn>
    </div>
    <div class="row justify-center">
      <q-separator vertical v-if="$q.screen.gt.sm" />
      <div class="col-md-2 col-sm-12 col-xs-12" v-if="$q.screen.gt.sm">
        <q-toolbar class="bg-primary text-white shadow-2">
          <q-toolbar-title>Search Filter</q-toolbar-title>
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
      <q-separator vertical v-if="$q.screen.gt.sm" />

      <div class="col-md-6 col-sm-12 col-xs-12">
        <!-- Search Result -->
        <div
          :class="[$q.screen.gt.sm ? 'q-ml-md' : null, 'row justify-center']"
        >
          <q-card class="my-card q-mb-md col-md-6 col-sm-6 col-xs-12">
            <q-card-section>
              <q-img
                class="col-4"
                src="https://cdn.citymapia.com/assets/business/5204/portfolio/21116/5204_637165610990158685.jpg?rendered=true"
              >
                <div class="absolute-bottom text-left">
                  <div class="text-h6 q-mb-xs">Weadding Makeover & Closet</div>
                  <div class="row no-wrap items-center">
                    <q-rating
                      size="28px"
                      v-model="stars"
                      :max="5"
                      color="yellow"
                    />
                    <span class="text-caption text-grey q-ml-sm"
                      >4.2 (551)</span
                    >
                  </div>
                </div>
              </q-img>
              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="monetization_on"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%);"
                />

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">
                    <q-icon color="green" name="emoji_events" size="sm" /> Top
                    Rated
                  </div>
                  <div
                    class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                  >
                    2000TK
                  </div>
                </div>
                <div class="text-caption text-grey q-mt-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis eligendi tempore voluptatibus quae ipsam rerum
                </div>
                <div class="text-subtitle3 q-mt-sm">
                  <q-icon name="place" size="xs" /> 32 Choto Mirzapur, Khulna,
                  Bangladesh
                </div>
                <div class="text-subtitle3 q-mt-sm">
                  <q-icon name="supervised_user_circle" size="xs" /> Hired
                  <span>22</span> Times

                  <!-- <q-btn flat round color="balck" icon="mail" />
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="accent" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" /> -->
                </div>
              </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-item class="col-7">
                <q-item-section avatar>
                  <q-avatar>
                    <div
                      class="absolute bg-green"
                      style="right: 0px;transform: translateY(-50%);width: 12px;height: 12px;bottom: -8px;border-radius: inherit;"
                    ></div>
                    <img
                      src="https://i.pinimg.com/564x/59/e6/9d/59e69d382e60e5dc39905a774fa7284a.jpg"
                    />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>Nishat Zaman</q-item-label>

                  <q-item-label caption>
                    Professional Artist
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item class="col-5 justify-end">
                <q-btn
                  to="service/single"
                  color="secondary"
                  label="Details"
                  icon="visibility"
                  size="md"
                  class="q-pa-xs"
                />
              </q-item>

            </q-card-actions>
          </q-card>
          
          <q-card class="my-card q-mb-md col-md-6 col-sm-6 col-xs-12">
            <q-card-section>
              <q-img
                class="col-4"
                src="https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2020/08/home-cleaning-service.jpg?fit=1024%2C684&ssl=1"
              >
                <div class="absolute-bottom text-left">
                  <div class="text-h6 q-mb-xs">Home Garden Cleanning</div>
                  <div class="row no-wrap items-center">
                    <q-rating
                      size="28px"
                      v-model="stars"
                      :max="5"
                      color="yellow"
                    />
                    <span class="text-caption text-grey q-ml-sm"
                      >4.5 (221)</span
                    >
                  </div>
                </div>
              </q-img>
              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="monetization_on"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%);"
                />

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">
                    <q-icon color="green" name="emoji_events" size="sm" /> Top
                    Rated
                  </div>
                  <div
                    class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                  >
                    1500TK
                  </div>
                </div>
                <div class="text-caption text-grey q-mt-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis eligendi tempore voluptatibus quae ipsam rerum
                </div>
                <div class="text-subtitle3 q-mt-sm">
                  <q-icon name="place" size="xs" /> 32 Choto Mirzapur, Khulna,
                  Bangladesh
                </div>
                <div class="text-subtitle3 q-mt-sm">
                  <q-icon name="supervised_user_circle" size="xs" /> Hired
                  <span>22</span> Times

                  <!-- <q-btn flat round color="balck" icon="mail" />
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="accent" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" /> -->
                </div>
              </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-item class="col-7">
                <q-item-section avatar>
                  <q-avatar>
                    <div
                      class="absolute bg-green"
                      style="right: 0px;transform: translateY(-50%);width: 12px;height: 12px;bottom: -8px;border-radius: inherit;"
                    ></div>
                    <img
                      src="https://avatars3.githubusercontent.com/u/38374712?s=400&v=4"
                    />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>Shariful Islam</q-item-label>

                  <q-item-label caption>
                    Professional Plumber
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item class="col-5 justify-end">
                <q-btn
                  to="service/single"
                  color="secondary"
                  label="Details"
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
