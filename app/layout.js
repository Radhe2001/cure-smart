import { Inter } from 'next/font/google';
import './globals.css';
import { AppProvider } from './context';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Cure Smart',
	description: 'This is an healthcare application',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
				/>
			</head>
			<body className={`${inter.className} bg-[#F9AAD0]`}>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
