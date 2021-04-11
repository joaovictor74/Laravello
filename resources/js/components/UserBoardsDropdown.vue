<template>
    <div>
        <button class="header-btn" @click="showBoards = !showBoards">
            Boards
        </button>
        <DropdownMenu :show="showBoards" @closed="showBoards = false">
            <div class="text-gray-600 text-xs font-semibold mb-2 ml-2">
                BOARDS
            </div>
            <router-link
                :to="{ name: 'board', params: { id: board.id } }"
                v-for="board in userBoards"
                :key="board.id"
                :class="[`bg-${board.color}-100`]"
                class="m-2 rounded-sm opacity-100 hover:bg-opacity-75 text-gray-700 font-bold cursor-pointer flex"
                @click.native="showBoards = false"
            >
                <div
                    :class="[`bg-${board.color}-200`]"
                    class="w-10 rounded-sm rounded-r-none"
                ></div>
                <div class="p-2">{{ board.title }}</div>
            </router-link>
            <div
                @click="showModal = true"
                class="rounded-sm hover:bg-gray-200 p-2 underline cursor-pointer mt-4"
            >
                Create new board...
            </div>
            <BoardAddModal :show="showModal" @closed="showModal = false">
                message
            </BoardAddModal>
        </DropdownMenu>
    </div>
</template>
<script>
import DropdownMenu from "./DropdownMenu.vue";
import UserBoards from "./../graphql/UserBoards.gql";
import { mapState } from "vuex";
import { colorMap100, colorMap200 } from "./../utils.js";
import BoardAddModal from "./BoardAddModal.vue";
export default {
    components: {
        DropdownMenu,
        BoardAddModal
    },
    apollo: {
        userBoards: {
            query: UserBoards,
            variables() {
                return {
                    userId: this.userId
                };
            },
            skip() {
                return !this.userId;
            }
        }
    },
    data() {
        return {
            showBoards: false,
            showModal: false
        };
    },
    computed: {
        ...mapState({
            userId: state => state.user.id
        }),
        colorMap100: () => colorMap100,
        colorMap200: () => colorMap200
    }
};
</script>
<style scoped></style>
