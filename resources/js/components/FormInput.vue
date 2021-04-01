<template>
    <div class="w-full mb-4">
        <input
            :type="type"
            class="rounded-sm px-4 py-2 outline-none focus:outline-none border-gray-400 bg-gray-100 border-solid border-2 w-full text-sm"
            :placeholder="placeholder"
        />
    </div>
</template>
<script>
export default {
    props: [
        "type",
        "placeholder"
    ]
};
</script>
<style scoped></style>
