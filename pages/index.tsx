import React from 'react';

const Index = () => (
  <div>
    <a href="/api/og" target="_blank">
      /api/og
    </a>
    <br />
    <img src="/api/og" />
    <br />
    <br />
    <br />
    Using text query
    <br />
    <a href="/api/og?text=React" target="_blank">
      /api/og?text=React
    </a>
    <br />
    <img src="/api/og?text=React" />
    <br />
    <a href="/api/og?text=プログラミング" target="_blank">
      /api/og?text=プログラミング
    </a>
    <br />
    <img src="/api/og?text=プログラミング" />
    <br />
  </div>
);

export default Index;
