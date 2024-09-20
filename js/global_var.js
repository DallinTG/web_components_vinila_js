
const data = {};
const hash = "#"
const root = document.querySelector(":root");

let color;
let color_contrast;

const button = {
    text:"Hi i Like Waffles",
	small_text:"",
	js:"test();",
	classes:"button_light",
}
const button_sign_up = {
    text:"Sign Up",
	small_text:"",
	js:"test();",
	classes:"button_h1  m-a mt-4",
}
const button_nav_home = {
    text:"Home",
	small_text:"",
	js:"swop_tab('home',home_tab);",
	//classes:"button_light",
}
const button_nav_shop = {
    text:"Shops",
	small_text:"",
	js:"swop_tab('shop',home_tab);",
	// classes:"button_light",
}
const button_nav_apparel = {
    text:"Apparel",
	small_text:"",
	js:"swop_tab('apparel',home_tab);",
	// classes:"button_light",
}
const button_nav_newsletter = {
    text:"Newsletter",
	small_text:"",
	js:"swop_tab('newsletter',home_tab);",
	// classes:"button_light",
}

const card_shop1 = {
    img:"/img/apa/Semipro_x_2400.webp",
	title:" hat black",
	small:"2000.99$",
	// classes:"button_light",
}
const card_shop2 = {
    img:"/img/apa/Boodocker_x_2400.webp",
	title:" hat black",
	small:"2000.99$",
	// classes:"button_light",
}
const card_shop3 = {
    img:"/img/apa/Knievil_x_2400.webp",
	title:" hat black",
	small:"2000.99$",
	// classes:"button_light",
}
const card_shop4 = {
    img:"/img/apa/evil-gift-card-web-2023.webp",
	title:" hat black",
	small:"2000.99$",
	// classes:"button_light",
}
const card_shop5 = {
    img:"/img/apa/evil-hothead-beanie-black.webp",
	title:" hat black",
	small:"2000.99$",
	// classes:"button_light",
}
const card_shop6 = {
    img:"/img/apa/evil-platform-pant-front-relaxed-black.webp",
	title:" hat black",
	small:"2000.99$",
	// classes:"button_light",
}
const card_shop7 = {
    img:"/img/apa/evil-platform-pant-front-slim-black.webp",
	title:" hat black",
	small:"2000.99$",
	// classes:"button_light",
}
const card_shop8 = {
    img:"/img/apa/evil-platform-short-front-black.webp",
	title:" hat black",
	small:"2000.99$",
	// classes:"button_light",
}
const card_shop9 = {
    img:"/img/apa/evil-rival-ls-front-black.webp",
	title:" hat black",
	small:"2000.99$",
	// classes:"button_light",
}
const card_shop10 = {
    img:"/img/apa/evil-rival-ss-front-black.webp",
	title:" hat black",
	small:"2000.99$",
	// classes:"button_light",
}
const card_shop11 = {
    img:"/img/apa/evil-t-shirt-evil-script-front-charcoal-wmns.webp",
	title:" hat black",
	small:"2000.99$",
	// classes:"button_light",
}
const card_shop12 = {
    img:"/img/apa/evil-t-shirt-evil-sript-front-red.webp",
	title:" hat black",
	small:"2000.99$",
	// classes:"button_light",
}







const card_shop1b = {
    img:"/img/bike/Offering_LS_Tranny.webp",
	title:" Offering LS",
	small:"2000.99$",
	size:"biger_card",
	// classes:"button_light",
}
const card_shop2b = {
    img:"/img/bike/Wreckoning_LS_Tranny.webp",
	title:" Wreckoning LS",
	small:"2000.99$",
	size:"biger_card",
	// classes:"button_light",
}
const card_shop3b = {
    img:"/img/bike/Epocalypse_Tranny_1.webp",
	title:" Epocalypse",
	small:"2000.99$",
	size:"biger_card",
	// classes:"button_light",
}
const card_shop4b = {
    img:"/img/bike/evil-chamois-hagar-tranny-hero_dec94c0e-ad30-40c9-82cd-a0ce084779fe.png",
	title:" evil chamois",
	small:"2000.99$",
	size:"biger_card",
	// classes:"button_light",
}
const card_shop5b = {
    img:"/img/bike/Following_LS_Tranny.webp",
	title:" Following LS",
	small:"2000.99$",
	size:"biger_card",
	// classes:"button_light",
}
const card_shop6b = {
    img:"/img/bike/Insurgent_LS_Tranny.webp",
	title:" Insurgent",
	small:"2000.99$",
	size:"biger_card",
	// classes:"button_light",
}
const card_shop7b = {
    img:"/img/bike/JWood_Faction_Raw_Front_2.4k_56c544d5-87a6-4069-97f4-e77a2ed67a79.webp",
	title:" JWood Faction",
	small:"2000.99$",
	size:"biger_card",
	// classes:"button_light",
}




