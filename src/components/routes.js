import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import Contact from '../screens/Contact';
import About from '../screens/About'
import DIY from '../screens/DiyKitScreen'
import Calculator from '../screens/Calculator';
import SignUp from '../screens/SignUpScreen';
import Login from '../screens/LoginScreen';

export default (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<HomeScreen/>} />
			<Route path="/about" element={<About/>} />
			<Route path="/contact" element={<Contact/>} />
			<Route path="/diy" element={<DIY/>} />
			<Route path="/solarcalculator" element={<Calculator/>} />
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<SignUp />} />
		</Routes>
	</BrowserRouter>
);
