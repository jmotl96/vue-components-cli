<template>
  <div class="card-columns">
    <BagItem
        v-for="(item, i) in bag"
        :item = "item"
        :remove-function = "function (item){bag.removeItem(item)}"
        :key = "i"

    ></BagItem>
  </div>
</template>

<script>
import BagCollection from "/models/Bag";
import {Book, Movie} from "@/models/BagItem";
import BagItem from "@/components/BagItem";

export default {
  name: "Bag",
  components: {BagItem},
  data(){
    return{
      bag: new BagCollection()
          .addItem(new Book('Interaction Design', 200))
          .addItem(new Movie('Paw Patrol!', 78))
    }
  }
}
</script>

<style scoped>

</style>