import {assertEquals} from './deps.ts';
import {Exception} from "./exception.ts";

Deno.test("exception works", async () => {
    const object = {
        id: "test_id",
        internalMessageShort: 'Test',
        internalMessageLong: 'Test',
        userMessageShort: 'Test',
        userMessageLong: 'Test'
    };
    const exception = new Exception(object);
    assertEquals(exception.id, object.id);
    assertEquals(exception.internalMessageShort, object.internalMessageShort);
    assertEquals(exception.internalMessageLong, object.internalMessageLong);
    assertEquals(exception.userMessageShort, object.userMessageShort);
    assertEquals(exception.userMessageLong, object.userMessageLong);
    assertEquals(exception.errorMessage, `Error ID: ${object.id}. Message: ${object.internalMessageShort}.`);
});
