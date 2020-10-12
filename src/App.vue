<template>
  <div id="app">
    <Header />
    <Block v-for="block in blocks" :key="block.id" :data="block"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Block from './components/Block.vue';
import Header from './components/Header.vue';

@Component({
  components: {
    Block,
    Header
  },
})
export default class App extends Vue {
  public blocks: object[] = [{value:0,units:'m'}];

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: var(--light-blue);
}
</style>
