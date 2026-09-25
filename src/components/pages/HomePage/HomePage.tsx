import { HomePageQueryResult } from '@/sanity.types';

import HeroSection from './sections/HeroSection';
import IntroSection from './sections/IntroSection';
import DiscoverSection from './sections/DiscoverSection';

type Props = {
	data: NonNullable<HomePageQueryResult>;
};

const HomePage = ({ data }: Props) => {
	return (
		<div className='flex flex-col'>
			<HeroSection data={data.heroSection} />
			<IntroSection data={data.introSection} className='mt-12 md:mt-15 lg:mt-21 xl:mt-35' />
			<DiscoverSection data={data.discoverSections} className='mt-8 md:mt-10 lg:mt-14 xl:mt-28' />
			<div className='h-64'></div>
		</div>
	);
};

export default HomePage;
