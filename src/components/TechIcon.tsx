import type { ReactElement } from "react";
import { FileText, FlaskConical, Layers, Users, Zap } from "lucide-react";
import {
  SiAndroid,
  SiCapacitor,
  SiElectron,
  SiK6,
  SiMaterialdesign,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

type Props = { size: number };

const layers = (p: Props) => <Layers size={p.size} />;

const icons: Record<string, (p: Props) => ReactElement> = {
  react: (p) => <SiReact size={p.size} />,
  router: (p) => <SiReactrouter size={p.size} />,
  material: (p) => <SiMaterialdesign size={p.size} />,
  vite: (p) => <SiVite size={p.size} />,
  tailwind: (p) => <SiTailwindcss size={p.size} />,
  node: (p) => <SiNodedotjs size={p.size} />,
  nest: (p) => <SiNestjs size={p.size} />,
  prisma: (p) => <SiPrisma size={p.size} />,
  postgres: (p) => <SiPostgresql size={p.size} />,
  mongo: (p) => <SiMongodb size={p.size} />,
  php: (p) => <SiPhp size={p.size} />,
  capacitor: (p) => <SiCapacitor size={p.size} />,
  android: (p) => <SiAndroid size={p.size} />,
  electron: (p) => <SiElectron size={p.size} />,
  playwright: (p) => <FlaskConical size={p.size} />,
  k6: (p) => <SiK6 size={p.size} />,
  typescript: (p) => <SiTypescript size={p.size} />,
  scrum: (p) => <Users size={p.size} />,
  zap: (p) => <Zap size={p.size} />,
  types: (p) => <FileText size={p.size} />,
  layers,
};

export function TechIcon({ name, size = 22 }: { name: string; size?: number }) {
  const Cmp = icons[name] ?? layers;
  return <Cmp size={size} />;
}
