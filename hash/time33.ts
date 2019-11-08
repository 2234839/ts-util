/**
    A string hashing function based on Daniel J. Bernstein's popular 'times 33' hash algorithm.
    @param {string} text - String to hash
    @return {number} Resulting number.
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


/*! http://mths.be/codepointat v0.1.0 by @mathias
给原生不支持 ECMAScript 6 的浏览器使用codePointAt()方法的的一个字符串扩展方法。
*/
if (!String.prototype.codePointAt) {
    (function () {
        var codePointAt = function (this: any, position:any) {
            if (this == null) {
                throw TypeError();
            }
            var string = String(this);
            var size = string.length;
            // 变成整数
            var index = position ? Number(position) : 0;
            if (index != index) { // better `isNaN`
                index = 0;
            }
            // 边界
            if (index < 0 || index >= size) {
                return undefined;
            }
            // 第一个编码单元
            var first = string.charCodeAt(index);
            var second;
            if ( // 检查是否开始 surrogate pair
                first >= 0xD800 && first <= 0xDBFF && // high surrogate
                size > index + 1 // 下一个编码单元
            ) {
                second = string.charCodeAt(index + 1);
                if (second >= 0xDC00 && second <= 0xDFFF) { // low surrogate
                    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                    return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
                }
            }
            return first;
        };
        if (Object.defineProperty) {
            Object.defineProperty(String.prototype, 'codePointAt', {
                'value': codePointAt,
                'configurable': true,
                'writable': true
            });
        } else {
            String.prototype.codePointAt = codePointAt;
        }
    }());
}