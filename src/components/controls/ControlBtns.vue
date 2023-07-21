<script setup>
import DelayedTooltip from '/src/components/delayedTooltip'
</script>

<template>
  <div class="row no-wrap justify-center items-center q-mb-sm">
    <div>
      <q-btn flat round icon="fast_rewind">
        <DelayedTooltip msg="Rewind" />
      </q-btn>
    </div>
    <div>
      <q-btn flat round icon="play_arrow">
        <DelayedTooltip msg="Play" />
      </q-btn>
    </div>
    <div>
      <q-btn flat round icon="fast_forward">
        <DelayedTooltip msg="FastForward" />
      </q-btn>
      <q-btn flat round icon="fullscreen">
        <DelayedTooltip msg="Fullscreen" />
      </q-btn>
    </div>
  </div>
</template>

<style scoped></style>
