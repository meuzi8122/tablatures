export type Props = {
    name: string;
    label: string;
    value: string;
    defaultChecked?: boolean;
};

export default function RadioFormControl({ name, label, value, defaultChecked = false }: Props) {
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">{label}</span>
                <input
                    type="radio"
                    name={name}
                    className="radio checked:bg-blue-500"
                    value={value}
                    defaultChecked={defaultChecked}
                />
            </label>
        </div>
    );
}
