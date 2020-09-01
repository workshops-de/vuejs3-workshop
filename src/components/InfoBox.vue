<template>
  <button @click="isVisible = !isVisible">
    <span v-if="isVisible">Hide</span>
    <span v-else>Show</span>
  </button>
  <div class="container" v-show="isVisible">
    Lorem ipsum.
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InfoBox',
  data() {
    return {
      isVisible: true
    };
  }
});
</script>

<style lang="scss">
.container {
  border: 1px solid;
  background-color: lightgrey;
}
</style>
