import HeroSection from './sections/HeroSection';

type Props = {};

const HomePage = ({}: Props) => {
	return (
		<div className='flex flex-col'>
			<HeroSection />
			<div className='h-screen'></div>
		</div>
	);
};

export default HomePage;
