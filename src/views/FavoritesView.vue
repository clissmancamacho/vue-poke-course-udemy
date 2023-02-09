<template>
    <h1>Favoritos</h1>
    <div v-if="!favorites.length">Sin Favoritos</div>
    <div v-else>
        <ul class="list-group">
            <li class="list-group-item" v-for="pokemon in favorites" :key="pokemon.name">
                <RouterLink :to="`/pokemons/${pokemon.name}`"> {{ pokemon.name }} </RouterLink>
                <div class="button btn btn-sm btn-danger ms-2" @click="deleteFavorite(pokemon)">Eliminar</div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useFavoritesStore } from '../store/favorites';

const useFavorites = useFavoritesStore()
const { deleteFavorite } = useFavorites
const { favorites } = storeToRefs(useFavorites)
</script>

<style lang="scss" scoped>

</style>