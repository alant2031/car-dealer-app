'use server';
import http from './api';
import { StatusResponse, VehicleMake } from './lib/types';

export async function getMakesForVehicleType() {
	try {
		const response = await http.get<VehicleMake>(
			'/vehicles/GetMakesForVehicleType/car?format=json'
		);
		return {
			status: StatusResponse.OK,
			data: response.data
		};
	} catch (error) {
		return {
			status: StatusResponse.ERROR,
			error
		};
	}
}

export async function getModelsForMakeIdYear(makeId: string, year: string) {
	try {
		const response = await http.get(
			`/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}/vehicleType/car?format=json`
		);
		return {
			status: StatusResponse.OK,
			data: response.data
		};
	} catch (error) {
		return {
			status: StatusResponse.ERROR,
			error
		};
	}
}
