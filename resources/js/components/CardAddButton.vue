<template>
    <div
        @click="$emit('click')"
        class="card_add_new hover:bg-gray-400 hover:text-gray-800"
    >
        Add new Card
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.card_add_new {
    @apply rounded-sm p-2 text-gray-600 cursor-pointer text-sm;
}
</style>
