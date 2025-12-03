import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import UserCard from "./UserCard";
import NavTabs from "./NavTabs";
import Jumbotron from "./Jumbotron";




const Home = () => {
	return (
		<>
			<NavTabs />

			<Jumbotron />
			
			<div className="container mt-4">
				<div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">

					<div className="col">
						<UserCard />
					</div>
					<div className="col">
						<UserCard />
					</div>
					<div className="col">
						<UserCard />
					</div>
					<div className="col">
						<UserCard />
					</div>

				</div>
			</div>
			




		</>
	)
};



export default Home;