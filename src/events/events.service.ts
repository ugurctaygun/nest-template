import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
  private events = [
    {
      id: 1,
      name: 'Christmas Event',
      event: {
        text: 'Christmas Event , slay monsters with joy',
        rewards: { 1: { type: 'gold', quantity: 1000 } },
      },
    },
  ];

  findAll() {
    return this.events;
  }
}
