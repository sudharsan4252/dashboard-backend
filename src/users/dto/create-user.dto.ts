import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({required:true})
  fname: string;

  @ApiProperty({ required: true })
  lname: string;

  @ApiProperty({required:true})
  email: string;

  @ApiProperty({ required: true })
  Dob: string;

  @ApiProperty({required:true})
  Rollno:string;
}
