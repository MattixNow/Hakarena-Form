<template>
  <div class="columns is-centered">
    <div class="column is-three-quarters">
      <div class="field">
  <label class="label">Prénom du membre de la famille :</label>
  <div class="control">
    <input class="input" v-model='childName' type="text" placeholder="Arthur...">
  </div>
</div>
      <div class="field">
        <label class="label">Quel activité ?</label>
        <sportPicker v-model="sportChoiced" />
      </div>
      <!-- {{ sportChoiced }} -->
      <div class="field">
        <label class="label">Lieu de l'activité ?</label>
        <vue-google-autocomplete
          ref="address"
          id="map"
          class="form-control input"
          placeholder="Please type your address"
          v-on:placechanged="getAddressData"
          country="fr"
        />
      </div>
      <!-- {{address}} -->
      <div class="field">

        <label class="label">Horaire de l'activité :</label>
      
      <div class="timepicking">
        <div
          class="dayChoiceStyle"
          v-for="el in schedules"
          :key="el.id"
          v-on:change="el.isActive = !el.isActive"
        >
          <div class="field">
            <input
              class="is-checkradio"
              :id="'exampleCheckbox' + el.id"
              type="checkbox"
              v-bind:name="'exampleCheckbox' + el.id"
            />

            <label :for="'exampleCheckbox' + el.id">{{ el.dayName }}</label>
          </div>
          <div v-show="el.isActive">
            <modalTimeRange
              v-model="timeRange[el.id]"
              :isActivePassed="el.isActive"
            />
            <!-- {{ timeRange[el.id] }} -->
          </div>
        </div>
      </div>
        </div>
      <button v-on:click="SubmitData()" class="button">Simplifier vous la vie</button>
        <a v-show="showPost" target="_blank" class="button is-primary" :href="finalData">Ajouter à Google Agenda</a>
    </div>
  </div>
</template>

<script>
import axios from "@nuxtjs/axios";
import VueGoogleAutocomplete from "vue-google-autocomplete";
import modalTimeRange from "./modalTimeRange";
import sportPicker from "./sportPicker";

export default {
  components: { VueGoogleAutocomplete, modalTimeRange, sportPicker },
  name: "childForm",
  data: function() {
    return {
      sportChoiced: null,
      idDay: null,
      childName:null ,
      address: "",
      showPost: false,
      timeRange: [],
      yourValue: null,
      finalData: 'empty',
      timeMonday: null,
      opacited: true,
      schedules: [
        { id: 1, dayName: "Lundi", isActive: false },
        { id: 2, dayName: "Mardi", isActive: false },
        { id: 3, dayName: "Mercredi", isActive: false },
        { id: 4, dayName: "Jeudi", isActive: false },
        { id: 5, dayName: "Vendredi", isActive: false },
        { id: 6, dayName: "Samedi", isActive: false },
        { id: 7, dayName: "Dimanche", isActive: false }
      ]
    };
  },
  mounted() {
    this.$refs.address.focus();
    document.get
    // console.log(this)
  },
  //   computed() {
  //   },

  methods: {
    /**
     * When the location found
     * @param {Object} addressData Data of the found location
     * @param {Object} placeResultData PlaceResult object
     * @param {String} id Input container ID
     */
    getAddressData: function(addressData, placeResultData, id) {
      this.address = addressData;
    },
    SubmitData: function() {
        this.showPost = true
      // console.log(this)
      var formatedData = {
          childName: this.childName,
        whichSports: this.sportChoiced,
        clubLocation: [this.address.street_number, this.address.route, this.address.locality, this.address.postal_code,this.address.country].join(' '),
        scheduling: this.timeRange
      };
      
      console.log(formatedData);
      this.finalData = `http://localhost:2002?data=${encodeURIComponent(JSON.stringify(formatedData))}`;
    }
  }
};
</script>

<style lang="scss">
@import url("bulma-checkradio/dist/css/bulma-checkradio.min.css");
.dayChoiceStyle {
  * {
    display: inline-block;
  }
}

.active {
  opacity: 0.3;
  transition: all 300ms;
}
</style>
