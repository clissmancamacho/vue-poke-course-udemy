<template>
    <div v-if="loading">
        <h1>Cargando...</h1>
    </div>
    <div class="alert alert-danger" v-if="error">No Existe Pokemon</div>
    <div v-if="pokemon">
        <img :src="pokemon.sprites?.front_default" :alt="pokemon.name">
        <h1>Poke name: {{ pokemon.name }}</h1>
        <button class="btn btn-outline-primary" @click="back">Volver</button>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData';

const route = useRoute();
const router = useRouter();
const { data: pokemon, error, getData, loading } = useGetData()

const back = () => {
    router.push('/pokemons');
};

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

</script>

<style lang="scss" scoped>

</style>