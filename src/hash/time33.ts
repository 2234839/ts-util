/**
    A string hashing function based on Daniel J. Bernstein's popular 'times 33' hash algorithm.
*/
export function hash_time33(text: string) {
    let hash = 5381,
        index = text.length;
    while (index) {
        ///@ts-ignore
        hash = (hash * 33) ^ text.codePointAt(--index);
    }
    return hash >>> 0;
}