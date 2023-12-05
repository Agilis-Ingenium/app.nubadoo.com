<script setup>
import { randomEncourgement, capitaliseAndFormat, convertImageSlug, goalStatement } from "./helpers/fitness-goal-helpers"
import { prettyDate } from "./helpers.js"
import WidgetDeleteButton from "./WidgetDeleteButton.vue";
import axios from 'axios'

defineProps({
    items: {
        type: Object,
        required: true
    }
})

function Delete(id, index, items) {

   if(confirm("Are you sure that you really want to delete this fitness goal?")){

            axios.delete('/v1/fitness-goals/'+id)
            .then(resp => {
                items.splice(index, 1);
                //this.items = items
            })
            .catch(error => {
                console.log(error);
                this.error = error;
            })
   }
}
</script>
<template>
    <div v-if="this.error">
      <AlertError :errorMessage = this.error />
    </div>
    <div v-else-if="this.items.length == 0">
      <AlertMessage alertMessage = 'No activities found' />
    </div>
    <div v-else class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
        <div  v-for="(item, index) in items" :key="item.goalId" :item="item" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4"></div>
        <div class="flex flex-col items-center pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="convertImageSlug(item.goalType)" alt="Goal type image"/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ capitaliseAndFormat(item.goalType) }}</h5>
            <span v-if="!item.achieved" class="text-sm text-gray-500 dark:text-gray-400 content-center px-8 text-center"><br />{{ goalStatement(item) }}<br />by {{ prettyDate(item.targetDate) }}</span>          
            <span v-if="item.achieved" class="text-4xl font-extrabold dark:text-white content-center px-8 text-center"><br />🏆&#x1f389;🥇<br /></span>
            <span v-if="item.achieved" class="text-2xl dark:text-white content-center px-8 text-center"><br />Well Done!</span>
            <div class="flex mt-4 md:mt-6" v-if="!item.achieved">
                <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">&nbsp;&nbsp;Edit&nbsp;&nbsp;</a>
                <a class="ms-3" href="javascript:;" v-on:click="Delete(item.goalId, index, this.items)">
                    <WidgetDeleteButton />
                </a>
            </div>
            <div class="flex mt-4 md:mt-5"></div>   
                <figure v-if="!item.achieved">
                    <blockquote class="text-l italic font-semibold text-gray-900 dark:text-white">
                        <p>{{ randomEncourgement() }}</p>
                    </blockquote>
                </figure>
            </div>
        </div>
    </div>
</template>