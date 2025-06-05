import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  
  const [board, setBoard] = useState(Array(9).fill(null));
  
  const [xIsNext, setXIsNext] = useState(true);
  
  const [winner, setWinner] = useState(null);

 
  const handlePressCell = (i) => {
    
    if (winner || board[i]) {
      return;
    }

    
    const newBoard = board.slice();
    
    newBoard[i] = xIsNext ? 'X' : 'O';
    
    
    setBoard(newBoard);
    
    setXIsNext(!xIsNext);
  };

  
  useEffect(() => {
    const calculatedWinner = calculateWinner(board);
    setWinner(calculatedWinner);
  }, [board]); 

 
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  
  let status;
  if (winner) {
    status = `Vencedor: ${winner}`;
  } else if (board.every(Boolean)) { 
    status = 'Empate!';
  } else {
    status = `Próximo jogador: ${xIsNext ? 'X' : 'O'}`;
  }

  
  const renderCell = (i) => {
    return (
      <TouchableOpacity style={styles.cell} onPress={() => handlePressCell(i)}>
        <Text style={styles.cellText}>{board[i]}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Velha</Text>
      <Text style={styles.statusText}>{status}</Text>
      
      <View style={styles.board}>
        {}
        <View style={styles.boardRow}>
          {renderCell(0)}
          {renderCell(1)}
          {renderCell(2)}
        </View>
        <View style={styles.boardRow}>
          {renderCell(3)}
          {renderCell(4)}
          {renderCell(5)}
        </View>
        <View style={styles.boardRow}>
          {renderCell(6)}
          {renderCell(7)}
          {renderCell(8)}
        </View>
      </View>

      {}
      {(winner || board.every(Boolean)) && (
        <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
          <Text style={styles.resetButtonText}>Reiniciar Jogo</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null; 
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
