import { HomePageQueryResult } from '@/sanity.types';

import HeroSection from './sections/HeroSection';
import IntroSection from './sections/IntroSection';

type Props = {
	data: NonNullable<HomePageQueryResult>;
};

const HomePage = ({ data }: Props) => {
	return (
		<div className='flex flex-col'>
			<HeroSection data={data.heroSection} />
			<IntroSection data={data.introSection} />
			<div className='h-screen'></div>
		</div>
	);
};

export default HomePage;
