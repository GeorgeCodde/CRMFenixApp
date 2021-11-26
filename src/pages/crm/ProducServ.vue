<template>
  <q-page class="q-pa-md items-start">
    <q-card>
      <div row>
        <q-card-section class="q-pa-none">
          <div class="row q-ma-xs justify-center">
            <span class="text-h5"> Producos y servicios</span>
          </div>
        </q-card-section>
        <!-- Datos Productos y servicios -->
        <q-card-section class="q-px-none">
          <div class="row q-ma-md justify-between items-center">
            <div class="col-12 col-md-4 col-sm-6 q-pa-xs">
              <q-input
                :dense="$q.screen.lt.md"
                v-model="textId"
                hint="Asignación automatica del ID"
                label="ID:"
                label-color="orange"
              >
                <template v-slot:prepend>
                  <q-icon color="orange" name="las la-folder-plus" />
                </template>
              </q-input>
            </div>
          </div>
          <div class="row q-ma-md justify-between items-center">
            <div class="col-12 col-md-4 col-sm-6 q-pa-xs">
              <q-input
                :dense="$q.screen.lt.md"
                v-model="text"
                hint="Descipción del prosucto o servicio"
                label="Nombre:"
                label-color="orange"
              >
                <template v-slot:prepend>
                  <q-icon color="orange" name="las la-id-card" />
                </template>
              </q-input>
            </div>
            <div class="col-12 col-md-4 col-sm-6 q-pa-xs">
              <q-input
                :dense="$q.screen.lt.md"
                v-model="text"
                hint="Clave SAT del producto"
                label="Clave SAT:"
                label-color="orange"
              >
                <template v-slot:prepend>
                  <q-icon color="orange" name="las la-credit-card" />
                </template>
              </q-input>
            </div>
          </div>
          <div class="row q-ma-md justify-between items-center">
            <div class="col-12 col-md-4 col-sm-6 q-pa-xs">
              <q-select
                :dense="$q.screen.lt.md"
                color="grey-3"
                outlined
                label-color="orange"
                v-model="model"
                :options="options"
                label="Unidad"
              >
                <template v-slot:append>
                  <q-icon name="las la-notes-medical" color="orange" />
                </template>
              </q-select>
            </div>
          </div>
        </q-card-section>
        <q-separator inset />

        <!-- Botones -->
        <q-card-section class="q-px-none q-pa-md">
          <div class="row justify-start">
            <div class="col-lg-6 col-md-12 col-12">
              <q-btn
                unelevated
                :dense="$q.screen.lt.md"
                class="q-mx-xs"
                icon="las la-save"
                color="primary"
                label="Save"
              />
              <q-btn
                unelevated
                :dense="$q.screen.lt.md"
                class="q-mx-xs"
                icon="las la-file-pdf"
                color="secondary"
                label="P D F"
              />
              <q-btn
                flat
                unelevated
                :dense="$q.screen.lt.md"
                class="q-mx-xs"
                icon="restart_alt"
                label="Reset"
                @click="resetInputs"
              />
            </div>
          </div>
        </q-card-section>

        <!-- Tabla -->
        <q-card-section class="q-px-none">
          <div class="q-px-md">
            <q-table
              class=""
              :dense="$q.screen.lt.md"
              title="Productos / Servicios"
              :rows="rows"
              :columns="columns"
              row-key="name"
              binary-state-sort
            >
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="name" :props="props">
                    {{ props.row.name }}
                    <q-popup-edit v-model="props.row.name">
                      <q-input
                        v-model="props.row.name"
                        dense
                        autofocus
                        counter
                      />
                    </q-popup-edit>
                  </q-td>
                  <q-td key="calories" :props="props">
                    {{ props.row.calories }}
                    <q-popup-edit
                      v-model="props.row.calories"
                      title="Update calories"
                      buttons
                    >
                      <q-input
                        type="number"
                        v-model="props.row.calories"
                        dense
                        autofocus
                      />
                    </q-popup-edit>
                  </q-td>
                  <q-td key="fat" :props="props">
                    <div class="text-pre-wrap">{{ props.row.fat }}</div>
                    <q-popup-edit v-model="props.row.fat">
                      <q-input
                        type="textarea"
                        v-model="props.row.fat"
                        dense
                        autofocus
                      />
                    </q-popup-edit>
                  </q-td>
                  <q-td key="carbs" :props="props">
                    {{ props.row.carbs }}
                    <q-popup-edit
                      v-model="props.row.carbs"
                      title="Update carbs"
                      buttons
                      persistent
                    >
                      <q-input
                        type="number"
                        v-model="props.row.carbs"
                        dense
                        autofocus
                        hint="Use buttons to close"
                      />
                    </q-popup-edit>
                  </q-td>
                  <q-td key="protein" :props="props">{{
                    props.row.protein
                  }}</q-td>
                  <q-td key="sodium" :props="props">{{
                    props.row.sodium
                  }}</q-td>
                  <q-td key="calcium" :props="props">{{
                    props.row.calcium
                  }}</q-td>
                  <q-td key="iron" :props="props">{{ props.row.iron }}</q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </q-card-section>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { columns, rows } from "./datosEj";

export default defineComponent({
  name: "productosServicios",

  setup() {
    const text = ref("");
    const model = ref(null);
    return {
      resetInputs: () => {
        text.value = "";
        model.value = null;
      },
      options: ["Piezas", "Cajas", "Servicios", "kits"],
      columns,
      rows: ref(rows),
      model,
      text,
      textId: ref("123"),
    };
  },
});
</script>
<style scoped></style>
