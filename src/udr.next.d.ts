import * as UDR from "./udr";
export * from "./udr";

export interface Device extends UDR.Device {
	test: string;
}