<template>
    <div>
        <div class="row">
            <div class="col-md-6 q-pa-lg">
                <q-card class="wallet">
                    <div class="text-h4 block q-pa-lg">Wallet</div>
                    <div class="q-px-lg">
                        <span class="text-h6">Wallet Balance</span>
                        <span class="text-h4 block">$3885</span>
                    </div>
                    <div class="row q-px-lg">
                        <div class="col-6">
                            <span class="text-h6">Total Credit</span>
                            <span class="text-h4 block">$5314</span>
                        </div>
                        <div class="col-6">
                            <span class="text-h6">Total Debit</span>
                            <span class="text-h4 block">$1431</span>
                        </div>
                    </div>
                    <div class="row q-pa-lg">
                        <div class="col-6 float-left">
                            <span class="text-h6 block">$1431</span>
                        </div>
                        <div class="col-6 float-right">
                            <span class="text-h6 block">$5314</span>
                        </div>
                    </div>
                </q-card>
            </div>
            <div class="col-md-6 q-pa-lg">
                <q-card class="wallet">
                    <div class="text-h4 block q-pa-lg">Withdraw</div>
                    <div class="q-px-lg">
                        <q-input>
                            <template v-slot:prepend>
                                <q-icon name="fa fa-dollar-sign" />
                            </template>
                        </q-input>
                        <div class="text-center text-h4 q-pa-sm">OR</div>
                        <div class="text-center">
                            <q-btn class="q-ma-sm bg-primary text-white">$50</q-btn>
                            <q-btn class="q-ma-sm bg-primary text-white">$100</q-btn>
                            <q-btn class="q-ma-sm bg-primary text-white">$150</q-btn>
                        </div>
                        <div class="text-center q-mt-md q-pb-lg">
                            <q-btn class="q-ma-sm bg-primary text-white q-px-lg" style="font-size: 18px">Withdraw</q-btn>
                        </div>
                    </div>
                </q-card>
            </div>
        </div>

        <div class="text-h5 q-ma-lg">Recent Transactions</div>
        <div class="q-ma-lg">
            <q-table
                :data="data"
                row-key="name"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "Wallet",
    data () {
        return {
            columns: [
                {name: 'S.No', label: 'Fat (g)', field: 'fat', sortable: true, headerClasses: 'bg-grey text-white'},
                {name: 'carbs', label: 'Carbs (g)', field: 'carbs', headerClasses: 'bg-grey text-white'},
                {name: 'protein', label: 'Protein (g)', field: 'protein', headerClasses: 'bg-grey text-white'},
                {name: 'sodium', label: 'Sodium (mg)', field: 'sodium', headerClasses: 'bg-grey text-white'},
                {
                    name: 'calcium',
                    label: 'Calcium (%)',
                    field: 'calcium',
                    sortable: true,
                    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
                    headerClasses: 'bg-grey text-white'
                },
                {
                    name: 'iron',
                    label: 'Iron (%)',
                    field: 'iron',
                    sortable: true,
                    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
                    headerClasses: 'bg-grey text-white'
                }
            ],
            data: [
                {
                    '#': 1,
                    date: '22/04/2020',
                    wallet: '$7484',
                    credit: '$676',
                    debit: '$5898',
                    available: '$974',
                    reason: 'Complete the Service',
                    status: 'credit'
                },
                {
                    '#': 2,
                    date: '22/04/2020',
                    wallet: '$7484',
                    credit: '$676',
                    debit: '$5898',
                    available: '$974',
                    reason: 'Complete the Service',
                    status: 'credit'
                },
                {
                    '#': 3,
                    date: '22/04/2020',
                    wallet: '$7484',
                    credit: '$676',
                    debit: '$5898',
                    available: '$974',
                    reason: 'Complete the Service',
                    status: 'credit'
                },
                {
                    '#': 4,
                    date: '22/04/2020',
                    wallet: '$7484',
                    credit: '$676',
                    debit: '$5898',
                    available: '$974',
                    reason: 'Complete the Service',
                    status: 'credit'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.wallet {
    .text-h4 {
        font-size: 24px;
    }
    .text-h6 {
        color: #575b6b;
        font-size: 15px;
    }
}
</style>
