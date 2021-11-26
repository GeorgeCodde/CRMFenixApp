<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1 text-weight-thin">Escritorio</span>

    <q-btn
      color="primary"
      icon="las la-check-double"
      label="Abrir Menu"
      @click="toggleSideMenuF"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import useUi from "../../composables/useUi.js";

export default defineComponent({
  name: "Escritorio",
  setup() {
    const { toggleSideMenuF } = useUi();
    return {
      toggleSideMenuF,
    };
  },
});
</script>
