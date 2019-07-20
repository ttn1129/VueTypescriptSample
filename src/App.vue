<template>
  <div id="app">
    <h2>アンケート</h2>
    <p>アンケートにご協力ください</p>
    <form v-on:submit.prevent>
      <MyOption
        text="あなたの住んでいる都道府県は？"
        id="prefecture"
        :myoptions="prefectures"
        :selectedValue="{id:1}"
      ></MyOption>
      <button @click="gatherResult">send</button>
    </form>
    <div v-if=" this.result.length !== 0 ">{{ result }}</div>
  </div>
</template>

<script lang='ts'>

import MyOption from "./components/MyOption.vue";
import Prefecture from "./models/MyOption/Prefecture";
import { Vue } from "vue-property-decorator";

function getPrefectures():Prefecture[]{
  return [{
      "id": 1,
      "name": "東京都"
    }, {
      "id": 2,
      "name": "それ以外"
    }];
};


export default Vue.extend({
  name: "App",
  data():{
    result:Array<any>
    prefectures:Prefecture[]
  }
  {
    return {
      result: [],
      prefectures : []
    };
  },
  created(){
    this.prefectures = getPrefectures();
  },
  methods: {
    gatherResult():void {
      this.result = [];
      this.result.push(
        (<HTMLInputElement>document.getElementById('prefecture')).value
      );
      // const genderCheckedNode = (<HTMLInputElement>document.querySelector(
      //   "input[name = gender]:checked"
      // ));
      // if (genderCheckedNode) {
      //   this.result.push({
      //     gender: genderCheckedNode.value
      //   });
      // }
    }
  },
  components: {
    MyOption
  }
});
</script>