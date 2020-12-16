import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Video {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  _id: string;

  @Field()
  category: string;
}
