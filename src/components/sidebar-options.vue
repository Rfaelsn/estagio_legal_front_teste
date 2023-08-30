<template>
    <div class="q-pa-md" style="max-width: 250px"
    :class="dataOpenSideBar == true ? 'side-bar-visible' : 'side-bar-close'"
    >
      <q-list>
        <q-expansion-item
          expand-separator
          icon="perm_identity"
          label="Inicio de Estagio"
          class="text-white flex items-center justify-center"
        >
          <q-card class="rounded border p-1">
            <q-card-section class="custom-card-section text-green">
                <router-link to="/user" class="px-2 flex space-x-2">
                    <span v-show="dataOpenSideBar">Obrigatório</span>
                </router-link>
                <router-link to="/user" class="px-2 flex space-x-2">
                    <span v-show="dataOpenSideBar">Não obrigatório</span>
                </router-link>
            </q-card-section>
          </q-card>
        </q-expansion-item>
  
        <q-expansion-item
          expand-separator
          icon="signal_wifi_off"
          label="Fim Estagio"
        >
        <q-card class="rounded border p-1">
            <q-card-section class="custom-card-section text-green">
                <router-link to="/user" class="px-2 flex space-x-2">
                    <span v-show="dataOpenSideBar">Emitir Atestado de Estágio</span>
                </router-link>
            </q-card-section>
          </q-card>
        </q-expansion-item>
  
        <q-expansion-item
          expand-separator
          icon="drafts"
          label="Acompanhar Estagio"
        >
        <q-card class="rounded border p-1">
            <q-card-section class="custom-card-section text-green">
                <router-link to="/user" class="px-2 flex space-x-2">
                    <span v-show="dataOpenSideBar">Obrigatório</span>
                </router-link>
                <router-link to="/user" class="px-2 flex space-x-2">
                    <span v-show="dataOpenSideBar">Não obrigatório</span>
                </router-link>
            </q-card-section>
          </q-card>
        </q-expansion-item>
  
        <q-expansion-item icon="assessment" label="Configurações" >
            <q-card class="rounded border p-1">
            <q-card-section class="custom-card-section text-green">
                <router-link to="/user" class="px-2 flex space-x-2">
                    <span v-show="dataOpenSideBar">Obrigatório</span>
                </router-link>
                <router-link to="/user" class="px-2 flex space-x-2">
                    <span v-show="dataOpenSideBar">Não obrigatório</span>
                </router-link>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
</template>

<script>
    export default {
        props: {
            dataOpenSideBar: Boolean,
        },
    }
</script>

<style scoped>
.side-bar-close{
    width: 50px !important;
}
</style>