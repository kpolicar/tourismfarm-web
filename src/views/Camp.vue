<template>
  <Accommodation>
    <template v-slot:tabs>
      <b-tab-item label="Campsite details">
        <h2 class="title">Information</h2>
        <p>The small camping ground in our orchard is perfect for those who prefer smallness,
          privacy and want to spend some time away from the big, crowded camps. Families especially
          are welcome! The camping ground does not provide much luxury, though we take great care to
          keep the grounds clean, tidy and ecologically oriented. We can house up to around 20 tents
          or trailers at a time. The guests are free to pick up fruit from our orchard and
          vegetables upon request.
        </p><br>
      </b-tab-item>

      <b-tab-item label="Rules">
        <ul>
          <li>Silence between 10:00PM and 7:00AM.</li>
          <li> Guests are kindly expected to keep the camping ground clean and tidy, the garbage
            should be collected in the appropriate recycling containers.
          </li>
          <li> Hot water is always at your disposal, however, please be considerate and don't be
            wasteful.
          </li>
          <li> The tap water is drinkable since it comes from the nearby Alpine foothills. There is
            no need to boil it beforehand.
          </li>
        </ul>

      </b-tab-item>
    </template>

    <template v-slot:pricing>
      <p class="heading">Priced at</p>
      <p class="title" style="color: whitesmoke; margin-bottom: 0">
        <strong>€12</strong><small style="opacity: 0.6; font-size: 16px"> / person</small><br>
      </p>
      <small class="heading" style="opacity: 0.6">tax not included</small>
      <hr>
      Tourist tax (adult) 2.00€<br>
      Tourist tax (child) 1.00€<br><br><br>


      * Electricity 3.5€<br><br>
    </template>
  </Accommodation>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Accommodation from "@/components/Accommodation.vue";
  import Amenities from "@/components/Amenities.vue";

  @Component({
    components: {Amenities, Accommodation}
  })
  export default class Camp extends Vue {
  }
</script>

