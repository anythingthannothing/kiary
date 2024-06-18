import { Test, TestingModule } from '@nestjs/testing';
import { KiaryAuthSvcController } from './kiary-auth-svc.controller';
import { KiaryAuthSvcService } from './kiary-auth-svc.service';

describe('KiaryAuthSvcController', () => {
  let kiaryAuthSvcController: KiaryAuthSvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [KiaryAuthSvcController],
      providers: [KiaryAuthSvcService],
    }).compile();

    kiaryAuthSvcController = app.get<KiaryAuthSvcController>(KiaryAuthSvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(kiaryAuthSvcController.getHello()).toBe('Hello World!');
    });
  });
});
