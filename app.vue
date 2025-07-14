<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- NuxtLayout to render the layout defined for the current page -->
    <NuxtLayout>
      <!-- NuxtPage renders the current route's page component -->
      <NuxtPage />
    </NuxtLayout>
    <!-- Announces route changes for screen readers (WCAG improvement) -->
    <NuxtRouteAnnouncer />
  </div>
</template>
