<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      :class="[
        $q.screen.gt.sm ? 'q-pa-md' : 'q-pa-sm',
        'bg-white',
        'text-grey-8'
      ]"
      height-hint="58"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          v-if="!$q.screen.gt.sm"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" to="/">
          <img src="https://andsheba.com/_nuxt/img/logo.0f218c1.png" />
        </q-btn>

        <q-space v-if="!$q.screen.gt.sm" />

        <div
          :class="[
            'YL__toolbar-input-container row',
            $q.screen.gt.sm ? 'q-ml-lg' : 'q-ml-xs'
          ]"
        >
          <q-input
            dense
            outlined
            square
            v-model="search"
            placeholder="Search services..."
            class="bg-white col"
          />
          <q-btn
            class="YL__toolbar-input-btn"
            color="grey-3"
            text-color="grey-8"
            icon="search"
            unelevated
          />
        </div>
        <q-space v-if="$q.screen.gt.sm" />

        <div
          class="q-gutter-md row items-center no-wrap q-mr-lg"
          v-if="$q.screen.gt.sm"
        >
          <q-btn flat color="grey-8" icon="search" to="service">
            সেবা খুজুন</q-btn
          >

          <q-btn flat color="grey-8" icon="add" to="register">
            রেজিস্ট্রেশন</q-btn
          >
          <q-btn flat color="grey-8" icon="person" to="login"> লগ ইন</q-btn>
          <q-btn-dropdown flat icon="web" olor="grey-8" label="ভাষা">
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>বাংলা</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>ইংলিশ</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <!--<q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn> -->
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      v-if="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-img
            src="https://cdn.quasar.dev/img/material.png"
            style="height: 150px"
          >
            <div class="absolute-bottom bg-transparent">
              <q-avatar size="56px" class="q-mb-sm">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
              <div class="text-weight-bold">Razvan Stoenescu</div>
              <div>@rstoenescu</div>
            </div>
          </q-img>
          <q-item
            v-for="link in withLogin"
            :key="link.text"
            :to="link.route"
            v-ripple
            clickable
          >
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />
          <q-item-label header class="text-weight-bold text-uppercase">
            Customer
          </q-item-label>
          <q-item
            v-for="link in customer"
            :key="link.text"
            :to="link.route"
            v-ripple
            clickable
          >
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-mt-md q-mb-xs" />

          <q-item-label header class="text-weight-bold text-uppercase">
            Profesionals
          </q-item-label>

          <q-item
            v-for="link in pro"
            :key="link.text"
            :to="link.route"
            v-ripple
            clickable
          >
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />
          <q-item-label header class="text-weight-bold text-uppercase">
            General
          </q-item-label>
          <q-item
            v-for="link in withOutLogin"
            :key="link.text"
            :to="link.route"
            v-ripple
            clickable
          >
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <div class="row q-mt-xl justify-center q-gutter-md">
        <div class="col-md-2">
          <q-card bordered class="bg-grey-2">
            <q-card-section class="row justify-center">
              <q-avatar size="100px">
                <img src="https://uploads.toptal.io/user/photo/1405543/large_7492aa6fde98b73aaae8ebe072d75ec9.jpg" />
              </q-avatar>
            </q-card-section>
            
            <q-card-section
              class="column justify-center items-center q-pt-none"
            >
              <div class="text-h6">
                Shariful Islam
              </div>
              <div class="text-subtitle1">
                750K Follower | 10 Following
              </div>
              <div class="text-caption text-grey">
                shariful@gamil.com
              </div>
            </q-card-section>

            <q-separator inset />
            <q-card-section class="column justify-center q-pa-md">
              <q-list bordered separator>
                <q-item clickable v-ripple :active="active">
                  <q-item-section avatar>
                    <q-icon name="dashboard" />
                  </q-item-section>
                  <q-item-section>Dashboard</q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-ripple
                  :active="active"
                  active-class="text-orange"
                >
                  <q-item-section avatar>
                    <q-icon name="person" />
                  </q-item-section>
                  <q-item-section>Profile</q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-ripple
                  :active="active"
                  active-class="text-orange"
                >
                  <q-item-section avatar>
                    <q-icon name="mail" />
                  </q-item-section>
                  <q-item-section>Inbox</q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-ripple
                  :active="active"
                  active-class="bg-teal-1 text-red"
                >
                  <q-item-section avatar>
                    <q-icon name="favorite" />
                  </q-item-section>
                  <q-item-section>Favorites</q-item-section>
                </q-item>
                <q-item clickable v-ripple :active="active">
                  <q-item-section avatar>
                    <q-icon name="add_shopping_cart" />
                  </q-item-section>
                  <q-item-section>Orders</q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-ripple
                  :active="active"
                  active-class="text-orange"
                >
                  <q-item-section avatar>
                    <q-icon name="notification_important" />
                  </q-item-section>
                  <q-item-section>Notification</q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-ripple
                  :active="active"
                  active-class="bg-teal-1 text-red"
                >
                  <q-item-section avatar>
                    <q-icon name="account_balance_wallet" />
                  </q-item-section>
                  <q-item-section>Wallet</q-item-section>
                </q-item>
                
                <q-item
                  clickable
                  v-ripple
                  :active="active"
                  active-class="bg-teal-1 text-red"
                >
                  <q-item-section avatar>
                    <q-icon name="login" />
                  </q-item-section>
                  <q-item-section>Logout</q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-7 col-sm-12 col-xs-12">
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { fabYoutube } from "@quasar/extras/fontawesome-v5";
export default {
  name: "MyLayout",
  data() {
    return {
      leftDrawerOpen: false,
      search: "",
      active: true,
      withLogin: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "person", text: "Profile", route: "/profile" },
        { icon: "mail", text: "Inbox", route: "/inbox" },
        { icon: "alarm", text: "Notification", route: "/notification" }
      ],
      withOutLogin: [
        { icon: "search", text: "Search", route: "/service" },
        { icon: "add", text: "Registration", route: "/register" },
        { icon: "lock", text: "Login", route: "/login" },
        { icon: "web", text: "Language", route: "/" }
      ],
      customer: [
        { icon: "book", text: "My Orders", route: "/" },
        { icon: "star", text: "My Favorites", route: "/" },
        { icon: "videogame_asset", text: "Payments", route: "/" },
        { icon: "settings", text: "Settings", route: "/" }
      ],
      pro: [
        { icon: "add", text: "Add Service", route: "/" },
        { icon: "flag", text: "Order history", route: "/" },
        { icon: "help", text: "Payments", route: "/" },
        { icon: "money", text: "Accounts", route: "/" }
      ],
      customer: [
        { icon: "book", text: "My Orders", route: "/" },
        { icon: "star", text: "My Favorites", route: "/" },
        { icon: "videogame_asset", text: "Payments", route: "/" },
        { icon: "settings", text: "Settings", route: "/" }
      ]
    };
  },
  created() {
    this.fabYoutube = fabYoutube;
  }
};
</script>

<style lang="sass">
.YL
  &__toolbar-input-container
    min-width: 100px
    width: 30%
  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>
