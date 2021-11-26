<template>
  <q-page class="q-pa-md items-start">
    <q-card>
      <div row>
        <q-card-section class="q-pa-none">
          <div class="row q-ma-xs justify-center">
            <span class="text-h5"> Clientes</span>
          </div>
        </q-card-section>
        <!-- Datos cliente -->
        <q-card-section class="q-px-none">
          <div class="row q-ma-md justify-between items-center">
            <div class="col-12 col-md-4 col-sm-6 q-pa-xs">
              <q-input
                :dense="$q.screen.lt.md"
                v-model="text"
                hint="Asignación automatica del ID"
                readonly
                label="ID:"
                label-color="orange"
              >
                <template v-slot:prepend>
                  <q-icon color="orange" name="las la-folder-plus" />
                </template>
              </q-input>
            </div>
            <div class="col-12 col-md-4 col-sm-6 q-pa-xs">
              <q-input
                :dense="$q.screen.lt.md"
                v-model="text"
                hint="Asignación automatica de folio"
                readonly
                label="FOLIO"
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
                hint="Nombre del cliente"
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
                hint="Registro federal del Contribuyente"
                label="RFC:"
                label-color="orange"
              >
                <template v-slot:prepend>
                  <q-icon color="orange" name="las la-credit-card" />
                </template>
              </q-input>
            </div>
          </div>
        </q-card-section>
        <q-separator inset />
        <!-- Datos DIreccion -->
        <q-card-section class="q-px-none">
          <div class="row q-ma-xs justify-center">
            <span class="text-h6">Dirección</span>
          </div>
          <div class="row q-ma-md justify-between items-center">
            <div class="col-12 col-md-4 col-sm-6 q-pa-xs">
              <q-input
                :dense="$q.screen.lt.md"
                v-model="text"
                hint="Calle"
                label="Calle:"
                label-color="orange"
              >
                <template v-slot:prepend>
                  <q-icon color="orange" name="las la-road" />
                </template>
              </q-input>
            </div>
            <div class="col-12 col-md-4 col-sm-6 q-pa-xs">
              <q-input
                :dense="$q.screen.lt.md"
                v-model="text"
                hint="Colonia"
                label="Colonia"
                label-color="orange"
              >
                <template v-slot:prepend>
                  <q-icon color="orange" name="las la-city" />
                </template>
              </q-input>
            </div>
          </div>
          <div class="row q-ma-md justify-between items-center">
            <div class="col-12 col-md-4 col-sm-6 q-pa-xs">
              <q-input
                :dense="$q.screen.lt.md"
                v-model="text"
                hint="Codigo Postal"
                label="C.P.:"
                label-color="orange"
              >
                <template v-slot:prepend>
                  <q-icon color="orange" name="las la-map" />
                </template>
              </q-input>
            </div>
            <div class="col-12 col-md-4 col-sm-6 q-pa-xs">
              <q-input
                :dense="$q.screen.lt.md"
                v-model="text"
                hint="Municipio"
                label="Municipio:"
                label-color="orange"
              >
                <template v-slot:prepend>
                  <q-icon color="orange" name="las la-map-pin" />
                </template>
              </q-input>
            </div>
          </div>
          <div class="row q-ma-md justify-between items-center">
            <div class="col-12 col-md-4 col-sm-6 q-pa-xs">
              <q-input
                :dense="$q.screen.lt.md"
                v-model="text"
                hint="Estado"
                label="Estado"
                label-color="orange"
              >
                <template v-slot:prepend>
                  <q-icon color="orange" name="las la-map-marked-alt" />
                </template>
              </q-input>
            </div>
            <!-- <div class="col-12 col-md-4 col-sm-6 q-pa-xs">
              <q-input
                :dense="$q.screen.lt.md"
                v-model="text"
                hint="Asignación automatica de folio"
                readonly
                label="FOLIO"
                stack-label
              >
                <template v-slot:prepend>
                  <q-icon name="las la-folder-plus" />
                </template>
              </q-input>
            </div> -->
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
                unelevated
                :dense="$q.screen.lt.md"
                class="q-mx-xs"
                icon="restart_alt"
                flat
                label="RESET"
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
              title="Movimientos"
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
  name: "Clientes",

  setup() {
    const text = ref("");
    return {
      resetInputs: () => {
        text.value = "";
      },
      columns,
      rows: ref(rows),
      text,
    };
  },
});
</script>
<style lang="sass">
.my-sticky-column-table
  /* specifying max-width so the example can
    highlight the sticky column on any browser window */
  max-width: 600px

  thead tr:first-child th:first-child
    /* bg color is important for th; just specify one */
    background-color: #fff

  td:first-child
    background-color: #ffffff

  th:first-child,
  td:first-child
    position: sticky
    left: 0
    z-index: 1
</style>
