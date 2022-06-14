import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../providers/prisma.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    prisma = module.get(PrismaService);
    service = module.get<UserService>(UserService);
  });

  describe('createUser', () => {
    it('should create and delte an user', async () => {
      const user = await service.create({
        username: '1111111d1',
        password: '1111111d1',
      });
      await prisma.user.delete({ where: { id: user.id } });
      expect(typeof user.id === 'number').toBeTruthy();
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
