import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import Contact from '../screens/Contact';
import About from '../screens/About'
import DIY from '../screens/DIY'
import Build from '../screens/Build'

export default (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<HomeScreen/>} />
			<Route path="/about" element={<About/>} />
			<Route path="/contact" element={<Contact/>} />
			<Route path="/diy" element={<DIY/>} />
			<Route path="/build" element={<Build/>} />
		</Routes>
	</BrowserRouter>
);
