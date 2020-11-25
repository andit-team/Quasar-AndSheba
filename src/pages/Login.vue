<template>
  <div
    class="q-pa-md full-width row wrap justify-center items-center content-center fixed-center" style="background-image: url(https://images.unsplash.com/photo-1540476547779-348beb642680?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
    background-size: cover;    height: -webkit-fill-available;">
    <q-card class="my-card col-md-4 col-sm-8 col-xs-10 q-pa-md">
     <q-card-section class="column items-center content-center">
        <div class="text-h5">ফিরে আসার জন্য ধন্যবাদ</div>
        <div class="text-subtitle1">LOGIN</div>
      </q-card-section>

      <q-separator dark inset />
      <q-card-section>
        <div class="q-pa-md">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="user"
              label="Username *"
              hint="Username or Email"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type username'
              ]"
            />

            <q-input
              filled
              type="password"
              v-model="pass"
              label="Your password *"
              lazy-rules
              :rules="[
                val => (val !== null && val !== '') || 'Please type passwords',
                val => (val > 0 && val < 100) || 'Please type a strong password'
              ]"
            />

            <q-toggle v-model="accept" label="Remember me" />

            <div>
              <q-btn label="Login" to="user" type="submit" color="primary" />
              <q-btn
                label="register"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: null,
      pass: null,

      accept: false
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
      }
    },

    onReset() {
      this.user = null;
      this.pass = null;
      this.accept = false;
    }
  }
};
</script>
