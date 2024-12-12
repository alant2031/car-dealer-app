import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';

interface IProps {
	items: { label: string; value: string }[];
	placeholder: string;
	onChange?: (value: string) => void;
}
function Dropdown({ items, placeholder, onChange }: IProps) {
	return (
		<Select onValueChange={onChange}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{items.map((item) => (
					<SelectItem key={item.value} value={item.value}>
						{item.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}

export default Dropdown;
