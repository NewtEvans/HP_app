import { useEffect, useState } from "react";
import { apiGet } from "../utils/api";

import SpellTable from "../spells/SpellTable";

const SpellIndex = () => {
    const [url, setUrl] = useState("spells");
    const [spells, setSpells] = useState([]);

useEffect(() => {
        apiGet(url).then((data) => setSpells(data));
    }, [])

    return (
        <div>
            <SpellTable 
                items={spells}
            />
        </div>
    );
};

export default SpellIndex;