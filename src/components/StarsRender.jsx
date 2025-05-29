import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarsRender = (rating) => {
	const stars = [];
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;

	for (let i = 0; i < fullStars; i++) {
		stars.push(<FaStar key={i} className="text-warning" />);
	}

	if (hasHalfStar) {
		stars.push(<FaStarHalfAlt key="half" className="text-warning" />);
	}

	const emptyStars = 5 - Math.ceil(rating);
	for (let i = 0; i < emptyStars; i++) {
		stars.push(<FaRegStar key={`empty-${i}`} className="text-warning" />);
	}

	return stars;
};

export default StarsRender;
