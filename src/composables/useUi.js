import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
const useUi = () => {
  const store = useStore();
  const modo = ref(false);

  const $q = useQuasar();
  return {
    sideMenuOpenF: computed({
      get() {
        return store.getters["ui/sideMenuOpen"];
      },
      set(val) {
        console.log(val);
        store.commit("ui/toggleSideMenu");
      },
    }),
    toggleSideMenuF: () => {
      store.commit("ui/toggleSideMenu");
    },
    changeDarkMode: () => {
      modo.value = !modo.value;
      $q.dark.toggle();
    },
    modo,
  };
};

export default useUi;
