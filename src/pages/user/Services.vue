<template>
    <div>
        <div class="text-h5 q-ma-lg">My Services</div>
        <q-tabs
            v-model="tab"
            dense
            class="text-grey q-ma-sm"
            active-color="primary"
            indicator-color="primary"
            align="left"
            narrow-indicator
        >
            <q-tab name="active" label="Active Services" />
            <q-tab name="inactive" label="Inactive Services" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="active">
               <div class="row q-ma-sm">
                   <div class="col-sm-12 col-md-6 col-lg-4">
                       <ServiceCard title="Car Repair Service" price="25" category="Automobile" rating="3"/>
                   </div>
                   <div class="col-md-6 col-lg-4">
                       <ServiceCard title="Car Repair Service" price="25" category="Automobile" rating="3"/>
                   </div>
                   <div class="col-md-6 col-lg-4">
                       <ServiceCard title="Car Repair Service" price="25" category="Automobile" rating="3"/>
                   </div>
                   <div class="col-md-6 col-lg-4">
                       <ServiceCard title="Car Repair Service" price="25" category="Automobile" rating="3"/>
                   </div>
                   <div class="col-md-6 col-lg-4">
                       <ServiceCard title="Car Repair Service" price="25" category="Automobile" rating="3"/>
                   </div>
               </div>
            </q-tab-panel>

            <q-tab-panel name="inactive">
                <q-tab-panel name="active">
                    <div class="row q-ma-sm">
                        <div class="col-md-6 col-lg-4">
                            <ServiceCard title="Car Repair Service" price="25" category="Automobile" rating="3"/>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <ServiceCard title="Car Repair Service" price="25" category="Automobile" rating="3"/>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <ServiceCard title="Car Repair Service" price="25" category="Automobile" rating="3"/>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <ServiceCard title="Car Repair Service" price="25" category="Automobile" rating="3"/>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <ServiceCard title="Car Repair Service" price="25" category="Automobile" rating="3"/>
                        </div>
                    </div>
                </q-tab-panel>
            </q-tab-panel>
        </q-tab-panels>
    </div>
</template>

<script>
import ServiceCard from "components/common/ServiceCard";
export default {
name: "Services",
    components: {ServiceCard},
    data () {
        return {
            tab: 'active',
            ratingModel: 3
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
