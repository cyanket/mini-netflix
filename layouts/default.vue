<template>
  <div>
    <!-- Sticky header -->
    <header
      class="sticky top-0 z-50 flex items-center gap-3 p-4 bg-gray-800 text-white text-xl font-bold shadow-md border-b border-gray-700"
    >
      <!-- NuxtLink to navigate to homepage -->
      <NuxtLink
        to="/"
        class="flex items-center gap-3"
        aria-label="Homepage"
      >
        <!-- Netflix logo icon -->
        <img
          src="/netflix-logo.svg"
          alt="Netflix Logo"
          class="w-8 h-8"
          aria-hidden="true"
        />
        <span class="text-lg sm:text-xl">Mini Netflix</span>
      </NuxtLink>
    </header>

    <!-- Main content area to render the page-specific content -->
    <main class="pt-4">
      <slot />
    </main>
  </div>
</template>
