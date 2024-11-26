import {atom, PrimitiveAtom} from 'jotai';
import {IVoteCard} from "../globals";

export const atomAryVoteCards:PrimitiveAtom<IVoteCard[]> = atom<IVoteCard[]>([]);
export const atomCurrentVoteCardID:PrimitiveAtom<number> = atom<number>(0);