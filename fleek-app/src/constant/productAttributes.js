import React from "react";
import { View } from "react-native";

export const productCategories = {
  Womens: {
    Tops: [
      "T-shirts",
      "Hoodies",
      "Sweatshirts",
      "Jumpers",
      "Cardigans",
      "Shirts",
      "Polo shirts",
      "Blouses",
      "Crop tops",
      "Corsets",
      "Vests",
      "Body suits",
    ],
    Bottoms: [
      "Jeans",
      "Sweatpants",
      "Trousers",
      "Shorts",
      "Leggings",
      "Skirts",
    ],
    Dresses: ["Maxi length", "Midi length", "Mini length"],
    "Coats and Jackets": ["Coats", "Jackets", "Gilets"],
    "Jumpsuits and playsuits": ["Jumpsuits", "Playsuits", "Dungarees"],
    Suits: ["Tailored jackets", "Tailored trousers", "Waistcoats", "Tuxedos"],
    Footwear: [
      "Trainers",
      "Slides",
      "Sandals",
      "Flip flops",
      "Slippers",
      "Brogues",
      "Oxfords",
      "Loafers",
      "Boots",
      "Boat shoes",
      "Espadrilles",
      "Ballet shoes",
      "Clogs",
      "Courts",
      "Mules",
    ],
    accessories: [
      "Bags",
      "Belts",
      "Hats and caps",
      "Gloves",
      "Scarves and wraps",
      "Sunglasses",
      "Wallets and cardholders",
      "Jewellery",
      "Watches",
      "Hair Accesories",
    ],
    Nightwear: ["Pyjamas", "Robes"],
  },
  Mens: {
    Tops: [
      "Hoodies",
      "Sweatshirts",
      "Jumpers",
      "Cardigans",
      "Shirts",
      "Polo shirts",
      "Blouses",
      "Crop tops",
      "Vests",
      "Body suits",
    ],
    Bottoms: ["Jeans", "Sweatpants", "Trousers", "Shorts", "Leggings"],
    "Coats and Jackets": ["Coats", "Jackets", "Gilets"],
    "Jumpsuits and playsuits": ["Jumpsuits", "Playsuits", "Dungarees"],
    Suits: [
      "Suits",
      "Tailored jackets",
      "Tailored trousers",
      "Waistcoats",
      "Tuxedos",
    ],
    Footwear: [
      "Trainers",
      "Slides",
      "Sandals",
      "Flip flops",
      "Slippers",
      "Brogues",
      "Oxfords",
      "Loafers",
      "Boots",
      "Boat shoes",
      "Espadrilles",
      "Ballet shoes",
      "Clogs",
      "Courts",
      "Mules",
    ],
    accessories: [
      "Bags",
      "Belts",
      "Hats and caps",
      "Gloves",
      "Scarves and wraps",
      "Sunglasses",
      "Wallets and cardholders",
      "Jewellery",
      "Watches",
      "Hair Accesories",
    ],
    Nightwear: ["Pyjamas", "Robes"],
  },
  Kids: {
    Tops: [
      "T-shirts",
      "Hoodies",
      "Sweatshirts",
      "Jumpers",
      "Cardigans",
      "Shirts",
      "Polo shirts",
      "Blouses",
      "Crop tops",
      "Corsets",
      "Vests",
      "Body suits",
    ],
    Bottoms: ["Jeans", "Sweatpants", "Trousers", "Shorts", "Leggings"],
    Dresses: ["Maxi length", "Midi length", "Mini length"],
    "Coats and Jackets": ["Coats", "Jackets", "Gilets"],
    "Jumpsuits and playsuits": ["Jumpsuits", "Playsuits", "Dungarees"],
    Suits: [
      "Suits",
      "Tailored jackets",
      "Tailored trousers",
      "Waistcoats",
      "Tuxedos",
    ],
    Footwear: [
      "Trainers",
      "Slides",
      "Sandals",
      "Flip flops",
      "Slippers",
      "Brogues",
      "Oxfords",
      "Loafers",
      "Boots",
      "Boat shoes",
      "Espadrilles",
      "Ballet shoes",
      "Clogs",
      "Courts",
      "Mules",
    ],
    accessories: [
      "Bags",
      "Belts",
      "Hats and caps",
      "Gloves",
      "Scarves and wraps",
      "Sunglasses",
      "Wallets and cardholders",
      "Jewellery",
      "Watches",
      "Hair Accesories",
    ],
    Nightwear: ["Pyjamas", "Robes"],
  },
  Accesories: {},
  Others: {},
};

export const productConditionsList = [
  { label: "Like new", value: "Like new" },
  { label: "Used - A grade", value: "Used - A grade" },
  { label: "Used - B grade", value: "Used - B grade" },
  { label: "Used - C grade", value: "Used - C grade" },
];

export const productSourceList = [
  { label: "Vintage", value: "Vintage" },
  { label: "Preloved", value: "Preloved" },
  { label: "Reworked", value: "Reworked" },
  { label: "Custom", value: "Custom" },
  { label: "Handmade", value: "Handmade" },
  { label: "Deadstock", value: "Deadstock" },
  { label: "Designer", value: "Designer" },
];

