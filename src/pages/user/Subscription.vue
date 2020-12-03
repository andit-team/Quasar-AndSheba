<template>
    <div>
        <div class="row q-ma-lg">
            <div class="col-md-6 col-lg-4">
                <SubscriptionCard/>
            </div>
        </div>

        <div class="text-h5 q-ma-lg">Subscribe Details</div>
        <div class="q-ma-lg">
            <q-table
                :data="data"
                row-key="name"
            />
        </div>
    </div>

</template>

<script>
import SubscriptionCard from "components/common/SubscriptionCard";
export default {
    name: "Subscription",
    components: {SubscriptionCard},

    data() {
        return {
            data: [
                {
                    plan: 'Basic',
                    'start date': '03-04-2020',
                    'end date': '03-04-2020',
                    amount: '0',
                    status: 'paid'
                },
                {
                    plan: 'Standard',
                    'start date': '03-04-2020',
                    'end date': '03-04-2020',
                    amount: '0',
                    status: 'paid'
                },
                {
                    plan: 'Enterprice',
                    'start date': '03-04-2020',
                    'end date': '03-04-2020',
                    amount: '0',
                    status: 'paid'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
