import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PollService } from "./poll.service";
import { PollControllerBase } from "./base/poll.controller.base";

@swagger.ApiTags("polls")
@common.Controller("polls")
export class PollController extends PollControllerBase {
  constructor(protected readonly service: PollService) {
    super(service);
  }
}
