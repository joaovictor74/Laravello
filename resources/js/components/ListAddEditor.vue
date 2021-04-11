<template>
    <div
        @click="startEditing"
        v-if="editing == false"
        class="list bg-white hover:bg-gray-500 rounded-sm p-2 mr-2 opacity-75 text-black cursor-pointer"
    >
        &plus;&nbsp;Add Another List
    </div>
    <div
        v-else
        v-on-clickaway="hideEditor"
        class="bg-gray-300 rounded-sm p-2 list"
    >
        <input
            class="rounded-sm border-blue-600 border-2 py-1 px-2 outline-none w-full text-gray-800 text-sm"
            type="text"
            ref="title"
            placeholder="Enter list title..."
            @keyup.esc="hideEditor"
            @keypress.enter="addList"
            v-model="title"
        />
        <div class="flex">
            <button
                @click="addList"
                class="mt-2 rounded-sm py-1 px-3 bg-blue-700 cursor-pointer hover:bg-blue-500 outline-none text-white"
            >
                Add List
            </button>
            <div
                @click="hideEditor"
                class="mt-2 ml-1 px-3 rounded-md hover:bg-gray-400 cursor-pointer text-gray-500 flex items-center justify-center"
            >
                <span>&#120;</span>
            </div>
        </div>
    </div>
</template>
<script>
import { directive as onClickaway } from "vue-clickaway";
import { EVENT_LIST_ADDED } from "./../constants.js";
import ListAdd from "./../graphql/ListAdd.gql";
export default {
    props: ["board"],
    data() {
        return {
            editing: false,
            title: null
        };
    },
    directives: {
        onClickaway
    },
    methods: {
        hideEditor() {
            this.editing = false;
        },
        startEditing() {
            this.editing = true;
            this.$nextTick(() => this.$refs.title.focus());
        },
        addList() {
            const self = this;
            this.$apollo.mutate({
                mutation: ListAdd,
                variables: {
                    title: this.title,
                    board: this.board
                },
                update(store, { data: { listAdd } }) {
                    self.$emit("added", {
                        store,
                        data: listAdd,
                        type: EVENT_LIST_ADDED
                    });
                    self.hideEditor();
                }
            });
        }
    }
};
</script>
<style></style>
