import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'monochrome';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-10',
  variant = 'dark',
  showSubtitle = true,
}) => {
  const [imgSrc, setImgSrc] = useState(COMPANY_INFO.officialLogoUrl);
  const [useFallback, setUseFallback] = useState(false);

  const isLight = variant === 'light';
  const primaryTextColor = isLight ? 'text-white' : 'text-[#2f5d8f]';
  const secondaryTextColor = isLight ? 'text-slate-300' : 'text-[#727375]';
  const iconPrimary = isLight ? '#ffffff' : '#2f5d8f';
  const iconSecondary = isLight ? '#94a3b8' : '#727375';

  const handleImageError = () => {
    if (imgSrc === COMPANY_INFO.officialLogoUrl) {
      setImgSrc('https://drive.google.com/uc?export=view&id=1Xd1iK-AM0P7s9kfeVSSv_wN3ARnErLBu');
    } else {
      setUseFallback(true);
    }
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {!useFallback ? (
        <img
          src={imgSrc}
          alt={COMPANY_INFO.name}
          className={`h-full w-auto object-contain max-h-20 ${
            isLight ? 'brightness-0 invert' : ''
          }`}
          onError={handleImageError}
          referrerPolicy="no-referrer"
        />
      ) : (
        /* Precision Engineering Monogram Mark */
        <div className="flex items-center gap-3">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 shrink-0"
          >
            <rect
              x="3"
              y="3"
              width="42"
              height="42"
              rx="6"
              stroke={iconPrimary}
              strokeWidth="2"
              strokeOpacity={isLight ? '0.9' : '1'}
            />
            {/* Technical compass / angle lines */}
            <path
              d="M14 34L24 12L34 34"
              stroke={iconPrimary}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 26H30"
              stroke={iconSecondary}
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Plumb / Legal Balance dot */}
            <circle cx="24" cy="20" r="2" fill={iconPrimary} />
          </svg>

          <div className="flex flex-col justify-center leading-none">
            <span
              className={`font-extrabold tracking-tight text-lg md:text-xl font-serif ${primaryTextColor}`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              CALLEGARI
            </span>
            {showSubtitle && (
              <span
                className={`text-xs font-semibold tracking-[0.2em] uppercase mt-0.5 ${secondaryTextColor}`}
              >
                ENGENHARIA
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
