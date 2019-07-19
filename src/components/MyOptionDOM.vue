<template>
  <p>
    <label :for="id" v-if=" text !== '' ">{{ text }}</label>
    <select :id="id">
      <option
        v-for="item in myoptions.data"
        :key="item.id"
        :value="item.id"
        :selected="item.id === selectedValue.id"
      >{{ item.name }}</option>
    </select>
  </p>
</template>


<script lang='ts'>
import { Vue } from "vue-property-decorator";
//type: Array as () => MyOptionsInterface[],
import MyOptionList from "./../types/MyOption/MyOptionList";

export default Vue.extend({
  props: {
    text: {
      type: String
    },
    id: {
      type: String,
      required: true
    },
    myoptions: {
      //type: Array as () => MyOptionsInterface[],
      type: MyOptionList,
      required: true
    },
    selectedValue: {
      type: Object
    }
  }
});
</script>
