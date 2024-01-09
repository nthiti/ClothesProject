<template>
   <v-app>
    <br><br>
        <!-- ภาพโชว์ -->
        <v-carousel>
          <v-carousel-item
            src="https://im.uniqlo.com/global-cms/spa/resac4df8a8f127f288051263223ef4a00dfr.jpg"
            cover
          ></v-carousel-item>
          
          <v-carousel-item
            src="https://im.uniqlo.com/global-cms/spa/res2a3f2e9b800bcbd0d3182f7029256194fr.jpg?1700025024197"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://im.uniqlo.com/global-cms/spa/res1b6d08f455e45921b4942fa9807eeb8cfr.jpg?1700034907321"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://im.uniqlo.com/global-cms/spa/resff7d6678eede75bac36b20a004de829ffr.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item 
            src="https://im.uniqlo.com/global-cms/spa/resb86bd1d6d3d5f28c0adbf9ef63670fb0fr.jpg?1700024550726"
            cover
          ></v-carousel-item>
        </v-carousel>

        <v-container>
          <!-- ประเภทเสื้อผ้า  -->
          <v-row class="type-cloth" no-gutters>
            <v-col order="first">
              <v-sheet class="pa-2 ma-2">
                <v-card  @click="goToShirt">
                  <v-img src="https://cdn.icon-icons.com/icons2/2272/PNG/512/short_sleeves_clothing_icon_140709.png" 
                    height="100px" 
                    width="100px"
                    class="mx-auto"
                  ></v-img>
                  <p class="text-center">Shirt</p>
                </v-card>
              </v-sheet>
            </v-col>
            <v-col order="">
              <v-sheet class="pa-2 ma-2">
                <v-card @click="goToHood">
                  <v-img src="https://cdn.icon-icons.com/icons2/2272/PNG/512/sweater_clothing_icon_140715.png" 
                    height="100px" 
                    width="100px"
                    class="mx-auto"
                  ></v-img>
                  <p class="text-center">Sweatshirts & Hoodies</p>
                </v-card>
              </v-sheet>
            </v-col>
            <v-col order="">
              <v-sheet class="pa-2 ma-2">
                <v-card @click="goToFleece">
                  <v-img src="https://cdn.icon-icons.com/icons2/2272/PNG/512/jacket_clothing_icon_140711.png" 
                    height="100px" 
                    width="100px"
                    class="mx-auto"
                  ></v-img>
                  <p class="text-center">Fleece</p>
                </v-card>
              </v-sheet>
            </v-col>
            <v-col order="last">
              <v-sheet class="pa-2 ma-2">
                <v-card @click="goToJeans">
                  <v-img src="https://cdn.icon-icons.com/icons2/2272/PNG/512/shorts_clothing_icon_140705.png" 
                    height="100px" 
                    width="100px"
                    class="mx-auto"
                  ></v-img>
                  <p class="text-center">Jeans</p>
                </v-card>
              </v-sheet>
            </v-col>
          </v-row>
          <!-- VDO -->
          <v-row no-gutters>
            <v-sheet class="pa-2 ma-1" color="red">
              <v-col order="first">
                <iframe 
                    width="700" 
                    height="400" 
                    src="https://www.youtube.com/embed/nkIuk6nKYqs?si=cfNy3yR3-hiSyD62" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                  </iframe>
              </v-col>
            </v-sheet>
            <v-col order="last">
                <v-layout align-center>
                  <v-img 
                    src="https://media1.giphy.com/media/8lcU4cL3Sjqk0adqVn/giphy.gif?cid=6c09b952107m2ulpmoah1m72inet6rpe1ppxl4xx4hkewcev&ep=v1_stickers_related&rid=giphy.gif&ct=s"
                    width="300" 
                    height="200"
                    
                  ></v-img>
                </v-layout>
                <br>
                <h1 class="text-center" >Merry Christmas</h1>
            </v-col>
          </v-row>
          
          <!-- Content -->
          <h1 class="text-center font-weight-regular mt-10">Content Area</h1>
            <v-row no-gutters>
                <v-col cols="4">
                  <v-sheet class="pa-2 ma-2">
                    <v-card href="https://www.miniso.com/EN/News/Details?id=100000323827981">
                      <v-img
                        src="https://www.miniso.com/UploadFiles/Images/20230315/6381448956463999735621357.png"
                        height="200px" 
                        class="align-end" 
                        cover
                      ></v-img>
                      <v-card-title>
                        MINISO expands its U.S. operations southwards, opening six new stores in Florida and Texas 
                      </v-card-title>
                      <v-card-text>
                        <p>On November 25th, MINISO opened four new stores in Texas and two in Florida, doubling the global value retailer’s store count in these states.</p>
                      </v-card-text>
                      <!-- <v-divider></v-divider> -->
                      <v-card-action>
                        <v-dialog width="500">
                          <template v-slot:activator="{ props }">
                            <!-- variant="outlined" ใช้ในการทำให้ปุ่มกดไม่เป็น 3D -->
                            <!-- variant="flat" ใช้ในการทำให้ปุ่มกดไม่เป็น 3D รอยเส้นหาย-->
                            <v-btn v-bind="props" variant="flat" >
                              Learn More
                            </v-btn>
                          </template>
                          <template v-slot:default="{ isActive }">
                            <v-card title="Dialog">
                              <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              </v-card-text>

                              <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn
                                  text="Close Dialog"
                                  @click="isActive.value = false"
                                ></v-btn>
                              </v-card-actions>
                            </v-card>
                          </template>
                        </v-dialog>
                      </v-card-action>
                    </v-card>
                  </v-sheet>
                </v-col>
                <v-col cols="4">
                  <v-sheet class="pa-2 ma-2">
                    <v-card href="https://www.miniso.com/EN/News/Details?id=100000321716492">
                      <v-img src="https://www.miniso.com/UploadFiles/Images/20230313/6381431996855595292044886.png"
                        height="200px" class="align-end" cover
                      >
                      </v-img>
                      <v-card-title>
                        Toy Story’s Lotso arrives at MINISO Vietnam and takes the country by storm
                      </v-card-title>
                      <v-card-text>
                        <p>On Oct 18, global lifestyle retailer MINISO (NYSE: MNSO; HKEX: 9896) launched its Lotso from the Toy Story collection </p>
                      </v-card-text>
                      <!-- <v-divider></v-divider> -->
                      <v-card-action>
                        <v-dialog width="500">
                          <template v-slot:activator="{ props }">
                            <v-btn v-bind="props"  variant="flat" >
                              Learn More
                            </v-btn>
                          </template>
                          <template v-slot:default="{ isActive }">
                            <v-card title="Dialog">
                              <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              </v-card-text>

                              <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn
                                  text="Close Dialog"
                                  @click="isActive.value = false"
                                ></v-btn>
                              </v-card-actions>
                            </v-card>
                          </template>
                        </v-dialog>
                      </v-card-action>
                    </v-card>
                  </v-sheet>
                </v-col>
                <v-col cols="4">
                  <v-sheet class="pa-2 ma-2">
                    <v-card href="https://www.miniso.com/EN/News/Details?id=100000322482936">
                      <v-img src="https://www.miniso.com/UploadFiles/Images/20230313/6381432225578024014331882.png"
                        height="200px" class="align-end" cover
                      >
                      </v-img>
                      <v-card-title>
                        MINISO Launches Sanrio Blind Box Collection, Creating Buzz at US Stores
                      </v-card-title>
                      <v-card-text>
                        <p>MINISO (NYSE: MNSO; HKEX: 9896) has launched an exclusive collection of blind box offerings of Sanrio characters at its US stores.</p>
                      </v-card-text>
                      <!-- <v-divider></v-divider> -->
                      <v-card-action>
                        <v-dialog width="500">
                          <template v-slot:activator="{ props }"> 
                            <v-btn v-bind="props"  variant="flat" >
                              Learn More
                            </v-btn>
                          </template>
                          <template v-slot:default="{ isActive }"> 
                            <v-card title="Dialog">
                              <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              </v-card-text>

                              <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn
                                  text="Close Dialog"
                                  @click="isActive.value = false"
                                ></v-btn>
                              </v-card-actions>
                            </v-card>
                          </template>
                        </v-dialog>
                      </v-card-action>
                    </v-card>
                  </v-sheet>

                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="4">
                  <v-sheet class="pa-2 ma-2">
                    <v-card href="https://www.miniso.com/EN/News/Details?id=100000320946894">
                      <v-img
                        src="https://www.miniso.com/UploadFiles/Images/20230313/6381431834051039831734293.png"
                        height="200px" 
                        class="align-end" 
                        cover
                      ></v-img>
                      <v-card-title>
                        MINISO Debuts “$2 Plus” Concept in Canada in Response to Rising Inflation 
                      </v-card-title>
                      <v-card-text>
                        <p>On October 1st, Chinese retailer MINISO unveiled a new “$2 Plus” concept at the re-opening of its Vaughan Mills store in the Greater Toronto Area.</p>
                      </v-card-text>
                      <!-- <v-divider></v-divider> -->
                      <v-card-action>
                        <v-dialog width="500">
                          <template v-slot:activator="{ props }">
                            <!-- variant="outlined" ใช้ในการทำให้ปุ่มกดไม่เป็น 3D -->
                            <!-- variant="flat" ใช้ในการทำให้ปุ่มกดไม่เป็น 3D รอยเส้นหาย-->
                            <v-btn v-bind="props" variant="flat" >
                              Learn More
                            </v-btn>
                          </template>
                          <template v-slot:default="{ isActive }">
                            <v-card title="Dialog">
                              <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              </v-card-text>

                              <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn
                                  text="Close Dialog"
                                  @click="isActive.value = false"
                                ></v-btn>
                              </v-card-actions>
                            </v-card>
                          </template>
                        </v-dialog>
                      </v-card-action>
                    </v-card>
                  </v-sheet>
                </v-col>
                <v-col cols="4">
                  <v-sheet class="pa-2 ma-2">
                    <v-card href="https://www.miniso.com/EN/News/Details?id=100000304611883">
                      <v-img src="https://www.miniso.com/UploadFiles/Images/20220331/6378429506394872033565804.jpg"
                        height="200px" class="align-end" cover
                      >
                      </v-img>
                      <v-card-title>
                        MINISO increases presence in Italy with growing popularity
                      </v-card-title>
                      <v-card-text>
                        <p>As 2021 draws to a close, lifestyle retailer MINISO is proud to declare a year of success in Italy. Since entering the Italian market in April,  </p>
                      </v-card-text>
                      <!-- <v-divider></v-divider> -->
                      <v-card-action>
                        <v-dialog width="500">
                          <template v-slot:activator="{ props }">
                            <v-btn v-bind="props"  variant="flat" >
                              Learn More
                            </v-btn>
                          </template>
                          <template v-slot:default="{ isActive }">
                            <v-card title="Dialog">
                              <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              </v-card-text>

                              <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn
                                  text="Close Dialog"
                                  @click="isActive.value = false"
                                ></v-btn>
                              </v-card-actions>
                            </v-card>
                          </template>
                        </v-dialog>
                      </v-card-action>
                    </v-card>
                  </v-sheet>
                </v-col>
                <v-col cols="4">
                  <v-sheet class="pa-2 ma-2">
                    <v-card href="https://www.miniso.com/EN/News/Details?id=100000256615252">
                      <v-img src="https://www.miniso.com/UploadFiles/Images/1(2).png"
                        height="200px" class="align-end" cover
                      >
                      </v-img>
                      <v-card-title>
                        MINISO Creates Limited Release Plush Toy for Surprise Marriage Proposal
                      </v-card-title>
                      <v-card-text>
                        <p>Gnin had the perfect proposal in mind for his longtime girlfriend, Rachel. He had a date set, picked out the exact location,</p>
                      </v-card-text>
                      <!-- <v-divider></v-divider> -->
                      <v-card-action>
                        <v-dialog width="500">
                          <template v-slot:activator="{ props }"> 
                            <v-btn v-bind="props"  variant="flat" >
                              Learn More
                            </v-btn>
                          </template>
                          <template v-slot:default="{ isActive }"> 
                            <v-card title="Dialog">
                              <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              </v-card-text>

                              <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn
                                  text="Close Dialog"
                                  @click="isActive.value = false"
                                ></v-btn>
                              </v-card-actions>
                            </v-card>
                          </template>
                        </v-dialog>
                      </v-card-action>
                    </v-card>
                  </v-sheet>

                </v-col>
            </v-row>
            <div class="text-center">
              <v-btn justify="center" append-icon="mdi-chevron-right" href="https://www.uniqlo.com/th/en/">LEARN MORE</v-btn>
            </div>
        </v-container>
      
   </v-app>
   
</template>


<script>
import { ref } from "vue";
export default {
  data: () => ({}),
  watch: {
    group () {
      this.drawer = false
    },
  },
   methods: {
    goToShirt() {
      this.$router.push('/shirt')
    },
    goToHood() {
      this.$router.push('/hood')
    },
    goToFleece() {
      this.$router.push('/fleece')
    },
    goToJeans() {
      this.$router.push('/jeans')
    },
  },
  
};
</script>