<template>
    <div>
        <div class="text-h5 q-ma-lg">Booking List</div>

        <BookingsCard status="pending"/>
        <BookingsCard status="completed"/>
        <BookingsCard status="in-progress"/>
        <BookingsCard status="rejected"/>



    </div>
</template>

<script>
import BookingsCard from "components/common/BookingsCard";
export default {
name: "BookingList",
    components: {BookingsCard}
}
</script>

<style lang="scss" scoped>

</style>
