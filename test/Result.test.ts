import {assertEquals} from 'testing/asserts.ts';
import {Err, isOk, isErr, Ok, ifErr, ifOk} from "../lib/Result.ts";
import {Exception} from "../lib/Exception.ts";

const exp = new Exception({
    id: 'Test',
    internalMessageLong: 'Test',
    internalMessageShort: 'Test',
    userMessageLong: 'Test',
    userMessageShort: 'Test'
});

Deno.test("Ok Works", () => {
    const res = Ok(1);
    assertEquals(res.isError, false);
    assertEquals(res.value, 1);
});

Deno.test("Err Works", () => {
    const res = Err(exp);
    assertEquals(res.isError, true);
    assertEquals(res.error.message, exp.errorMessage);
    assertEquals(res.exception, exp);
});

Deno.test("isOk Works", () => {
    const ok = Ok(1);
    const err = Err(exp);
    assertEquals(isOk(ok), true);
    assertEquals(isOk(err), false);
});

Deno.test("isErr Works", () => {
    const ok = Ok(1);
    const err = Err(exp);
    assertEquals(isErr(ok), false);
    assertEquals(isErr(err), true);
});


Deno.test("ifOk Works", () => {
    const ok = Ok(1);
    const err = Err(exp);
    let res = 0;
    ifOk<number>(err, (val) => res = val);
    assertEquals(res, 0);
    ifOk<number>(ok, () => res = 1);
    assertEquals(res, 1);
});

Deno.test("ifErr Works", () => {
    const ok = Ok(1);
    const err = Err(exp);
    let res = 0;
    ifErr<number>(ok, () => res = 1);
    assertEquals(res, 0);
    ifErr<number>(err, () => res = 1);
    assertEquals(res, 1);
    ifErr<number>(err, (val) => assertEquals(val, exp));

});
