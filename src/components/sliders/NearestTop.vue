<template>
    <div class="full-width inline column justify-center items-center content-center q-pa-xl bg-grey-2">
      <p class="text-h5 q-mb-xl">আপনার এলাকার জনপ্রিয় সেবা সমুহ</p>
      <div class="row q-gutter-lg">
        <q-card class="col my-card">
          <img src="https://andsheba.com/_nuxt/img/3.47d4a83.jpg">

          <q-card-section>
            <div class="text-h6">কুত্তা প্রশিক্ষণ</div>
            <div class="text-subtitle2">by Shovon Das</div>
          </q-card-section>

          <q-card-section class="q-pt-none" v-if="$q.screen.gt.sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dolor, neque quibusdam impedit
          </q-card-section>
        </q-card>
      <q-card class="col my-card">
          <img src="https://andsheba.com/_nuxt/img/4.4bfd504.jpg">

          <q-card-section>
            <div class="text-h6">ঘর পরিস্কার</div>
            <div class="text-subtitle2">by Kajer Bua</div>
          </q-card-section>

          <q-card-section class="q-pt-none" v-if="$q.screen.gt.sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dolor, neque quibusdam impedit
          </q-card-section>
        </q-card>
      <q-card class="col my-card">
          <img src="https://andsheba.com/_nuxt/img/5.f9cb0c7.jpg">

          <q-card-section>
            <div class="text-h6">রাজ মিস্ত্রি</div>
            <div class="text-subtitle2">by Shariful Islam</div>
          </q-card-section>

          <q-card-section class="q-pt-none" v-if="$q.screen.gt.sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dolor, neque quibusdam impedit
          </q-card-section>
        </q-card>
      <q-card class="col my-card">
          <img src="https://andsheba.com/_nuxt/img/6.c99fae2.jpg">

          <q-card-section>
            <div class="text-h6">সোলার মেরামত</div>
            <div class="text-subtitle2">by Shahajalal</div>
          </q-card-section>

          <q-card-section class="q-pt-none" v-if="$q.screen.gt.sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dolor, neque quibusdam impedit
          </q-card-section>
        </q-card>
      </div>
    </div>

  
</template>

<script>
export default {
  name: "NearestTop"
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>