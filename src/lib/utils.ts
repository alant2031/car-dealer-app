import { getMakesForVehicleType } from '@/actions';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { StatusResponse } from './types';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function listYearsFrom(from: number): string[] {
	const currentYear = new Date().getFullYear();
	const list: string[] = [];
	for (let i = from; i <= currentYear; i++) {
		list.push(i.toString());
	}
	return list;
}

export async function listVehicleMakes() {
	const response = await getMakesForVehicleType();

	if (response.status === StatusResponse.OK) {
		const results = response.data?.Results;
		return results?.map((result) => result.MakeName);
	}
	return [];
}
