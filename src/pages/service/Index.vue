<template>
    <div class="column justify-center q-mt-xl">
      <div class="row justify-center">
        <q-input square outlined label="Select service type" />
        <q-input square outlined label="Enter a location" />
        <q-btn color="teal">
          <q-icon left size="2em" name="search" />
          <div v-if="$q.screen.gt.sm">খুঁজুন</div>
        </q-btn>
      </div>
      <div class="row justify-center items-center">
        <div class="col-4">
        
        </div>
        <div class="col-4 items-right">dasd</div>
      </div>
    </div>
</template>
