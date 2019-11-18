<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h1 class="title has-text-centered">Simplifier votre organisations quotidiennes</h1>
        <h3 class="subtitle has-text-grey has-text-weight-light">
          Grâce à ce formulaire, l'équipe de Hakarena va vous aider à planifier les activités à venir de la famille.
        </h3>
      </div>
      <childForm v-for="item in childCount" :key="item"> </childForm>

      <!-- <button @click='childCount++'>+ Add a children / sport time</button> -->
    </div>
  </section>
</template>

<script>
import childForm from "@/components/childForm.vue";

export default {
  components: {
    childForm
  },
  data: () => {
    return {
      childCount: 1
    };
  },
  methods: {
    addItem: event => {
      console.log(event);
      console.log("test");
    }
  }
};
</script>

<style lang='scss' scoped>
.content {
  .title {
    margin-bottom: 2rem
  }
}
</style>
