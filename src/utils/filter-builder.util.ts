export function deleteUndefinedProps(obj) {
  for (const prop in obj) {
    if (obj[prop] === undefined) {
      delete obj[prop];
    }
  }

  return obj;
}

export function filterBuilder(opt) {
  const { limit, offset, ...where } = opt;

  if (!limit || limit > 50) opt.limit = 50;
  if (!offset) opt.offset = 0;

  const filters = {
    limit: opt.limit,
    offset: opt.offset,
    where: deleteUndefinedProps(where),
  };

  return filters;
}
