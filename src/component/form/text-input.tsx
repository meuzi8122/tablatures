type Props = {
    name: string;
    label: string;
    defaultValue: string | null;
};

export default function TextInput({ name, label, defaultValue }: Props) {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{label}</legend>
            <input name={name} type="text" className="input" placeholder="" defaultValue={defaultValue || ""} />
        </fieldset>
    );
}
