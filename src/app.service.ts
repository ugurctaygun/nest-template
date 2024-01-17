import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class AppService {
  getHomePage(): string {
    const pathToHtml = join(__dirname, '../client', 'index.html');
    return pathToHtml;
  }
}