export const productAgeList = [
  { label: "Modern", value: "Modern" },
  { label: "Y2K", value: "Y2K" },
  { label: "90s", value: "90s" },
  { label: "80s", value: "80s" },
  { label: "70s", value: "70s" },
  { label: "60s", value: "60s" },
  { label: "50s", value: "50s" },
  { label: "Antique", value: "Antique" },
];

export const productStyleList = [
  { label: "StreetWear", value: "StreetWear" },
  { label: "Sportswear", value: "Sportswear" },
  { label: "LoungeWear", value: "LoungeWear" },
  { label: "Goth", value: "Goth" },
  { label: "Retro", value: "Retro" },
  { label: "Boho", value: "Boho" },
  { label: "Western", value: "Western" },
  { label: "Indie", value: "Indie" },
  { label: "Skater", value: "Skater" },
  { label: "Rave", value: "Rave" },
  { label: "Costume", value: "Costume" },
  { label: "Cosplay", value: "Cosplay" },
  { label: "Grunge", value: "Grunge" },
  { label: "Emo", value: "Emo" },
  { label: "Minimalist", value: "Minimalist" },
  { label: "Avant Gard", value: "Avant Gard" },
  { label: "Punk", value: "Punk" },
  { label: "Glam", value: "Glam" },
  { label: "Regency", value: "Regency" },
  { label: "Casual", value: "Casual" },
  { label: "Techwear", value: "Techwear" },
  { label: "Futuristic", value: "Futuristic" },
  { label: "Cottage", value: "Cottage" },
  { label: "Fairy", value: "Fairy" },
  { label: "y2k", value: "y2k" },
  { label: "Luxury", value: "Luxury" },
  { label: "Reworks", value: "Reworks" },
  { label: "Workwear", value: "Workwear" },
  { label: "Military", value: "Military" },
];

export const createDropDownList = (list) => {
  const data = [];

  list.forEach((item) => {
    obj = {
      label: item,
      value: item,
    };
    data.push(obj);
  });
  return data;
};

export const renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#EFEFEF",
      }}
    />
  );
};

export const categoriesList = createDropDownList(
  Object.keys(productCategories)
);

// sets of all different tags to match user selections with the appropriate tag
export const categorySet = new Set([
  "Womens",
  "Mens",
  "Accessories",
  "Kids",
  "Others",
]);
export const subCategorySet = new Set([
  "Tops",
  "Bottoms",
  "Dresses",
  "Coats and Jackets",
  "Suits",
  "Footwear",
  "accessories",
  "Nightwear",
]);
export const secondSubCategorySet = new Set([
  "T-shirts",
  "Hoodies",
  "Sweatshirts",
  "Jumpers",
  "Cardigans",
  "Shirts",
  "Polo shirts",
  "Blouses",
  "Crop tops",
  "Corsets",
  "Vests",
  "Body suits",
  "Jeans",
  "Sweatpants",
  "Trousers",
  "Shorts",
  "Leggings",
  "Maxi length",
  "Midi length",
  "Mini length",
  "Coats",
  "Jackets",
  "Gilets",
  "Jumpsuits",
  "Playsuits",
  "Dungarees",
  "Trainers",
  "Slides",
  "Sandals",
  "Flip flops",
  "Slippers",
  "Brogues",
  "Oxfords",
  "Loafers",
  "Boots",
  "Boat shoes",
  "Espadrilles",
  "Ballet shoes",
  "Clogs",
  "Courts",
  "Mules",
  "Bags",
  "Belts",
  "Hats and caps",
  "Gloves",
  "Scarves and wraps",
  "Sunglasses",
  "Wallets and cardholders",
  "Jewellery",
  "Watches",
  "Hair Accesories",
  "Tailored jackets",
  "Tailored trousers",
  "Waistcoats",
  "Tuxedos",
  "Pyjamas",
  "Robes",
]);
export const productConditionSet = new Set([
  "Used - A grade",
  "Used - B grade",
  "Used - C grade",
  "Like new",
]);
export const productSourceSet = new Set([
  "Vintage",
  "Preloved",
  "Reworked",
  "Custom",
  "Designer",
  "Handmade",
  "Deadstock",
  "Designer",
]);
export const productAgeSet = new Set([
  "50s",
  "60s",
  "70s",
  "80s",
  "90s",
  "Y2K",
  "Modern",
  "Antique",
]);
export const productStyleSet = new Set([
  "StreetWear",
  "Sportswear",
  "Loungewear",
  "Goth",
  "Retro",
  "Boho",
  "Western",
  "Indie",
  "Skater",
  "Rave",
  "Costume",
  "Cosplay",
  "Grunge",
  "Emo",
  "Minimalist",
  "Preppy",
  "Avant Gard",
  "Punk",
  "Glam",
  "Regency",
  "Casual",
  "Techwear",
  "Futuristic",
  "Cottage",
  "Fairy",
  "y2k",
  "Luxury",
  "Reworks",
  "Workwear",
  "Military",
]);