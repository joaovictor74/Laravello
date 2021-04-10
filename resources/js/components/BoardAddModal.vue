<template>
    <div>
        <Modal
            :width="300"
            :height="250"
            :show="show"
            @closed="$emit('closed')"
        >
            <div class="flex">
                <div class="rounded-sm p-4 text-black w-full mr-2 bg-teal-700">
                    <input
                        type="text"
                        placeholder="Add board title"
                        class="title placeholder-gray-100"
                    />
                </div>
            </div>
            <div class="mt-4">
                <button
                    class="rounded-sm py-2 px-4 text-black cursor-pointer bg-teal-300 hover:bg-teal-500"
                >
                    Create
                </button>
            </div>
        </Modal>
    </div>
</template>
<script>
import Modal from "./Modal.vue";
export default {
    props: {
        show: Boolean
    },
    components: {
        Modal
    }
};
</script>
<style scoped>
.title {
    background-color: hsla(0, 0%, 100%, 0.2);
    @apply rounded-sm text-white outline-none py-1 px-2 font-bold w-full;
}
</style>
