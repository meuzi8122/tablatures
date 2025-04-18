import { TablatureListItem } from "@/component/list/tablature/tablature-list-item";
import { Tablature } from "@/generated/prisma";

type Props = {
    tablatures: Tablature[];
};

export default function TablatureList({ tablatures }: Props) {
    return (
        <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">label</li>
            {tablatures.map((tablature) => (
                <TablatureListItem tablature={tablature} />
            ))}
        </ul>
    );
}
