import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  padding: 32px;
  text-align: center;
  & + article {
    margin-top: 32px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    & + article {
    margin-top: 48px;
  }
  }
`;

const Name = styled.h3`
  font-size: 36px;
  font-weight: bold;
  margin: 0 0 8px 0;
`;

const Host = styled.h4`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 0 8px 0;
`;

const Address = styled.address`
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  margin: 0 0 64px 0;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const Time = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 0 0 8px 0;
  text-transform: uppercase;
`;

const EventDate = styled.div`
  font-size: 18px;
  font-weight: normal;
  margin: 0 0 32px 0;
`;

const RSVPButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  background-color: #8E193E;
  padding: 16px 64px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  a {
    color: var(--color-white);
  }
`;

const First = styled.section`
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Second = styled.section`
  @media (min-width: 768px) {
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const EventCard = ({event: { name, host, address, date, rsvpLink, notes }}) => {
  const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  console.log({ notes });

  const eventDate = new Date(date);
  const options = { weekday: 'long'};
  const weekday = new Intl.DateTimeFormat('en-US', options).format(eventDate);
  const options2 = { day: '2-digit'};
  const day = new Intl.DateTimeFormat('en-US', options2).format(eventDate);
  const month = eventDate.getMonth();

  // TODO: Add duration or start time/finish time to data

  return (
    <Wrapper>
      <First>
        <Name>{name}</Name>
        <Host>{host}</Host>
        <Address>{address}</Address>
      </First>
      <Second>
        <Time>5:30pm - 8:30pm</Time>
        <EventDate>{`${weekday}, ${months[month]} ${day}`}</EventDate>
        <RSVPButton><a href={rsvpLink} target="_blank" rel="noopener noreferrer">RSVP</a></RSVPButton>
      </Second>
    </Wrapper>
  );
};

export default EventCard;
