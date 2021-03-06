import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import { gqlErrors, AuthError } from './utils';
import store from "./vuex.config.js";

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
    },
    credentials: 'include',
    onError: (err) => {
        try {
            gqlErrors(err);
        } catch (err) {
            if (err instanceof AuthError) {
                store.dispatch("logout");
            }
        }
    }

});

export default new VueApollo({
    defaultClient: apolloClient
});