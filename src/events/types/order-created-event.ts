import { OrderStatus } from './order-status';
import { Subjects } from './subjects';

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    version: number;
    status: OrderStatus;
    userId: string;
    ticket: {
      id: string;
      price: number;
    };
    expiresAt: string;
  };
}
