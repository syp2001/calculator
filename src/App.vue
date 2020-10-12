<template>
  <div id="app">
    <h1>Scientific Calculator</h1>
    <input v-model="expression" id="input" placeholder="type expression here"/>
    <h1 v-if="output" id="display">= {{output}}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { evaluate } from 'mathjs';

@Component({
  components: {
  },
})
export default class App extends Vue {
  public output: string | undefined;
  public expression = "";

  @Watch('expression')
  inputChanged(newVal: string) {
    try{
      this.output = evaluate(newVal);
    }
    catch(e){
      this.output = "invalid input";
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
body {
  background-color: var(--light-blue);
}
h1 {
  color: #e1f8ff;
  text-align:left;
  margin-left:20px;
  margin-top:0;
  font-weight:200;
}
#display {
  color:white;
  text-align: center;
  font-weight: 100;
}
#input {
	margin: 20px auto;
	outline: none;
	border: none;
	background-color: var(--light-blue);
	color: white;
	padding: 5px 10px;
	transition: box-shadow 150ms ease-in;
  font-size: 2em;
  width: 50%;
	box-shadow: 0px 3px var(--blue);
  
}
#input:focus {
	box-shadow: 0px 5px var(--lemon);
}

body:focus-within {
	/*background-color: var(--blue);*/
}

</style>
