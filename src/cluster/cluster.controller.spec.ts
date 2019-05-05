import { Test, TestingModule } from '@nestjs/testing';
import { ClusterController } from './cluster.controller';

describe('Cluster Controller', () => {
  let controller: ClusterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClusterController],
    }).compile();

    controller = module.get<ClusterController>(ClusterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
