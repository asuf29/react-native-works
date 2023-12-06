import React, {useState} from 'react'
import {SafeAreaView, View, Text, Button, FlatList, Switch} from 'react-native';

const data = [
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'KafaKafe', isFavorite: false},
  {id: 2, name: 'BugG', isFavorite: false},
  {id: 3, name: 'Rock n Code', isFavorite: true},
  {id: 5, name: 'esc', isFavorite: false},
];

function App() {
  const [cafeList, setCafeList] = useState(data);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  function onFvoritesChange(isFavoriteSelected) {
    setShowOnlyFavorites(isFavoriteSelected);
    isFavoriteSelected 
      ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
      : setCafeList(data);
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Show Only Favorites</Text>
        <Switch value={showOnlyFavorites} onValueChange={onFvoritesChange}/>
      </View>
      <FlatList 
        data={cafeList} 
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </SafeAreaView>
  );
}

export default App; 