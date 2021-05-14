import {InvalidOptionalGetException, Optional} from "../lib/Optional.ts";
import {assertEquals} from 'testing/asserts.ts';

Deno.test("empty Optional", () => {
    const opt = new Optional();
    assertEquals(opt.isEmpty(), true);
    assertEquals(opt.isPresent(), false);
    let cb1 = false;
    opt.ifPresent(() => cb1 = true);
    assertEquals(cb1, false);

    assertEquals(opt.orElse(2), 2);
    assertEquals(opt.orElseGet(() => 2), 2);

    const get = opt.get();
    assertEquals(get.isError, true);
    if(get.isError) {
        assertEquals(get.error instanceof Error, true);
        assertEquals(get.exception, InvalidOptionalGetException);
    }
});

Deno.test("full Optional", () => {
    const opt = new Optional(8);
    assertEquals(opt.isEmpty(), false);
    assertEquals(opt.isPresent(), true);
    let cb1 = false;
    opt.ifPresent(() => cb1 = true);
    assertEquals(cb1, true);

    assertEquals(opt.orElse(2), 8);
    assertEquals(opt.orElseGet(() => 2), 8);

    const get = opt.get();
    assertEquals(get.isError, false);
    if(!get.isError) {
        assertEquals(get.value, 8);
    }
});
