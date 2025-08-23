<template>
  <footer class="bg-gray-900 text-gray-300 py-8 mt-12">
    <div class="container mx-auto px-4">
      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Branding -->
        <div>
          <h2 class="text-xl font-bold text-white">FakeNews Portal 📰</h2>
          <p class="mt-2 text-sm text-gray-400">
            El lugar donde nada de lo que lees es real... pero al menos es entretenido.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="text-white font-semibold mb-2">Secciones</h3>
          <ul class="space-y-1 text-sm">
            <li><a href="#" class="hover:text-white">Inicio</a></li>
            <li><a href="#" class="hover:text-white">Política</a></li>
            <li><a href="#" class="hover:text-white">Deportes</a></li>
            <li><a href="#" class="hover:text-white">Entretenimiento</a></li>
            <li><a href="#" class="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h3 class="text-white font-semibold mb-2">Síguenos</h3>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-white">
              <i class="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" class="hover:text-white">
              <i class="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" class="hover:text-white">
              <i class="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {{ new Date().getFullYear() }} FakeNews Portal. Todos los derechos reservados.
        <br />
        <span class="italic text-gray-400">⚠️ Todo lo que lees aquí es completamente falso.</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// nada extra por ahora
</script>
