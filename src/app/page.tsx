import Dropdown from '@/components/Dropdown';
import { listVehicleMakes, listYearsFrom } from '@/lib/utils';

export default async function Home() {
	const vehicleMakes = await listVehicleMakes();
	const years = listYearsFrom(2015);
	return (
		<div>
			<h1>HOME</h1>
			<Dropdown items={vehicleMakes!} placeholder="Vehicle Make" />
			<Dropdown items={years} placeholder="Model Year" />
		</div>
	);
}
