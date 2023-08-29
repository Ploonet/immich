import { LibraryEntity } from '@app/infra/entities';
import { LibraryStatsResponseDto } from '.';

export const ILibraryRepository = 'ILibraryRepository';

export interface ILibraryRepository {
  getCountForUser(ownerId: string): Promise<number>;
  getAllByUserId(userId: string): Promise<LibraryEntity[]>;
  get(id: string, withDeleted?: boolean): Promise<LibraryEntity | null>;
  create(library: Partial<LibraryEntity>): Promise<LibraryEntity>;
  delete(id: string): Promise<void>;
  softDelete(id: string): Promise<void>;
  getDefaultUploadLibrary(ownerId: string): Promise<LibraryEntity | null>;
  getUploadLibraryCount(ownerId: string): Promise<number>;
  update(library: Partial<LibraryEntity>): Promise<LibraryEntity>;
  getStatistics(id: string): Promise<LibraryStatsResponseDto>;
  getOnlineAssetPaths(id: string): Promise<string[]>;
  getAssetIds(id: string, withDeleted?: boolean): Promise<string[]>;
  existsByName(name: string, withDeleted?: boolean): Promise<boolean>;
}
