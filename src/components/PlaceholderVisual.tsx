import React from 'react';
import { Building2, HeartPulse, Image as ImageIcon, Stethoscope, UserRound } from 'lucide-react';

interface PlaceholderVisualProps {
  token: '[HERO_IMAGE]' | '[CLINIC_IMAGE]' | '[DOCTOR_IMAGE]' | '[MEDICAL_IMAGE]';
  subtitle: string;
  aspectClass?: string;
  className?: string;
  variant?: 'hero' | 'clinic' | 'doctor' | 'medical';
}

export const PlaceholderVisual: React.FC<PlaceholderVisualProps> = ({
  token,
  subtitle,
  aspectClass = 'aspect-[4/3]',
  className = '',
  variant = 'clinic',
}) => {
  const isHero = variant === 'hero';
  const isDoctor = variant === 'doctor';
  const isMedical = variant === 'medical';

  const IconComponent = isHero
    ? HeartPulse
    : isDoctor
      ? UserRound
      : isMedical
        ? Stethoscope
        : Building2;

  return (
    <div
      role="img"
      aria-label={`${token} — ${subtitle}`}
      className={`relative w-full overflow-hidden rounded-[12px] select-none ${aspectClass} ${className}`}
      style={{
        background: isHero
          ? 'linear-gradient(145deg, #01264D 0%, #013874 52%, #025EC1 100%)'
          : isDoctor
            ? 'linear-gradient(180deg, #F5F9FE 0%, #E7F0FC 100%)'
            : isMedical
              ? 'linear-gradient(135deg, #013874 0%, #025EC1 100%)'
              : 'linear-gradient(135deg, #F5F9FE 0%, #E4EFFC 100%)',
      }}
    >
      {/* Subtle architectural clinical grid geometry */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={`grid-${variant}-${token.replace(/[^a-zA-Z]/g, '')}`}
            width="36"
            height="36"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 36 0 L 0 0 0 36"
              fill="none"
              stroke={isHero || isMedical ? 'rgba(255,255,255,0.08)' : 'rgba(2,94,193,0.08)'}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#grid-${variant}-${token.replace(/[^a-zA-Z]/g, '')})`}
        />
        {/* Abstract clinical silhouette arcs */}
        <circle
          cx="86%"
          cy="18%"
          r="96"
          fill={isHero || isMedical ? 'rgba(255,255,255,0.06)' : 'rgba(2,94,193,0.06)'}
        />
        <circle
          cx="12%"
          cy="88%"
          r="72"
          fill={isHero || isMedical ? 'rgba(255,255,255,0.05)' : 'rgba(2,94,193,0.05)'}
        />
      </svg>

      {/* Centered placeholder frame badge */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-6 text-center">
        <div
          className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
          style={{
            backgroundColor:
              isHero || isMedical ? 'rgba(255, 255, 255, 0.14)' : 'rgba(2, 94, 193, 0.1)',
            color: isHero || isMedical ? '#FFFFFF' : '#025EC1',
          }}
        >
          <IconComponent className="h-8 w-8" strokeWidth={1.75} />
        </div>

        <div
          className="inline-flex items-center gap-2 rounded-[8px] px-3.5 py-1.5 text-sm font-bold tracking-tight"
          style={{
            backgroundColor:
              isHero || isMedical ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.92)',
            color: isHero || isMedical ? '#FFFFFF' : '#213245',
            border:
              isHero || isMedical
                ? '1px solid rgba(255, 255, 255, 0.25)'
                : '1px solid rgba(2, 94, 193, 0.16)',
          }}
        >
          <ImageIcon className="h-4 w-4 shrink-0" />
          <span>{token}</span>
        </div>

        <p
          className="mt-2.5 max-w-[260px] text-xs font-medium leading-relaxed"
          style={{
            color: isHero || isMedical ? 'rgba(255, 255, 255, 0.78)' : '#59616B',
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export const LogoPlaceholder: React.FC<{ light?: boolean }> = ({ light = false }) => {
  return (
    <div className="inline-flex items-center gap-3 whitespace-nowrap shrink-0">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-[10px] shrink-0"
        style={{
          backgroundColor: light ? 'rgba(255, 255, 255, 0.14)' : '#025EC1',
          color: '#FFFFFF',
          border: light ? '1px solid rgba(255, 255, 255, 0.22)' : 'none',
        }}
        aria-hidden="true"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 4V20M4 12H20"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.45" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span
          className="text-[19px] font-bold tracking-[-0.02em]"
          style={{ color: light ? '#FFFFFF' : '#213245' }}
        >
          ABC Clinic
        </span>
        <span
          className="mt-0.5 text-[10px] font-semibold tracking-wide"
          style={{ color: light ? 'rgba(255, 255, 255, 0.7)' : '#59616B' }}
        >
          [LOGO_PLACEHOLDER]
        </span>
      </div>
    </div>
  );
};
