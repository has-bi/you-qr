import Image from 'next/image';

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

const YouvitLogo = ({ className = '', width = 120, height = 40 }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/Youvit - White - PNG-02.png"
        alt="Youvit Logo"
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  );
};

export default YouvitLogo;
