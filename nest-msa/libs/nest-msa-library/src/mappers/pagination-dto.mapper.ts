import { BasePaginationReqDto } from '@app/nest-msa-library/dto/base-pagination-req.dto';
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere } from 'typeorm';
import { FILTER_MAPPER } from '@app/nest-msa-library/const/filter-mapper.const';

export class PaginationDtoMapper {
  public mapToPaginationInputDto(dto: BasePaginationReqDto) {
    // const findOptions = this.composeFindOption;
  }

  private composeFindOptions<T>(dto: BasePaginationReqDto): FindManyOptions<T> {
    let where: FindOptionsWhere<T> = {};
    let order: FindOptionsOrder<T> = {};

    for (const [key, value] of Object.entries(dto)) {
      if (key.startsWith('where__')) {
        where = { ...where, ...this.parseWhereFilter(key, value) };
      }

      if (key.startsWith('order')) {
        order = { ...order, ...this.parseWhereFilter(key, value) };
      }
    }

    return {
      where,
      order,
      take: dto.take || 10,
      skip: dto.page ? (dto.take || 10) * (dto.page - 1) : 0,
    };
  }

  private parseWhereFilter<T>(
    key: string,
    value: string,
  ): FindOptionsWhere<T> | FindOptionsOrder<T> {
    const options: FindOptionsWhere<T> = {};
    const split = key.split('__');

    if (split.length === 2) {
      const [_, field] = split;

      options[field] = value;
    }

    if (split.length === 3) {
      const [_, field, operator] = split;

      const values = value.toString().split(',');

      if (operator === 'between') {
        options[field] = FILTER_MAPPER[operator](values[0], values[1]);
      } else {
        options[field] = FILTER_MAPPER[operator](values[0]);
      }
    }

    return options;
  }
}
