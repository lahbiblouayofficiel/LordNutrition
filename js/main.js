// --- Data ---
const defaultProducts = [
    {
        id: 1,
        name: "SUPER OFFER 9",
        category: "pack",
        price: 150,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1773436653/gsn-products/1773436652575-Artboard_17_lshv0d.png",
        desc: "BULK MASS 2.5KG 5X MONODOSE CREATINE MONOHYDRATE 200G SHAKRE 700ML",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["chocolate milkshake", "vanilla milkshake"],
        sizes: ["2.5kg"],
        bestSeller: false
    },
    {
        id: 2,
        name: "SUPER OFFER 8",
        category: "pack",
        price: 110,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1773436622/gsn-products/1773436621826-Artboard_16_v2k4pr.png",
        desc: "carbo max 3kg 5X MONODOSE CREATINE MONOHYDRATE 200G SHAKRE 700ML",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["fruit punch"],
        sizes: ["3kg"],
        bestSeller: false
    },
    {
        id: 3,
        name: "SUPER OFFER 7",
        category: "pack",
        price: 150,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1773436593/gsn-products/1773436592277-Artboard_15_ngzpys.png",
        desc: "pure whay 900G 5X MONODOSE CREATINE MONOHYDRATE 200G SHAKRE 700ML multi vitamins",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["chocolate", "vanilla"],
        sizes: ["900kg"],
        bestSeller: false
    },
    {
        id: 4,
        name: "SUPER OFFER 6",
        category: "pack",
        price: 115,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1773436551/gsn-products/1773436550524-Artboard_14_fbobcc.png",
        desc: "Big MASS gainer 1KG 5X MONODOSE CREATINE MONOHYDRATE 200G SHAKRE 700ML peanut butter multi vitamins",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["chocolate", "vanilla"],
        sizes: ["1kg"],
        bestSeller: false
    },
    {
        id: 5,
        name: "SUPER OFFER 5",
        category: "pack",
        price: 240,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1773436459/gsn-products/1773436458469-Artboard_13_j4nysc.png",
        desc: "pure whay 2kG 5X MONODOSE CREATINE MONOHYDRATE 200G SHAKRE 700ML mag+ b-complex zinc bisglycinate fish oil omega-3",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["CHOCOLATE", "VANILLA", "strawberry"],
        sizes: ["2kg"],
        bestSeller: false
    },
    {
        id: 6,
        name: "SUPER OFFER 4",
        category: "pack",
        price: 210,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1773436385/gsn-products/1773436384823-Artboard_12_rx7hqq.png",
        desc: "BULK MASS 5KG 5X MONODOSE CREATINE MONOHYDRATE 200G SHAKRE 700ML",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["CHOCOLATE MILKSHAKE", "VANILLA MILKSHAKE"],
        sizes: ["5kg"],
        bestSeller: false
    },
    {
        id: 7,
        name: "SUPER OFFER 3",
        category: "pack",
        price: 100,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1773436312/gsn-products/1773436311451-Artboard_11_ycc0cz.png",
        desc: "creapure 300g shakre 700ml",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["NON"],
        sizes: ["0.3kg"],
        bestSeller: false
    },
    {
        id: 8,
        name: "SUPER OFFER 2",
        category: "pack",
        price: 180,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1773436227/gsn-products/1773436226208-Artboard_10_wv4px5.png",
        desc: "BIG MASS GAINER 3KG 5X MONODOSE CREATINE MONOHYDRATE 200G SHAKRE 700ML PEANUT BUTTER multi vitamins",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["CHOCOLATE", "VANILLA", "strawberry"],
        sizes: ["3kg"],
        bestSeller: false
    },
    {
        id: 9,
        name: "SUPER OFFER 1",
        category: "pack",
        price: 160,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1773435941/gsn-products/1773435940156-Artboard_1_lowgy8.png",
        desc: "2X CREAPURE MONOHYDRATE",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["NON"],
        sizes: ["0.6kg"],
        bestSeller: false
    },
    {
        id: 10,
        name: "Bulk Mass 5kg",
        category: "protein",
        price: 180,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1772445831/gsn-products/1772445829634-bfeer_esp6zc.png",
        desc: ". PROTEIN COMPLEX    -MPC WPC WPI . ADVANCED PRO CARB MATRIX    -MALTODEXTRIN DEXTROSE-OAT FLOUR . ANABOLIC PERFORMANCE STACK    -25G EAA-5G CREATINE 1G TAURINE-0.5G DAA . VITAMINS & MINERALS   -13 VITAMINS 6 MINERALS",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Choco & vanilla milkshake"],
        sizes: ["5kg"],
        bestSeller: false
    },
    {
        id: 11,
        name: "BULK MASS 2.5Kg",
        category: "protein",
        price: 120,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1771584316/gsn-products/1771584315323-Untitled_2sss_k4yima.png",
        desc: ". PROTEIN COMPLEX    -MPC WPC WPI . ADVANCED PRO CARB MATRIX    -MALTODEXTRIN DEXTROSE-OAT FLOUR . ANABOLIC PERFORMANCE STACK    -25G EAA-5G CREATINE 1G TAURINE-0.5G DAA . VITAMINS & MINERALS   -13 VITAMINS 6 MINERALS",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["chocolate milkshake", "vanilla milkshake"],
        sizes: ["2.5kg"],
        bestSeller: false
    },
    {
        id: 12,
        name: "PROTEIN PANCAKE",
        category: "vitamins",
        price: 70,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1764164092/gsn-products/1764164091710-CaptureAAA_rpbvpc.png",
        desc: "PROTEIN PANCAKE - Supplement sportif premium par GSN Tunisia.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["VANILLA"],
        sizes: ["1KG"],
        bestSeller: false
    },
    {
        id: 13,
        name: "CARBO MAX 3KG",
        category: "protein",
        price: 100,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1764163600/gsn-products/1764163599118-CaptureAAA_vu9zed.png",
        desc: "CARBO MAX 3KG - Supplement sportif premium par GSN Tunisia.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["punch fruit"],
        sizes: ["3KG"],
        bestSeller: false
    },
    {
        id: 14,
        name: "CREATINE MONOHYDRATE 500G",
        category: "preworkout",
        price: 90,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1763918288/gsn-products/1763918287088-Untitled_6_n3n3ee.png",
        desc: "CREATINE MONOHYDRATE 500G - Supplement sportif premium par GSN Tunisia.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["NO"],
        sizes: ["500G"],
        bestSeller: false
    },
    {
        id: 15,
        name: "CREAPURE MONOHYDRATE",
        category: "preworkout",
        price: 100,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1763638956/gsn-products/1763638954436-716yJFKCftL_ugffzh.png",
        desc: "Creapure by Great Sport Nutrition is designed to boost strength, increase muscle mass, and speed up muscle recovery during workouts. It contains pure creatine monohydrate from Creapure, known for its outstanding quality and high purity, making it the perfect choice for athletes looking to enhance performance and energy during short, intense activities.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Unflavored"],
        sizes: ["0.3kg"],
        bestSeller: false
    },
    {
        id: 16,
        name: "BETA ALANINE POWER",
        category: "preworkout",
        price: 60,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1763547326/gsn-products/1763547325664-4_bbgpee.png",
        desc: "BETA ALANINE POWER 250G",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["FRUIT PUNCH"],
        sizes: ["0.25kg"],
        bestSeller: false
    },
    {
        id: 17,
        name: "ARGININE BOOST",
        category: "preworkout",
        price: 60,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1763547259/gsn-products/1763547258208-3_wsec1h.png",
        desc: "ARGININE BOOST",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["FRUIT PUNCH"],
        sizes: ["0.25kg"],
        bestSeller: false
    },
    {
        id: 18,
        name: "CITRULLINE MALATE",
        category: "preworkout",
        price: 60,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1763547194/gsn-products/1763547194071-5_ap55op.png",
        desc: "CITRULLINE",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["FRUIT PUNCH"],
        sizes: ["0.25kg"],
        bestSeller: false
    },
    {
        id: 19,
        name: "GLUTAMINE",
        category: "preworkout",
        price: 60,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1763546705/gsn-products/1763546704311-8_cu6vco.png",
        desc: "GLUTAMINE",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["UNFLAVORED"],
        sizes: ["0.25kg"],
        bestSeller: false
    },
    {
        id: 20,
        name: "HYDRA FUEL",
        category: "preworkout",
        price: 60,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1763546568/gsn-products/1763546567865-1_vloapc.png",
        desc: "HYDRA FUEL",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["FRUIT PUNCH", "FRESH PINEAPPLE"],
        sizes: ["0.2kg"],
        bestSeller: false
    },
    {
        id: 21,
        name: "EAA EXTRA HYDRATION",
        category: "preworkout",
        price: 80,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1763544527/gsn-products/1763544526409-6_onnhsv.png",
        desc: "EAA EXTRA HYDRATION - Supplement sportif premium par GSN Tunisia.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["FRUIT PUNCH"],
        sizes: ["0.45kg"],
        bestSeller: false
    },
    {
        id: 22,
        name: "Pre Workout",
        category: "preworkout",
        price: 90,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1763480865/gsn-products/1763480864953-Capture114_tcstt3.png",
        desc: "Inferno Intense Pre-Workout is a comprehensive formula designed to enhance your training performance. It combines a blend of amino acids, vitamins, and minerals to support energy levels, focus, endurance, and muscle pumps.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["FRIUT PUNCH"],
        sizes: ["0.45kg"],
        bestSeller: false
    },
    {
        id: 23,
        name: "PRO ISOLATE",
        category: "protein",
        price: 140,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1763040210/gsn-products/1763040209642-pi1_1_bbrla5.png",
        desc: "PRO ISO Whey GSN is a dietary supplement that promotes muscle growth and recovery after exercise. It is an ultra-pure whey protein isolate formula perfect for fitness enthusiasts and bodybuilders. Packed with essential amino acids and high in BCAAs. With low fat, carbs, and calories, it's an ideal choice for maintaining a lean physique. Mix it with liquids or use it in recipes. Suitable for lactose intolerant or dairy allergic individuals.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["CHOCOLATE", "VANILLA ICE CREAM", "STRAWBERRY ICE CREAM"],
        sizes: ["0.9kg", "1.6kg"],
        bestSeller: false
    },
    {
        id: 24,
        name: "Big Mass Gainer",
        category: "protein",
        price: 60,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1762896007/gsn-products/1762896006150-3_ayxkey.png",
        desc: "GSN Gainer is a shake created especially for gaining muscle and weight. It combines carbs and amino acids to encourage the growth of muscle. With added creatine, it provides 3 grams of pure creatine daily. It contributes to the preservation and growth of muscle mass because it contains more than 80% whey protein. You can consume more calories thanks to its high-calorie formula, which provides 1351 calories each day.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Chocolate", "Strawberry Ice Cream"],
        sizes: ["1kg", "3kg", "6kg"],
        bestSeller: false
    },
    {
        id: 25,
        name: "Pure Whey",
        category: "protein",
        price: 100,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1762895815/gsn-products/1762895814619-2_nrtos5.png",
        desc: "The Pure whey GSN is high-protein instant powder preparation based on native whey protein concentrate. It's a mix of high-value protein with completely preserved nutritional qualities, cold extracted from dairy source of controlled and extremely pure origin.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Chocolate", "Strawberry Ice Cream", "Vanilla ice cream"],
        sizes: ["0.9kg", "2kg"],
        bestSeller: false
    },
    {
        id: 26,
        name: "Complete Meal Replacement",
        category: "vitamins",
        price: 70,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1764326568/gsn-products/1764326567262-WhatsApp_Image_2025-11-26_at_1.03q_dszdtm.png",
        desc: "GSN Complete Meal Replacement is a nutritious meal substitute that provides balanced energy, 27g of protein, 5.3g of fiber, and essential vitamins and minerals with no added sugar. Formulated with DigeZyme® for better digestion and nutrient absorption, it helps support muscle growth, satiety, and overall well-being perfect for active people and busy lifestyles.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["VANILLA CUPCAKE", "STRAWBERRY CAKE", "CHOCOLATE FUDGE"],
        sizes: ["1KG"],
        bestSeller: false
    },
    {
        id: 27,
        name: "Mega Vitamine",
        category: "pack",
        price: 80,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1760976388/gsn-products/1760976387765-4_v91w6p.png",
        desc: "Multivitamins – supports overall vitality and immune health  Zinc Bisglycinate – promotes hormonal balance and recovery  Magnesium + B-Complex – aids energy production and reduces fatigue  Fish Oil (Omega-3) – supports cardiovascular, brain, and joint health",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Unflavored"],
        sizes: ["Standard"],
        bestSeller: false
    },
    {
        id: 28,
        name: "Big Mass Gainer & Creatine 200g",
        category: "pack",
        price: 150,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1753634012/gsn-products/1753634011126-150_z0mu0r.png",
        desc: "Big Mass Gainer (3 kg) – supports rapid muscle and weight gain with high-quality calories and protein Creatine (200 g) – boosts strength, power, and workout performance",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Melted chocolate", "Vanilla ice cream", "Strawberry ice cream"],
        sizes: ["Standard"],
        bestSeller: true
    },
    {
        id: 29,
        name: "Big Mass Gainer & Multivitamin",
        category: "pack",
        price: 130,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1764165184/gsn-products/1764165182459-1753634028008-140_omulnc_gtnuiy.png",
        desc: "Big Mass Gainer – promotes muscle growth and healthy weight gain with balanced nutrients Multivitamins – supports energy, recovery, and overall wellness",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Melted chocolate", "vanilla ice cream", "Strawberry ice cream"],
        sizes: ["Standard"],
        bestSeller: true
    },
    {
        id: 30,
        name: "Zink & Omega - 3 & Mag + B complex",
        category: "pack",
        price: 70,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1753919904/gsn-products/1753919903518-Untitled-1_js0klu.png",
        desc: "Zinc Bisglycinate – supports immunity and hormonal balance Fish Oil (Omega-3) – promotes heart, brain, and joint health Magnesium + B-Complex – boosts energy metabolism and reduces fatigue",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Unflavored"],
        sizes: ["Standard"],
        bestSeller: false
    },
    {
        id: 31,
        name: "Zinc & Mag+ B complex",
        category: "pack",
        price: 40,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1753919969/gsn-products/1753919967974-Untitled-2_ixksra.png",
        desc: "Zinc Bisglycinate – strengthens immunity and supports hormonal balance Magnesium + B-Complex – enhances energy production and reduces fatigue",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Unflavored"],
        sizes: ["Standard"],
        bestSeller: true
    },
    {
        id: 32,
        name: "Boost performance Plus",
        category: "pack",
        price: 100,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1764165052/gsn-products/1764165051322-wi-fi-smart-phone-message-envelope-and-telephone-icon-set-free-vector_pgvtwu.png",
        desc: "Creatine (500 g) – increases strength, endurance, and muscle performance Multivitamins – supports energy, recovery, and overall health",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Unflavored"],
        sizes: ["Standard"],
        bestSeller: false
    },
    {
        id: 33,
        name: "Nitro muscles",
        category: "pack",
        price: 190,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1764165291/gsn-products/1764165288401-1753634140355-n210_lgokxb_xf8bid.png",
        desc: "Nitro Whey – supports lean muscle growth and post-workout recovery Creatine (200 g) – enhances strength, power, and performance Multivitamins – promotes energy, immunity, and overall well-being",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Melted chocolate", "Vanilla ice cream"],
        sizes: ["Standard"],
        bestSeller: false
    },
    {
        id: 34,
        name: "MAG+ B-COMPLEX",
        category: "vitamins",
        price: 20,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1753635253/gsn-products/1753635252351-17_tehodx.png",
        desc: "This advanced daily formula delivers 415 mg of highly  absorbable magnesium combined with a complete spectrum  of B-complex vitamins to help support energy metabolism,  maintain healthy muscle and nerve function, promote mental  focus, and reduce tiredness and fatigue.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Unflavored"],
        sizes: ["Standard"],
        bestSeller: false
    },
    {
        id: 35,
        name: "ZINC BISGLYCINATE",
        category: "vitamins",
        price: 20,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1753635161/gsn-products/1753635160234-20_y9rzua.png",
        desc: "Zinc Bisglycinate is a premium, chelated form of zinc known  for superior absorption and gentle digestion. It supports  immune health, skin repair, antioxidant defense, and healthy  hormone balance.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Unflavored"],
        sizes: ["Standard"],
        bestSeller: false
    },
    {
        id: 36,
        name: "FISH OIL OMEGA-3",
        category: "vitamins",
        price: 30,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1753635216/gsn-products/1753635215829-18_wvin5r.png",
        desc: "The omega 3 fatty acids EPA and DHA found in fish oils have  anti-inflammatory actions helping to support joint health,  reduce pain and stiffness and improve mobility. They also  contribute to the normal function of the heart and  maintenance of skin condition.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Unflavored"],
        sizes: ["Standard"],
        bestSeller: false
    },
    {
        id: 37,
        name: "MONODOSE PURE WHEY",
        category: "protein",
        price: 70,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1753635273/gsn-products/1753635272675-23_dxzal7.png",
        desc: "PRO ISO Whey GSN is a dietary supplement that promotes muscle growth and recovery after exercise. It is an ultra-pure whey protein isolate formula perfect for fitness enthusiasts and bodybuilders. Packed with essential amino acids and high in BCAAs. With low fat, carbs, and calories, it's an ideal choice for maintaining a lean physique. Mix it with liquids or use it in recipes. Suitable for lactose intolerant or dairy allergic individuals.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["MIX"],
        sizes: ["Standard"],
        bestSeller: true
    },
    {
        id: 38,
        name: "MONODOSE NITRO WHEY",
        category: "protein",
        price: 70,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1753635289/gsn-products/1753635288029-22_vp87vd.png",
        desc: "The Nitro Whey GSN is a formula based on the most filtered and most assimilable protein sources with high biological value. This formula is enriched with creatine, each serving provides 2g of pure creatine per day. Which accelerates lean mass gain by improving the transport of amino-acids, making muscle cells stronger and activating the muscle recovery process.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Unflavored"],
        sizes: ["Standard"],
        bestSeller: false
    },
    {
        id: 39,
        name: "MONODOSE PRO ISOLATE",
        category: "protein",
        price: 80,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1753635305/gsn-products/1753635304187-21_hkd105.png",
        desc: "PRO ISO Whey GSN is a dietary supplement that promotes muscle growth and recovery after exercise. It is an ultra-pure whey protein isolate formula perfect for fitness enthusiasts and bodybuilders. Packed with essential amino acids and high in BCAAs. With low fat, carbs, and calories, it's an ideal choice for maintaining a lean physique. Mix it with liquids or use it in recipes. Suitable for lactose intolerant or dairy allergic individuals.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Unflavored"],
        sizes: ["Standard"],
        bestSeller: false
    },
    {
        id: 40,
        name: "MULTIVITAMIN",
        category: "vitamins",
        price: 20,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1753635430/gsn-products/1753635429205-21.5_xyhktx.png",
        desc: "This multivitamin provides essential vitamins and minerals at 300% of the daily requirement. It includes a full range of B-complex vitamins, A, C, D, E, and K. Also contains key minerals like Iron, Zinc, lodine, Copper, and Manganese. Designed to support energy, immunity, and overall daily wellness. Ideal for filling dietary gaps or increased nutritional needs.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Unflavored"],
        sizes: ["Standard"],
        bestSeller: false
    },
    {
        id: 41,
        name: "CREATINE MONOHYDRATE",
        category: "preworkout",
        price: 50,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1763918094/gsn-products/1763918093267-Untitled-1_rs5ptc.png",
        desc: "Creatine contributes to improved muscle performance, promotes muscle strength and power, and ensures better recovery during successive short-duration, high-intensity strength exercises.* For adults over 55, creatine can enhance the effect of resistance training on muscle strength.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["UNFLAVORED"],
        sizes: ["0.2kg"],
        bestSeller: true
    },
    {
        id: 42,
        name: "NITRO WHEY",
        category: "protein",
        price: 170,
        image: "https://res.cloudinary.com/dvq4ieugm/image/upload/v1752706966/gsn-products/1752706966161-3_j8v0cr.png",
        desc: "The Nitro Whey GSN is a formula based on the most filtered and most assimilable protein sources with high biological value. This formula is enriched with creatine, each serving provides 2g of pure creatine per day. Which accelerates lean mass gain by improving the transport of amino-acids, making muscle cells stronger and activating the muscle recovery process.",
        benefits: ["Produit authentique GSN", "Livraison rapide 24/48h", "100% Authentique"],
        flavors: ["Chocolate", "Strawberry Ice Cream", "Vanilla ice cream"],
        sizes: ["Standard"],
        bestSeller: false
    }
];


