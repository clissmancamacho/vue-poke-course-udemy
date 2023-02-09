import { defineStore } from "pinia"
import { ref } from "vue"

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  )

  const addFavorite = (poke) => {
    if (!existFavorite(poke)) {
      favorites.value.push(poke)
      localStorage.setItem("favorites", JSON.stringify(favorites.value))
    }
  }
  const deleteFavorite = (poke) => {
    favorites.value = favorites.value.filter((fav) => fav.name !== poke.name)
    localStorage.setItem("favorites", JSON.stringify(favorites.value))
  }

  const existFavorite = (poke) => {
    return favorites.value.some((fav) => fav.name === poke.name)
  }

  return {
    favorites,
    addFavorite,
    deleteFavorite,
    existFavorite,
  }
})
