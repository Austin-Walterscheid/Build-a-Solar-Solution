import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import Contact from '../screens/Contact';
import About from '../screens/About'
import DIY from '../screens/DiyKitScreen'
import Calculator from '../screens/Calculator';
import Login from '../screens/LoginScreen';
import {Kit} from '../components/Kit';

export default (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<HomeScreen/>} />
			<Route path="/about" element={<About/>} />
			<Route path="/contact" element={<Contact/>} />
			<Route path="/diy" element={<DIY/>} />
			<Route path="/solarcalculator" element={<Calculator/>} />
			<Route path='/login' element={<Login />} />
<<<<<<< HEAD
			<Route path='/kit/:id' element={<Kit/>} />
=======
			<Route path='/kit/:id' element={<Kit />} />
>>>>>>> 878f97f0e1892629fe06e51dadd0d714f450a50d
		</Routes>
	</BrowserRouter>
);
