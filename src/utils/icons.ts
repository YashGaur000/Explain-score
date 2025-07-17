import { 
  Shield, 
  Zap, 
  FileCheck, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Calendar,
  Twitter,
  Linkedin,
  Github,
  ArrowRight,
  Play,
  Star,
  CheckCircle
} from 'lucide-react';

export const iconMap = {
  Shield,
  Zap,
  FileCheck,
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  Twitter,
  Linkedin,
  Github,
  ArrowRight,
  Play,
  Star,
  CheckCircle
};

export const getIcon = (iconName: string) => {
  return iconMap[iconName as keyof typeof iconMap] || Mail;
}; 