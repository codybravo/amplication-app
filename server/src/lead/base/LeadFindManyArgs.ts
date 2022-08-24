/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LeadWhereInput } from "./LeadWhereInput";
import { Type } from "class-transformer";
import { LeadOrderByInput } from "./LeadOrderByInput";

@ArgsType()
class LeadFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LeadWhereInput,
  })
  @Field(() => LeadWhereInput, { nullable: true })
  @Type(() => LeadWhereInput)
  where?: LeadWhereInput;

  @ApiProperty({
    required: false,
    type: [LeadOrderByInput],
  })
  @Field(() => [LeadOrderByInput], { nullable: true })
  @Type(() => LeadOrderByInput)
  orderBy?: Array<LeadOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LeadFindManyArgs };
