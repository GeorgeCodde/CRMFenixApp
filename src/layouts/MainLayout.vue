<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="toggleSideMenuF"
        />

        <q-toolbar-title> Facturación </q-toolbar-title>

        <div>
          <q-toggle
            @update:model-value="changeDarkMode"
            v-model="modo"
            color="orange-4"
            icon="dark_mode"
            label="Obscuro"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="sideMenuOpenF" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
src/components/EssentialLinkold.vue

<script>
import EssentialLink from "components/EssentialLink.vue";
import { linksList } from "../router/link-list";
import { defineComponent, ref } from "vue";
import useUi from "../composables/useUi";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const { sideMenuOpenF, toggleSideMenuF, changeDarkMode, modo } = useUi();

    //const modo = ref(false);

    // get status
    //console.log($q.dark.isActive); // true, false

    // get configured status
    // console.log($q.dark.mode); // "auto", true, false

    // set status
    //$q.dark.set(true); // o

    // toggle
    //$q.dark.toggle();

    return {
      modo,
      sideMenuOpenF,
      toggleSideMenuF,
      essentialLinks: linksList,
      changeDarkMode,
    };
  },
});
</script>
