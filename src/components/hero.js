import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components";
import { isMobileOnly, isIOS } from "react-device-detect";
import ScrollDown from "./scrollDown";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const Overlay = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 180px repeat(5, 1fr);
  grid-row-gap: var(--spacing-medium);
  grid-template-columns: repeat(12, 1fr);
  justify-items: center;
  background-image: linear-gradient(
    to right,
    rgba(21, 205, 168, 0.9),
    rgba(9, 154, 151, 0.9)
  );
  @media (min-width: 768px) {
    grid-template-rows: 160px repeat(5, 1fr);
  }
`

const HeroTitle = styled.div`
  grid-row: 2 / span 1;
  grid-column: 1 / -1;
  margin: 0;
  font-size: 72px;
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  place-items: center;
  text-align: center;
  span {
    &:first-of-type {
      font-size: 42px;
      font-weight: 800;
      margin-bottom: 8px;
    }
    &:nth-of-type(2) {
      font-family: 'Open Sans';
      font-size: 22px;
      background-color: #FF5E5B;
      padding: 8px 16px;
      border-radius: 4px;
    }
  }
  @media (min-width: 375px) {
    span {
      &:nth-of-type(2) {
        font-size: 28px;
      }
    }
  }
  @media (min-width: 768px) {
    grid-row: 2 / span 2;
    span {
      &:first-of-type {
        font-size: 72px;
      }
      &:nth-of-type(2) {
        font-size: 64px;
      }
    }
  }
`;

const StyledScrollDown = styled(ScrollDown)`
  grid-row: 5 / -1;
  grid-column: 1 / -1;
  align-self: center;
`;

const StyledVideo = styled.video`
  /* handle low power mode on iPhone */
  visibility: ${({ lowPowerMode }) => lowPowerMode ? "hidden" : "visible"};
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledGif = styled.img`
  height: 100%;
  object-fit: cover;
`;

const StyledLink = styled(Link)`
  grid-row: 4 / span 1;
  grid-column: 1 / -1;
  align-self: end;
  border-radius: 4px;
  color: #FF5E5B;
  background-color: var(--color-white);
  font-size: 2.2rem;
  font-weight: bold;
  padding: var(--spacing-medium) var(--spacing-large);
  box-shadow: var(--box-shadow);
  @media (min-width: 768px) {
    transition: all 0.3s ease-in-out;
    &:hover {
      /* background-color: #6043ed;
      border-color: #6043ed; */
      cursor: pointer;
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      contentfulHero(year: { eq: 2020 }) {
        subtitle
        title
        backgroundMedia {
          file {
            url
          }
        }
        ctaText
        fallbackBackgroundMedia {
          file {
            url
          }
        }
      }
    }
  `);

  const [lowPowerMode, setLowPowerMode] = useState(false);

  const handleVideoSuspend = () => {
    // TODO: suspend event seems to fire no matter what. Think it just fires once media has loaded
    // Using a gif of the video as a workaround on iPhone

    // only hide video on iPhone low power mode
    if (isMobileOnly && isIOS) {
      setLowPowerMode(true);
    }
  }

  const handleVideoPlay = () => {
    setLowPowerMode(false);
  }

  return (
    <Wrapper>
      {lowPowerMode ? (
        <StyledGif
          src={
            data.contentfulHero.fallbackBackgroundMedia.file.url
          }
          alt="Day one of Afrotech Conference"
        />
      ) : (
        <StyledVideo
          autoPlay
          muted
          loop
          playsInline
          lowPowerMode={lowPowerMode}
          onSuspend={handleVideoSuspend}
          onPlay={handleVideoPlay}
        >
          <source
            src={data.contentfulHero.backgroundMedia.file.url}
            type="video/mp4"
          />
        </StyledVideo>
      )}
      <Overlay>
        <HeroTitle>
          <span>{data.contentfulHero.title}</span>
          <span>{data.contentfulHero.subtitle}</span>
        </HeroTitle>
        <StyledLink to="#searchEvent">{data.contentfulHero.ctaText}</StyledLink>
        <StyledScrollDown />
      </Overlay>
    </Wrapper>
  )
};

export default Hero;
