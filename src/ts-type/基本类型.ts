/** ════════════════════════🏳‍🌈 最基本的类型 🏳‍🌈════════════════════════
 *
 ** ════════════════════════🚧 最基本的类型 🚧════════════════════════ */
export type Long = number
export type int = number
export type Byte = 0 | 1
export type byte = Byte
export type int32 = number
export type int64 = number
export type BigDecimal = number


/** ════════════════════════🏳‍🌈 稍微高级一些的类型，要注意应该要进行一手转化 🏳‍🌈════════════════════════
 *
 ** ════════════════════════🚧 稍微高级一些的类型，要注意应该要进行一手转化 🚧════════════════════════ */

export type date_time = Date


/** ════════════════════════🏳‍🌈 特殊的类型 🏳‍🌈════════════════════════
 *  可能会干扰正常的代码
 ** ════════════════════════🚧 特殊的类型 🚧════════════════════════ */

/** 因为他实际并不是返回的包装后的String，从接口中读出来的都是string */
export type String = string


/** ════════════════════════🏳‍🌈 泛型 🏳‍🌈════════════════════════
 *
 ** ════════════════════════🚧 泛型 🚧════════════════════════ */

/** 整型，作为泛型返回传入的类型，建议传入 int32 int64 之类的 */
export type integer<T = int64> = T

/** 不能够命名为string */
export type _string<T = any> = string

export type array<T>=Array<T>