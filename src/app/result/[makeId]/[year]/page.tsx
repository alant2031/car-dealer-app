/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { getModelsForMakeIdYear } from '@/actions';
import { Button } from '@/components/ui/button';
import { StatusResponse } from '@/lib/types';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function ResultPage() {
	const { makeId, year } = useParams();
	const [models, setModels] = useState<unknown[]>([]);

	useEffect(() => {
		getModelsForMakeIdYear(makeId as string, year as string).then((resp) => {
			if (resp.status === StatusResponse.OK) {
				setModels(resp.data?.Results as unknown[]);
			} else {
				setModels([]);
			}
		});
	}, [makeId, year]);

	return (
		<div>
			<Button>
				<Link href="/">HOME</Link>
			</Button>
			{models.map((model: any, index: number) => (
				<div key={index}>
					<p>Make Name: {model.Make_Name}</p>
					<p>Make ID: {model.Make_ID}</p>
					<p>Model Name{model.Model_Name}</p>
					<p>Model ID: {model.Model_ID}</p>
					<hr />
				</div>
			))}
		</div>
	);
}

export default ResultPage;
