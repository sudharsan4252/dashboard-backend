import { Article } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements Article {
  @ApiProperty()
  id: number;

  @ApiProperty({required:true})
  fname: string;

  @ApiProperty({ required: true})
  lname: string;

  @ApiProperty({required:true})
  email: string;

  @ApiProperty({required:true})
  Dob: string;

  @ApiProperty({required:true})
  Rollno: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}