<template>
  <div id="app">
    <h2>アンケート</h2>
    <p>アンケートにご協力ください</p>
    <form v-on:submit.prevent>
      <MyOptionDOM
        text="あなたの住んでいる都道府県は？"
        id="prefecture"
        :myoptions="prefectures"
        :selectedValue="{id:1}"
      ></MyOptionDOM>
      <button @click="gatherResult">send</button>
    </form>
    <div v-if=" this.result.length !== 0 ">{{ result }}</div>
  </div>
</template>

<script lang='ts'>
import MyOptionDOM from "./components/MyOptionDOM.vue";
import Prefecture from "./types/MyOption/Prefecture";
// import MyOption from "./types/MyOption/MyOption";
import MyOptionList from "./types/MyOption/MyOptionList";
import { Vue } from "vue-property-decorator";
//type: Array as () => MyOptionsInterface[],

export default Vue.extend({
  name: "App",
  data: () => {
    return {
      result: [],
      prefectures: new MyOptionList([
        new Prefecture(1, "東京"),
        new Prefecture(2, "それ以外")
        // { id: 2, name: "それ以外" } as Prefeture
      ])
    };
  },
  methods: {
    gatherResult() {
      this.result = ["a"];
      // this.result.push(document.getElementById("prefecture").value) as string);
    }
  },
  components: {
    MyOptionDOM
  }
});
</script>