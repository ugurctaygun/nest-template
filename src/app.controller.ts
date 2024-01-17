import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHomePage(@Res() res: Response): void {
    const pathToHtml = join(__dirname, '../client', 'index.html');
    try {
      const htmlContent = readFileSync(pathToHtml, 'utf8');
      res.send(htmlContent);
    } catch (error) {
      console.error('Error reading HTML file:', error);
      res.status(500).send('Internal Server Error');
    }
  }
}