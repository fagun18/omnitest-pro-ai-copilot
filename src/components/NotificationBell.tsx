
import { useState, useEffect } from "react";
import { Bell, BellDot } from "lucide-react";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger 
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { websocketService, WebSocketMessage } from "@/utils/websocket";

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: number;
  read: boolean;
  type: "info" | "success" | "warning" | "error";
}

export const NotificationBell = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  
  // Connect to WebSocket on component mount
  useEffect(() => {
    websocketService.connect()
      .on('message', handleWebSocketMessage);
    
    // Add some initial notifications
    setNotifications([
      {
        id: "1",
        title: "Welcome to OmniTest",
        message: "Start by scanning your first website to generate test suggestions.",
        timestamp: Date.now() - 3600000,
        read: false,
        type: "info"
      }
    ]);
    
    return () => {
      websocketService.off('message', handleWebSocketMessage);
    };
  }, []);
  
  // Handle incoming WebSocket messages
  const handleWebSocketMessage = (message: WebSocketMessage) => {
    if (message.type === 'notification') {
      const newNotification: Notification = {
        id: `notif-${Date.now()}`,
        title: message.data.title || "New Notification",
        message: message.data.message || "You have a new notification",
        timestamp: message.timestamp || Date.now(),
        read: false,
        type: message.data.type || "info"
      };
      
      setNotifications(prev => [newNotification, ...prev]);
    }
  };
  
  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };
  
  // Mark a single notification as read
  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };
  
  // Count unread notifications
  const unreadCount = notifications.filter(n => !n.read).length;
  
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          {unreadCount > 0 ? (
            <>
              <BellDot className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {unreadCount}
              </span>
            </>
          ) : (
            <Bell className="h-5 w-5" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-medium">Notifications</h3>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs"
              onClick={markAllAsRead}
            >
              Mark all as read
            </Button>
          )}
        </div>
        <ScrollArea className="max-h-80">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-sm text-gray-500">
              No notifications
            </div>
          ) : (
            <div className="divide-y">
              {notifications.map(notification => (
                <div 
                  key={notification.id} 
                  className={`p-4 ${notification.read ? 'bg-white' : 'bg-blue-50'}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-sm">{notification.title}</h4>
                    <Badge variant={
                      notification.type === "success" ? "default" : 
                      notification.type === "error" ? "destructive" : 
                      notification.type === "warning" ? "outline" : "secondary"
                    }>
                      {notification.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    {new Date(notification.timestamp).toLocaleTimeString()} - {new Date(notification.timestamp).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationBell;
