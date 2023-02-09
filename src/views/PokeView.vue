<template>
    <div v-if="loading">
        <h1>Cargando...</h1>
    </div>
    <div class="alert alert-danger" v-if="error">No Existe Pokemon</div>
    <div v-if="pokemon">
        <img :src="pokemon.sprites?.front_default" :alt="pokemon.name">
        <h1>Poke name: {{ pokemon.name }}</h1>
        <button class="btn btn-outline-primary me-2" @click="back">Volver</button>
        <button v-if="!existFavorite(pokemon)" class="btn btn-outline-success" @click="addFavorite(pokemon)">Agregar
            Favorito</button>
        <button v-else class="btn btn-outline-danger" @click="deleteFavorite(pokemon)">Eliminar de Favoritos</button>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData';
import { useFavoritesStore } from '@/store/favorites';

const route = useRoute();
const router = useRouter();
const useFavorites = useFavoritesStore();
const { addFavorite, deleteFavorite, existFavorite } = useFavorites;
const { data: pokemon, error, getData, loading } = useGetData()

const back = () => {
    router.push('/pokemons');
};

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

</script>

<style lang="scss" scoped>

</style>