import '../styles/buttom-nav.css';

import React from "react";
import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

import HomeImage from '../assets/home.png';
import LocationImage from '../assets/location.png';
import ChattingImage from '../assets/chatting.png';

function NavLink({ link, children, onClick }) {
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

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.bool,
};

NavLink.defaultProps = {
  onClick: false,
};

const BottomNav = () => {
  return (
    <nav className="wrapper">
      <div>
        <img src={LocationImage}/>
        </div>
      <div>
        <NavLink link="/"><img src={HomeImage}/></NavLink>
      </div>
      <div>
        <img src={ChattingImage}/>
      </div>
    </nav>
  );
};

export default BottomNav;