let cart = JSON.parse(localStorage.getItem('lordCart')) || [];
let lordProducts = [];

let currentLang = localStorage.getItem('lordLang') || 'FR';

// --- Supabase Configuration ---
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_KEY = 'YOUR_SUPABASE_KEY';
let db = null;

if (SUPABASE_URL !== 'YOUR_SUPABASE_URL' && SUPABASE_KEY !== 'YOUR_SUPABASE_KEY') {
    db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
} else {
    console.warn("Supabase not configured. Using localStorage fallback.");
}

let siteSettings = {
    phone: '+216 12 345 678',
    whatsapp: '12345678',
    email: 'contact@lordnutrition.com',
    address: 'Tunis, Tunisia',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
};

// --- i18n Translations ---
const translations = {
    EN: {
        home: "Home", shop: "Shop", about: "About Us", contact: "Contact",
        hero_title: "FUEL YOUR POWER", hero_subtitle: "Premium sports nutrition for elite athletes.",
        shop_now: "Shop Now",
        top_categories: "Top Categories",
        best_sellers: "Best Sellers",
        view_all: "View All Products",
        cat_protein: "Protein", cat_mass: "Mass Gainers", cat_preworkout: "Pre-Workout", cat_vitamins: "Vitamins", cat_pack: "Packs",
        categories: "Categories", all_products: "All Products",
        order_now: "Order Now", benefits: "Benefits",
        shopping_cart: "Shopping Cart", order_summary: "Order Summary",
        subtotal: "Subtotal", shipping: "Shipping", free: "Free", total: "Total",
        proceed_checkout: "Proceed to Checkout", checkout: "Checkout",
        full_name: "Full Name", phone_number: "Phone Number", address: "Address", city: "City",
        payment_method: "Payment Method", cod: "Cash on Delivery (COD)", confirm_order: "Confirm Order",
        our_story: "Our Story", 
        about_text: "We are an online store specialized in sports nutrition, dedicated to helping athletes and fitness enthusiasts achieve their goals.",
        about_mission: "Our mission is to offer high-quality dietary supplements at special prices, making performance accessible to everyone. We carefully select our products: proteins, pre-workouts, gainers, and other essential supplements.",
        about_delivery: "We provide fast delivery throughout Tunisia, with a maximum delay of 24 to 48 hours, so you can enjoy your products without waiting.",
        about_values: "Our online store is built on simple values: quality, trust, and customer satisfaction. Whether you are a beginner or a seasoned athlete, we are here to advise and guide you on your journey.",
        online_store_badge: "Premium Online Store",
        email: "Email", message: "Message", send_message: "Send Message",
        footer_slogan: "Fuel Your Power.", order_success: "Order Confirmed!",
        order_success_desc: "Thank you for your order. We will contact you shortly to confirm delivery.",
        continue_shopping: "Continue Shopping", empty_cart: "Your cart is empty.",
        in_stock: "In Stock", flavor: "Flavor", size: "Size",
        delivery_info: "Delivery in 24/48h", authentic_product: "100% Authentic Product"
    },
    FR: {
        home: "Accueil", shop: "Boutique", about: "À Propos", contact: "Contact",
        hero_title: "ALIMENTEZ VOTRE PUISSANCE", hero_subtitle: "Nutrition sportive premium pour les athlètes de haut niveau.",
        shop_now: "Acheter",
        top_categories: "Catégories Principales",
        best_sellers: "Meilleures Ventes",
        view_all: "Voir Tous Les Produits",
        cat_protein: "Protéines", cat_mass: "Gainer", cat_preworkout: "Pre-Workout", cat_vitamins: "Vitamines", cat_pack: "Packs",
        categories: "Catégories", all_products: "Tous les Produits",
        order_now: "Commander", benefits: "Avantages",
        shopping_cart: "Panier", order_summary: "Résumé de la Commande",
        subtotal: "Sous-total", shipping: "Livraison", free: "Gratuit", total: "Total",
        proceed_checkout: "Passer à la Caisse", checkout: "Caisse",
        full_name: "Nom Complet", phone_number: "Numéro de Téléphone", address: "Adresse", city: "Ville",
        payment_method: "Mode de Paiement", cod: "Paiement à la Livraison (COD)", confirm_order: "Confirmer la Commande",
        our_story: "Notre Histoire", 
        about_text: "Nous sommes un store en ligne spécialisé en nutrition sportive, dédié à accompagner les sportifs et les passionnés de fitness dans l’atteinte de leurs objectifs.",
        about_mission: "Notre mission est de proposer des compléments alimentaires de haute qualité à des prix spéciaux, afin de rendre la performance accessible à tous. Nous sélectionnons avec soin nos produits : protéines, pre-workout, gainers et autres suppléments essentiels.",
        about_delivery: "Nous assurons une livraison rapide sur toute la Tunisie, avec un délai de 24 à 48 heures maximum, pour que vous puissiez profiter de vos produits sans attendre.",
        about_values: "Notre store repose sur des valeurs simples : qualité, confiance et satisfaction client. Que vous soyez débutant ou athlète confirmé, nous sommes là pour vous conseiller et vous accompagner dans votre parcours.",
        online_store_badge: "Boutique en ligne premium",
        email: "Email", message: "Message", send_message: "Envoyer le Message",
        footer_slogan: "Alimentez Votre Puissance.", order_success: "Commande Confirmée !",
        order_success_desc: "Merci pour votre commande. Nous vous contacterons sous peu pour confirmer la livraison.",
        continue_shopping: "Continuer les Achats", empty_cart: "Votre panier est vide.",
        in_stock: "En Stock", flavor: "Arôme", size: "Format",
        delivery_info: "Livraison en 24/48h", authentic_product: "Produit 100% Authentique"
    },
    AR: {
        home: "الرئيسية", shop: "المتجر", about: "من نحن", contact: "اتصل بنا",
        hero_title: "زود طاقتك", hero_subtitle: "تغذية رياضية متميزة لنخبة الرياضيين.",
        shop_now: "تسوق الآن",
        top_categories: "أفضل الفئات",
        best_sellers: "الأكثر مبيعاً",
        view_all: "عرض كل المنتجات",
        cat_protein: "بروتين", cat_mass: "زيادة الوزن", cat_preworkout: "قبل التمرين", cat_vitamins: "فيتامينات", cat_pack: "مجموعات",
        categories: "الفئات", all_products: "كل المنتجات",
        order_now: "اطلب الآن", benefits: "الفوائد",
        shopping_cart: "عربة التسوق", order_summary: "ملخص الطلب",
        subtotal: "المجموع الفرعي", shipping: "الشحن", free: "مجاني", total: "المجموع",
        proceed_checkout: "متابعة الدفع", checkout: "الدفع",
        full_name: "الاسم الكامل", phone_number: "رقم الهاتف", address: "العنوان", city: "المدينة",
        payment_method: "طريقة الدفع", cod: "الدفع عند الاستلام (COD)", confirm_order: "تأكيد الطلب",
        our_story: "قصتنا", 
        about_text: "نحن متجر على الإنترنت متخصص في التغذية الرياضية، مكرس لمساعدة الرياضيين وعشاق اللياقة البدنية على تحقيق أهدافهم.",
        about_mission: "مهمتنا هي تقديم مكملات غذائية عالية الجودة بأسعار خاصة، مما يجعل الأداء في متناول الجميع. نختار منتجاتنا بعناية: البروتينات ومكملات قبل التمرين وضخامة العضلات والمكملات الأساسية الأخرى.",
        about_delivery: "نحن نضمن توصيل سريع في جميع أنحاء تونس، بحد أقصى 24 إلى 48 ساعة، حتى تتمكن من الاستمتاع بمنتجاتك دون انتظار.",
        about_values: "يعتمد متجرنا على قيم بسيطة: الجودة والثقة ورضا العملاء. سواء كنت مبتدئًا أو رياضيًا متمرسًا، نحن هنا لتقديم المشورة ومرافقتك في رحلتك.",
        online_store_badge: "متجر إلكتروني متميز",
        email: "البريد الإلكتروني", message: "رسالة", send_message: "إرسال رسالة",
        footer_slogan: "زود طاقتك.", order_success: "تم تأكيد الطلب!",
        order_success_desc: "شكرا لطلبك. سنتصل بك قريباً لتأكيد التوصيل.",
        continue_shopping: "متابعة التسوق", empty_cart: "عربة التسوق فارغة.",
        in_stock: "متوفر", flavor: "النكهة", size: "الحجم",
        delivery_info: "التوصيل في 24/48 ساعة", authentic_product: "منتج أصلي 100%"
    }
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize UI Elements & Listeners
    initUI();

    // 2. Initialize Router
    initRouter();
    
    // 3. Load data in the background
    initData();
});

