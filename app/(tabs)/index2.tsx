import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

export default function Index() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);

    const handlePress = (index: number) => {
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        };


        const cell = (Index: number) => {
            return ( 
              
              <TouchableOpacity style ={style.cell} onPress = {() => handlePress(Index)}>
                      <Text style={style.cellContent}>{board[Index]}  </Text>
                    </TouchableOpacity>)
          
            }
            return (
              <View style={style.container}>
                <Text style={style.title}> Jogo da Velha </Text>
          
                <Text> Vencedor </Text>
            <br></br>
                <View style={style.board}>
                  <View style={style.row}>
                  {cell(0)}
                       {cell(1)}
                            {cell(2)}
                  </View>
                 <View style={style.row}>
                    {cell(3)}
                       {cell(4)}
                            {cell(5)}
                  </View>
                <View style={style.row}>
                    {cell(6)}
                       {cell(7)}
                            {cell(8)}
                  </View>
                </View>
              </View>
            );
          
        
        }
        
        const styles = StyleSheet.create({
            container: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#282c34',
              padding: 20,
            },
            title: {
              fontSize: 40,
              fontWeight: 'bold',
              color: '#61dafb',
              marginBottom: 30,
            },
            statusText: {
              fontSize: 24,
              color: '#a0a0a0',
              marginBottom: 20,
              height: 30, 
            },
            board: {
              borderWidth: 5,
              borderColor: '#fff',
              borderRadius: 10,
              overflow: 'hidden',
            },
            boardRow: {
              flexDirection: 'row',
            },
            cell: {
              width: 100,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#fff',
              backgroundColor: '#444',
            },
            cellText: {
              fontSize: 60,
              fontWeight: 'bold',
              color: '#fff',
            },
            resetButton: {
              marginTop: 30,
              backgroundColor: '#61dafb',
              paddingVertical: 15,
              paddingHorizontal: 30,
              borderRadius: 8,
            },
            resetButtonText: {
              color: '#282c34',
              fontSize: 20,
              fontWeight: 'bold',
            },
          });