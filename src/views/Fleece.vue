<template>
    <v-app>
        <br><br><br>
        <v-container class="mx-auto">
            <h1 class="text-center font-weight-regular">UNIQLO Fleece</h1>
            <video 
            class="o-VideoAutoPlay js-SwitchVideo is-active mt-5" 
            data-src="https://image.uniqlo.com/UQ/ST3/th/imagesother/00_WEB_L1L2/YAYA-Fleece-TVCM-23FW/Feature-page/23FW_YAYA-Fleece-TVCM-sp.mp4" 
            playsinline="" 
            autoplay="" 
            loop="" 
            muted="" 
            height="450"
            src="https://image.uniqlo.com/UQ/ST3/th/imagesother/00_WEB_L1L2/YAYA-Fleece-TVCM-23FW/Feature-page/23FW_YAYA-Fleece-TVCM-pc.mp4">
            </video>
            <h1 class="text-center font-weight-regular mt-5">The Attraction of Softness</h1>
            <p class="text-center">UNIQLO Fleece makes your life get warmer and softer.</p>
            <v-row cols="4" class="mt-5">
                <v-col>
                    <v-card variant>
                        <v-img 
                        src="https://im.uniqlo.com/global-cms/spa/res10890754e4765a014e774642db4268bafr.jpg"
                        height="300"
                        ></v-img>
                    </v-card>
                    <h2 class="text-center font-weight-regular mt-3">Softness</h2>
                    <p class="text-center mt-3">Soft touch, comfortable to wear that comes with warmth.</p>
                </v-col>
                <v-col>
                    <v-card variant>
                        <v-img 
                        src="https://im.uniqlo.com/global-cms/spa/rescd6d71919ce964b4568cd4e55c3633eefr.jpg"
                        height="300"
                        ></v-img>
                    </v-card>
                    <h2 class="text-center font-weight-regular mt-3">Ease-of-care</h2>
                    <p class="text-center mt-3">Machine-washable for easy care. Can be used and worn without hesitation.</p>
                </v-col>
                <v-col>
                    <v-card variant>
                        <v-img 
                        src="https://im.uniqlo.com/global-cms/spa/res6c0f01ae6b2b62b69fc71ccaf355e8b7fr.jpg"
                        height="300"
                        ></v-img>
                    </v-card>
                    <h2 class="text-center font-weight-regular mt-3">Variation of colors and lineup</h2>
                    <p class="text-center mt-3">Features vivid colors and various designs for any occsaion.</p>
                </v-col>
            </v-row>
            <h1 class="text-center mt-10">Pile Lined Fleece Jacket</h1>
            <p class="text-center">Larger collar and dropped shoulders for a modern look.</p>
            <v-row class="mt-5">
                <v-col cols="6">
                    <v-img 
                    src="https://im.uniqlo.com/global-cms/spa/resc493e2d23463a49566f9c0c76c441823fr.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="6" class="align-self-center">
                    <v-card color="black" href="https://www.uniqlo.com/th/en/products/E461656-000?colorCode=COL01&sizeCode=SMA003" variant="">
                        <h2 class="font-weight-regular">FEATURED PRODUCT:</h2>
                        <v-row class="mt-3">
                            <v-col cols="4">
                                <v-img 
                                src="https://image.uniqlo.com/UQ/ST3/th/imagesgoods/461656/item/thgoods_01_461656.jpg?width=828"
                                height="200"
                                ></v-img>
                            </v-col>
                            <v-col cols="8">
                                <h3 class="font-weight-regular mt-2">Pile Lined Fleece Long Sleeve Jacket</h3>
                                <p class="text-caption">Made with Recycled Materials</p>
                                <h2 class="mt-2">THB 1,490.00</h2>
                                <v-rating v-model="rating" readonly></v-rating>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row> 
            <h1 class="font-weight-regular text-center mt-10">Features</h1>
            <v-row class="mt-5">
                <v-col>
                    <v-row>
                        <v-col>
                            <v-img 
                            src="https://im.uniqlo.com/global-cms/spa/res90e5c2ccde9924b892fd6659bd9c5ce6fr.jpg"
                            height="200"
                            ></v-img>
                        </v-col>
                        <v-col>
                            <p>Features lightweight, warm, soft fleece.</p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col>
                    <v-row>
                        <v-col>
                            <v-img 
                            src="https://im.uniqlo.com/global-cms/spa/resaaef1b3d20c5e1f2cb6dd7f04155672ffr.jpg"
                            height="200"
                            ></v-img>
                        </v-col>
                        <v-col>
                            <p>Relaxed boxy cut with hip length makes styling easy.</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row class="mt-5">
                <v-col>
                    <v-row>
                        <v-col>
                            <v-img 
                            src="https://im.uniqlo.com/global-cms/spa/res865d464f05d412b2eabb8a2c849cea69fr.jpg"
                            height="200"
                            ></v-img>
                        </v-col>
                        <v-col>
                            <p>Made from light, fluffy warm fleece. Machine-washable for easy care.</p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col>
                    <v-row>
                        <v-col>
                            <v-img 
                            src="https://im.uniqlo.com/global-cms/spa/resf3793b3459b0050bb3081b74d7590c3efr.jpg"
                            height="200"
                            ></v-img>
                        </v-col>
                        <v-col>
                            <p>Lift up your style with vivid color coordination of fleece.</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row class="mt-5">
                <v-col>
                    <v-row>
                        <v-col>
                            <v-img 
                            src="https://im.uniqlo.com/global-cms/spa/res4f5f800e7462b6d39d5acb7cbfcfac7cfr.jpg"
                            height="200"
                            ></v-img>
                        </v-col>
                        <v-col>
                            <p>Made with soft, warm, and lightweight fleece.</p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col>
                    <v-row>
                        <v-col>
                            <v-img 
                            src="https://im.uniqlo.com/global-cms/spa/res7d0d8e5f53c20533c3d24f50ff7ea986fr.jpg"
                            height="200"
                            ></v-img>
                        </v-col>
                        <v-col>
                            <p>Binder finish at the cuffs and hem keeps cold air out.</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <h1 class="text-center font-weight-regular mt-10">Pile Lined Fleece Crew Neck Cardigan</h1>
            <p class="text-center">Collarless design in a boxy cut with smooth micro fleece lining.</p>
            <v-row class="mt-5">
                <v-col>
                    <v-img 
                    src="https://im.uniqlo.com/global-cms/spa/res209c46c67be05d72a4f6985575f97086fr.jpg"
                    ></v-img>
                </v-col>
                <v-col class="align-self-center">
                    <v-card color="black" href="https://www.uniqlo.com/th/en/products/E461660-000?colorCode=COL31&sizeCode=SMA003" variant>
                        <h2 class="font-weight-regular ml-8">FEATURED PRODUCT:</h2>
                        <v-row class="mt-3">
                            <v-col>
                                <v-img
                                src="https://image.uniqlo.com/UQ/ST3/th/imagesgoods/461660/item/thgoods_31_461660.jpg?width=828"
                                height="200"
                                ></v-img>
                            </v-col>
                            <v-col>
                                <h3 class="font-weight-regular mt-2">Pile Lined Fleece Crew Neck Long Sleeve Cardigan</h3>
                                <p class="text-caption">Made with Recycled Materials</p>
                                <h2>THB 1,290.00</h2>
                                <v-rating v-model="rating" readonly></v-rating>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            <h1 class="text-center font-weight-regular mt-10">HEATTECH Fleece Turtle Neck T-Shirt</h1>
            <p class="text-center">HEATTECH fleece with unbeatable warmth and comfort.</p>
            <v-row class="mt-5">
                <v-col class="align-self-center">
                    <v-card color="black" class="mt-10" href="https://www.uniqlo.com/th/en/products/E459793-000?colorCode=COL46&sizeCode=SMA002" variant>
                        <h2 class="font-weight-regular ml-8">FEATURED PRODUCT:</h2>
                        <v-row class="mt-3">
                            <v-col>
                                <v-img
                                src="https://image.uniqlo.com/UQ/ST3/th/imagesgoods/459793/item/thgoods_46_459793.jpg?width=828"
                                height="200"
                                ></v-img>
                            </v-col>
                            <v-col>
                                <h3 class="font-weight-regular mt-2">Pile Lined Fleece Crew Neck Long Sleeve Cardigan</h3>
                                <p class="text-caption">Made with Recycled Materials</p>
                                <h2 class="text-red">THB 390.00</h2>
                                <v-rating v-model="rating" readonly></v-rating>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col>
                    <v-img 
                    src="https://im.uniqlo.com/global-cms/spa/res409a6fcab345d8c675fc7bd6634e3425fr.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <h1 class="font-weight-regular text-center mt-10">Tips for Layering</h1>
            <v-divider :thickness="3" class="mt-3 border-opacity-100"></v-divider>
            <v-row class="mt-3">
                <v-col cols="6">
                    <v-img 
                    class="fr-img" 
                    src="https://www.uniqlo.com/jp/ja/contents/feature/lifewear-collection/common_23fw/img/fleece/men_tips.jpg" 
                    height="400"
                    ></v-img>
                </v-col>
                <v-col cols="6">
                    <h2 class="font-weight-regular">Make fleece chic with color coordination.</h2>
                    <p>Go for a same-tone look to dial up the sophistication factor or add a dash of vivid color to brighten up a casual look. Pair with different textures to give fleece some extra style.</p>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data:() => ({
        rating: 5,

    })
}
</script>