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
		<html>
			<body className={`${inter.className} bg-[#F9AAD0]`}>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
