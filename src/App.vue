<template>
  <div id="app">
    <!--hidden input for copy to clipboard-->
    <input class='hide' id="clip" v-model="output"/>
    <h1 class="floatup">Scientific Calculator</h1>
    <div class="container">

      <input v-model="expression" 
        class="floatup" 
        id="input" 
        placeholder="type expression here" 
        @input="addHist()"
        ref="in" 
        autofocus/>

      <Button @click="clear()" class="floatup clr">Clear</Button>
    </div>

    <h1 :class="output?'':'hide'" id="display">= {{output}}</h1>
    <Button v-if="output" @click="copy()">Copy</Button>

    <div class="container">
      <Button v-for="constant in constants" :key="constant[0]" @click="append(constant[1])" class="floatup">
        {{constant[0]}}
      </Button>
    </div>

    <div class="container" id ="panel">
      <div id="history" v-if="history.length">
        <h2 id="history-header">History</h2>
        <ul id="history-list">
          <li v-for="item in history" :key="item.value" @click="append(item)">{{item}}</li>
        </ul>
      </div>
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
  public output: string =""; //value to be output
  public expression = ""; //user input
  public constants = constants; //dictionary of physical constants
  public history: string[] = [];

  // put focus on input box
  public focusInput(): void { 
    (this.$refs.in as HTMLInputElement).focus();
  }
  //copy output to clipboard
  public copy(): void {
    let copyText = document.querySelector("#clip") as HTMLInputElement;
    copyText.select();
    document.execCommand("copy");
    this.focusInput(); // return focus to input
  }
  //clear input
  public clear(): void{
    this.expression = ""; // reset input string
    this.focusInput(); // return focus to input box
  }
  //append value to input
  public append(num: string): void{
    this.expression += num;
    this.focusInput();
  }
  // add output to history
  public addHist(): void{
    // if output is valid and nonempty and has changed since last recorded
    if(this.output && this.output !== this.history[0] && this.output !== "invalid input")
        this.history.unshift(this.output); // prepend output to history
  }

  // automatically evaluate input
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
#panel {
  display:flex;
  justify-content: center;
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
  width: 840px;
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
  display:inline;
  margin-right: 10px;
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
  width: 80%;
	box-shadow: 0px 3px var(--blue);
  
}
#input:focus {
	box-shadow: 0px 5px var(--lemon);
}
#history {
  animation: fadein 500ms ease-in 0s forwards;
  opacity: 0%;
  margin-top: 50px;
  /*border-radius: 10px;*/
  background-color: rgb(98, 159, 181);
  padding: 20px;
  flex-basis: 30%;
}
#history-header {
  text-align: center;
  color:white;
  font-weight: 100;
}
#history-list {
  padding: 0;
  list-style-type: none;
  color: white;
  font-size: 1em; 
}
#history-list li{
  margin-bottom: 10px;
}
#history-list li:hover{
  cursor: pointer;
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
    opacity:100%;
  }
}
@keyframes fadein {
  0%{
    opacity: 0%;
  }
  75%{
    transform: scale(1.1);
  }
  100% {
    opacity: 100%;
  }
}
</style>
