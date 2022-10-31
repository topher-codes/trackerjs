import React, {useState, useRef} from 'react';


const Card = () => {
	const [message, setMessage] = useState("");

	// const handleChange = e => {
	// 	setMessage(e.target.value);

	// 	console.log('value is: ', e.target.value)
	// }

	// const handleClick = e => {
	// 	e.preventDefault();


	// }
	const inputRef = useRef(null);
	const handleClick = () => {
		setMessage(inputRef.current.value)
	}

	return (
		<div className="grid-item">
			<h1>Card</h1>
			<p>{message}</p>
			<input ref={inputRef} type="text" placeholder="Input" name="message" id="message"  autoComplete="off"  />
			<button className="btn btn-primary" onClick={handleClick}>Click Me</button>
		</div>
	);
};

export default Card;
