<template>
  <div class="q-pt-xl q-pb-xl row flex-center justify-center content-center">
    <div class="col-7">
      <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="teal"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        navigation-icon="radio_button_unchecked"
        navigation
        style="height:100%"
      >
        <q-carousel-slide name="style" class="flex flex-center">
          <div class="row">
            <div id="parent" class="full-width row" >
              <!-- `Banner Left Search -->
              <div :class="[$q.screen.gt.sm ? '' : 'q-mt-xl q-mb-xl', 'flex column col-md-7 col-sm-12 justify-center' ]">
                <p :class="[$q.screen.gt.sm ? 'text-h5' : 'text-h6 text-center']">অ্যান্ডসেবা জামিননামা</p>
                <div class="row">
                  <p>যদি চাকরিটি করতে আগ্রহী না হন তাহলে আপনি টাকা ফেরত পাবেন এবং যদি তাদের সম্পত্তি ক্ষতিগ্রস্ত হয় সে ক্ষেত্রেও আপনি রক্ষিত।</p>
                  <q-btn color="teal">
                    <div>আরো জানুন</div>
                  </q-btn>
                </div>
              </div>
              <!-- Banner Right Image -->
              <div class="col-md-5 col-sm-12" v-if="$q.screen.gt.sm">
                <img src="https://andsheba.com/_nuxt/img/2.5d1171b.png" style="width:100%;max-width:400px" />
              </div>
            </div>
          </div>
        </q-carousel-slide>
        
        <q-carousel-slide name="app" class="flex flex-center">
          <div class="row">
            <div id="parent" class="full-width row" >
              <!-- `Banner Left Search -->
              <div :class="[$q.screen.gt.sm ? '' : 'q-mt-xl q-mb-xl', 'flex column col-md-7 col-sm-12 justify-center' ]">
                <p :class="[$q.screen.gt.sm ? 'text-h5' : 'text-h6 text-center']">যখন আপনার কোন সেবা দরকার পড়বে</p>
                <div class="row">
                  <p>অ্যান্ড সেবার মাধ্যমে সেরা মূল্যের ধারণা পান, সেবা প্রদানকারীদের সাথে চ্যাট করুন ও তাদের দক্ষতা যাচাই করুন।অ্যান্ড সেবার মাধ্যমে সেরা মূল্যের ধারণা পান, সেবা প্রদানকারীদের সাথে চ্যাট করুন ও তাদের দক্ষতা যাচাই করুন।</p>
                  <div class="row justify-center q-gutter-md">
                    <img src="https://andsheba.com/_nuxt/img/apple-app-btn.b472af9.png" width="150px">
                    <img src="https://andsheba.com/_nuxt/img/google-app-btn.e6c3028.png" width="150px">
                  </div>
                </div>
              </div>
              <!-- Banner Right Image -->
              <div class="col-md-5 col-sm-12" v-if="$q.screen.gt.sm">
                <img src="https://andsheba.com/_nuxt/img/1.cf1a14a.png" style="width:100%;max-width:400px" />
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slide: 'app',
    }
  }
}
</script>