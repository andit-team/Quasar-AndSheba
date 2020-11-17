<template>
  <q-page>
    <!-- Banner -->
    <div class="flex flex-center">
      <div class="row">
        <div id="parent" class="full-width row " >
          <!-- `Banner Left Search -->
          <div :class="[$q.screen.gt.sm ? '' : 'q-mt-xl q-mb-xl', 'flex column col-md-7 col-sm-12 justify-center' ]">
            <p :class="[$q.screen.gt.sm ? 'text-h5' : 'text-h6 text-center']">আপনার স্থানীয় পেশাদারদের খুঁজুন</p>
            <div class="row">
              <q-input square outlined label="Select service type"/>
              <q-input square outlined label="Enter a location"/>
              <q-btn color="teal">
                <q-icon left size="2em" name="search" />
                <div v-if="$q.screen.gt.sm">খুঁজুন</div>
              </q-btn>
            </div>
          </div>
          <!-- Banner Right Image -->
          <div class="col-md-5 col-sm-12" v-if="$q.screen.gt.sm">
            <img src="https://andsheba.com/_nuxt/img/2.5d1171b.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- Slider Top Services -->
    <nearest-top />
    </q-page>
</template>

<script>
import NearestTop from 'components/sliders/NearestTop'
export default {
  name: "PageIndex",
  components:{
    NearestTop
  }
};
</script>
