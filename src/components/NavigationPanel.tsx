
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Map, InfoIcon, Phone, Home, ChevronRight, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

const menuItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: InfoIcon },
  { name: 'Services', path: '/services', icon: Car },
  { name: 'Destinations', path: '/destinations', icon: Map },
  { name: 'Contact', path: '/contact', icon: Phone },
];

const NavigationPanel = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-14 left-0 h-screen z-40 md:z-30">
      <SidebarProvider defaultOpen={false}>
        <div className="group/sidebar-wrapper flex h-[calc(100vh-3.5rem)] w-full">
          <Sidebar>
            <SidebarHeader className="flex items-center justify-between p-4">
              <Link to="/" className="text-xl font-display font-bold text-alba-950 tracking-tighter">
                AlbaRides
              </Link>
              <SidebarTrigger />
            </SidebarHeader>
            
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {menuItems.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton 
                          isActive={location.pathname === item.path}
                          asChild
                          tooltip={item.name}
                        >
                          <Link to={item.path}>
                            <item.icon />
                            <span>{item.name}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            
            <SidebarFooter>
              <div className="p-4 text-sm text-muted-foreground">
                © {new Date().getFullYear()} AlbaRides
              </div>
            </SidebarFooter>
          </Sidebar>
          
          <button 
            className="fixed top-4 left-4 md:hidden z-50 bg-white p-2 rounded-md shadow-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={20} />
          </button>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default NavigationPanel;
