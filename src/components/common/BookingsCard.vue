<template>
    <q-card class="my-card q-ma-lg">
        <div class="row">
            <div class="col-md-12 col-lg-9">
                <q-card-section horizontal class="q-pa-lg">
                    <q-img
                        class="col-5"
                        src="https://cdn.quasar.dev/img/parallax1.jpg"
                        width="180px"
                    />

                    <q-card-section>
                        <a class="heading">Car Repair Services</a>
                        <q-list class="details-table">
                            <li>
                                <span>Booking Date</span>
                                <span>23 Jul 2020
                            <span class="status pending" v-if="status === 'pending'">Pending</span>
                            <span class="status completed" v-if="status === 'completed'">Completed</span>
                            <span class="status in-progress" v-if="status === 'in-progress'">In Progress</span>
                            <span class="status rejected" v-if="status === 'rejected'">Rejected</span>
                        </span>
                            </li>
                            <li>
                                <span>Booking time</span>
                                <span>13:00:00 - 14:00:00</span>
                            </li>
                            <li>
                                <span>Amount</span>
                                <span>$500</span>
                            </li>
                            <li>
                                <span>Location</span>
                                <span>223 Jehovah Drive Roanoke</span>
                            </li>
                            <li>
                                <span>Phone</span>
                                <span>410-242-3850</span>
                            </li>
                            <li>
                                <span>User</span>
                                <span>
                            <img class="avatar-img rounded-circle" alt="User Image" src="icons/icon-192x192.png">
                            <span>Jeffrey Akridge</span>
                        </span>
                            </li>
                        </q-list>
                    </q-card-section>
                </q-card-section>
            </div>
            <div class="col-md-12 col-lg-3">
                <div class="action-area" v-if="status === 'in-progress'">
                    <div class="action-btn chat">
                        <q-icon name="fa fa-eye"/>
                        <span>Chat</span>
                    </div>
                    <div class="action-btn cancel">
                        <q-icon name="fa fa-times"/>
                        <span>Cancel the Service</span>
                    </div>
                    <br>
                    <div class="action-btn accept">
                        <q-icon name="fa fa-check"/>
                        <span>Complete Request to User</span>
                    </div>
                </div>
            </div>
        </div>
    </q-card>
</template>

<script>
export default {
    name: "BookingsCard",
    props: ['status']
}
</script>

<style lang="scss" scoped>
.heading {
    font-size: 22px;
    margin-top: -20px;
    font-weight: bolder;
    display: block;
    cursor: pointer;
    &:hover {
        color: #2b76d2;
    }
}
.details-table {
    list-style: none;
    li {
        padding: 2px;
        span {
            font-size: 15px;
            width: 120px;
            display: inline-block;
            font-weight: 500;
        }
        span:last-child {
            width: auto;
            color: #8a8d92;
            font-weight: 700;
            img {
                width: 28px;
                height: 28px;
                position: absolute;
                border-radius: 28px;
            }
            span {
                margin-left: 32px;
                margin-top: 2px;
            }
            span.status {
                margin: 0 5px;
                display: inline-block;
                padding: 1px 12px;
                font-size: 12px;
                font-weight: 400;
                border-radius: 10px;
                color: #fff;
            }
            span.pending {
                background: #f9c10a;
            }
            span.completed {
                background: #36a745;
            }
            span.in-progress {
                background: #307bff;
            }
            span.rejected {
                background: #dc3545;
            }
        }
    }
}

.action-area {
    padding: 0;
    margin: 15px;
    height: 80px;
}

.action-btn {
    padding: 3px 10px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    i {
        margin-top: -4px;
        padding-right: 7px;
    }
    span {

    }
    &.chat {
        float: right;
        background-color: #e2f6f6;
        color: #41b9ac;
        position: absolute;
        right: 200px;
    }
    &.cancel {
        float: right;
        background-color: #fce3e7;
        color: #e63f4e;
        position: absolute;
        right: 35px;
    }
    &.accept {
        float: right;
        background-color: #e2f6ee;
        color: #39b059;
        position: absolute;
        right: 35px;
        margin-top: 25px
    }
}

</style>
