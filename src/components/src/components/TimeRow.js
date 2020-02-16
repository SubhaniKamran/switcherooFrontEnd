import React from "react";
const DefaultRow = ({ title, labelOne, labelTwo }) => {
	return (
		<div className="flex mt-2  justify-between items-start w-full ">
			<div className="w-2/5 ">
				<p>{title}</p>
			</div>
			<div className="w-28 flex justify-between">
				<label className="ml-2">
					{labelOne}
					<input
						className="bg-tertiary ml-2"
						style={{ width: "35px", height: "24px" }}
					/>
				</label>
				<label className="ml-2">
					{labelTwo}
					<input
						className="bg-tertiary ml-2"
						style={{ width: "35px", height: "24px" }}
					/>
				</label>
			</div>
			<div className="w-28 flex justify-between">
				<label className="ml-2">
					{labelOne}
					<input
						className="bg-tertiary ml-2"
						style={{ width: "35px", height: "24px" }}
					/>
				</label>
				<label className="ml-2">
					{labelTwo}
					<input
						className="bg-tertiary ml-2"
						style={{ width: "35px", height: "24px" }}
					/>
				</label>
			</div>
		</div>
	);
};

export default DefaultRow;
