import YouvitLogo from '@/components/common/logo/YouvitLogo';

const Header = () => {
  return (
    <header className="border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <YouvitLogo width={140} height={45} />
          </div>
          <div className="text-right">
            <h1 className="font-inter text-xl font-semibold text-secondary">QR Code Generator</h1>
            <p className="font-inter text-sm text-gray-600">Create QR codes instantly</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
