"use server";

import { revalidatePath } from "next/cache";

const revaidateAction = (path) => {
  return revalidatePath(path);
};

export default revaidateAction;
