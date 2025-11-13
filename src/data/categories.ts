import img1 from "../assets/product_1.png";
import img2 from "../assets/shose_3.png";
import img3 from "../assets/women_baggg.jpg";
import img4 from "../assets/women_accessories.jpg";
import img5 from "../assets/women_beauty.jpg";
import img6 from "../assets/men_jacket.png";
import img7 from "../assets/shose_3.png";
import img8 from "../assets/men_accessories.jpg";
import img10 from "../assets/trends_2.png";
import img11 from "../assets/girl_kid.jpg";
import img12 from "../assets/boy_kid.jpg";
import img13 from "../assets/hero_4.jpg";
import img14 from "../assets/kids_toys.jpg";




const categories = [
  {
    id: "women",
    name: "Women",
    gender: "women",
    subcategories: [
      {
        id: "women-clothing",
        name: "Clothing",
        productType: "clothing",
        image: img1,
        subSubcategories: [
          { id: "women-dresses", name: "Dresses", productType: "dresses" },
          { id: "women-tops", name: "Tops", productType: "tops" },
          { id: "women-t-shirts", name: "T-Shirts", productType: "t-shirts" },
          { id: "women-blouses", name: "Blouses", productType: "blouses" },
          { id: "women-jeans", name: "Jeans", productType: "jeans" },
          { id: "women-pants", name: "Pants", productType: "pants" },
        ],

        discoverMore: [
          { id: "women-skirts", name: "Skirts", productType: "skirts" },
          { id: "women-shorts", name: "Shorts", productType: "shorts" },
          { id: "women-jackets", name: "Jackets", productType: "jackets" },
          { id: "women-coats", name: "Coats", productType: "coats" },
          { id: "women-sweaters", name: "Sweaters", productType: "sweaters" },
          { id: "women-hoodies", name: "Hoodies", productType: "hoodies" },
        ],

        topBrands: [
          { id: "brand-zara", name: "Zara", link: "/brand/zara" },
          { id: "brand-hm", name: "H&M", link: "/brand/h&m" },
          { id: "brand-mango", name: "Mango", link: "/brand/mango" },
          { id: "brand-veromoda", name: "Vero Moda", link: "/brand/vero-moda" },
          { id: "brand-only", name: "ONLY", link: "/brand/only" },
          { id: "brand-levi", name: "Levi's", link: "/brand/levis" },
        
        ],
      },
      {
        id: "women-shoes",
        name: "Shoes",
        productType: "shoes",
        image: img2,

        subSubcategories: [
          { id: "women-sneakers", name: "Sneakers", productType: "sneakers" },
          { id: "women-heels", name: "Heels", productType: "heels" },
          { id: "women-boots", name: "Boots", productType: "boots" },
          { id: "women-sandals", name: "Sandals", productType: "sandals" },
          { id: "women-flats", name: "Flats", productType: "flats" },
          { id: "women-loafers", name: "Loafers", productType: "loafers" },
         
        ],
        discoverMore: [
          { id: "women-slippers", name: "Slippers", productType: "slippers" },
          { id: "women-clogs", name: "Clogs", productType: "clogs" },
          { id: "women-wedges", name: "Wedges", productType: "wedges" },
          { id: "women-oxfords", name: "Oxfords", productType: "oxfords" },
          { id: "women-derby", name: "Derby Shoes", productType: "derby" },
          {
            id: "women-running-shoes",
            name: "Running Shoes",
            productType: "running-shoes",
          },
         
        ],
        topBrands: [
          { id: "brand-nike", name: "Nike", link: "/brand/nike" },
          { id: "brand-adidas", name: "Adidas", link: "/brand/adidas" },
          { id: "brand-puma", name: "Puma", link: "/brand/puma" },
          { id: "brand-reebok", name: "Reebok", link: "/brand/reebok" },
          { id: "brand-skechers", name: "Skechers", link: "/brand/skechers" },
          { id: "brand-converse", name: "Converse", link: "/brand/converse" },
         
        ],
      },
      {
        id: "women-bags",
        name: "Bags",
        productType: "bags",
        image: img3,

        subSubcategories: [
          { id: "women-handbags", name: "Handbags", productType: "handbags" },
          {
            id: "women-backpacks",
            name: "Backpacks",
            productType: "backpacks",
          },
          { id: "women-clutches", name: "Clutches", productType: "clutches" },
          { id: "women-totes", name: "Tote Bags", productType: "tote-bags" },
          { id: "women-wallets", name: "Wallets", productType: "wallets" },
          {
            id: "women-crossbody",
            name: "Crossbody Bags",
            productType: "crossbody-bags",
          },
        
        ],

        discoverMore: [
          {
            id: "women-bucket-bags",
            name: "Bucket Bags",
            productType: "bucket-bags",
          },
          {
            id: "women-mini-bags",
            name: "Mini Bags",
            productType: "mini-bags",
          },
          { id: "women-satchels", name: "Satchels", productType: "satchels" },
          {
            id: "women-laptop-bags",
            name: "Laptop Bags",
            productType: "laptop-bags",
          },
          {
            id: "women-travel-bags",
            name: "Travel Bags",
            productType: "travel-bags",
          },
          {
            id: "women-belt-bags",
            name: "Belt Bags",
            productType: "belt-bags",
          },
        
        ],
        topBrands: [
          {
            id: "brand-michaelkors",
            name: "Michael Kors",
            link: "/brand/michael-kors",
          },
          { id: "brand-coach", name: "Coach", link: "/brand/coach" },
          {
            id: "brand-kate-spade",
            name: "Kate Spade",
            link: "/brand/kate-spade",
          },
          {
            id: "brand-toryburch",
            name: "Tory Burch",
            link: "/brand/tory-burch",
          },
          { id: "brand-guess", name: "Guess", link: "/brand/guess" },
          { id: "brand-aldo", name: "Aldo", link: "/brand/aldo" },
        
        ],
      },
      {
        id: "women-accessories",
        name: "Accessories",
        productType: "accessories",
        image: img4,

        subSubcategories: [
          { id: "women-jewelry", name: "Jewelry", productType: "jewelry" },
          { id: "women-scarves", name: "Scarves", productType: "scarves" },
          { id: "women-hats", name: "Hats", productType: "hats" },
          { id: "women-belts", name: "Belts", productType: "belts" },
          { id: "women-belts", name: "Belts", productType: "belts" },
          {
            id: "women-sunglasses",
            name: "Sunglasses",
            productType: "sunglasses",
          },
        ],
        discoverMore: [
          {
            id: "women-hair",
            name: "Hair Accessories",
            productType: "hair-accessories",
          },
          {
            id: "women-socks-tights",
            name: "Socks & Tights",
            productType: "socks-tights",
          },
          { id: "women-watches", name: "Watches", productType: "watches" },
          {
            id: "women-keychains",
            name: "Keychains & Charms",
            productType: "keychains-charms",
          },
          {
            id: "women-tech-accessories",
            name: "Tech Accessories",
            productType: "tech-accessories",
          },
         
        ],
        topBrands: [
          { id: "brand-rayban", name: "Ray-Ban", link: "/brand/ray-ban" },
          {
            id: "brand-michaelkors",
            name: "Michael Kors",
            link: "/brand/michael-kors",
          },
          { id: "brand-fossil", name: "Fossil", link: "/brand/fossil" },
          { id: "brand-guess", name: "Guess", link: "/brand/guess" },
          { id: "brand-aldo", name: "Aldo", link: "/brand/aldo" },
          { id: "brand-dkny", name: "DKNY", link: "/brand/dkny" },
       
        ],
      },
      {
        id: "women-beauty",
        name: "Beauty",
        productType: "beauty",
        image: img5,

        subSubcategories: [
          { id: "women-skincare", name: "Skincare", productType: "skincare" },
          { id: "women-makeup", name: "Makeup", productType: "makeup" },
          { id: "women-makeup", name: "Makeup", productType: "makeup" },
          {
            id: "women-fragrance",
            name: "Fragrance",
            productType: "fragrance",
          },
          { id: "women-haircare", name: "Hair Care", productType: "haircare" },
        ],
        discoverMore: [
          { id: "women-bodycare", name: "Body Care", productType: "bodycare" },
          {
            id: "women-bath-shower",
            name: "Bath & Shower",
            productType: "bath-shower",
          },
          { id: "women-nailcare", name: "Nail Care", productType: "nailcare" },
          {
            id: "women-tools-brushes",
            name: "Tools & Brushes",
            productType: "tools-brushes",
          },
          { id: "women-sun-care", name: "Sun Care", productType: "sun-care" },
        
        ],
        topBrands: [
          { id: "brand-mac", name: "MAC", link: "/brand/mac" },
          { id: "brand-loreal", name: "L'Oréal", link: "/brand/loreal" },
          {
            id: "brand-maybelline",
            name: "Maybelline",
            link: "/brand/maybelline",
          },
          { id: "brand-sephora", name: "Sephora", link: "/brand/sephora" },
          { id: "brand-nyx", name: "NYX", link: "/brand/nyx" },
         
        ],
      },
    ],
  },
  {
    id: "men",
    name: "Men",
    gender: "men",

    subcategories: [
      {
        id: "men-clothing",
        name: "Clothing",
        productType: "clothing",
        image: img6,

        subSubcategories: [
          { id: "men-t-shirts", name: "T-Shirts", productType: "t-shirts" },
          { id: "men-shirts", name: "Shirts", productType: "shirts" },
          { id: "men-jeans", name: "Jeans", productType: "jeans" },
          { id: "men-pants", name: "Pants", productType: "pants" },
          { id: "men-shorts", name: "Shorts", productType: "shorts" },
          { id: "men-jackets", name: "Jackets", productType: "jackets" },
        ],
        discoverMore: [
          { id: "men-coats", name: "Coats", productType: "coats" },
          { id: "men-sweaters", name: "Sweaters", productType: "sweaters" },
          { id: "men-hoodies", name: "Hoodies", productType: "hoodies" },
          {
            id: "men-activewear",
            name: "Activewear",
            productType: "activewear",
          },
          { id: "men-swimwear", name: "Swimwear", productType: "swimwear" },
          { id: "men-underwear", name: "Underwear", productType: "underwear" },
        ],
        topBrands: [
          { id: "brand-nike", name: "Nike", link: "/brand/nike" },

          { id: "brand-levis", name: "Levi's", link: "/brand/levis" },
          { id: "brand-zara", name: "Zara", link: "/brand/zara" },
          { id: "brand-hm", name: "H&M", link: "/brand/h&m" },
          { id: "brand-gap", name: "GAP", link: "/brand/gap" },
          {
            id: "brand-tommy",
            name: "Tommy Hilfiger",
            link: "/brand/tommy-hilfiger",
          },
        ],
      },
      {
        id: "men-shoes",
        name: "Shoes",
        productType: "shoes",
        image: img7,

        subSubcategories: [
          { id: "men-sneakers", name: "Sneakers", productType: "sneakers" },
          { id: "men-boots", name: "Boots", productType: "boots" },
          { id: "men-loafers", name: "Loafers", productType: "loafers" },
          { id: "men-dress", name: "Dress Shoes", productType: "dress-shoes" },
          { id: "men-sandals", name: "Sandals", productType: "sandals" },
          {
            id: "men-athletic",
            name: "Athletic Shoes",
            productType: "athletic-shoes",
          },
        ],
        discoverMore: [
          { id: "men-slipons", name: "Slip-Ons", productType: "slip-ons" },
          {
            id: "men-espadrilles",
            name: "Espadrilles",
            productType: "espadrilles",
          },
          { id: "men-moccasins", name: "Moccasins", productType: "moccasins" },
          { id: "men-oxfords", name: "Oxfords", productType: "oxfords" },
          { id: "men-derby", name: "Derby Shoes", productType: "derby-shoes" },
          {
            id: "men-running",
            name: "Running Shoes",
            productType: "running-shoes",
          },
        ],
        topBrands: [
          { id: "brand-nike", name: "Nike", link: "/brand/nike" },
          { id: "brand-adidas", name: "Adidas", link: "/brand/adidas" },
          { id: "brand-puma", name: "Puma", link: "/brand/puma" },
          { id: "brand-reebok", name: "Reebok", link: "/brand/reebok" },
          {
            id: "brand-newbalance",
            name: "New Balance",
            link: "/brand/new-balance",
          },
          { id: "brand-converse", name: "Converse", link: "/brand/converse" },
         
        ],
      },
      {
        id: "men-accessories",
        name: "Accessories",
        productType: "accessories",
        image: img8,

        subSubcategories: [
          { id: "men-watches", name: "Watches", productType: "watches" },
          { id: "men-bags", name: "Bags", productType: "bags" },
          { id: "men-wallets", name: "Wallets", productType: "wallets" },
          { id: "men-belts", name: "Belts", productType: "belts" },
          { id: "men-ties", name: "Ties", productType: "ties" },
          { id: "men-hats", name: "Hats", productType: "hats" },
       
        ],
        discoverMore: [
          { id: "men-backpacks", name: "Backpacks", productType: "backpacks" },
          { id: "men-duffle", name: "Duffle Bags", productType: "duffle-bags" },
          { id: "men-bracelets", name: "Bracelets", productType: "bracelets" },
          { id: "men-necklaces", name: "Necklaces", productType: "necklaces" },
          { id: "men-gloves", name: "Gloves", productType: "gloves" },
          { id: "men-scarves", name: "Scarves", productType: "scarves" },
        
        ],
        topBrands: [
          { id: "brand-rayban", name: "Ray-Ban", link: "/brand/rayban" },
          {
            id: "brand-tommyhilfiger",
            name: "Tommy Hilfiger",
            link: "/brand/tommy-hilfiger",
          },
          { id: "brand-fossil", name: "Fossil", link: "/brand/fossil" },
          {
            id: "brand-michaelkors",
            name: "Michael Kors",
            link: "/brand/michael-kors",
          },
          { id: "brand-armani", name: "Armani", link: "/brand/armani" },
         
        ],
      },
      {
        id: "men-brands",
        name: "Brands",
        productType: "brand",
        image: img10,

        subSubcategories: [
          { id: "men-nike", name: "Nike", productType: "nike" },
          { id: "men-adidas", name: "Adidas", productType: "adidas" },
          { id: "men-puma", name: "Puma", productType: "puma" },
          { id: "men-levis", name: "Levi's", productType: "levis" },
          { id: "men-zara", name: "Zara", productType: "zara" },
          { id: "men-uniqlo", name: "Uniqlo", productType: "uniqlo" },
        
        ],
        discoverMore: [
          { id: "men-reebok", name: "Reebok", productType: "reebok" },
          {
            id: "men-newbalance",
            name: "New Balance",
            productType: "new-balance",
          },
          { id: "men-columbia", name: "Columbia", productType: "columbia" },
          {
            id: "men-the-north-face",
            name: "The North Face",
            productType: "the-north-face",
          },
          {
            id: "men-calvinklein",
            name: "Calvin Klein",
            productType: "calvin-klein",
          },
          { id: "men-lacoste", name: "Lacoste", productType: "lacoste" },
     
        ],
        topBrands: [
          { id: "brand-nike", name: "Nike", link: "/brand/nike" },
          { id: "brand-adidas", name: "Adidas", link: "/brand/adidas" },
          { id: "brand-puma", name: "Puma", link: "/brand/puma" },
          {
            id: "brand-tommy",
            name: "Tommy Hilfiger",
            link: "/brand/tommy-hilfiger",
          },
          {
            id: "brand-armani",
            name: "Armani Exchange",
            link: "/brand/armani-exchange",
          },
          { id: "brand-gucci", name: "Gucci", link: "/brand/gucci" },
      
         
        ],
      },
    ],
  },
  {
    id: "kids",
    name: "Kids",
    gender: "kids",
    subcategories: [
      {
        id: "kids-girls",
        name: "Girls",
        productType: "girls",
        image: img11,

        subSubcategories: [
          { id: "girls-dresses", name: "Dresses", productType: "dresses" },
          { id: "girls-tops", name: "Tops", productType: "tops" },
          { id: "girls-pants", name: "Pants", productType: "pants" },
          { id: "girls-shoes", name: "Shoes", productType: "shoes" },
          {
            id: "girls-accessories",
            name: "Accessories",
            productType: "accessories",
          },
          { id: "girls-skirts", name: "Skirts", productType: "skirts" },
         
        ],
        discoverMore: [
          { id: "girls-swimwear", name: "Swimwear", productType: "swimwear" },
          {
            id: "girls-nightwear",
            name: "Nightwear",
            productType: "nightwear",
          },
          {
            id: "girls-underwear",
            name: "Underwear",
            productType: "underwear",
          },
          {
            id: "girls-schoolwear",
            name: "Schoolwear",
            productType: "schoolwear",
          },
          {
            id: "girls-sportswear",
            name: "Sportswear",
            productType: "sportswear",
          },
          {
            id: "girls-hairaccessories",
            name: "Hair Accessories",
            productType: "hair-accessories",
          },
         
        ],

        topBrands: [
          { id: "brand-gap-kids", name: "GAP Kids", link: "/brand/gap-kids" },
          { id: "brand-carters", name: "Carter's", link: "/brand/carters" },
          { id: "brand-hm-kids", name: "H&M Kids", link: "/brand/hm-kids" },
          {
            id: "brand-zara-kids",
            name: "Zara Kids",
            link: "/brand/zara-kids",
          },
          {
            id: "brand-nike-kids",
            name: "Nike Kids",
            link: "/brand/nike-kids",
          },
          {
            id: "brand-adidas-kids",
            name: "Adidas Kids",
            link: "/brand/adidas-kids",
          },
       
        ],
      },
      {
        id: "kids-boys",
        name: "Boys",
        productType: "boys",
        image: img12,

        subSubcategories: [
          { id: "boys-t-shirts", name: "T-Shirts", productType: "t-shirts" },
          { id: "boys-pants", name: "Pants", productType: "pants" },
          { id: "boys-shorts", name: "Shorts", productType: "shorts" },
          { id: "boys-shoes", name: "Shoes", productType: "shoes" },
          {
            id: "boys-accessories",
            name: "Accessories",
            productType: "accessories",
          },
          { id: "boys-shirts", name: "Shirts", productType: "shirts" },
        
        ],
        discoverMore: [
          { id: "boys-swimwear", name: "Swimwear", productType: "swimwear" },
          { id: "boys-nightwear", name: "Nightwear", productType: "nightwear" },
          { id: "boys-underwear", name: "Underwear", productType: "underwear" },
          {
            id: "boys-schoolwear",
            name: "Schoolwear",
            productType: "schoolwear",
          },
          {
            id: "boys-sportswear",
            name: "Sportswear",
            productType: "sportswear",
          },
          { id: "boys-hats", name: "Hats & Caps", productType: "hats-caps" },
        
        ],
        topBrands: [
          { id: "brand-gap-kids", name: "GAP Kids", link: "/brand/gap-kids" },
          { id: "brand-carters", name: "Carter's", link: "/brand/carters" },
          { id: "brand-hm-kids", name: "H&M Kids", link: "/brand/hm-kids" },
          {
            id: "brand-zara-kids",
            name: "Zara Kids",
            link: "/brand/zara-kids",
          },
          {
            id: "brand-nike-kids",
            name: "Nike Kids",
            link: "/brand/nike-kids",
          },
          {
            id: "brand-adidas-kids",
            name: "Adidas Kids",
            link: "/brand/adidas-kids",
          },
        
        ],
      },
      {
        id: "kids-baby",
        name: "Baby",
        productType: "baby",
        image: img13,

        subSubcategories: [
          { id: "baby-girls", name: "Baby Girls", productType: "baby-girls" },
          { id: "baby-boys", name: "Baby Boys", productType: "baby-boys" },
          { id: "baby-shoes", name: "Shoes", productType: "baby-shoes" },
          {
            id: "baby-accessories",
            name: "Accessories",
            productType: "baby-accessories",
          },
          {
            id: "baby-bodysuits",
            name: "Bodysuits",
            productType: "baby-bodysuits",
          },
          { id: "baby-rompers", name: "Rompers", productType: "baby-rompers" },
        ],
        discoverMore: [
          {
            id: "baby-sleepwear",
            name: "Sleepwear",
            productType: "baby-sleepwear",
          },
          {
            id: "baby-outerwear",
            name: "Outerwear",
            productType: "baby-outerwear",
          },
          {
            id: "baby-socks",
            name: "Socks & Booties",
            productType: "baby-socks-booties",
          },
          {
            id: "baby-bibs",
            name: "Bibs & Burp Cloths",
            productType: "baby-bibs",
          },
          {
            id: "baby-swimwear",
            name: "Swimwear",
            productType: "baby-swimwear",
          },
          {
            id: "baby-hats",
            name: "Hats & Caps",
            productType: "baby-hats-caps",
          },
        ],
        topBrands: [
          { id: "brand-gap-kids", name: "GAP Kids", link: "/brand/gap-kids" },
          { id: "brand-carters", name: "Carter's", link: "/brand/carters" },
          { id: "brand-hm-kids", name: "H&M Kids", link: "/brand/hm-kids" },
          {
            id: "brand-zara-kids",
            name: "Zara Kids",
            link: "/brand/zara-kids",
          },
          {
            id: "brand-nike-kids",
            name: "Nike Kids",
            link: "/brand/nike-kids",
          },
          {
            id: "brand-adidas-kids",
            name: "Adidas Kids",
            link: "/brand/adidas-kids",
          },
        
        ],
      },
      {
        id: "kids-toys",
        name: "Toys",
        productType: "toys",
        image: img14,

        subSubcategories: [
          { id: "toys-dolls", name: "Dolls", productType: "dolls" },
          { id: "toys-vehicles", name: "Vehicles", productType: "vehicles" },
          {
            id: "toys-stuffed",
            name: "Stuffed Animals",
            productType: "stuffed-animals",
          },
          { id: "toys-puzzles", name: "Puzzles", productType: "puzzles" },
          {
            id: "toys-lego",
            name: "Building Blocks & LEGO",
            productType: "building-blocks",
          },
          {
            id: "toys-educational",
            name: "Educational Toys",
            productType: "educational-toys",
          },
        ],
        discoverMore: [
          {
            id: "toys-action-figures",
            name: "Action Figures",
            productType: "action-figures",
          },
          {
            id: "toys-arts-crafts",
            name: "Arts & Crafts",
            productType: "arts-crafts",
          },
          {
            id: "toys-outdoor",
            name: "Outdoor Toys",
            productType: "outdoor-toys",
          },
          {
            id: "toys-musical",
            name: "Musical Toys",
            productType: "musical-toys",
          },
          {
            id: "toys-electronic",
            name: "Electronic Toys",
            productType: "electronic-toys",
          },
        ],
        topBrands: [
          { id: "brand-lego", name: "LEGO", link: "/brand/lego" },
          { id: "brand-barbie", name: "Barbie", link: "/brand/barbie" },
          {
            id: "brand-hotwheels",
            name: "Hot Wheels",
            link: "/brand/hot-wheels",
          },
          { id: "brand-nerf", name: "Nerf", link: "/brand/nerf" },
          { id: "brand-playdoh", name: "Play-Doh", link: "/brand/play-doh" },
          {
            id: "brand-fisherprice",
            name: "Fisher-Price",
            link: "/brand/fisher-price",
          },
         
        ],
      },
    ],
  },
];

export default categories;
