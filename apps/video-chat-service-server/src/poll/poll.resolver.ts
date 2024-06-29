import * as graphql from "@nestjs/graphql";
import { PollResolverBase } from "./base/poll.resolver.base";
import { Poll } from "./base/Poll";
import { PollService } from "./poll.service";

@graphql.Resolver(() => Poll)
export class PollResolver extends PollResolverBase {
  constructor(protected readonly service: PollService) {
    super(service);
  }
}
