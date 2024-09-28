export function filterBuilder(opt) {
  const { limit, offset, fullname, ...where } = opt;

  if (!limit || limit > 50) opt.limit = 50;
  if (!offset) opt.offset = 0;

  const filters = {
    limit: opt.limit,
    offset: opt.offset,
    where: where,
  };

  return filters;
}
