import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { ArgsType, Field, InputType, PickType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@InputType('NestedStringFilter', { description: 'Filters a string field' })
export class GraphQLNestedStringFilter {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  equals?: string;
}

@InputType('BaseRequest', { isAbstract: true })
export class BaseRequest {
  @IsOptional()
  @ValidateNested()
  @Type(() => GraphQLNestedStringFilter)
  @Field(() => GraphQLNestedStringFilter, { nullable: true })
  id?: GraphQLNestedStringFilter;
}

@InputType('RequestA')
export class RequestA extends PickType(BaseRequest, ['id']) {
  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  name?: string;
}

@ArgsType()
export class RequestArgs {
  @IsOptional()
  @ValidateNested()
  @Type(() => RequestA)
  @Field(() => RequestA, {
    nullable: true,
  })
  where?: RequestA;
}
