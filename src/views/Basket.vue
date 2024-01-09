<template>
    <br><br><br>
    <v-container>
        <h1>SHOPPING CART</h1>
        <h3 class="font-weight-regular mt-10">Your cart is currently empty.</h3>
        <v-btn class="mt-5 bg-grey" height="50" width="300" @click="goToHome">CONTINUE SHOPPING</v-btn>
        <h1 class="text-center mt-16">SEARCH BY CATEGORY</h1>
        <v-row class="mt-5">
            <v-col cols="3">
                <v-card href="https://www.uniqlo.com/th/en/women/tops/t-shirts?path=%2C%2C8404" variant>
                    <v-img 
                    src="https://im.uniqlo.com/global-cms/spa/res6c8d2523fe81190a663d4a5a065b71d1fr.jpg"
                    ></v-img>
                    <p class="text-center mt-2">T-SHIRT</p>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card href="https://www.uniqlo.com/th/en/women/tops/shirts-and-blouses?path=%2C%2C8403" variant>
                    <v-img 
                    src="https://im.uniqlo.com/global-cms/spa/res06d486fc2b4ca9f966fc3adb9d4e2f98fr.jpg"
                    ></v-img>
                    <p class="text-center mt-2">SHIRT & BLOUSE SHIRT</p>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card href="https://www.uniqlo.com/th/en/women/tops/hoodies-and-sweatshirts?path=%2C%2C8402" variant>
                    <v-img 
                    src="https://im.uniqlo.com/global-cms/spa/resa0b325f89849d90d9a17f64b0001d554fr.jpg"
                    ></v-img>
                    <p class="text-center mt-2">SWEAT</p>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card href="https://www.uniqlo.com/th/en/women/tops/knitwear?path=%2C%2C8400" variant>
                    <v-img 
                    src="https://im.uniqlo.com/global-cms/spa/resd7142e7536e55e2485a995bd8f30db9ffr.jpg"
                    ></v-img>
                    <p class="text-center mt-2">KNITWEAR</p>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mt-2">
            <v-col cols="3">
                <v-card href="https://www.uniqlo.com/th/en/women/tops/fleece?path=%2C%2C50801" variant>
                    <v-img 
                    src="https://im.uniqlo.com/global-cms/spa/resd7ba18565b6dc93d84c4e514a9f9ac09fr.jpg"
                    ></v-img>
                    <p class="text-center mt-2">FLEECE</p>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card href="https://www.uniqlo.com/th/en/women/outerwear/outerwear-collections?path=%2C%2C25991" variant>
                    <v-img 
                    src="https://im.uniqlo.com/global-cms/spa/res98f24ae4eb0f16468d28542c50d4ddd1fr.jpg"
                    ></v-img>
                    <p class="text-center mt-2">OUTERWEAR</p>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card href="https://www.uniqlo.com/th/en/women/bottoms/casual-pants?path=%2C%2C8409" variant>
                    <v-img 
                    src="https://im.uniqlo.com/global-cms/spa/res64f805f5c1710348aecdba875a04d89afr.jpg"
                    ></v-img>
                    <p class="text-center mt-2">PANTS</p>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card href="https://www.uniqlo.com/th/en/women/bottoms/shorts?path=%2C%2C8412" variant>
                    <v-img 
                    src="https://im.uniqlo.com/global-cms/spa/res03a4ba55b94cf80265cc187f05c6d44efr.jpg"
                    ></v-img>
                    <p class="text-center mt-2">SHORTS</p>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mt-2">
            <v-col cols="3">
                <v-card href="https://www.uniqlo.com/th/en/women/dresses-and-jumpsuits/dresses-and-jumpsuits?path=%2C%2C8406" variant>
                    <v-img 
                    src="https://im.uniqlo.com/global-cms/spa/resff5111ea6aa20ade3e28c402e483ec5ffr.jpg"
                    ></v-img>
                    <p class="text-center mt-2">DRESS</p>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card href="https://www.uniqlo.com/th/en/women/loungewear/loungewear-collections?path=%2C%2C25993" variant>
                    <v-img 
                    src="https://im.uniqlo.com/global-cms/spa/rese800da47e41ad3bd9da4f9d2ec3c757dfr.jpg"
                    ></v-img>
                    <p class="text-center mt-2">LOUNGEWEAR</p>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card href="https://www.uniqlo.com/th/en/women/innerwear/innerwear-collections?path=%2C%2C25994" variant>
                    <v-img 
                    src="https://im.uniqlo.com/global-cms/spa/res09a4c387f99d7ceef7669c5746d1ce30fr.jpg"
                    ></v-img>
                    <p class="text-center mt-2">INNERWEAR</p>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card href="https://www.uniqlo.com/th/en/women/innerwear/heattech?path=%2C%2C8423" variant>
                    <v-img 
                    src="https://im.uniqlo.com/global-cms/spa/resbff4b6738f7fb0509fd30fc7211cfb40fr.jpg"
                    ></v-img>
                    <p class="text-center mt-2">HEATTECH</p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    methods: {
        goToHome() {
            this.$router.push('/home')
        },
    }
}
</script>