<script setup>
import PageHeader from "../components/PageHeader.vue"
import FoodItemsTable from "../components/FoodItemsTable.vue"

const page = {
  title: "The Community Pantry",
  description: "Explore a diverse range of food items shared by the community. Discover an assortment of ingredients and culinary inspirations contributed by members. Engage with a collection of flavors, cuisines, and nutritional options that reflect the rich diversity of our community's food choices."
}

// use static data to develop the table component
const items = [
    {
        "foodItemId": 1,
        "name": "Broccoli",
        "calories": 55,
        "carbohydrates": 11.2,
        "proteins": 3.7,
        "fats": 0.6,
        "vitamins": "Vitamin C, Vitamin K",
        "minerals": "Folate, Potassium"
    },
    {
        "foodItemId": 2,
        "name": "Spinach",
        "calories": 23,
        "carbohydrates": 3.6,
        "proteins": 2.9,
        "fats": 0.4,
        "vitamins": "Vitamin A, Vitamin C",
        "minerals": "Iron, Folate"
    },
    {
        "foodItemId": 3,
        "name": "Eggs",
        "calories": 68,
        "carbohydrates": 0.6,
        "proteins": 5.5,
        "fats": 4.8,
        "vitamins": "Vitamin D, Vitamin B12",
        "minerals": "Choline, Selenium"
    },
    {
        "foodItemId": 4,
        "name": "Brown Rice",
        "calories": 216,
        "carbohydrates": 44.8,
        "proteins": 5.0,
        "fats": 1.6,
        "vitamins": "Thiamin, Niacin",
        "minerals": "Magnesium, Phosphorus"
    },
    {
        "foodItemId": 5,
        "name": "Banana",
        "calories": 105,
        "carbohydrates": 27.0,
        "proteins": 1.3,
        "fats": 0.4,
        "vitamins": "Vitamin C, Vitamin B6",
        "minerals": "Potassium, Manganese"
    },
    {
        "foodItemId": 6,
        "name": "Greek Yogurt",
        "calories": 100,
        "carbohydrates": 6.0,
        "proteins": 10.0,
        "fats": 3.5,
        "vitamins": "Probiotics, Calcium",
        "minerals": "Vitamin B12, Phosphorus"
    },
    {
        "foodItemId": 7,
        "name": "Almonds",
        "calories": 7,
        "carbohydrates": 2.3,
        "proteins": 2.4,
        "fats": 6.1,
        "vitamins": "Vitamin E, Riboflavin",
        "minerals": "Magnesium, Copper"
    },
    {
        "foodItemId": 8,
        "name": "Tofu",
        "calories": 144,
        "carbohydrates": 1.5,
        "proteins": 15.0,
        "fats": 8.0,
        "vitamins": "Iron, Calcium",
        "minerals": "Manganese, Selenium"
    },
    {
        "foodItemId": 9,
        "name": "Carrots",
        "calories": 41,
        "carbohydrates": 10.0,
        "proteins": 1.0,
        "fats": 0.2,
        "vitamins": "Vitamin A, Vitamin K",
        "minerals": "Potassium, Fiber"
    },
    {
        "foodItemId": 10,
        "name": "Oats",
        "calories": 71,
        "carbohydrates": 12.0,
        "proteins": 2.5,
        "fats": 1.4,
        "vitamins": "Fiber, Manganese",
        "minerals": "Phosphorus, Magnesium"
    },
    {
        "foodItemId": 11,
        "name": "Oranges",
        "calories": 43,
        "carbohydrates": 8.2,
        "proteins": 1.0,
        "fats": 0.2,
        "vitamins": "Vitamin C, Folate",
        "minerals": "Potassium, Fiber"
    },
    {
        "foodItemId": 12,
        "name": "Lentils",
        "calories": 230,
        "carbohydrates": 40.0,
        "proteins": 18.0,
        "fats": 1.0,
        "vitamins": "Folate, Iron",
        "minerals": "Phosphorus, Magnesium"
    },
    {
        "foodItemId": 13,
        "name": "Milk",
        "calories": 83,
        "carbohydrates": 12.0,
        "proteins": 8.0,
        "fats": 1.0,
        "vitamins": "Calcium, Vitamin D",
        "minerals": "Protein, Potassium"
    },
    {
        "foodItemId": 14,
        "name": "Quinoa",
        "calories": 120,
        "carbohydrates": 21.0,
        "proteins": 4.1,
        "fats": 1.9,
        "vitamins": "Protein, Fiber",
        "minerals": "Manganese, Magnesium"
    },
    {
        "foodItemId": 15,
        "name": "Apples",
        "calories": 52,
        "carbohydrates": 14.0,
        "proteins": 0.3,
        "fats": 0.2,
        "vitamins": "Vitamin C, Fiber",
        "minerals": "Potassium, Vitamin A"
    },
    {
        "foodItemId": 16,
        "name": "Tomatoes",
        "calories": 18,
        "carbohydrates": 3.9,
        "proteins": 0.9,
        "fats": 0.2,
        "vitamins": "Vitamin C, Vitamin K",
        "minerals": "Potassium, Folate"
    },
    {
        "foodItemId": 17,
        "name": "Avocado",
        "calories": 160,
        "carbohydrates": 8.5,
        "proteins": 2.0,
        "fats": 14.7,
        "vitamins": "Vitamin K, Folate",
        "minerals": "Potassium, Monounsaturated Fats"
    },
    {
        "foodItemId": 18,
        "name": "Green Peas",
        "calories": 81,
        "carbohydrates": 14.5,
        "proteins": 4.5,
        "fats": 0.5,
        "vitamins": "Vitamin C, Vitamin K",
        "minerals": "Folate, Fiber"
    },
    {
        "foodItemId": 19,
        "name": "Salmon",
        "calories": 206,
        "carbohydrates": 0.0,
        "proteins": 22.0,
        "fats": 13.0,
        "vitamins": "Vitamin D, Vitamin B12",
        "minerals": "Selenium, Omega-3 Fatty Acids"
    },
    {
        "foodItemId": 20,
        "name": "Kale",
        "calories": 33,
        "carbohydrates": 6.7,
        "proteins": 2.9,
        "fats": 0.6,
        "vitamins": "Vitamin K, Vitamin A",
        "minerals": "Calcium, Iron"
    },
    {
        "foodItemId": 21,
        "name": "Chicken Breast",
        "calories": 165,
        "carbohydrates": 0.0,
        "proteins": 31.0,
        "fats": 3.6,
        "vitamins": "Vitamin B6, Vitamin B12",
        "minerals": "Iron, Zinc"
    },
    {
        "foodItemId": 22,
        "name": "Broccoli",
        "calories": 55,
        "carbohydrates": 11.2,
        "proteins": 3.7,
        "fats": 0.6,
        "vitamins": "Vitamin C, Vitamin K",
        "minerals": "Folate, Potassium"
    }
]
</script>

<template>
    <PageHeader :page = page />
    <FoodItemsTable :items = items />
</template>