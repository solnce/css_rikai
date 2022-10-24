import React from 'react';
import styled from 'styled-components';

const Index = () => (
  <div>
    <Content>
      <Link href="/api/og" target="_blank">
        /api/og
      </Link>
      <Img src="/api/og" alt="CSS完全に理解した" />
    </Content>

    <Heading>Using text query</Heading>
    <Content>
      <Link href="/api/og?text=React" target="_blank">
        /api/og?text=React
      </Link>
      <Img src="/api/og?text=React" alt="React完全に理解した" />
    </Content>
    <Content>
      <Link href="/api/og?text=プログラミング" target="_blank">
        /api/og?text=プログラミング
      </Link>
      <Img
        src="/api/og?text=プログラミング"
        alt="プログラミング完全に理解した"
      />
    </Content>
  </div>
);

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  align-items: center;
`;

const Heading = styled.h2`
  font-weight: bold;
  text-align: center;
`;

const Link = styled.a`
  font-weight: bold;
`;

const Img = styled.img`
  display: block;
  max-width: 1200px;
  max-height: 630px;
`;

export default Index;
