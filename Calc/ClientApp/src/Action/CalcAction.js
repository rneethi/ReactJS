export const OPRATOR = "OPRATOR";
export const OPRAND = "OPRAND";

export function oprator(op) {
    return {
        type: OPRATOR,
        op
    }
}

export function oprand(num) {
    return {
        type: OPRAND,
        num
    }
}