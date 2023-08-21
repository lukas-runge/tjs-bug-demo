import * as TJS from "typescript-json-schema";

const settings: TJS.PartialArgs = { required: true };

const program = TJS.getProgramFromFiles(["src/udr.next.d.ts"]);

const schema = TJS.buildGenerator(program, settings)?.getSchemaForSymbol("Device")

console.log(JSON.stringify(schema, null, 4));