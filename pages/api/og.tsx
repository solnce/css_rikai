import React from 'react';
import type { NextRequest } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get('text');

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
          <span>{text || 'CSS'}</span>
          <span>完全に理解した</span>
        </div>
      </div>
    )
  );
};
