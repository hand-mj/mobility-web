import '../styles/header-index.css';
import '../styles/header.css';

import { css, useTheme } from '@emotion/react';
import styled from 'styled-components';
import React from 'react';
import oc from 'open-color';
import { shadow, media } from '../styles/header-util';
import PropTypes from 'prop-types';

import ProfileImage from '../assets/profile.png';
import LogoImage from '../assets/logo1.png';
import SearchImage from '../assets/search.png';

function HeaderLink({ link, children, onClick }) {
    const theme = useTheme();

    return (
        <div
            css={css`
                position: relative;
            `}
        >
            <a
                href={link}
                css={css`
                    font-size: 1.1rem;
                    font-weight: bold;

                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 20px;
                `}
            >
                {children}
            </a>
            {onClick ? (
                <div
                    css={css`
                        position: absolute;
                        bottom: 1px;
                        left: 0;
                        width: 100%;
                        height: 8px;
                        background-color: ${theme.colors.white};
                    `}
                />
            ) : undefined}
        </div>
    );
}

HeaderLink.propTypes = {
    link: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.bool,
};

HeaderLink.defaultProps = {
    onClick: false,
};

// 상단 고정, 그림자
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    width: 100%;
    ${shadow(1)}
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
`;

// 헤더의 내용
const HeaderContents = styled.div`
    width: 994px;
    height: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
    ${media.wide`
        width: 992px;
    `}

    ${media.tablet`
        width: 100%;
    `}
`;

// 중간 여백
const Spacer = styled.div`
    flex-grow: 1;
`;

const Header = ({children}) => {
    return (
        <Positioner>
            <WhiteBackground>
                <HeaderContents>
                        <img id="HeaderLogo"
                            src={LogoImage}
                        />
                        <img id="HeaderSearch"
                            src={SearchImage}
                        />
                        <HeaderLink link="/login"><button id="HeaderLogin">로그인</button></HeaderLink>
                        <img id="HeaderProfile"
                            src={ProfileImage}
                        />
                    <Spacer/>
                    {children}
                </HeaderContents>
            </WhiteBackground>
        </Positioner>
    );
};

export default Header;