function initUI() {
    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            document.getElementById('mobileNav').classList.toggle('open');
        });
    }

    document.documentElement.dir = currentLang === 'AR' ? 'rtl' : 'ltr';
    
    function updateLangBtn() {
        const langToggle = document.getElementById('langToggle');
        if (!langToggle) return;
        let displayLang = 'AR';
        if (currentLang === 'EN') displayLang = 'FR';
        if (currentLang === 'FR') displayLang = 'AR';
        if (currentLang === 'AR') displayLang = 'EN';
        langToggle.innerText = displayLang;
    }
    
    updateLangBtn();
    
    // Language Toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            if (currentLang === 'EN') currentLang = 'FR';
            else if (currentLang === 'FR') currentLang = 'AR';
            else currentLang = 'EN';
            
            localStorage.setItem('lordLang', currentLang);
            updateLangBtn();
            document.documentElement.dir = currentLang === 'AR' ? 'rtl' : 'ltr';
            updateLanguage();
        });
    }

    // Category Filter
    document.querySelectorAll('#categoryList li').forEach(li => {
        li.addEventListener('click', (e) => {
            document.querySelectorAll('#categoryList li').forEach(el => el.classList.remove('active'));
            e.target.classList.add('active');
            renderProducts(e.target.dataset.cat);
        });
    });

    // Forms
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckout);

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const phone = document.getElementById('contactPhone').value;
            const message = document.getElementById('contactMessage').value;
            
            let messages = JSON.parse(localStorage.getItem('lordMessages')) || [];
            messages.push({
                id: Date.now(),
                date: new Date().toLocaleString(),
                name, email, phone, message,
                isRead: false
            });
            localStorage.setItem('lordMessages', JSON.stringify(messages));
            alert('Message sent successfully!');
            e.target.reset();
        });
    }

    // Quantity Stepper
    const qtyPlus = document.getElementById('qtyPlus');
    const qtyMinus = document.getElementById('qtyMinus');
    const detailQty = document.getElementById('detailQty');
    if (qtyPlus && detailQty) {
        qtyPlus.addEventListener('click', () => {
            detailQty.value = parseInt(detailQty.value) + 1;
        });
    }
    if (qtyMinus && detailQty) {
        qtyMinus.addEventListener('click', () => {
            if (parseInt(detailQty.value) > 1) {
                detailQty.value = parseInt(detailQty.value) - 1;
            }
        });
    }
}

