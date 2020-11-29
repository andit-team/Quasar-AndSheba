<template>
  <div>
    <div class="column justify-center content-center items-center q-mt-xl">
      <q-img v-if="$q.screen.gt.sm"
        width="10%"
        src="https://avatars3.githubusercontent.com/u/38374712?s=400&v=4"
      />
      <div :class="[$q.screen.gt.sm?'text-h4':'text-h5 text-center']">
        Tell us about your project for more accurate cost estimation
      </div>
      <div class="text-h6 text-gray" v-if="$q.screen.gt.sm">
        A little info will help the pro understand your project
      </div>
    </div>
    <div class="row q-my-xl q-px-lg justify-center q-gutter-md">
      <div class="col-md-7 col-sm-6 col-xs-12">
        <q-card flat bordered class="q-mb-md">
          <q-card-section>
            <div class="text-h6">1. Where is the tile work being done?</div>
          </q-card-section>
          <q-card-section class="q-gutter-sm row">
            <q-checkbox v-model="kitchen" label="Kitchen" />
            <q-checkbox v-model="washroom" label="Washroom" />
            <q-checkbox v-model="hall" label="Hallway" />
            <q-checkbox v-model="living" label="Living Room" />
            <q-checkbox v-model="pool" label="Pool" />
            <q-checkbox v-model="entra" label="Entrance" />
          </q-card-section>
        </q-card>
        <q-card flat bordered class="q-mb-md">
          <q-card-section>
            <div class="text-h6">2. Where is the tile work being done?</div>
          </q-card-section>
          <q-card-section class="q-gutter-sm row">
            <q-checkbox v-model="kitchen" label="Kitchen" />
            <q-checkbox v-model="washroom" label="Washroom" />
            <q-checkbox v-model="hall" label="Hallway" />
            <q-checkbox v-model="living" label="Living Room" />
            <q-checkbox v-model="pool" label="Pool" />
            <q-checkbox v-model="entra" label="Entrance" />
          </q-card-section>
        </q-card>
        <q-card flat bordered class="q-mb-md">
          <q-card-section>
            <div class="text-h6">3. Where is the tile work being done?</div>
          </q-card-section>
          <q-card-section class="q-gutter-sm row">
            <q-checkbox v-model="kitchen" label="Kitchen" />
            <q-checkbox v-model="washroom" label="Washroom" />
            <q-checkbox v-model="hall" label="Hallway" />
            <q-checkbox v-model="living" label="Living Room" />
            <q-checkbox v-model="pool" label="Pool" />
            <q-checkbox v-model="entra" label="Entrance" />
          </q-card-section>
        </q-card>
        <q-card flat bordered class="q-mb-md">
          <q-card-section>
            <div class="text-h6">4. Where is the tile work being done?</div>
          </q-card-section>
          <q-card-section class="q-gutter-sm row">
            <q-checkbox v-model="kitchen" label="Kitchen" />
            <q-checkbox v-model="washroom" label="Washroom" />
            <q-checkbox v-model="hall" label="Hallway" />
            <q-checkbox v-model="living" label="Living Room" />
            <q-checkbox v-model="pool" label="Pool" />
            <q-checkbox v-model="entra" label="Entrance" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <q-card class="my-card">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6 text-center">Cost Calculation</div>
          </q-card-section>

          <q-markup-table>
            <tbody>
              <tr>
                <td class="text-left">1. Frozen Yogurt Frozen</td>
                <td class="text-right">1000</td>
                <td class="text-right">x</td>
              </tr>
              <tr>
                <td class="text-left">2. Eclair Frozen Yogurt</td>
                <td class="text-right">8,000</td>
                <td class="text-right">x</td>
              </tr>
              <tr>
                <td class="text-left">3. Frozen Yogurt Eclair</td>
                <td class="text-right">1000</td>
                <td class="text-right">x</td>
              </tr>
              <tr>
                <td class="text-left">4. Yogurt Eclair Yogurt</td>
                <td class="text-right">5,000</td>
                <td class="text-right">x</td>
              </tr>
              <tr>
                <td class="text-left">5. Frozen Yogurt Yogurt</td>
                <td class="text-right">2000</td>
                <td class="text-right">x</td>
              </tr>
              <tr>
                <td class="text-left">6.Frozen Eclair Yogurt</td>
                <td class="text-right">4,000</td>
                <td class="text-right">x</td>
              </tr>
            </tbody>
          </q-markup-table>
          <q-separator />

          <q-card-actions>
            <div class="text-h6">Total: <span> 21,000 TK</span></div>
            <q-space />
            <q-separator vertical />
            <q-btn flat class="bg-primary" color="white">
              Place Order
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
      slide: 1,
      kitchen: false,
      washroom: true,
      hall: true,
      living: false,
      pool: true,
      entra: false
    };
  }
};
</script>
