'use client';

import Dropdown from '@/components/Dropdown';
import { listVehicleMakes, listYearsFrom } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Home() {
	const [vehicleMakes, setVehicleMakes] = useState<string[]>([]);
	const years = listYearsFrom(2015);
	const [selectedMake, setSelectedMake] = useState<string | undefined>(
		undefined
	);
	const [selectedYear, setSelectedYear] = useState<string | undefined>(
		undefined
	);
	const [bothSelected, setBothSelected] = useState<boolean>(false);

	useEffect(() => {
		listVehicleMakes().then((data) => {
			setVehicleMakes(data as string[]);
		});
	}, []);

	useEffect(() => {
		setBothSelected(!!(selectedMake && selectedYear));
	}, [selectedMake, selectedYear]);

	return (
		<div>
			<h1>HOME</h1>
			<Dropdown
				items={vehicleMakes}
				placeholder="Select Vehicle Make"
				onChange={(value) => setSelectedMake(value)}
			/>
			<Dropdown
				items={years}
				placeholder="Select Model Year"
				onChange={(value) => setSelectedYear(value)}
			/>
			{bothSelected && (
				<p>
					You have selected {selectedMake} {selectedYear}
				</p>
			)}
		</div>
	);
}
