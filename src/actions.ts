'use server';
import http from './lib/api';
import { ApiResponse, StatusResponse } from './lib/types';

export async function getMakesForVehicleType() {
	try {
		const response = await http.get<ApiResponse>(
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
		const response = await http.get<ApiResponse>(
			`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
		);
		console.log('OK');
		return {
			status: StatusResponse.OK,
			data: response.data
		};
	} catch (error) {
		console.log('error');
		return {
			status: StatusResponse.ERROR,
			error
		};
	}
}
