<template>
  <q-page class="q-pa-md items-start">
    <q-card>
      <h1>dasdsad</h1>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { columns, rows } from "./datosEj";
export default defineComponent({
  name: "documentos",
  setup() {
    return {
      columns,
      rows: ref(rows),
      model: ref(null),
      text: "FB-456",

      options: [
        "Factura",
        "Devolución",
        "Nota de credito",
        "Remision",
        "Recibo de pago",
      ],
    };
  },
});
</script>
<style scoped></style>
