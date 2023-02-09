<template>
    <div>
        <h1>Pokemons</h1>
        <div v-if="loading">
            <h1>Cargando...</h1>
        </div>
        <div class="alert alert-danger" v-if="error">Error: {{ error }}</div>
        <div v-if="data">
            <ul class="list-group">
                <li class="list-group-item" v-for="pokemon in data.results" :key="pokemon.name">
                    <RouterLink :to="`/pokemons/${pokemon.name}`"> {{ pokemon.name }} </RouterLink>
                </li>
            </ul>
            <div class="mt-2">
                <button class="btn btn-success me-2" @click="getData(data.previous)"
                    :disabled="!data.previous">Previous</button>
                <button class="btn btn-primary" @click="getData(data.next)" :disabled="!data.next">Next</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useGetData } from '@/composables/getData';

const { data, error, getData, loading } = useGetData()
getData('https://pokeapi.co/api/v2/pokemon')
</script>

<style lang="scss" scoped>

</style>