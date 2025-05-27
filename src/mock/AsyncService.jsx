import { FaArrowRight, FaGuitar, FaDrum, FaHeadphones } from "react-icons/fa";
import { GiSaxophone } from "react-icons/gi";

const timeToLoad = 1200;
let error = false;

const products = [
	{
		id: "prod-001",
		name: "Gibson Les Paul Standard",
		price: 2499.99,
		image: "https://i.postimg.cc/GHLtXKKw/gibson.png",
		category: "Guitars",
		quantity: 1,
		stock: 18,
		featured: true,
		description:
			"A legendary electric guitar known for its rich tone and sustain, perfect for rock and blues.",
	},
	{
		id: "prod-002",
		name: "Yamaha P-125 Digital Piano",
		price: 649.99,
		image: "https://i.postimg.cc/LhBhkwz3/yamaha.jpg",
		category: "Keyboards",
		quantity: 1,
		stock: 27,
		featured: true,
		description:
			"Compact and user-friendly digital piano with authentic touch and tone, ideal for beginners and pros alike.",
	},
	{
		id: "prod-003",
		name: "Fender American Professional II",
		price: 1699.99,
		image: "https://http2.mlstatic.com/D_NQ_NP_734948-MLA70441977503_072023-O.webp",
		category: "Guitars",
		quantity: 3,
		stock: 12,
		featured: false,
		description:
			"Modern features and timeless Fender tone, designed for stage and studio performance.",
	},
	{
		id: "prod-004",
		name: "Roland TD-17KVX V-Drums",
		price: 1699.99,
		image: "https://i.postimg.cc/ZCwR2Ns9/roland-Drum.jpg",
		category: "Drums",
		quantity: 1,
		stock: 9,
		featured: false,
		description:
			"High-performance electronic drum kit with mesh heads, ideal for realistic playing and quiet practice.",
	},
	{
		id: "prod-005",
		name: "Shure SM58 Vocal Microphone",
		price: 99544.99,
		image: "https://i.postimg.cc/8P6gn6Pr/shure-sm58.jpg",
		category: "Accessories",
		quantity: 1,
		stock: 24,
		featured: false,
		description:
			"The industry-standard dynamic microphone for live vocals, known for durability and clarity.",
	},
	{
		id: "prod-006",
		name: "Boss DS-1 Distortion Pedal",
		price: 30679.99,
		image: "https://i.postimg.cc/4yqBPG8J/boss-ds1.jpg",
		category: "Accessories",
		quantity: 1,
		stock: 15,
		featured: false,
		description:
			"Classic distortion pedal used by guitarists worldwide for decades, with aggressive and punchy tone.",
	},
	{
		id: "prod-007",
		name: "Korg Volca Keys Analog Synth",
		price: 21149.99,
		image: "https://i.postimg.cc/sD5dBpCr/korg-volca.jpg",
		category: "Keyboards",
		quantity: 1,
		stock: 11,
		featured: false,
		description:
			"Portable analog synthesizer with powerful sound design options, ideal for electronic musicians.",
	},
	{
		id: "prod-008",
		name: "Audio-Technica ATH-M50X Headphones",
		price: 56169.99,
		image: "https://i.postimg.cc/MKyKWvnd/ath-m50x.jpg",
		category: "Accessories",
		quantity: 1,
		stock: 20,
		featured: true,
		description:
			"High-fidelity headphones with exceptional clarity and deep bass, perfect for studio monitoring.",
	},
	{
		id: "prod-009",
		name: "Pearl Export EXX Drum Set",
		price: 66799.99,
		image: "https://i.postimg.cc/Y0PhBQzp/pearl-drum.jpg",
		category: "Drums",
		quantity: 1,
		stock: 8,
		featured: false,
		description:
			"Complete 5-piece drum set for beginner to intermediate drummers, known for quality and value.",
	},
	{
		id: "prod-010",
		name: "Ibanez GSR200 Bass Guitar",
		price: 127229.99,
		image: "https://i.postimg.cc/wjk9PYz4/ibanez-bass.jpg",
		category: "Guitars",
		quantity: 1,
		stock: 14,
		featured: true,
		description:
			"Affordable and versatile bass guitar with smooth playability and solid tone for all styles.",
	},
];

export const fetchProducts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!error) {
				resolve(products);
			} else {
				reject("Hubo un error al cargar los productos");
			}
		}, timeToLoad);
	});
};

const categories = [
	{
		id: "strings",
		name: "Strings",
		description: "Guitars, Violins, Cellos & more",
		icon: <FaGuitar size={36} />,
		image: "/placeholder.svg?height=400&width=600",
		color: "rgba(235, 94, 40, 0.1)",
	},
	{
		id: "winds",
		name: "Winds",
		description: "Saxophones, Flutes, Clarinets & more",
		icon: <GiSaxophone size={36} />,
		image: "/placeholder.svg?height=400&width=600",
		color: "rgba(52, 152, 219, 0.1)",
	},
	{
		id: "percussion",
		name: "Percussion",
		description: "Drums, Cymbals, Percussion & more",
		icon: <FaDrum size={36} />,
		image: "/placeholder.svg?height=400&width=600",
		color: "rgba(155, 89, 182, 0.1)",
	},
	{
		id: "accessories",
		name: "Accessories",
		description: "Headphones, Cables, Stands & more",
		icon: <FaHeadphones size={36} />,
		image: "/placeholder.svg?height=400&width=600",
		color: "rgba(46, 204, 113, 0.1)",
	},
];

export const fetchCategories = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!error) {
				resolve(categories);
			} else {
				reject("Se produjo un error al fetchear las categorias");
			}
		}, timeToLoad);
	});
};

const suppLinks = [
	{ id: "contact", name: "Contact Us" },
	{ id: "faq", name: "FAQs" },
	{ id: "shipping", name: "Shipping Info" },
	{ id: "returns", name: "Returns & Exchanges" },
	{ id: "warranty", name: "Warranty" },
];

export const fetchSuppLinks = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!error) {
				resolve(suppLinks);
			} else {
				reject("Ocurrió un error al cargar los links de soporte");
			}
		}, timeToLoad);
	});
};
