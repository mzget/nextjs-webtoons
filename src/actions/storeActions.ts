import { IStoreState } from "../contextStore/store";

export function updatePrograms(payload: any) {
    return (prevS: IStoreState, prevP) => ({ programs: payload });
}
export function selectProgram({ lists, id }: { lists: any[], id: string }) {
    const select = lists.filter((item) => item._id === id);
    return (prevS: IStoreState, prevP) => (
        {
            programs: lists,
            selectProgram: select[0],
        }
    );
}

export function removeUser() {
    return () => ({ user: undefined });
}
