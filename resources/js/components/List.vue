<template>
    <div class="bg-gray-300 rounded-sm p-2 mr-2 list">
        <div class="flex justify-between">
            <div class="text-gray-800 pl-2 pb-2 font-bold">{{list.title}}</div>                        
        </div>
        <Card v-for="card in list.cards" :key="card.id" :card="card"></Card>
        <CardEditor v-if="editing" @closed="editing=false" :list="list"></CardEditor>
        <CardAddButton v-else @click="editing=true"></CardAddButton>        

    </div>      
</template>

<script>import CardEditor from 'c:/wamp64/www/laravello/resources/js/components/CardEditor.vue'

    import CardAddButton from './CardAddButton.vue'
    import Card from './Card.vue'
    
    export default {
        prop: {
            list:Object
        },
        components:{
            CardEditor,
            CardAddButton,
            Card,
        },
        props:{
            list:Object
        },
        data(){
            return{
                editing:false
            }
        }
    }
</script>
<style scoped>
    .list{
        width:250px;
        min-width: 250px;
    }
</style>