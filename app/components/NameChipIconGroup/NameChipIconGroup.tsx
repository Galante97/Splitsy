import * as React from "react"
import { View } from "react-native"
import { spacing } from "../../theme"
import { NameChip } from "../name-chip/name-chip"


export interface NameChipIconGroupProps {
    containerSize: number,
    names: string[],
}

export function NameChipIconGroup(props: NameChipIconGroupProps) {
    const { containerSize, names } = props

    let chipList = []
    const chipCount = names.length;
    console.log({ chipCount });
    let chipSize = containerSize

    if (chipCount === 2 || chipCount === 3 || chipCount === 4) chipSize = (containerSize / 2) - 3;
    if (chipCount > 4) chipSize = (containerSize / 3) - 4;



    names.forEach((name) => {
        chipList.push(<View style={{ margin: 1 }}>
            <NameChip name={name} size={chipSize} />
        </View>);
    });


    return (
        <View style={{
            width: containerSize,
            height: containerSize,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',

        }}>
            {chipList}
        </View>

    )
}