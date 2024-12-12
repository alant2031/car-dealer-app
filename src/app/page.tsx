'use client';

import Dropdown from '@/components/Dropdown';
import { Button } from '@/components/ui/button';

import { listVehicleMakes, listYearsFrom } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type TMake = {
	label: string;
	value: string;
};
export default function HomePage() {
	const [vehicleMakes, setVehicleMakes] = useState<TMake[]>([]);
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
			setVehicleMakes(
				data?.map((make) => ({
					value: make.makeId,
					label: make.makeName
				})) as TMake[]
			);
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
				items={years.map((year) => ({ label: year, value: year }))}
				placeholder="Select Model Year"
				onChange={(value) => setSelectedYear(value)}
			/>
			<Button variant="outline" disabled={!bothSelected}>
				<Link href={`/result/${selectedMake}/${selectedYear}`}>Next</Link>
			</Button>
		</div>
	);
}
