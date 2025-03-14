import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import LazyImage from "@/components/ui/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Menu,
  Users,
  MessageSquare,
  Calendar,
  Star,
  BarChart3,
  Bot,
  Boxes,
  Stethoscope,
  Store,
  Briefcase,
  UtensilsCrossed,
  Building,
  FileText,
  Book,
  BookOpen,
  HelpCircle,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavbarProps {
  className?: string;
  onDemoClick?: () => void;
  onConsultationClick?: () => void;
  logo?: string;
}

const defaultLogo = "/assets/LOGO.png";

const Navbar = ({
  className = "",
  logo = defaultLogo,
}: NavbarProps) => {
  const navigate = useNavigate();

  interface MenuItem {
    title: string;
    items: Array<{
      title: string;
      description?: string;
      icon?: React.ReactNode;
      href?: string;
      isNew?: boolean;
      comingSoon?: boolean;
    }>;
  }

  const menuItems: MenuItem[] = [
    {
      title: "Company",
      items: [
        {
          title: "About Us",
          description: "Learn about our mission and team",
          icon: <Users className="h-5 w-5" />,
          href: "/about",
        },
      ],
    },
    {
      title: "Features",
      items: [
        {
          title: "Text-Back AI",
          description: "24/7 automated customer response system",
          icon: <MessageSquare className="h-5 w-5" />,
          href: "/features/text-back",
        },
        {
          title: "Smart Scheduling",
          description: "AI-powered appointment management",
          icon: <Calendar className="h-5 w-5" />,
          href: "/features/scheduling",
        },
        {
          title: "Reputation Management",
          description: "Monitor and improve online presence",
          icon: <Star className="h-5 w-5" />,
          href: "/features/reputation",
        },
        {
          title: "Analytics Dashboard",
          description: "Real-time business insights",
          icon: <BarChart3 className="h-5 w-5" />,
          href: "/features/analytics",
        },
        {
          title: "AI Assistant",
          description: "Virtual assistant for tasks",
          icon: <Bot className="h-5 w-5" />,
          href: "/features/ai-assistant",
          isNew: true,
        },
        {
          title: "Integration Hub",
          description: "Connect your favorite tools",
          icon: <Boxes className="h-5 w-5" />,
          href: "/features/integrations",
        },
      ],
    },
    {
      title: "Solutions",
      items: [
        {
          title: "Healthcare",
          description: "Patient scheduling and communication",
          icon: <Stethoscope className="h-5 w-5" />,
          href: "/solutions/healthcare",
        },
        {
          title: "Retail & Services",
          description: "Customer engagement and booking",
          icon: <Store className="h-5 w-5" />,
          href: "/solutions/retail",
        },
        {
          title: "Professional Services",
          description: "Client management and scheduling",
          icon: <Briefcase className="h-5 w-5" />,
          href: "/solutions/professional-services",
        },
        {
          title: "Hospitality",
          description: "Guest services and reputation",
          icon: <UtensilsCrossed className="h-5 w-5" />,
          href: "/solutions/hospitality",
        },
        {
          title: "Real Estate",
          description: "Property management and showings",
          icon: <Building className="h-5 w-5" />,
          href: "/solutions/real-estate",
          isNew: true,
        },
      ],
    },
    {
      title: "Resources",
      items: [
        {
          title: "Blog",
          description: "Latest news and insights",
          icon: <FileText className="h-5 w-5" />,
          href: "/resources/blog",
        },
        {
          title: "Case Studies",
          description: "See our impact in action",
          icon: <Book className="h-5 w-5" />,
          href: "/resources/case-studies",
        },
        {
          title: "Documentation",
          description: "Guides and API reference",
          icon: <BookOpen className="h-5 w-5" />,
          href: "/resources/documentation",
        },
        {
          title: "FAQ",
          description: "Commonly asked questions",
          icon: <HelpCircle className="h-5 w-5" />,
          href: "/resources/faq",
        },
      ],
    },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 glass border-b bg-background/80 backdrop-blur-sm ${className}`}>
      <div className="container flex items-center justify-between h-20 px-4 mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <LazyImage
              src={logo}
              alt="Company Logo"
              className="w-40 h-40 object-contain"
              fallback="https://api.dicebear.com/7.x/initials/svg?seed=C"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      {item.items.map((subItem) => (
                        <NavigationMenuLink
                          key={subItem.title}
                          className="block p-3 space-y-1 cursor-pointer hover:bg-accent rounded-md relative"
                          onClick={() => {
                            if (subItem.href) {
                              navigate(subItem.href);
                            }
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <div className="text-primary">{subItem.icon}</div>
                            <div className="font-medium">{subItem.title}</div>
                            {subItem.isNew && (
                              <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">
                                New
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {subItem.description}
                          </p>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            {/* Commented out Schedule Demo and Get Started buttons */}
            {/* <Button variant="outline" onClick={onDemoClick}>
              Schedule Demo
            </Button>
            <Button onClick={() => navigate("/get-started")}>
              Get Started
            </Button> */}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 py-6">
                {menuItems.map((item) => (
                  <div key={item.title} className="space-y-3">
                    <h3 className="font-medium">{item.title}</h3>
                    <div className="space-y-2">
                      {item.items.map((subItem) => (
                        <Button
                          key={subItem.title}
                          variant="ghost"
                          className="w-full justify-start"
                          onClick={() => {
                            if (subItem.href) {
                              navigate(subItem.href);
                            }
                          }}
                        >
                          {subItem.title}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
