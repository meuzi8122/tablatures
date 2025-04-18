export type Option = {
    label: string;
    value: string;
};

type Props = {
    name: string;
    options: Option[];
    defaultValue: string;
};

export default function Select({ name, options, defaultValue }: Props) {
    return (
        <select name={name} className="select" defaultValue={defaultValue}>
            <option selected value="">
                選択してください
            </option>
            {options.map((option) => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
    );
}
