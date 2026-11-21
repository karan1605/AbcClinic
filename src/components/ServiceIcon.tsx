import React from 'react';
import {
  Activity,
  Award,
  Building2,
  ClipboardList,
  Clock,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Users,
  Video,
} from 'lucide-react';

type IconType =
  | 'stethoscope'
  | 'activity'
  | 'clipboard'
  | 'heartPulse'
  | 'shieldCheck'
  | 'video'
  | 'award'
  | 'building'
  | 'users'
  | 'clock';

interface ServiceIconProps {
  name: IconType;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = 'h-6 w-6' }) => {
  switch (name) {
    case 'stethoscope':
      return <Stethoscope className={className} strokeWidth={1.85} />;
    case 'activity':
      return <Activity className={className} strokeWidth={1.85} />;
    case 'clipboard':
      return <ClipboardList className={className} strokeWidth={1.85} />;
    case 'heartPulse':
      return <HeartPulse className={className} strokeWidth={1.85} />;
    case 'shieldCheck':
      return <ShieldCheck className={className} strokeWidth={1.85} />;
    case 'video':
      return <Video className={className} strokeWidth={1.85} />;
    case 'award':
      return <Award className={className} strokeWidth={1.85} />;
    case 'building':
      return <Building2 className={className} strokeWidth={1.85} />;
    case 'users':
      return <Users className={className} strokeWidth={1.85} />;
    case 'clock':
      return <Clock className={className} strokeWidth={1.85} />;
    default:
      return <Stethoscope className={className} strokeWidth={1.85} />;
  }
};
