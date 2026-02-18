import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import {
  Grid3X3,
  MousePointerClick,
  Images,
  BookOpen,
  Presentation,
  PersonStanding,
  MoveHorizontal,
  Layers,
  PanelLeft,
  Type,
  Pencil,
  GripHorizontal,
  Shapes,
  Sparkles,
  BarChart3,
  Film,
  Paintbrush,
  Apple,
  Palette,
  Text,
  Square,
  Circle,
  RefreshCw,
  Play,
  Copy,
  MousePointer2,
  Minus,
} from "lucide-react";

const level1Items = [
  {
    title: "Feature Cards",
    icon: Grid3X3,
    href: "/level1/feature-cards",
  },
  {
    title: "Micro Button",
    icon: MousePointerClick,
    href: "/level1/micro-button",
  },
  {
    title: "Gallery Reveal",
    icon: Images,
    href: "/level1/gallery-reveal",
  },
];

const level2Items = [
  {
    title: "Hero Section",
    icon: BookOpen,
    href: "/level2/hero-section",
  },
  {
    title: "Explainer SVG",
    icon: Presentation,
    href: "/level2/explainer",
  },
  {
    title: "Walk Cycle",
    icon: PersonStanding,
    href: "/level2/walk-cycle",
  },
];

const level3Items = [
  {
    title: "Horizontal Scroll",
    icon: MoveHorizontal,
    href: "/level3/horizontal-scroll",
  },
  {
    title: "Parallax Page",
    icon: Layers,
    href: "/level3/parallax",
  },
  {
    title: "Pinned Sidebar",
    icon: PanelLeft,
    href: "/level3/pinned-sidebar",
  },
];

const level4Items = [
  {
    title: "Text Reveal",
    icon: Type,
    href: "/level4/text-reveal",
  },
  {
    title: "SVG Drawing",
    icon: Pencil,
    href: "/level4/svg-drawing",
  },
  {
    title: "Draggable UI",
    icon: GripHorizontal,
    href: "/level4/draggable",
  },
  {
    title: "Morph Icon",
    icon: Shapes,
    href: "/level4/morph-icon",
  },
];

const level5Items = [
  {
    title: "Hello Canvas",
    icon: Square,
    href: "/level5/hello-canvas",
  },
  {
    title: "Drawing Shapes",
    icon: Circle,
    href: "/level5/drawing-shapes",
  },
  {
    title: "Clear & Redraw",
    icon: RefreshCw,
    href: "/level5/clear-redraw",
  },
  {
    title: "Animation Loop",
    icon: Play,
    href: "/level5/animation-loop",
  },
  {
    title: "Multiple Objects",
    icon: Copy,
    href: "/level5/multiple-objects",
  },
  {
    title: "Mouse Interaction",
    icon: MousePointer2,
    href: "/level5/mouse-interaction",
  },
  {
    title: "Bouncing Ball",
    icon: Minus,
    href: "/level5/bouncing-ball",
  },
];

const level6Items = [
  {
    title: "Particles",
    icon: Sparkles,
    href: "/level6/particles",
  },
  {
    title: "Data Viz",
    icon: BarChart3,
    href: "/level6/data-viz",
  },
  {
    title: "Sprite",
    icon: Film,
    href: "/level6/sprite",
  },
  {
    title: "Drawing",
    icon: Paintbrush,
    href: "/level6/drawing",
  },
  {
    title: "Physics",
    icon: Apple,
    href: "/level6/physics",
  },
  {
    title: "Generative",
    icon: Palette,
    href: "/level6/generative",
  },
  {
    title: "Text Scramble",
    icon: Text,
    href: "/level6/text-scramble",
  },
];

export function AppSidebar() {
  const location = useLocation();
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-2 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            A
          </div>
          {state === "expanded" && (
            <span className="font-semibold text-lg">Animation</span>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Level 1 - Foundations</SidebarGroupLabel>
          <SidebarMenu>
            {level1Items.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === item.href}
                  tooltip={item.title}
                >
                  <Link to={item.href}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Level 2 - Timeline</SidebarGroupLabel>
          <SidebarMenu>
            {level2Items.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === item.href}
                  tooltip={item.title}
                >
                  <Link to={item.href}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Level 3 - Scroll</SidebarGroupLabel>
          <SidebarMenu>
            {level3Items.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === item.href}
                  tooltip={item.title}
                >
                  <Link to={item.href}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Level 4 - Advanced</SidebarGroupLabel>
          <SidebarMenu>
            {level4Items.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === item.href}
                  tooltip={item.title}
                >
                  <Link to={item.href}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Level 5 - Canvas Basics</SidebarGroupLabel>
          <SidebarMenu>
            {level5Items.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === item.href}
                  tooltip={item.title}
                >
                  <Link to={item.href}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Level 6 - Canvas & GSAP</SidebarGroupLabel>
          <SidebarMenu>
            {level6Items.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === item.href}
                  tooltip={item.title}
                >
                  <Link to={item.href}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <div className="flex items-center justify-center p-2">
          <SidebarTrigger />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
