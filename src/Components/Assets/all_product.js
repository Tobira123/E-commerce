import p1_img from "./product_1.png";
import p1_img_2 from "./product_1_2.png";
import p1_img_3 from "./product_1_3.png";

import p2_img from "./product_2.png";
import p2_img_1 from "./product_2_1.png";
import p2_img_2 from "./product_2_2.png";
import p2_img_3 from "./product_2_3.png";
import p2_img_4 from "./product_2_4.png";


import p3_img from "./product_3.png";
import p3_img_1 from "./product_3_1.png";
import p3_img_2 from "./product_3_2.png";
import p3_img_3 from "./product_3_3.png";
import p3_img_4 from "./product_3_4.png";


import p4_img from "./product_4.png";
import p4_img_1 from "./product_4_1.png";
import p4_img_2 from "./product_4_2.png";
import p4_img_3 from "./product_4_3.png";
import p4_img_4 from "./product_4_4.png";

import p5_img from "./product_5.png";
import p5_img_1 from "./product_5_1.png";
import p5_img_2 from "./product_5_2.png";
import p5_img_3 from "./product_5_3.png";
import p5_img_4 from "./product_5_4.png";

import p6_img from "./product_6.png";
import p6_img_1 from "./product_6_1.png";
import p6_img_2 from "./product_6_2.png";
import p6_img_3 from "./product_6_3.png";
import p6_img_4 from "./product_6_4.png";

import p7_img from "./product_7.png";
import p7_img_1 from "./product_7_1.png";
import p7_img_2 from "./product_7_2.png";
import p7_img_3 from "./product_7_3.png";


import p8_img from "./product_8.png";
import p8_img_1 from "./product_8_1.png";
import p8_img_2 from "./product_8_2.png";
import p8_img_3 from "./product_8_3.png";


import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Perfume MONTBLANC para dama",
    category: "women",
    image: p1_img,
    additionalImages: [ p1_img_2,p1_img_3], // Imágenes adicionales
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Hermosos abanícos de diferentes modelos",
    category: "women",
    image: p2_img,
    additionalImages: [p2_img_1,p2_img_2,p2_img_3,p2_img_4], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Hermosos abanícos de diferentes modelos",
    category: "women",
    image: p3_img,
    additionalImages: [p3_img_1, p3_img_2, p3_img_3, p3_img_4], // Array vacío
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Hermosos abanícos de diferentes modelos",
    category: "women",
    image: p4_img,
    additionalImages: [p4_img_1, p4_img_2 , p4_img_3, p4_img_4  ], // Array vacío
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Hermosos abanícos de diferentes modelos",
    category: "women",
    image: p5_img,
    additionalImages: [p5_img_1, p5_img_2, p5_img_3, p5_img_4], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "Bolsos de diferentes tamaños",
    category: "women",
    image: p6_img,
    additionalImages: [p6_img_1, p6_img_2, p6_img_3, p6_img_4], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Bolsos de varios colores",
    category: "women",
    image: p7_img,
    additionalImages: [p7_img_1, p7_img_2, p7_img_3], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "Carteras de varios tamaños y colores",
    category: "women",
    image: p8_img,
    additionalImages: [p8_img_1, p8_img_2, p8_img_3], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  // {
  //   id: 9,
  //   name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //   category: "women",
  //   image: p9_img,
  //   additionalImages: [], // Array vacío
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 10,
  //   name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //   category: "women",
  //   image: p10_img,
  //   additionalImages: [], // Array vacío
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 11,
  //   name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //   category: "women",
  //   image: p11_img,
  //   additionalImages: [], // Array vacío
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 12,
  //   name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //   category: "women",
  //   image: p12_img,
  //   additionalImages: [], // Array vacío
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  {
    id: 13,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p13_img,
    additionalImages: [], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p14_img,
    additionalImages: [], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p15_img,
    additionalImages: [], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p16_img,
    additionalImages: [], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p17_img,
    additionalImages: [], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p18_img,
    additionalImages: [], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p19_img,
    additionalImages: [], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p20_img,
    additionalImages: [], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p21_img,
    additionalImages: [], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p22_img,
    additionalImages: [], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p23_img,
    additionalImages: [], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p24_img,
    additionalImages: [], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p25_img,
    additionalImages: [], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 26,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p26_img,
    additionalImages: [], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 27,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p27_img,
    additionalImages: [], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 28,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p28_img,
    additionalImages: [], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 29,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p29_img,
    additionalImages: [], // Array vacío
    new_price: 85.0,
    old_price: 120.5,
  },

  {
      id: 30,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      category: "kid",
      image: p30_img,
      additionalImages: [], // Array vacío
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 31,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      category: "kid",
      image: p31_img,
      additionalImages: [], // Array vacío
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 32,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      category: "kid",
      image: p32_img,
      additionalImages: [], // Array vacío
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 33,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      category: "kid",
      image: p33_img,
      additionalImages: [], // Array vacío
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 34,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      category: "kid",
      image: p34_img,
      additionalImages: [], // Array vacío
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 35,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      category: "kid",
      image: p35_img,
      additionalImages: [], // Array vacío
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 36,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      category: "kid",
      image: p36_img,
      additionalImages: [], // Array vacío
      new_price: 85.0,
      old_price: 120.5,
    },
  ];
  
  export default all_product;
  