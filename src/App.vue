<template>
  <div id="app">
    <h1 class="floatup">Chemistry Calculator</h1>
    <div class="container">
      <input v-model="expression" class="floatup" id="input" placeholder="type expression here"/>
      <Button @click="clear()" class="floatup clr">Clear</Button>
    </div>
    <h1 :class="output?'':'hide'" id="display">= {{output}}</h1>
    <div class="container">
    <Button v-for="constant in constants" :key="constant[0]" @click="append(constant[1])" class="floatup">
      {{constant[0]}}
    </Button>
  </div>
  </div>
 
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { evaluate } from 'mathjs';
import Button from './components/Button.vue';
import {constants} from './assets/constants';
/* eslint-disable */
@Component({
  components: {
    Button
  },
})
export default class App extends Vue {
  public output: string | undefined;
  public expression = "";
  public constants = constants;

  public clear(): void{
    this.expression = "";
  }
  public append(num: string): void{
    this.expression += num;
  }
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
.hide{
  opacity:0;
}
body {
  background-color: var(--light-blue);
  transition: all 500ms ease-in;
  text-align: center;
}
.container {
  /*width: 840px;*/
  margin: 10px auto;
}
h1 {
  color: #e1f8ff;
  text-align:left;
  margin-left:20px;
  margin-top:0;
  font-weight:200;
}
.clr{
  margin-left:-74px;
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
	background-color: transparent;
	color: white;
	padding: 5px 10px;
	transition: box-shadow 200ms ease-in;
  font-size: 2em;
  height:1.35em;
  width: 50%;
	box-shadow: 0px 3px var(--blue);
  
}
#input:focus {
	box-shadow: 0px 5px var(--lemon);
}

body:focus-within {
	background-color: var(--blue);
}
.floatup{
  animation: float 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;
  opacity:0%;
}
@keyframes float {
  0%{
    transform:translate(0px,20px);
    opacity:0%;
  }
  100%{
    transform: translate(0,0px);
    opacity:1;
  }
}
</style>
