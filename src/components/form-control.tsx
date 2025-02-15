type Props = {
    name: string;
    label: string;
    placeholder: string;
};

export default function FormControl({ name, label, placeholder }: Props) {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input name={name} type="text" placeholder={placeholder} className="input input-bordered" required />
        </div>
    );
}
