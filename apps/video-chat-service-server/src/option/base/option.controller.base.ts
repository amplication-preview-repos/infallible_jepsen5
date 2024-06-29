/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { OptionService } from "../option.service";
import { OptionCreateInput } from "./OptionCreateInput";
import { Option } from "./Option";
import { OptionFindManyArgs } from "./OptionFindManyArgs";
import { OptionWhereUniqueInput } from "./OptionWhereUniqueInput";
import { OptionUpdateInput } from "./OptionUpdateInput";

export class OptionControllerBase {
  constructor(protected readonly service: OptionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Option })
  async createOption(@common.Body() data: OptionCreateInput): Promise<Option> {
    return await this.service.createOption({
      data: {
        ...data,

        poll: data.poll
          ? {
              connect: data.poll,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        poll: {
          select: {
            id: true,
          },
        },

        text: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Option] })
  @ApiNestedQuery(OptionFindManyArgs)
  async options(@common.Req() request: Request): Promise<Option[]> {
    const args = plainToClass(OptionFindManyArgs, request.query);
    return this.service.options({
      ...args,
      select: {
        createdAt: true,
        id: true,

        poll: {
          select: {
            id: true,
          },
        },

        text: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Option })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async option(
    @common.Param() params: OptionWhereUniqueInput
  ): Promise<Option | null> {
    const result = await this.service.option({
      where: params,
      select: {
        createdAt: true,
        id: true,

        poll: {
          select: {
            id: true,
          },
        },

        text: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Option })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOption(
    @common.Param() params: OptionWhereUniqueInput,
    @common.Body() data: OptionUpdateInput
  ): Promise<Option | null> {
    try {
      return await this.service.updateOption({
        where: params,
        data: {
          ...data,

          poll: data.poll
            ? {
                connect: data.poll,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          poll: {
            select: {
              id: true,
            },
          },

          text: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Option })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOption(
    @common.Param() params: OptionWhereUniqueInput
  ): Promise<Option | null> {
    try {
      return await this.service.deleteOption({
        where: params,
        select: {
          createdAt: true,
          id: true,

          poll: {
            select: {
              id: true,
            },
          },

          text: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
