<template>
  <q-page class="q-pa-md">
    <span class="text-h3"> Forms</span>
    <q-separator spaced />
    <div class="row justify-center">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-md"
      >
        <q-input
          filled
          v-model="userForm.email"
          type="email"
          label="Correo electronico"
          lazy-rules
          no-error-icon
          :rules="[
            (val) => (val && val.length > 0) || 'Este campo es obligatorio',
            isValidEmail, //(val) => isValidEmail(val),
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password1"
          label="Contraseña"
          lazy-rules
          no-error-icon
          :rules="[
            (val) => (val && val.length > 0) || 'Este campo es obligatorio',
          ]"
        />
        <q-input
          filled
          type="password"
          v-model="userForm.password2"
          label="Confirmar Contraseña"
          lazy-rules
          no-error-icon
          :rules="[
            (val) => (val && val.length > 0) || 'Este campo es obligatorio',
            isSamePassword,
          ]"
        />

        <q-toggle
          v-model="userForm.consditions"
          label="Acepto las condiciones de uso"
          :style="
            userForm.errorInConditions && !userForm.consditions
              ? 'color: red'
              : ''
          "
        />
        <q-checkbox
          v-model="userForm.consditions"
          label="Acepto las condiciones de uso"
          :style="
            userForm.errorInConditions && !userForm.consditions
              ? 'color: red'
              : ''
          "
        />

        <div class="row justify-end">
          <q-btn
            unelevated
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
          <q-btn unelevated label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Forms",
  setup() {
    const $q = useQuasar();
    const userForm = ref({
      email: "",
      password1: "",
      password2: "",
      consditions: false,
      errorInConditions: false,
    });
    const showNotif = (message) => {
      $q.notify({
        message,
        caption: "5 minutes ago",
        color: "primary",
      });
    };
    return {
      userForm,

      onSubmit: () => {
        userForm.value.errorInConditions = false;
        if (!userForm.value.consditions) {
          console.log("Debe aceptar las codiciones");
          showNotif("Debe aceptar las codiciones");
          userForm.value.errorInConditions = true;
          return;
        }
        console.log(userForm.value);
      },
      onReset: () => {
        console.log("reset");
        userForm.value = {
          email: "",
          password1: "",
          password2: "",
          consditions: false,
          errorInConditions: false,
        };
      },
      isValidEmail: (val) => {
        const emailPattern =
          /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || "El correo no parece ser válido";
      },
      isSamePassword: (val) => {
        return (
          val === userForm.value.password1 || "La confirmación no coincide"
        );
      },
    };
  },
});
</script>
