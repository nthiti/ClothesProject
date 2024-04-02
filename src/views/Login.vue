<template>
    <br><br><br>
    <v-container>
            <v-card 
            class="mx-auto"
            elevation="12"
            height="600"
            width="1100"
            >
                <v-row cols="6" class="mt-8">
                    <v-col>
                        <h1 class="font-weight-black ml-8">LOGIN</h1>
                        <p class="ml-8 mt-3">Log in with your email address and password.</p>
                        <h3 class="ml-8 mt-3">EMAIL ADDRESS *</h3>
                        <v-text-field clearable class="ml-8 mt-2" label="Email" placeholder="Enter a valid email"></v-text-field>
                        <h3 class="ml-8">PASSWORD *</h3>
                        <v-text-field clearable class="ml-8 mt-2" label="Password"></v-text-field>
                        <p class="ml-8 mt-n2 text-caption">Password must be at least 8 characters, and contain both letters and numbers. Only these symbols can be used -_.@</p>
                        <v-checkbox class="ml-5" label="Show my Password"></v-checkbox>
                        <v-btn class="ml-8" height="50" width="300" color="grey">LOG IN</v-btn>
                    </v-col>
                    <v-col>
                        <h1 class="font-weight-black text-center">CREATE AN ACCOUNT</h1>
                        <p class="mt-3">If you create an account, it takes less time to go through checkout and complete your orders. Register today for free!</p>
                        <v-btn class="mt-8" height="50" width="200" color="grey" @click="goToCreateAccount">CREATE AN ACCOUNT</v-btn>
                    </v-col>
                </v-row>
            </v-card>

    </v-container>
</template>

<script>
export default {
    methods: {
        goToCreateAccount() {
            this.$router.push('/createaccount')
        },
    }

}
</script>