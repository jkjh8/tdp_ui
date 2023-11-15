<script setup>
// components
import DelayedTooltip from '/src/components/delayedTooltip'
// composables
import { pStatus } from '/src/composables/useStatus'
import { fnPlay, fnPause, setFullscreen } from '/src/composables/usePlayer'
</script>

<template>
  <div class="row no-wrap justify-center items-center q-mb-sm">
    <div>
      <q-btn flat round icon="fast_rewind">
        <DelayedTooltip msg="Rewind" />
      </q-btn>
    </div>
    <!-- play button -->
    <div>
      <q-btn
        v-if="pStatus.status.status != 'playing'"
        flat
        round
        size="lg"
        color="primary"
        icon="play_arrow"
        @click="fnPlay"
      >
        <DelayedTooltip msg="Play" />
      </q-btn>
      <q-btn
        v-else
        flat
        round
        size="lg"
        color="secondary"
        icon="pause"
        @click="fnPause"
      >
        <DelayedTooltip msg="Pause" />
      </q-btn>
    </div>
    <!--  -->
    <div>
      <q-btn flat round icon="fast_forward">
        <DelayedTooltip msg="FastForward" />
      </q-btn>
      <q-btn
        v-if="!pStatus.fullscreen"
        flat
        round
        icon="fullscreen"
        @click="setFullscreen(true)"
      >
        <DelayedTooltip msg="Enter Fullscreen" />
      </q-btn>
      <q-btn v-else flat round icon="fullscreen_exit" @click="setFullscreen(false)">
        <DelayedTooltip msg="Leave Fullscreen" />
      </q-btn>
    </div>
  </div>
</template>

<style scoped></style>
