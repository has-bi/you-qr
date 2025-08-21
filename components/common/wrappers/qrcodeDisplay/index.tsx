import { Transition } from '@headlessui/react';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const QrCode = dynamic(() => import('@/common/wrappers/qrcodeDisplay/qrCode'), {
  ssr: false,
});

const QrCodeWrapper = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="mx-auto flex w-full max-w-md flex-col justify-center rounded-2xl border bg-white px-8 py-12 font-inter shadow-lg">
      <Transition
        enter={'transition duration-100 ease-out'}
        enterFrom={'transform translate-y-1/4 opacity-100'}
        enterTo={'transform -translate-y-0 opacity-100'}
        leave={'transition duration-300 ease-out'}
        leaveFrom={'transform translate-y-0 opacity-100'}
        leaveTo={'transform -translate-y-1/4 opacity-0'}
        show={isMounted}
      >
        <QrCode />
      </Transition>
    </div>
  );
};

export default QrCodeWrapper;
