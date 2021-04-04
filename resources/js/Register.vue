<template>
    <div class="bg-white sm:bg-gray-100 h-full flex justify-center">
        <div class="container mt-2 sm:mt-10 flex flex-col items-center">
            <div class="text-3xl text-blue-700 font-bold mb-10">
                <span>Laravello</span>
            </div>
            <div class="w-full sm:shadow-xl sm:bg-white sm:py-8 sm:px-12">
                <Errors :errors="errors" />
                <div class="w-full text-center text-gray-600 font-bold mb-8">
                    Sign Up to your account
                </div>
                <form @submit.prevent="register">
                    <FormInput
                        v-model="email"
                        type="email"
                        placeholder="Enter Email"
                    />
                    <FormInput
                        v-model="name"
                        type="text"
                        placeholder="Enter the Full Name"
                    />
                    <FormInput
                        v-model="password"
                        type="password"
                        placeholder="Enter Password"
                    />
                    <FormButton text="Submit" />
                </form>
                <hr class="bg-gray-400 h-px w-full mb-6" />
                <div class="text-center text-sm">
                    <router-link
                        :to="{ name: 'login' }"
                        class="text-blue-600 hover:underline"
                        >Already have an account? Log In</router-link
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
import Register from "./graphql/Register.gql";
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
            name: null,
            errors: []
        };
    },
    methods: {
        async register() {
            this.errors = [];
            try {
                const response = await this.$apollo.mutate({
                    mutation: Register,
                    variables: {
                        email: this.email,
                        password: this.password,
                        name: this.name
                    }
                });
                const user = response.data?.register;
                if (user) {
                    this.$store.dispatch("setLoggedIn", true);
                    this.$store.commit("setUser", user);
                    this.$router.push({ name: "board" });
                }
            } catch (error) {
                //console.log(gqlErrors(error));
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
