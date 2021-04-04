<template>
    <div class="bg-white sm:bg-gray-100 h-full flex justify-center">
        <div class="container mt-2 sm:mt-10 flex flex-col items-center">
            <div class="text-3xl text-blue-700 font-bold mb-10">
                <span>Laravello</span>
            </div>
            <div class="w-full sm:shadow-xl sm:bg-white sm:py-8 sm:px-12">
                <Errors :errors="errors" />
                <div class="w-full text-center text-gray-600 font-bold mb-8">
                    Log In to Laravello
                </div>
                <form @submit.prevent="authenticate">
                    <FormInput
                        v-model="email"
                        type="email"
                        placeholder="Enter Email"
                    />
                    <FormInput
                        v-model="password"
                        type="password"
                        placeholder="Enter password"
                    />
                    <FormButton text="Login" />
                </form>
                <hr class="bg-gray-400 h-px w-full mb-6" />
                <div class="text-center text-sm">
                    <router-link
                        :to="{ name: 'register' }"
                        class="text-blue-600 hover:underline"
                        >Sign Up for an account</router-link
                    >
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FormInput from "./components/FormInput.vue";
import FormButton from "./components/FormButton.vue";
import Errors from "./components/Errors.vue";
import Login from "./graphql/Login.gql";
import { gqlErrors } from "./utils.js";
export default {
    components: {
        FormInput,
        FormButton,
        Errors
    },
    data() {
        return {
            email: null,
            password: null,
            errors: []
        };
    },
    methods: {
        async authenticate() {
            this.errors = [];
            try {
                const self = this;
                await this.$apollo.mutate({
                    mutation: Login,
                    variables: {
                        email: this.email,
                        password: this.password
                    }
                });
                this.$store.dispatch("setLoggedIn", true);
                this.$router.push({ name: "board" });
            } catch (error) {
                this.errors = gqlErrors(error);
            }
        }
    }
};
</script>
<style scoped>
.container {
    width: 300px;
    min-width: 300px;
}
@media (min-width: 640px) {
    .container {
        width: 400px;
        min-width: 400px;
    }
}
</style>
