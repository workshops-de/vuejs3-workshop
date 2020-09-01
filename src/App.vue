<template>
  <div id="app">
    <AppNavigation />
  </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    AppNavigation
  }
});
</script>
Ì
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
