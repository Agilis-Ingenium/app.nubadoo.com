<script setup>
import { randomEncourgement, capitaliseAndFormat, convertImageSlug, goalStatement } from "./helpers/fitness-goal-helpers"
import { prettyDate } from "./helpers.js"

const encourgement = randomEncourgement()

defineProps({
    item: {
        type: Array,
        required: true
    }
})

</script>

<template>
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
        </div>
        <div class="flex flex-col items-center pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="convertImageSlug(item.goalType)" alt="Goal type image"/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ capitaliseAndFormat(item.goalType) }}</h5>
            <span v-if="!item.achieved" class="text-sm text-gray-500 dark:text-gray-400 content-center px-8 text-center"><br />{{ goalStatement(item) }}<br />by {{ prettyDate(item.targetDate) }}</span>          
            <span v-if="item.achieved" class="text-4xl font-extrabold dark:text-white content-center px-8 text-center"><br />🏆&#x1f389;🥇<br /></span>
            <span v-if="item.achieved" class="text-2xl dark:text-white content-center px-8 text-center"><br />Well Done!</span>
            <div class="flex mt-4 md:mt-6" v-if="!item.achieved">
                <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">&nbsp;&nbsp;Edit&nbsp;&nbsp;</a>
                <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ms-3">Delete</a>
            </div>
            <div class="flex mt-4 md:mt-5"></div>   
                <figure v-if="!item.achieved">
                    <blockquote class="text-l italic font-semibold text-gray-900 dark:text-white">
                        <p>{{ encourgement }}</p>
                    </blockquote>
                </figure>
            </div>
        </div>
</template>