import {
  Wrench,
  Server,
  Network,
  Database,
  ClipboardList,
  MapPinned,
  Recycle,
  Wifi,
  PackageCheck,
  Rocket,
  Settings,
} from 'lucide-react';

const iconMap = {
  Wrench,
  Server,
  Network,
  Database,
  ClipboardList,
  MapPinned,
  Recycle,
  Wifi,
  PackageCheck,
  Rocket,
};

export const getIcon = (name) => iconMap[name] || Settings;
