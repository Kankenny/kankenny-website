import React from 'react'

// Interfaces
import { ButtonPropsInterface } from '../../interfaces/ButtonPropsInterface'

const SolidButton = ({buttonText = "Button", className = ""}:  ButtonPropsInterface) => {
	// ...rest 
	return (
		<button
			className={`${className} font-serif text-white text-center focus:ring-4 focus:ring-blue-300 font-bold rounded-lg px-5 py-2.5 mr-2 mb-2 focus:outline-none shadow-2xl`}
			// This React Component needs a color and text size that is passed via the className
		>
			{buttonText}
		</button>
	)
}

export default SolidButton