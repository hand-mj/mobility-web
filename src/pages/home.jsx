import '../styles/style.scss';

import React from 'react';

import HomeBox from '../components/home/home-box';
import DefaultLayout from '../layouts/default';

export default function HomePage() {
    return (
        <DefaultLayout>
            <HomeBox />
        </DefaultLayout>
    );
}
