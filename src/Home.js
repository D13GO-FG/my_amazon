import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>
				<div className="home__row">
					<Product
						id="12321341"
						title="Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/81ZB62prn-L._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						id="13321341"
						title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
						price={64.45}
						image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SL1500_.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="13328341"
						title="Apple Watch Series 3 - Space Gray Aluminum Case"
						price={179.99}
						image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg"
						rating={4}
					/>
					<Product
						id="18328341"
						title="OtterBox COMMUTER SERIES Case for iPhone SE and iPhone 8/7"
						price={49.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51n1RX1TMzL._AC_SL1000_.jpg"
						rating={3}
					/>
					<Product
						id="18398341"
						title="World of Warcraft Battle for Azeroth - PC Standard Edition"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/81feWhChfIL._SL1500_.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="13321342"
						title="Samsung C49HG90DMU 124.2 cm Quantum Dot LED LCD Monitor - 32:9-1 ms - 3840 x 1080"
						price={999.99}
						image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SL1500_.jpg"
						rating={4}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
