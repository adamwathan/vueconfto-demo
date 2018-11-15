<template>
  <with-dimensions>
    <div slot-scope="{ width }" class="profile-card" :class="{ 'profile-card--horizontal': width > 400 }">
      <img class="profile-card-image" src="/img/toby.jpg" alt="">
      <div class="profile-card-meta">
        <div class="mb-4">
          <p class="text-xl leading-tight">
            {{ width > 500 ? 'Jim Halpert' : 'Toby Flenderson' }}
          </p>
          <p class="text-sm leading-tight text-grey-dark">Human Resources at Dunder Mifflin</p>
        </div>
        <div>
          <button class="btn btn-sm btn-pill btn-indigo-outline">Message</button>
        </div>
      </div>
    </div>
  </with-dimensions>
</template>

<script>
  import WithDimensions from './WithDimensions.vue'

  export default {
    components: {
      WithDimensions
    },
  }
</script>

<style>
.profile-card {
  @apply bg-white shadow-lg rounded-lg overflow-hidden px-6 py-4;
}
.profile-card-image {
  @apply block rounded-full mx-auto mb-4;
  height: 5rem;
}
.profile-card-meta {
  @apply text-center;
}
.profile-card--horizontal {
  @apply flex items-center;
}
.profile-card--horizontal .profile-card-image {
  @apply ml-0 mr-4 mb-0 h-24;
}
.profile-card--horizontal .profile-card-meta {
  @apply text-left;
}

.btn {
  @apply leading-tight inline-flex items-center font-bold px-4 py-2 rounded;
}
.btn-sm {
  @apply text-sm px-4 py-1;
}
.btn-indigo-outline {
  @apply border border-indigo text-indigo;
}
.btn-indigo-outline:hover {
  @apply bg-indigo text-white;
}
.btn-pill {
  @apply leading-normal rounded-full;
}
</style>
