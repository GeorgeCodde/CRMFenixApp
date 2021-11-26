export default {
  name: "crm",
  component: () => import("layouts/MainLayout.vue"),
  children: [
    { path: "", component: () => import("pages/Index.vue") },
    {
      path: "escritorio",
      name: "escritorio",
      component: () => import("pages/crm/Escritorio.vue"),
    },
    {
      path: "compras",
      name: "compras",
      component: () => import("pages/crm/ProducServ.vue"),
    },
    {
      path: "ventas",
      name: "ventas",
      component: () => import("pages/crm/Ventas.vue"),
    },
    {
      path: "catalogos",
      name: "catalogos",
      component: () => import("pages/Dialogs.vue"),
    },
    {
      path: "configuracion",
      name: "configuracion",
      component: () => import("pages/Forms.vue"),
    },
  ],
};
