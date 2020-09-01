<template>
  <div v-bind:id="id">x: {{ x }}, y: {{ y }}</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      id: 'my-id',
      x: 12,
      y: 4
    };
  }
});
</script>
