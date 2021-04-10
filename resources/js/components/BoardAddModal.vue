<template>
    <div>
        <Modal
            :width="400"
            :height="250"
            :show="show"
            @closed="$emit('closed')"
        >
            <div class="flex">
                <div
                    class="rounded-sm p-4 text-black w-full mr-2"
                    :class="[colors[color]]"
                >
                    <input
                        type="text"
                        placeholder="Add board title"
                        class="title placeholder-gray-100"
                    />
                </div>
                <div>
                    <div
                        class="flex justify-between mb-2"
                        v-for="(row, i) in colorGrid"
                        :key="i"
                    >
                        <ColorPicker
                            v-for="(c, i) in row"
                            :key="i"
                            :color="c"
                            :activeColor="color"
                            @changed="color = $event"
                        ></ColorPicker>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <button
                    class="rounded-sm py-2 px-4 text-white cursor-pointer hover:opacity-75"
                    :class="[colors[color]]"
                >
                    Create
                </button>
            </div>
        </Modal>
    </div>
</template>
<script>
import Modal from "./Modal.vue";
import ColorPicker from "./BoardModalColorPicker.vue";
import { colorGrid, colorMap500 } from "./../utils.js";
export default {
    props: {
        show: Boolean
    },
    data() {
        return {
            color: "orange",
            title: null
        };
    },
    computed: {
        colors: () => colorMap500,
        colorGrid: () => colorGrid
    },
    components: {
        Modal,
        ColorPicker
    }
};
</script>
<style scoped>
.title {
    background-color: hsla(0, 0%, 100%, 0.2);
    @apply rounded-sm text-white outline-none py-1 px-2 font-bold w-full;
}
</style>
