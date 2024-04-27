'use client';
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [darkBg, setDarkBg] = useState(false);

	const value = { darkBg, setDarkBg };

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppData = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppData must be used within AppProvider');
	}
	return context;
};
