import React, { useEffect, useState } from "react";
import LoadingSpinner from "@/utils/LoadingSpinner";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { calculateCartTotal } from "@/utils/calculateCartTotal";

const PlaceOrderBtn = ({ user, cartItems }) => {
	const [stripeAmount, setStripeAmount] = React.useState(0);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const router = useRouter();

	useEffect(() => {
		const { stripeTotal } = calculateCartTotal(cartItems);
		setStripeAmount(stripeTotal);
	}, [cartItems]);

	const handleCheckout = async () => {
		setLoading(true);
		try {
			const payload = {
				cartItems: cartItems.map(({ price, quantity, title }) => ({
					price: (price * 100).toFixed(0),
					quantity,
					title,
				})),
				userId: user.id,
				buyer_name: user.first_name,
				buyer_email: user.email,
			};
			console.log(payload);
			const url = `http://localhost:8081/api/payment-link`;
			const response = await axios.post(url, payload);
			//console.log(response);
			window.location = response.data.link;
		} catch (err) {
			console.log(err.response);
			let {
				response: {
					data: { message },
				},
			} = err;
			toast.error(message, {
				style: {
					border: "1px solid #ff0033",
					padding: "16px",
					color: "#ff0033",
				},
				iconTheme: {
					primary: "#ff0033",
					secondary: "#FFFAEE",
				},
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<button
			type="button"
			className="default-btn-style-3 d-block w-100 mt-3"
			disabled={cartItems.length == 0 || loading}
			onClick={handleCheckout}
		>
			Place Order <span></span> {loading && <LoadingSpinner />}
		</button>
	);
};

export default PlaceOrderBtn;
