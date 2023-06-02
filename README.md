# Whal3s UI Components for Connectkit

## Installation

```bash
npm install @whal3s/react-connectkit
```

## Usage

```jsx
'use client';
import dynamic from 'next/dynamic'
import { Providers } from '@/app/providers'

const DynamicWhal3sConnectKitButton = dynamic(() => import('@whal3s/react-connectkit').then((mod) => mod.Whal3sConnectKitButton), {ssr: false});

const Claim = () => {
  return (
    <Providers>
      <DynamicWhal3sConnectKitButton isClaimed={false} onClaim={() => {}}/>
    </Providers>
  )

};

export default Claim;
```

