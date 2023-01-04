import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import Contact from '../screens/Contact';
export default (
	<BrowserRouter>
		<Routes>
			<Route path="/home" element={<HomeScreen/>} />
			<Route path="/contact" element={<Contact/>} />
		</Routes>
	</BrowserRouter>
);
