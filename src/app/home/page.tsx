import * as React from 'react';

import type { NextPage } from 'next';

import { Hero } from '@/components/home/Hero';
import { WhyIntern } from '@/components/home/WhyIntern';
import { InternshipStats } from '@/components/home/Stats';
import { InternshipFlow } from '@/components/home/Stepper';
import { Pricing } from '@/components/home/Pricing';
import { CallToAction } from '@/components/home/CallToAction';

const Home: NextPage = () => {
    return (
        <>
            <Hero />
            <WhyIntern />
            <InternshipStats />
            <InternshipFlow />
            <Pricing />
            <CallToAction />
        </>
    );
};

export default Home;
