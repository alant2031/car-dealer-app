'use client';

import { useParams } from 'next/navigation';

function ResultPage() {
	const { makeId, year } = useParams();
	return (
		<div>
			<p>{makeId}</p>
			<p>{year}</p>
		</div>
	);
}

export default ResultPage;
