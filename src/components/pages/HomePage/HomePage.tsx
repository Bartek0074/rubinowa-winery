import { HomePageQueryResult } from '@/sanity.types';

import HeroSection from './sections/HeroSection';
import IntroSection from './sections/IntroSection';
import DiscoverSection from './sections/DiscoverSection';
import WinesSection from './sections/WinesSection';

type Props = {
	data: NonNullable<HomePageQueryResult>;
};

const HomePage = ({ data }: Props) => {
	return (
		<div className='flex flex-col'>
			<HeroSection data={data.heroSection} />
			<IntroSection data={data.introSection} className='mt-section-lg' />
			<DiscoverSection data={data.discoverSections} className='mt-section-base' />
			<WinesSection data={data.winesSection} className='mt-section-xl' />
			<div className='h-64'></div>
		</div>
	);
};

export default HomePage;
