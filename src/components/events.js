import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";
import EventCard from "./eventCard";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const Total = styled.div`
  font-size: 20px;
  padding-bottom: 32px;
  color: var(--color-white);
  span {
    font-weight: bold;
    color: #00C1A2;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const Events = () => {
  const data = useStaticQuery(graphql`
    query EventsQuery {
      afrotechEvents {
        events {
          id
          name
          host
          address
          date
          rsvpLink
          notes
        }
      }
    }
  `);

  console.log({ data });
  const { events } = data.afrotechEvents;

  return (
    <React.Fragment>
      <Total>Showing <span>{events.length}</span> events</Total>
      { events ?
        <Wrapper>
          {
            events.map(event => <EventCard key={event.id} event={event}/>)
          }
        </Wrapper>
      : null }
    </React.Fragment>
  );
};

export default Events;
