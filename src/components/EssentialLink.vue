<template>
  <q-item clickable tag="a" @click="navigateTo">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-separator v-if="title == 'Catalogos'" class="q-my-sm" />
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    //console.log(props);
    const router = useRouter();
    return {
      navigateTo: () => {
        if (props.link.startsWith("http")) {
          window.open(props.link, "_blank");
        } else {
          router.push({ name: props.link });
        }
      },
    };
  },
});
</script>
