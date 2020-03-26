<template>
    <section>
        <h2 class="title">What are guests say</h2>
        <h3 class="subtitle">Testimonials</h3>
        <b-carousel-list
                v-model="values"
                :data="items"
                :arrow="arrow"
                :arrow-hover="arrowHover"
                :items-to-list="perList"
                :items-to-show="itemsToShow"
                :repeat="repeat"
                :autoplay="autoplay"
                :has-drag="drag"
                :has-grayscale="gray"
                :has-opacity="opacity" >
            <template #item="data">
                <blockquote>
                    <p>{{ data.list.content }}</p>
                    <footer>
                        <cite>{{ data.list.author}}</cite>
                    </footer>
                </blockquote>
            </template>
        </b-carousel-list>
    </section>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Testimonials extends Vue {
    data() {
      return {
        arrow: true,
        arrowHover: true,
        drag: true,
        gray: false,
        opacity: false,
        values: 1,
        perList: 1,
        itemsToShow: 3,
        repeat: false,
        autoplay: false,
        items: [
          {
            content: 'We felt at ease from the very first contact and we felt at home from the moment of arrival. The apartment was to expectation, roomy, clean and complete. Breda and Joseph gave us all kind of tips about sightseeing the surroundings and about good, nice restaurants! And we enjoyed all of it!',
            author: 'Jean, August 2015',
          },
          {
            content: 'Had a really wonderful 4 nights stay in the old farmhouse in Brezje. Lovely spacious accommodation, beautiful surroundings in a quiet rural environment. Great location for exploring Slovenia. The gorgeous Lake Bled being a short drive away. Breda and Joze were wonderful hosts, really friendly and welcoming. Would absolutely recommend staying here!',
            author: 'Trefort, July 2014',
          },
          {
            content: 'A very nice expérience in the cosy camping of Breda! Showers very clean, camp very green and peaceful, and Breda & her husband very sympathetic with us! We\'ll definitively come back! Thx again for everything!',
            author: 'Charlotte, August 2015',
          },
          {
            content: 'We had a great stay at Breda\'s incredibly well run camp site. All the facilities like toilet, shower, cooking and washing can be shared with the campers. What impresses us most is the cleanliness of everything, it made us feel like camping out too! Highly recommended.\n',
            author: 'Jonathan, August 2015',
          },
          {
            content: 'We had a perfect stay at Breda\'s ! Her charming daughter showed us around at the well-kept property and the room had everything we needed. Even though we were not travelling by car we had no problems to reach our destinations and the tickets were not expensive. For hiking fans there are routes close by. If you are looking for a quite place in a rural area - this is a perfect pick !',
            author: 'Isabella, September 2015',
          },
        ]
      }
    }
  }
</script>

<style lang="scss">
    .logo {
        fill: white;
    }
</style>
