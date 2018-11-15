<template>
  <div class="rounded p-6 shadow bg-white max-w-sm mx-auto">
    <h1 class="text-2xl font-bold mb-6">Your Contacts</h1>
    <fetch-json url="/contacts.json">
      <template slot-scope="{ response, loading }">
        <div v-if="loading">Loading...</div>
        <div v-else class="-mb-6">
          <div v-for="contact in response" :key="contact.id" class="flex items-center mb-6">
            <img :src="contact.picture.medium" class="h-12 w-12 rounded-full block mr-2" alt="">
            <div>
              <div class="font-bold">
                <slot :contact="contact"></slot>
              </div>
              <div class="text-grey-dark">
                {{ contact.email }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </fetch-json>
  </div>
</template>

<script>
  import FetchJson from './FetchJson.vue'

  export default {
    components: { FetchJson },
    props: [],
  }
</script>
