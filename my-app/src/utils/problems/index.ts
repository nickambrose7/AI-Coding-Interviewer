import { Problem } from "../types/problem";
import { reverseLinkedList } from "./reverse-linked-list";
import { twoSum } from "./two-sum";

// use an interface to define the shape of an object.
interface Problems {
    [key: string]: Problem;
}
export const problems: Problems = {
    "two-sum": twoSum,
    "reverse-linked-list": reverseLinkedList,
}