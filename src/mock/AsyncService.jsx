import { FaGuitar, FaDrum, FaHeadphones } from "react-icons/fa";
import { GiPianoKeys, GiSaxophone } from "react-icons/gi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const timeToLoad = 1200;
let error = false;

const products = [
	{
		id: "prod-001",
		name: "Gibson Les Paul Standard",
		price: 122499.99,
		originalPrice: 134749.99,
		rating: 4.8,
		reviews: 34,
		image: "https://i.postimg.cc/GHLtXKKw/gibson.png",
		category: "Strings",
		quantity: 1,
		stock: 18,
		featured: true,
		description:
			"A legendary electric guitar known for its rich tone and sustain, perfect for rock and blues.",
	},
	{
		id: "prod-002",
		name: "Yamaha P-125 Digital Piano",
		price: 211649.99,
		originalPrice: 227999.99,
		rating: 4.6,
		reviews: 41,
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
		price: 551699.99,
		originalPrice: 579999.99,
		rating: 4.9,
		reviews: 56,
		image: "https://http2.mlstatic.com/D_NQ_NP_734948-MLA70441977503_072023-O.webp",
		category: "Strings",
		quantity: 3,
		stock: 12,
		featured: false,
		description:
			"Modern features and timeless Fender tone, designed for stage and studio performance.",
	},
	{
		id: "prod-004",
		name: "Roland TD-17KVX V-Drums",
		price: 221699.99,
		originalPrice: 237899.99,
		rating: 4.7,
		reviews: 25,
		image: "https://i.postimg.cc/ZCwR2Ns9/roland-Drum.jpg",
		category: "Percussion",
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
		originalPrice: 108499.99,
		rating: 4.5,
		reviews: 73,
		image: "https://i.postimg.cc/gx6ZCSgz/shure-sm58.webp",
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
		originalPrice: 32799.99,
		rating: 4.3,
		reviews: 19,
		image: "https://i.postimg.cc/Wt20d718/Boss-D-1-pedal.webp",
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
		originalPrice: 22999.99,
		rating: 4.2,
		reviews: 22,
		image: "https://i.postimg.cc/q7gXcQXZ/synth-KORG.webp",
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
		originalPrice: 59999.99,
		rating: 4.9,
		reviews: 48,
		image: "https://i.postimg.cc/dL3dBtdT/audiothecnica-headphones.webp",
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
		originalPrice: 70999.99,
		rating: 4.4,
		reviews: 29,
		image: "https://i.postimg.cc/CdmkkfZg/pearl-export-drum-set.webp",
		category: "Percussion",
		quantity: 1,
		stock: 8,
		featured: false,
		description:
			"Complete 5-piece drum set for beginner to intermediate drummers, known for quality and value.",
	},
	{
		id: "prod-010",
		name: "Ibanez GSR200 Bass",
		price: 127229.99,
		originalPrice: 137999.99,
		rating: 4.6,
		reviews: 39,
		image: "https://i.postimg.cc/zVQhPZS2/bass-ibanez.webp",
		category: "Strings",
		quantity: 1,
		stock: 14,
		featured: true,
		description:
			"Affordable and versatile bass with smooth playability and solid tone for all styles.",
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
		color: "rgba(235, 94, 40, 0.33)",
	},
	{
		id: "winds",
		name: "Winds",
		description: "Saxophones, Flutes, Clarinets & more",
		icon: <GiSaxophone size={36} />,
		image: "/placeholder.svg?height=400&width=600",
		color: "rgba(52, 152, 219, 0.33)",
	},
	{
		id: "percussion",
		name: "Percussion",
		description: "Drums, Cymbals, Percussion & more",
		icon: <FaDrum size={36} />,
		image: "/placeholder.svg?height=400&width=600",
		color: "rgba(155, 89, 182, 0.33)",
	},
	{
		id: "keyboards",
		name: "Keyboards",
		description: "Organs, Pianos, Synthetizers & more",
		icon: <GiPianoKeys size={36} />,
		image: "/placeholder.svg?height=400&width=600",
		color: "rgba(46, 204, 113, 0.33)",
	},
	{
		id: "accessories",
		name: "Accessories",
		description: "Headphones, Cables, Stands & more",
		icon: <FaHeadphones size={36} />,
		image: "/placeholder.svg?height=400&width=600",
		color: "rgba(46, 204, 112, 0.33)",
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

const websLinks = [
	{
		id: "facebook-link-footer",
		url: "url-to-facebook",
		icon: <FaFacebook />,
	},
	{
		id: "instagram-link-footer",
		url: "url-to-instagram",
		icon: <FaInstagram />,
	},
	{
		id: "twitter-link-footer",
		url: "url-to-twitter",
		icon: <FaTwitter />,
	},
	{
		id: "youtube-link-footer",
		url: "url-to-youtube",
		icon: <FaYoutube />,
	},
];

export const fetchWebsLinks = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!error) {
				resolve(websLinks);
			} else {
				reject("Error al cargar los links de las webs");
			}
		}, timeToLoad);
	});
};
