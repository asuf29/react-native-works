import React from 'react'
import { SafeAreaView, Text, View, FlatList, StyleSheet } from 'react-native';
import music_data from './music-data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';

function App() {
  const renderSong = ({item}) => <SongCard song={item} />
  const renderSeparator = () => <View style={styles.separator}/>
  const handleSearch = text => console.log(text); 

  return (
    <SafeAreaView style={styles.container}>
        <SearchBar onSearch={handleSearch}/>
        <FlatList 
          keyExtractor={item => item.id}
          data={music_data}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeparator}
        /> 
    </SafeAreaView>
  );
}

const styles =  StyleSheet.create({
  container: {flex: 1},
  separator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
})

export default App;