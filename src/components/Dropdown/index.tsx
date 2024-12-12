import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';

interface IProps {
	items: string[];
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
					<SelectItem key={item} value={item}>
						{item}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}

export default Dropdown;
