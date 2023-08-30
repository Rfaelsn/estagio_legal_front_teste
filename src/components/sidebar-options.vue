<template>
    <div class="q-pa-md" style="max-width: 250px"
    :class="dataOpenSideBar == true ? 'side-bar-visible' : 'side-bar-close'"
    >
      <q-list bordered class="rounded-borders">
        <q-expansion-item
          expand-separator
          icon="perm_identity"
          label="Account settings"
          caption="John Doe"
        >
          <q-card>
            <q-card-section class="custom-card-section">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
  
        <q-expansion-item
          expand-separator
          icon="signal_wifi_off"
          label="Wifi settings"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
  
        <q-expansion-item
          expand-separator
          icon="drafts"
          label="Drafts"
          header-class="text-purple"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
  
        <q-expansion-item icon="assessment" label="Disabled" disable>
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
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
.custom-card-section {
  height: 500px; /* Ajuste a altura máxima conforme necessário */
  overflow: auto; /* Adiciona uma barra de rolagem se o conteúdo exceder a altura máxima */
}

.side-bar-close{
    width: 50px !important;
}
</style>