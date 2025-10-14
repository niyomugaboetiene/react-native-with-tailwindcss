// * FlatList is high-performance component for rendering long lists in react-native 
import { FlatList, Text, View } from "react-native";

const data = [
    // ! id is known as key extractor it help to know if item added, removed, or changed
    { id: '1', name: 'Etiene'},
    { id: '2', name: 'Alice'},
    { id: '3', name: 'Bob'},
    { id: '4', name: 'Anna'},
];

const data2 = [
    { id: '1', name: 'Etiene2'},
    { id: '2', name: 'Alice2'},
    { id: '3', name: 'Bob2'},
    { id: '4', name: 'Anna2'}
]

export default function List() {
    return (
        <View style={{ flex: 1, padding: 20}}> 
        {/* data={data} is prop that receive array */}
             <FlatList
                data={data}
                // keyExtractor uses unique key for each item 
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text style={{ fontSize: 20, padding: 10 }}>{item.name}</Text>
                )}
            />

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text style={{ fontSize: 20, padding: 10 }}>{item.name}</Text>
                )}
            />
        </View>
    )
}