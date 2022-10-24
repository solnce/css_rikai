import React from 'react';
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          width: '80%',
          height: '90%',
          backgroundColor: 'white',
          margin: 'auto 20px',
          fontSize: '128px',
          borderRadius: '100px',
          border: '1px solid #ccc',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            alignItems: 'center',
            transform: 'translateX(250px)',
          }}
        >
          <span>CSS</span>
          <span>完全に理解した</span>
        </div>
      </div>
    )
  );
}
