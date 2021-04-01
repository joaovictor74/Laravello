<template>   
    <div class="w-full mb-6">
        <button
            type="submit"
            class="rounded-sm px-4 py-2 text-sm bg-green-500 font-bold outline-none focus:outline-none hover:bg-opacity-75 w-full text-white disabled:opacity-25"
        >
            {{text}}
        </button>
    </div>
</template>
<script>
export default {
    props: [
        "text"
    ]
};
</script>
<style scoped></style>
