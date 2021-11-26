<template>
  <q-page>
    <div class="row q-mb-md">
      <div class="col bg-accent">1</div>
      <div class="col bg-primary">2</div>
      <div class="col bg-secondary">3</div>
    </div>
    <div class="row q-mb-md">
      <div class="col col-5 bg-accent">1</div>
      <div class="col col-6 bg-primary">2</div>
      <div class="col bg-secondary">3</div>
    </div>
    <div class="row q-mb-md justify-center">
      <div class="col col-4 bg-accent">1</div>
      <div class="col col-4 bg-primary">2</div>
    </div>
    <div class="row q-mb-md justify-end">
      <div class="col col-4 bg-accent">1</div>
      <div class="col col-4 bg-primary">2</div>
    </div>
    <div class="row q-mb-md justify-between">
      <div class="col col-4 bg-accent">1</div>
      <div class="col col-4 bg-primary">2</div>
    </div>
    <q-separator spaced />

    <div class="row q-mb-md justify-between">
      <div class="col-12 col-md-4 col-sm-6 bg-accent">1</div>
      <div class="col-12 col-md-4 col-sm-6 bg-primary">2</div>
    </div>
    <q-separator spaced />
    <div class="row">
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <q-separator spaced />
    <div class="row justify-between">
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <q-separator spaced />
    <div class="row justify-end">
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <q-separator spaced />
    <div class="row justify-around">
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <q-separator spaced />
    <div class="column justify-center items-center bg-dark">
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <q-separator spaced />
    <div class="column justify-center items-end bg-dark">
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <q-separator spaced />
    <div class="column custome justify-center items-end bg-dark">
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <q-separator spaced />
    <div class="column custome justify-center items-center bg-dark">
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <q-separator spaced />
    <div class="column custome justify-between items-center bg-dark">
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <q-separator spaced />
    <div class="column custome justify-between items-center bg-dark">
      <div class="square-box bg-secondary"></div>
      <div class="square-box self-end bg-primary"></div>
      <div class="square-box bg-accent"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Flex",
});
</script>
<style scoped>
.col,
.col-4 .col-6 .col-12 {
  height: 50px;
}

.square-box {
  height: 50px;
  width: 50px;
}
.custome {
  height: 300px;
}
</style>