const card_home = {
    title:"about us",
	p:`Well, not the official ones, as UCI is not concerned about this discipline, yet the famous Austrian ski resort of Ischgl gathered world-class athletes and many national champions from the classic MTB marathons! It all began with the brutal elimination race from 2300 meters above sea level so for a Beskid racer like Marcin Motyka who rarely races over 1000 meters - the lungs took the hit. Despite all the technicality of the race, Marcin took over 3rd place on his E-Thunderbird.

Insane as he was one of the 240 riders participating! Time for a race day!


What a race it was! After checking a few sectors and a warm Marcin discovered the start list was nonexistent and began the race in the 3rd row with all the challengers. He did his wonders on the climb to lose the pack and stayed between the first five riders. Due to a rider OTB in the tight section, Marcin lost some time and more importantly - rhythm. A few places down, it is not over till it's over - Marcin loves racing and knows it is on until the finish line!
In the end, Marcin won the World Champion title in his age category and came 4th in the Open category – what a spectacular sporting spirit !!


Congrats Marcin Motyka on putting the E-Thunderbird among the fastest e-bikes in the world!`,
	js:"test();",
	button_vs:"button_light",
}

const card_home2 = {
    img:"/img/bike/JWood_Faction_Raw_Front_2.4k_56c544d5-87a6-4069-97f4-e77a2ed67a79.webp",
	title:" Bicycle Service & Repairs",
	small:"Stay on the trail and out of the shop. But when your bike needs a tune-up or overhaul, you can guarantee quality and friendly service from Good Bike Co.’s brick and mortar shop in charming downtown Prineville, OR.",
	size:"biger_card",
	// classes:"button_light",
}

const card_home3 = {
    img:"/img/homebikthing1.webp",
	title:"Action 5 brings",
	small:"This might be the best new action camera! Huge battery life, internal storage, massive dynamic color range, and more set the new DJI Osmo Action 5 Pro apart.",
	size:"biger_card",
	// classes:"button_light",
}
const card_home4 = {
    img:"/img/homebike2.webp",
	title:"Waterproof Storage",
	small:"Restrap straps 1.2L of extra gear onto almost any bike with their new 100% UK-made waterproof Downtube Bag…",
	size:"biger_card",
	// classes:"button_light",
}
const card_home5 = {
    img:"/img/home5.webp",
	title:"First Impressions: KFX i28",
	small:"Full Speed Ahead (FSA) claimed a cross-country World Championship with Alan Hatherly and Cannondale Factory Racing this summer. That expertise and technical know-how have been…",
	size:"biger_card",
	// classes:"button_light",
}
const card_home6 = {
    img:"/img/home6.webp",
	title:"3D-Prints Curvy",
	small:"New Ribble Allroad Ti 3D-Prints titanium for an affordable endurance all-road bike with aero inspiration and a wild direct mount handlebar…",
	size:"biger_card",
	// classes:"button_light",
}

const card_home7 = {
    img:"/img/home7.webp",
	title:"Gravel Bikes",
	small:"New Pivot Vault Adds ToolShed, Tire Clearance, Mounts, Updated Geo, Still Drops Weight The new Vault can carry five water bottles and a Toolshed.",
	size:"biger_card",
	// classes:"button_light",
}

const card_home8 = {
    img:"/img/home8.jpg",
	title:"GOREWEAR Cycling",
	small:"Gore Wear lived up to weeks of riding in Japan, with smart designs, great materials, and useful features across every price point.",
	size:"biger_card",
	// classes:"button_light",
}

const card_home9 = {
    img:"/img/home9.webp",
	title:"Santa Cruz Hightower v4",
	small:"New 2024 Santa Cruz Hightower 4 boosts carbon 29er’s travel to 150mm to shred tougher trails even faster, as the one do-it-all-mountain bike!",
	size:"biger_card",
	// classes:"button_light",
}

function test() {
	console.log("testclick")
}