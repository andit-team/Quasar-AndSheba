<template>
    <div>
        <div class="text-h5 q-ma-lg">Profile Settings</div>
        <div class="q-ma-lg">
            <div class="text-h6">Basic Information</div>
            <div class="q-mt-lg">
                <q-img class="inline" width="170px" style="border-radius: 10px" src="https://avatars3.githubusercontent.com/u/38374712?s=400&v=4" />
                <div class="inline-block q-ma-lg absolute">
                    <div class="text-h5 text-weight-bold">Shariful Islam</div>
                    <div class="text-weight-bold">Max file size is 20mb</div>
                    <q-btn class="bg-primary q-ma-md text-white">Browse</q-btn>
                </div>
            </div>
            <form class="q-mt-xl">
                <div class="row">
                    <div class="col-md-6 q-pa-sm">
                        <q-input filled value="Shariful Islam" label="Name" stack-label disable/>
                    </div>
                    <div class="col-md-6 q-pa-sm">
                        <q-input filled value="SharifulIslam@gmail.com" label="Email" stack-label disable/>
                    </div>
                    <div class="col-md-6 q-pa-sm">
                        <q-input filled value="+88" label="Country Code" stack-label disable/>
                    </div>
                    <div class="col-md-6 q-pa-sm">
                        <q-input filled value="1078307408" label="Mobile Number" stack-label disable/>
                    </div>
                    <div class="col-md-6 q-pa-sm">
                        <q-input filled value="SharifulIslam@gmail.com" label="Email" stack-label disable/>
                    </div>
                </div>
                <q-btn class="bg-primary q-ma-sm text-white">Update</q-btn>
            </form>

        </div>

    </div>
</template>

<script>
export default {
name: "Profile"
}
</script>

<style scoped>

</style>
