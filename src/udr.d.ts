export interface Device {
	class: string;
	userIdentifier: string;
	friendlyName?: string;
	unitNumber?: string;
	[k: string]: unknown;
}