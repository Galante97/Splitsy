import * as React from "react"
import { View } from "react-native"
import { color, spacing } from "../../theme"
import { Transaction } from "../../services/types/transaction-api"
import { Divider } from "../divider/divider"
import { Text } from "../../components"
import { NameChipIconGroup } from "../NameChipIconGroup/NameChipIconGroup"

export interface TransactionListItemProps {
    transaction: Transaction,
}

export function TransactionListItem(props: TransactionListItemProps) {
    const { transaction } = props
    return (
        <View>
            <Divider removeMargin />
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: spacing[3] }}>
                <View style={{ width: 80, height: 80, display: 'flex' }}>
                    <NameChipIconGroup containerSize={80} names={['James Galante',
                        'Alexa Mennona',
                        'Chris Vitali',
                        'Roni Hill',
                        'Sarah Kaplan',
                        'Matt Kinzie',
                        'Mike Matthews',
                        'Micaela Weinert',
                        'Frank Galante']} />
                </View>
                <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text text={transaction.title} preset="medium" ellipsizeMode="tail" />
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text text={transaction.date} preset="smaller" style={{ color: color.tertiaryText }} />
                        <Text text=" - " preset="smaller" style={{ color: color.tertiaryText }} />
                        <Text text={`${transaction.contributors.length} People`} preset="smaller" style={{ color: color.tertiaryText }} />
                    </View>
                    <Text text={`Created by ${transaction.owner.firstName} ${transaction.owner.lastName}`} preset="smaller" style={{ color: color.tertiaryText }} />
                </View>
                <Text text={`$${transaction.totalPrice}`} preset="medium" />
            </View>
            <Divider removeMargin />
        </View>

    )
}