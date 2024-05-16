
type b<T> = T extends undefined
  ? {
      success: (res: any) => any;
    }
  : T;

type un_success_par<
  T extends {
    (options: { success: (res: any) => any; [name: string]: any }): any;
  },
> = Parameters<b<Parameters<T>[0]>["success"]>[0];

function assert<T>(par: T | undefined): T {
  return par!;
}

/** 从联合类型中去剔除某些类型 */

/** 剔除undefined */
type wipe_off_undefined<T> = T extends undefined | infer R ? R : T;
type test1 = string | undefined;

type h = wipe_off_undefined<test1>;
