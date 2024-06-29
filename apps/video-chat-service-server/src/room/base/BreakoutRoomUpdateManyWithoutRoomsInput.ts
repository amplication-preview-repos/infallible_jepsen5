/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BreakoutRoomWhereUniqueInput } from "../../breakoutRoom/base/BreakoutRoomWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BreakoutRoomUpdateManyWithoutRoomsInput {
  @Field(() => [BreakoutRoomWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BreakoutRoomWhereUniqueInput],
  })
  connect?: Array<BreakoutRoomWhereUniqueInput>;

  @Field(() => [BreakoutRoomWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BreakoutRoomWhereUniqueInput],
  })
  disconnect?: Array<BreakoutRoomWhereUniqueInput>;

  @Field(() => [BreakoutRoomWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BreakoutRoomWhereUniqueInput],
  })
  set?: Array<BreakoutRoomWhereUniqueInput>;
}

export { BreakoutRoomUpdateManyWithoutRoomsInput as BreakoutRoomUpdateManyWithoutRoomsInput };
