import * as Lucide from "lucide-react";

type IconName = keyof typeof Lucide;

interface IconProps {
    icon: IconName;
    size?: number;
    color?: string;
}

const DynamicIcon = ({ icon, size = 24, color = "currentColor" }: IconProps) => {
    const Icon = Lucide[icon] as React.ComponentType<{ size?: number; color?: string }>;
    return <Icon size={size} color={color} />;
};

export default DynamicIcon;
