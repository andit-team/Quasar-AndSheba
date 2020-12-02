<template>
    <div>
        <div class="text-h5 q-ma-md">Dashboard</div>
        <div class="row q-ma-md full-width">
            <div class="col-md-6 col-lg-4">
                <DashboardCards title="Bookings" value="245" bg-color="#ff0080"/>
            </div>
            <div class="col-md-6 col-lg-4">
                <DashboardCards title="Services" value="66" bg-color="#323031"/>
            </div>
            <div class="col-md-6 col-lg-4">
                <DashboardCards title="Notification" value="8" bg-color="#d9c504"/>
            </div>
        </div>
    </div>

</template>

<script>
import DashboardCards from "components/dashboard/DashboardCards";
export default {
name: "Dashboard",
    components: {DashboardCards}
}
</script>

<style lang="scss" scoped>

</style>
