import { ApiProperty } from '@nestjs/swagger';

export enum CallbackState {
  SUCCESS = 'success',
  FAILURE = 'failure',
  ERROR = 'error',
}

export class PushDataDto {
  @ApiProperty()
  pushed_at: number;

  @ApiProperty()
  pusher: string;

  @ApiProperty()
  tag: string;
}

export class RepositoryDto {
  @ApiProperty()
  comment_count: number;

  @ApiProperty()
  date_created: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  dockerfile: string;

  @ApiProperty()
  full_description: string;

  @ApiProperty()
  is_official: boolean;

  @ApiProperty()
  is_private: boolean;

  @ApiProperty()
  is_trusted: boolean;

  @ApiProperty()
  name: string;

  @ApiProperty()
  namespace: string;

  @ApiProperty()
  owner: string;

  @ApiProperty()
  repo_name: string;

  @ApiProperty()
  repo_url: string;

  @ApiProperty()
  star_count: number;

  @ApiProperty()
  status: string;
}

export class CallbackDto {
  @ApiProperty()
  callback_url: string;

  @ApiProperty({
    type: PushDataDto,
  })
  push_data: PushDataDto;

  @ApiProperty({
    type: RepositoryDto,
  })
  repository: RepositoryDto;
}
