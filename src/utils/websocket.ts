// WebSocket service for real-time notifications and updates
export interface WebSocketMessage {
  type: 'notification' | 'test-completed' | 'scan-progress' | 'error';
  data: any;
  timestamp: number;
}

class WebSocketService {
  private socket: WebSocket | null = null;
  private mockSocket: { readyState: number } | null = null; // Create a mock socket object instead
  private listeners: Map<string, Function[]> = new Map();
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectTimeout = 3000;
  
  connect(url: string = 'wss://mock-websocket-service.omnitest.com') {
    // In a real implementation, this would connect to an actual WebSocket server
    console.log(`Connecting to WebSocket at ${url}`);
    
    // Simulate WebSocket with events using a mock object instead
    this.mockSocket = { readyState: 1 }; // OPEN
    
    // We're not assigning to the WebSocket.readyState directly
    // Just keeping a reference to our mock state
    
    // Simulate connection events
    setTimeout(() => {
      this.emit('connect', { connected: true, timestamp: Date.now() });
      console.log('WebSocket connected');
    }, 500);
    
    return this;
  }
  
  on(eventType: string, callback: Function) {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, []);
    }
    this.listeners.get(eventType)?.push(callback);
    return this;
  }
  
  off(eventType: string, callback?: Function) {
    if (!callback) {
      this.listeners.delete(eventType);
    } else {
      const callbacks = this.listeners.get(eventType) || [];
      const filtered = callbacks.filter(cb => cb !== callback);
      this.listeners.set(eventType, filtered);
    }
    return this;
  }
  
  emit(eventType: string, data: any) {
    const callbacks = this.listeners.get(eventType) || [];
    callbacks.forEach(callback => callback(data));
    return this;
  }
  
  send(message: WebSocketMessage) {
    // Check our mock socket state instead of actual WebSocket
    if (!this.mockSocket || this.mockSocket.readyState !== 1) {
      console.error('WebSocket is not connected');
      return false;
    }
    
    console.log('Sending message:', message);
    
    // Simulate sending and receiving message
    setTimeout(() => {
      this.emit('message', {
        type: 'ack',
        data: { received: true, original: message },
        timestamp: Date.now()
      });
    }, 300);
    
    return true;
  }
  
  sendTestProgress(testId: string, progress: number) {
    return this.send({
      type: 'scan-progress',
      data: { testId, progress },
      timestamp: Date.now()
    });
  }
  
  disconnect() {
    if (!this.mockSocket) return;
    
    console.log('Disconnecting WebSocket');
    
    // Simulate disconnect
    setTimeout(() => {
      this.emit('disconnect', { reason: 'client_closed', timestamp: Date.now() });
      this.mockSocket = null;
    }, 300);
  }
}

// Singleton instance
export const websocketService = new WebSocketService();
