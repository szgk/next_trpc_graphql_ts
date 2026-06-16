import { builder } from "@/graphql/builder";

import "@/graphql/types/task";

import "@/graphql/query/task";
import "@/graphql/mutation/task";

export const schema = builder.toSchema();