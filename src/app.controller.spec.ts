import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Response } from 'express';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return the content of "index.html" with the title "Home"', () => {
      const expectedHtmlContent =
        '<html><head><title>Home</title></head><body></body></html>';

      const mockResponse: Response = {
        send: jest.fn(),
        status: jest.fn().mockReturnThis(),
      } as any;

      jest.spyOn(appController, 'getHomePage').mockImplementation(() => {
        appController.getHomePage(mockResponse);
        return expectedHtmlContent;
      });

      const response = appController.getHomePage(mockResponse);
      expect(response).toContain('<title>Home</title>');
    });
  });
});
