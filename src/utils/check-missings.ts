import CustomError from "./errors/customError";
import { removeDuplicates } from "./remove-duplicates.util";

function checkMissingIds(found: { id: number }[], all: number[]) {
  const idsFound = found.map((data) => data.id);
  const idsParsed = removeDuplicates(idsFound);

  const missingIds: number[] = [];

  for (let i = 0; i < all.length; i++) {
    const exist = idsParsed.includes(all[i]);

    if (!exist) missingIds.push(all[i]);
  }

  if (missingIds.length)
    CustomError.new({
      message: `Elementos no encontrados`,
      data: missingIds,
      statusCode: 404,
    });
}

export { checkMissingIds };
