import { Banner } from '@/app/_components/Banner';
import { Editor } from '@/app/_components/BusinessCard/Editor';
import { Footer } from '@/app/_components/Footer';
import { Header } from '@/app/_components/Header';

export default function Home() {
	return (
		<>
			<Header />
			<Banner />
			<Editor />
			<Footer />
		</>
	);
}
