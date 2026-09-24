import { HomePageQueryResult } from '@/sanity.types';

import HeroSection from './sections/HeroSection';


type Props = {
	data: NonNullable<HomePageQueryResult>;
};

const HomePage = ({ data }: Props) => {
	return (
		<div className='flex flex-col'>
			<HeroSection data={data.heroSection} />
			<div className='h-screen'></div>
		</div>
	);
};

export default HomePage;
