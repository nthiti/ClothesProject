<template>
    <br><br><br>
    <v-container>
        <div>
            <h1 class="font-weight-black text-center ml-8">CREATE AN ACCOUNT</h1>
            <v-card 
            class="mx-auto mt-5"
            elevation="12"
            height="900"
            width="800"
            >
                <v-container>
                    <p class="mt-3 ml-3">You will receive the confirmation mail to your email address associated with account. Please make sure to check your incoming email from us.</p>
                    <v-row class="mx-auto mt-3">
                        <v-col cols="4">
                            <h3 >EMAIL ADDRESS *</h3>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field clearable label="Email" suffix="@gmail.com" placeholder="Enter a valid email"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <h3 >PASSWORD *</h3>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field clearable label="Password"></v-text-field>
                            <p class="text-caption">Password must be at least 8 characters, and contain both letters and numbers. Only these symbols can be used -_.@</p>
                            <v-checkbox label="Show my Password"></v-checkbox>                        
                        </v-col>
                    </v-row>
                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <h3 >POSTAL CODE *</h3>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field clearable placeholder="Please enter postal code"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <h3 >BIRTHDAY </h3>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field clearable type="date" placeholder="Enter a valid email"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <h3 >GENDER </h3>
                        </v-col>
                        <v-col cols="8">
                            <v-radio-group inline>
                                <v-radio label="Male" value="1"></v-radio>
                                <v-radio label="Famale" value="2"></v-radio>
                                <v-radio label="Prefer Not To State" value="3"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                     <v-row class="mx-auto">
                        <v-col cols="4">
                            <h3 >CONFIRM SUBSCRIPTION </h3>
                            <v-checkbox label="Uniqlo newsletter"></v-checkbox>                        
                        </v-col>
                    </v-row>
                    <v-btn  height="50" width="300" color="grey">LOG IN</v-btn>

                  
                </v-container>
             
            </v-card>
        </div>
    </v-container>
</template>

<script>
export default {
    
}
</script>