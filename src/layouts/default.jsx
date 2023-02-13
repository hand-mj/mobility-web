import 'normalize.css';
import '../styles/style.scss';

import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

import Header from '../components/header';
import BottomNav from '../components/bottom-nav';

function DefaultLayout({ children }) {
    return (
        <div>
            <BottomNav />
            <Header />
            <div
                css={css`
                    max-width: 1440px;
                    margin: 0 auto;
                    padding: 100px 0;
                `}
            >
                {children}
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node,
};

DefaultLayout.defaultProps = {
    children: null,
};

export default DefaultLayout;