async function initData() {
    try {
        await loadSettings();
        await loadProductsFromDB();
        renderProducts();
        renderBestSellers();
        updateLanguage();
        applySettings();
    } catch (e) {
        console.error("Data loading error:", e);
    }
}

// --- Routing (SPA) ---
function initRouter() {
    console.log("Router Initializing...");
    window.addEventListener('hashchange', () => {
        console.log("Hash changed to:", window.location.hash);
        handleRoute();
    });
    
    // Fallback: Catch direct clicks on hash links
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && link.getAttribute('href')?.startsWith('#')) {
            setTimeout(handleRoute, 10);
        }
    });

    handleRoute();
}

function handleRoute() {
    let fullHash = window.location.hash || '#home';
    const paramsString = fullHash.split('?')[1];
    const hash = fullHash.split('?')[0];

    // Hide all sections
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    
    let targetId = hash;

    // Handle specific routes
    if (hash === '#product') {
        const urlParams = new URLSearchParams(paramsString);
        const productId = parseInt(urlParams.get('id'));
        if(productId) {
            renderProductDetail(productId);
            targetId = '#product-detail';
        }
    } else if (hash === '#cart') {
        renderCart();
    } else if (hash === '#shop') {
        if(paramsString) {
            const urlParams = new URLSearchParams(paramsString);
            const cat = urlParams.get('cat');
            if(cat) {
                document.querySelectorAll('#categoryList li').forEach(el => {
                    el.classList.toggle('active', el.dataset.cat === cat);
                });
                renderProducts(cat);
            }
        } else {
             renderProducts();
        }
    }

    // Show active section
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
        window.scrollTo(0, 0);
    } else {
        document.getElementById('home').classList.add('active');
    }
    
    // Close mobile nav
    document.getElementById('mobileNav').classList.remove('open');
}

