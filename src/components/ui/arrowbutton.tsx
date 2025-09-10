import React from "react";

const ArrowButton = ({
	direction,
	onClick,
}: {
	direction: "left" | "right";
	onClick: () => void;
}) => (
  <button
	onClick={onClick}
	className="flex items-center justify-center w-14 h-14 bg-transparent transition-colors shadow-lg relative group"
	aria-label={direction === "left" ? "Previous" : "Next"}
	type="button"
  >
	{/* Hover circle background */}
	<span className="absolute inset-0 rounded-full scale-90 bg-orange-500/10 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none"></span>
	<span className="relative z-10 flex items-center justify-center w-full h-full">
	{direction === "left" ? (
			<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_d_1434_6140)">
					<path
						d="M25.5676 30L38 42.4324L34.2162 46.2162L18 30L34.2162 13.7838L38 17.5675L25.5676 30Z"
						fill="url(#paint0_linear_1434_6140)"
					/>
					<path
						d="M4 30C4 15.6406 15.6406 4 30 4C44.3594 4 56 15.6406 56 30C56 44.3594 44.3594 56 30 56C15.6406 56 4 44.3594 4 30ZM52.4305 30C52.4305 17.6119 42.3881 7.56945 30 7.56945C17.6119 7.56945 7.56945 17.6119 7.56945 30C7.56945 42.3881 17.6119 52.4305 30 52.4305C42.3881 52.4305 52.4305 42.3881 52.4305 30Z"
						fill="url(#paint1_linear_1434_6140)"
					/>
					<path
						d="M4 30C4 15.6406 15.6406 4 30 4C44.3594 4 56 15.6406 56 30C56 44.3594 44.3594 56 30 56C15.6406 56 4 44.3594 4 30ZM52.4305 30C52.4305 17.6119 42.3881 7.56945 30 7.56945C17.6119 7.56945 7.56945 17.6119 7.56945 30C7.56945 42.3881 17.6119 52.4305 30 52.4305C42.3881 52.4305 52.4305 42.3881 52.4305 30Z"
						fill="url(#paint2_linear_1434_6140)"
					/>
				</g>
				<defs>
					<filter
						id="filter0_d_1434_6140"
						x="0"
						y="0"
						width="60"
						height="60"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
						/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1434_6140" />
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1434_6140" result="shape" />
					</filter>
					<linearGradient
						id="paint0_linear_1434_6140"
						x1="18"
						y1="30.0968"
						x2="38"
						y2="29.9083"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#CE2D52" />
						<stop offset="1" stopColor="#F05921" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_1434_6140"
						x1="4"
						y1="30.1452"
						x2="56"
						y2="29.8548"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#CE2D52" />
						<stop offset="1" stopColor="#F05921" />
					</linearGradient>
					<linearGradient
						id="paint2_linear_1434_6140"
						x1="16.5"
						y1="1.5"
						x2="30"
						y2="15"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" stopOpacity="0.7" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
				</defs>
			</svg>
		) : (
			<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_d_1434_6136)">
					<path
						d="M34.4324 30L22 42.4324L25.7838 46.2162L42 30L25.7838 13.7838L22 17.5675L34.4324 30Z"
						fill="url(#paint0_linear_1434_6136)"
					/>
					<path
						d="M56 30C56 15.6406 44.3594 4 30 4C15.6406 4 4 15.6406 4 30C4 44.3594 15.6406 56 30 56C44.3594 56 56 44.3594 56 30ZM7.56945 30C7.56945 17.6119 17.6119 7.56945 30 7.56945C42.3881 7.56945 52.4305 17.6119 52.4305 30C52.4305 42.3881 42.3881 52.4305 30 52.4305C17.6119 52.4305 7.56945 42.3881 7.56945 30Z"
						fill="url(#paint1_linear_1434_6136)"
					/>
					<path
						d="M56 30C56 15.6406 44.3594 4 30 4C15.6406 4 4 15.6406 4 30C4 44.3594 15.6406 56 30 56C44.3594 56 56 44.3594 56 30ZM7.56945 30C7.56945 17.6119 17.6119 7.56945 30 7.56945C42.3881 7.56945 52.4305 17.6119 52.4305 30C52.4305 42.3881 42.3881 52.4305 30 52.4305C17.6119 52.4305 7.56945 42.3881 7.56945 30Z"
						fill="url(#paint2_linear_1434_6136)"
					/>
				</g>
				<defs>
					<filter
						id="filter0_d_1434_6136"
						x="0"
						y="0"
						width="60"
						height="60"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
						/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1434_6136" />
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1434_6136" result="shape" />
					</filter>
					<linearGradient
						id="paint0_linear_1434_6136"
						x1="42"
						y1="30.0968"
						x2="22"
						y2="29.9083"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#CE2D52" />
						<stop offset="1" stopColor="#F05921" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_1434_6136"
						x1="56"
						y1="30.1452"
						x2="4"
						y2="29.8548"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#CE2D52" />
						<stop offset="1" stopColor="#F05921" />
					</linearGradient>
					<linearGradient
						id="paint2_linear_1434_6136"
						x1="43.5"
						y1="1.5"
						x2="30"
						y2="15"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" stopOpacity="0.7" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
				</defs>
			</svg>
	)}
	</span>
	</button>
);

export default ArrowButton;
