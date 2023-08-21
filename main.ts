import * as TJS from "typescript-json-schema";

const settings: TJS.PartialArgs = { required: true };

const files = ["src/udr.next.d.ts"];

const program = TJS.getProgramFromFiles(files);

const schema = TJS.buildGenerator(program, settings, files)?.getSchemaForSymbol("Device")

console.log(JSON.stringify(schema, null, 4));