async function loadProductsFromDB() {
    if (!db) {
        loadProducts();
        return;
    }
    try {
        const { data, error } = await db.from('products').select('*');
        if (!error && data && data.length > 0) {
            lordProducts = data;
        } else {
            loadProducts();
        }
    } catch (e) {
        loadProducts();
    }
}

async function loadSettings() {
    if (!db) {
        const local = JSON.parse(localStorage.getItem('lordSettings'));
        if (local) siteSettings = local;
        return;
    }
    try {
        const { data, error } = await db.from('settings').select('*');
        if (!error && data) {
            data.forEach(s => {
                if (siteSettings.hasOwnProperty(s.key)) {
                    siteSettings[s.key] = s.value;
                }
            });
        }
    } catch (e) {}
}

function loadProducts() {
    const local = JSON.parse(localStorage.getItem('lordProducts'));
    // Use localStorage only if it has MORE products than defaultProducts (i.e. admin added products)
    // Otherwise always use defaultProducts (the 42 imported GSN products)
    if (local && local.length >= defaultProducts.length) {
        lordProducts = local;
    } else {
        lordProducts = defaultProducts;
        localStorage.setItem('lordProducts', JSON.stringify(defaultProducts));
    }
}

// --- Render Logic ---
function renderProducts(category = 'all') {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = category === 'all' ? lordProducts : lordProducts.filter(p => p.category === category);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" onclick="window.location.hash='#product?id=${product.id}'" style="cursor:pointer;">
            <div class="product-info">
                <h3 class="product-title" onclick="window.location.hash='#product?id=${product.id}'" style="cursor:pointer;">${product.name}</h3>
                <div class="product-price">${product.price.toFixed(2)} TND</div>
                <button class="btn btn-primary w-100" onclick="addToCart(${product.id})" data-i18n="order_now">${translations[currentLang].order_now}</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderProductDetail(id) {
    const product = lordProducts.find(p => p.id === id);
    if (!product) return;

    // Breadcrumbs & Title
    document.getElementById('breadcrumbCategory').innerText = translations[currentLang][`cat_${product.category}`] || product.category;
    document.getElementById('breadcrumbTitle').innerText = product.name;
    document.getElementById('detailTitle').innerText = product.name;
    
    // Image & Price
    document.getElementById('detailImage').src = product.image;
    document.getElementById('detailPrice').innerText = `${product.price.toFixed(2)} TND`;
    document.getElementById('detailDesc').innerText = product.desc;
    
    // Reset Quantity
    document.getElementById('detailQty').value = 1;

    // Flavors
    const flavorOptions = document.getElementById('flavorOptions');
    flavorOptions.innerHTML = '';
    if (product.flavors && product.flavors.length > 0) {
        document.getElementById('flavorGroup').style.display = 'block';
        product.flavors.forEach((f, idx) => {
            const btn = document.createElement('button');
            btn.className = `option-btn ${idx === 0 ? 'active' : ''}`;
            btn.innerText = f;
            btn.onclick = () => {
                flavorOptions.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            };
            flavorOptions.appendChild(btn);
        });
    } else {
        document.getElementById('flavorGroup').style.display = 'none';
    }

    // Sizes
    const sizeOptions = document.getElementById('sizeOptions');
    sizeOptions.innerHTML = '';
    if (product.sizes && product.sizes.length > 0) {
        document.getElementById('sizeGroup').style.display = 'block';
        product.sizes.forEach((s, idx) => {
            const btn = document.createElement('button');
            btn.className = `option-btn ${idx === 0 ? 'active' : ''}`;
            btn.innerText = s;
            btn.onclick = () => {
                sizeOptions.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            };
            sizeOptions.appendChild(btn);
        });
    } else {
        document.getElementById('sizeGroup').style.display = 'none';
    }

    // Benefits
    const benefitsList = document.getElementById('detailBenefits');
    benefitsList.innerHTML = '';
    product.benefits.forEach(b => {
        const li = document.createElement('li');
        li.innerText = b;
        benefitsList.appendChild(li);
    });

    // Add to Cart Logic
    const btn = document.getElementById('detailAddToCart');
    btn.onclick = () => {
        const selectedFlavor = flavorOptions.querySelector('.option-btn.active')?.innerText || null;
        const selectedSize = sizeOptions.querySelector('.option-btn.active')?.innerText || null;
        const qty = parseInt(document.getElementById('detailQty').value);
        
        addToCart(product.id, qty, selectedFlavor, selectedSize);
        window.location.hash = '#cart';
    };
}

function renderCart() {
    const container = document.getElementById('cartItems');
    if (!container) return;
    container.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = `<p>${translations[currentLang].empty_cart}</p>`;
    } else {
        cart.forEach((item, index) => {
            total += item.price * (item.quantity || 1);
            const el = document.createElement('div');
            el.className = 'cart-item';
            el.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-meta" style="font-size: 0.8rem; color: var(--text-muted);">
                        ${item.flavor ? `Flavor: ${item.flavor}` : ''} 
                        ${item.size ? `| Size: ${item.size}` : ''}
                    </div>
                    <div class="cart-item-price">${item.price.toFixed(2)} TND x ${item.quantity || 1}</div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
            `;
            container.appendChild(el);
        });
    }

    document.getElementById('cartSubtotal').innerText = `${total.toFixed(2)} TND`;
    document.getElementById('cartTotal').innerText = `${total.toFixed(2)} TND`;
}

function renderBestSellers() {
    const bestSellersGrid = document.getElementById('bestSellersGrid');
    if(!bestSellersGrid) return;
    
    bestSellersGrid.innerHTML = '';
    
    lordProducts.slice(0, 3).forEach(p => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <img src="${p.image}" alt="${p.name}" class="product-image" onclick="window.location.hash='#product?id=${p.id}'" style="cursor:pointer">
            <div class="product-info">
                <h3 onclick="window.location.hash='#product?id=${p.id}'" style="cursor:pointer">${p.name}</h3>
                <p class="product-price" style="font-weight: bold; color: var(--primary-color); margin: 10px 0;">${p.price.toFixed(2)} TND</p>
                <button class="btn btn-primary" style="width: 100%; border-radius: var(--radius-md);" onclick="addToCart(${p.id})">
                    <i class="fas fa-shopping-cart"></i> Add
                </button>
            </div>
        `;
        bestSellersGrid.appendChild(div);
    });
}

// --- Cart Logic ---
function addToCart(id, qty = 1, flavor = null, size = null) {
    const product = lordProducts.find(p => p.id === id);
    if (product) {
        const cartItem = {
            ...product,
            quantity: qty,
            flavor: flavor,
            size: size
        };
        cart.push(cartItem);
        saveCart();
        alert('Added to cart!');
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

function saveCart() {
    localStorage.setItem('lordCart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const countEl = document.getElementById('cartCount');
    if (countEl) countEl.innerText = cart.length;
}

// --- Checkout ---
async function handleCheckout(e) {
    e.preventDefault();
    if(cart.length === 0) {
        alert('Cart is empty!');
        return;
    }
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

    const orderData = {
        date: new Date().toLocaleString(),
        name, phone, address, city,
        items: JSON.stringify(cart),
        total,
        status: 'pending',
        is_read: false
    };

    if (db) {
        const { error } = await db.from('orders').insert([orderData]);
        if (error) {
            console.error('Order error:', error);
            alert('Error placing order. Please try again.');
            return;
        }
    } else {
        // Fallback to localStorage
        let orders = JSON.parse(localStorage.getItem('lordOrders')) || [];
        orders.push(orderData);
        localStorage.setItem('lordOrders', JSON.stringify(orders));
    }
    
    // Simulate API call for order
    cart = [];
    saveCart();
    
    document.getElementById('successModal').classList.add('active');
    e.target.reset();
}

function closeModal() {
    document.getElementById('successModal').classList.remove('active');
    window.location.hash = '#home';
}

// --- Language ---
function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[currentLang][key];
            } else {
                el.innerText = translations[currentLang][key];
            }
        }
    });
}

function applySettings() {
    // Phone
    const phoneEls = document.querySelectorAll('.footer-contact-info p:nth-child(2), .whatsapp-btn');
    if (phoneEls[0]) phoneEls[0].innerHTML = `<i class="fas fa-phone"></i> ${siteSettings.phone}`;
    if (phoneEls[1]) phoneEls[1].href = `https://wa.me/${siteSettings.whatsapp.replace(/\s/g, '')}`;
    
    // Email
    const emailEl = document.querySelector('.footer-contact-info p:nth-child(3)');
    if (emailEl) emailEl.innerHTML = `<i class="fas fa-envelope"></i> ${siteSettings.email}`;
    
    // Address
    const addrEl = document.querySelector('.footer-contact-info p:nth-child(4)');
    if (addrEl) addrEl.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${siteSettings.address}`;
    
    // Social Links
    const instaEl = document.querySelector('.social-links a[aria-label="Instagram"]');
    const fbEl = document.querySelector('.social-links a[aria-label="Facebook"]');
    if (instaEl) instaEl.href = siteSettings.instagram;
    if (fbEl) fbEl.href = siteSettings.facebook;
}

