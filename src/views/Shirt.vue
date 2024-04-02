<template>
  <br><br><br>
  <v-cotainer class="shirt-font">
    <h1 class="font-weight-regular text-center mt-10">EXTRA FINE MERINO</h1>
    <h3 class="font-weight-light text-center mt-3">FEATURES</h3>
    <v-container>
      <v-row cols="4">
        <v-col>
          <v-card variant>
            <v-img 
            src="https://im.uniqlo.com/global-cms/spa/res646e3d53d0438fbb388e95c6a08f8c4ffr.jpg"
            height="250"
            ></v-img>
          </v-card>
          <p class="text-center">100% extra fine merino wool with natural moisture-wicking.</p>
        </v-col>
        <v-col>
          <v-card variant>
            <v-img 
            src="https://im.uniqlo.com/global-cms/spa/resf9d24d72fc9788ce1d36b51c8022a7fcfr.jpg"
            height="250"
            ></v-img>
          </v-card>
          <p class="text-center">Gorgeous colors born from fine yarn.</p>
        </v-col>
        <v-col>
          <v-card variant>
            <v-img 
            src="https://im.uniqlo.com/global-cms/spa/res7fde87f1983df5a1d256a98fd4f22d4efr.jpg"
            height="250"
            ></v-img>
          </v-card>
          <p class="text-center">Machine washable and easy to care for.</p>
        </v-col>
      </v-row>
      <h1 class="font-weight-regular text-center mt-16">Extra Fine Merino Ribbed Mock Neck Half Sleeve Sweater</h1>
      <p class="text-center">Half sleeve design with ribbed for a perfect fit.</p>
      <br><br>
      <v-row cols="6">
          <v-col>
            <v-card height="500" width="500"> 
              <v-img src="https://im.uniqlo.com/global-cms/spa/resd1ce709ae4a768fb95a904ed2fe80b9afr.jpg"></v-img>
            </v-card>
          </v-col>
          <v-row cols="6" no-gutters="">
            <v-col class="align-self-center ml-10">
              <v-card href="https://www.uniqlo.com/th/en/products/E461033-000?colorCode=COL32&sizeCode=SMA002" variant>
                <h3 class="font-weight-regular text-black">HOP THIS PRODUCT:</h3><br>
                <h4 class="text-black">Extra Fine Merino Ribbed Mock </h4>
                <h4 class="text-black">Sleeve Sweater</h4>
                <h3 class="text-red">THB 790.00</h3>
                <v-img 
                src="https://image.uniqlo.com/UQ/ST3/th/imagesgoods/461033/item/thgoods_32_461033.jpg?width=828"
                height="200"
                width="200"
                >
                </v-img>

                <!-- rating ถ้าเป็น hover จะคลิกได้ แต่ readonly จะค้างไว้อยู่ตามที่เขียนใน script ของ rating-->
                <!-- half-increments ใช้ทำให้แบ่งเป็นครึ่งได้ หรือ 1.5 เป็นต้น -->
                <v-rating
                v-model="rating"
                density="comfortable"
                class="text-black"
                half-increments
                readonly 
                /><div class="text-black px-14 mt-n2">31 rating</div>
              </v-card>
            </v-col>
            <v-col class="align-self-center">
              <v-card href="https://www.uniqlo.com/th/en/products/E461034-000?colorCode=COL32&sizeCode=SMA003" variant>
                <h3 class="font-weight-regular text-black">HOP THIS PRODUCT:</h3><br>
                <h4 class="text-black">Extra Fine Merino Ribbed Long</h4>
                <h4 class="text-black">Cardigan</h4>
                <h3 class="text-red">THB 990.00</h3>
                <v-img 
                src="https://image.uniqlo.com/UQ/ST3/th/imagesgoods/461033/item/thgoods_70_461033.jpg?width=750"
                height="200"
                width="200"
                >
                </v-img>

                <!-- rating ถ้าเป็น hover จะคลิกได้ แต่ readonly จะค้างไว้อยู่ตามที่เขียนใน script ของ rating-->
                <!-- half-increments ใช้ทำให้แบ่งเป็นครึ่งได้ หรือ 1.5 เป็นต้น -->
                <v-rating
                v-model="rating"
                density="comfortable"
                class="text-black"
                half-increments
                readonly 
                /><div class="text-black px-14 mt-n2">49 rating</div>
              </v-card>
            </v-col>
          </v-row>
      </v-row>
      <v-row cols="6" class="mt-10">
          <v-row cols="6" no-gutters="">
            <v-col class="align-self-center ml-10">
              <v-card href="https://www.uniqlo.com/th/en/products/E461033-000?colorCode=COL32&sizeCode=SMA002" variant>
                <h3 class="font-weight-regular text-black">HOP THIS PRODUCT:</h3><br>
                <h4 class="text-black">Extra Fine Merino Ribbed Mock </h4>
                <h4 class="text-black">Sleeve Sweater</h4>
                <h3 class="text-red">THB 790.00</h3>
                <v-img 
                src="https://image.uniqlo.com/UQ/ST3/th/imagesgoods/461033/item/thgoods_06_461033.jpg?width=750"
                height="200"
                width="200"
                >
                </v-img>

                <!-- rating ถ้าเป็น hover จะคลิกได้ แต่ readonly จะค้างไว้อยู่ตามที่เขียนใน script ของ rating-->
                <!-- half-increments ใช้ทำให้แบ่งเป็นครึ่งได้ หรือ 1.5 เป็นต้น -->
                <v-rating
                v-model="rating"
                density="comfortable"
                class="text-black"
                half-increments
                readonly 
                /><div class="text-black px-14 mt-n2">31 rating</div>
              </v-card>
            </v-col>
            <v-col class="align-self-center">
              <v-card href="https://www.uniqlo.com/th/en/products/E461034-000?colorCode=COL32&sizeCode=SMA003" variant>
                <h3 class="font-weight-regular text-black">HOP THIS PRODUCT:</h3><br>
                <h4 class="text-black">Extra Fine Merino Ribbed Long</h4>
                <h4 class="text-black">Cardigan</h4>
                <h3 class="text-red">THB 990.00</h3>
                <v-img 
                src="https://image.uniqlo.com/UQ/ST3/th/imagesgoods/461034/item/thgoods_14_461034.jpg?width=828"
                height="200"
                width="200"
                >
                </v-img>

                <!-- rating ถ้าเป็น hover จะคลิกได้ แต่ readonly จะค้างไว้อยู่ตามที่เขียนใน script ของ rating-->
                <!-- half-increments ใช้ทำให้แบ่งเป็นครึ่งได้ หรือ 1.5 เป็นต้น -->
                <v-rating
                v-model="rating"
                density="comfortable"
                class="text-black"
                half-increments
                readonly 
                /><div class="text-black px-14 mt-n2">49 rating</div>
              </v-card>
            </v-col>
            <v-col>
            <v-card height="500" width="500"> 
              <v-img src="https://im.uniqlo.com/global-cms/spa/resa625e508e2a500a1237520a06a1d8922fr.jpg"></v-img>
            </v-card>
          </v-col>
          </v-row>
      </v-row>
    </v-container>
  </v-cotainer>

  <!-- ประเภทแต่งตัว -->
  <v-card class="mt-10">
    <v-tabs v-model="tab" align-tabs="center" color="red">
      <v-tab :value="one">Official Styling</v-tab>
      <v-tab :value="two">StyleHint Inspiration</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <v-row cols="3" class="mt-2">
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/gl/OFFICIAL_IMAGES/23072008128_official_styling_120017590_r-1000-1333"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/gl/OFFICIAL_IMAGES/230728014620_official_styling_120017634_r-1000-1333"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/gl/OFFICIAL_IMAGES/23071306121_official_styling_120017537_r-1000-1333"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/gl/OFFICIAL_IMAGES/23081406122_official_styling_120017813_r-1000-1333"
              height="500"
              ></v-img>
            </v-col>
          </v-row>
          <v-row cols="3" class="mt-2">
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/gl/OFFICIAL_IMAGES/230904083038_official_styling_120017991_c-600-800"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/gl/OFFICIAL_IMAGES/23080201132_official_styling_120017651_r-1000-1333"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/gl/OFFICIAL_IMAGES/23072503120_official_styling_120017615_r-1000-1333"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/gl/OFFICIAL_IMAGES/230808063130_official_styling_120017768_r-1000-1333"
              height="500"
              ></v-img>
            </v-col>
          </v-row>
          <v-row cols="3" class="mt-2">
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/gl/OFFICIAL_IMAGES/230210083114_official_styling_120016668_r-1000-1333"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/gl/OFFICIAL_IMAGES/230511064533_official_styling_120017303_r-1000-1333"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/gl/OFFICIAL_IMAGES/230511064535_official_styling_120017323_r-1000-1333"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/gl/OFFICIAL_IMAGES/23022101116_official_styling_120016752_r-1000-1333"
              height="500"
              ></v-img>
            </v-col>
          </v-row>
        </v-window-item>

        <v-window-item value="two">
          <v-row>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/th/SR_IMAGES/ugc_stylehint_uq_th_photo_230729_1143427_c-600-800"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/th/SR_IMAGES/ugc_stylehint_uq_th_photo_230811_1151815_c-600-800"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/th/SR_IMAGES/ugc_stylehint_uq_th_photo_230727_1142157_c-600-800"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/th/SR_IMAGES/ugc_stylehint_uq_th_photo_230728_1142864_c-600-800"
              height="500"
              ></v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/th/SR_IMAGES/ugc_stylehint_uq_th_photo_230302_1050050_c-600-800"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/th/SR_IMAGES/ugc_stylehint_uq_th_photo_230623_1116226_c-600-800"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/th/SR_IMAGES/ugc_stylehint_uq_th_photo_230820_1156626_c-600-800"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/my/SR_IMAGES/ugc_stylehint_uq_my_photo_230506_1089874_c-600-800"
              height="500"
              ></v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/th/SR_IMAGES/ugc_stylehint_uq_th_photo_230824_1159510_c-600-800"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/th/SR_IMAGES/ugc_stylehint_uq_th_photo_230824_1160079_c-600-800"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/th/SR_IMAGES/ugc_stylehint_uq_th_photo_230824_1159483_c-600-800"
              height="500"
              ></v-img>
            </v-col>
            <v-col>
              <v-img 
              src="https://api.fastretailing.com/ugc/v1/uq/th/SR_IMAGES/ugc_stylehint_uq_th_photo_230824_1159635_c-600-800"
              height="500"
              ></v-img>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
  data: () => ({
    rating: 4.5,  
    tab: null,
  }),
};
</script>

<style>
/* Add font และใช้ font */
 @import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.shirt-font {
  font-family: 'Kanit', sans-serif;
}
</style>>