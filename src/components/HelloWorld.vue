<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p class="book">Book Title: {{book.title}}</p>
    <book-component :item="book"></book-component>
  </div>
</template>

<script>
import {Book, Movie} from "@/models/LibraryItems";
import BookComponent from "@/components/Book";

export default {
  name: 'HelloWorld',
  components: {
    BookComponent
  },
  props: {
    msg: String
  },
  data(){
    return {
      book: new Book('Hop on Pop', 73),
      movie: new Movie('Paw Patrol', 120),
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.book {
  color: red;
}
</style>
