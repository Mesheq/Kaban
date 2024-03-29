import React, { useCallback, useState, useLayoutEffect, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import DraggableFlatList, {
  ScaleDecorator,
  RenderItemParams,
} from "react-native-draggable-flatlist";
// import { mapIndexToData, Item } from "../../utils/data"
import { BoardRepository  } from 'react-native-draganddrop-board'
import { Board } from 'react-native-draganddrop-board'
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
// import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";
import { Color } from "../../../GlobalStyles";
import { useDispatch, useSelector } from 'react-redux'

import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { setStatusBar } from "../../slices/statusBar";
import { selectBoardData } from "../../slices/boardDataSlice";

const data = [
  {
    id: 1,
    name: 'TO DO',
    rows: [
      {
        id: '1',
        name: 'Analyze your audience',
        description: 'Learn more about the audience to whom you will be speaking',
        icon:'ale gówno',
        progressCount:0
      },
      {
        id: '2',
        name: 'Select a topic',
        description: 'Select a topic that is of interest to the audience and to you',
        progressCount:0
      },
      {
        id: '3',
        name: 'Define the objective',
        description: 'Write the objective of the presentation in a single concise statement',
        progressCount:0
      }
    ]
  },
  {
    id: 2,
    name: 'IN PROGRESS',
    rows: [
      {
        id: '4',
        name: 'Look at drawings',
        description: 'How did they use line and shape? How did they shade?',
        progressCount:20
      },
      {
        id: '5',
        name: 'Draw from drawings',
        description: 'Learn from the masters by copying them',
        progressCount: 50
      },
      {
        id: '6',
        name: 'Draw from photographs',
        description: 'For most people, it’s easier to reproduce an image that’s already two-dimensional',
        progressCount:5
      }
    ]
  },
  {
    id: 3,
    name: 'DONE',
    rows: [
      {
        id: '7',
        name: 'Draw from life',
        description: 'Do you enjoy coffee? Draw your coffee cup',
        progressCount:100
      },
      {
        id: '8',
        name: 'Take a class',
        description: 'Check your local university extension',
        progressCount:100
      }
    ]
  }
]

const initData = [
  {
    id: 1,
    name: 'TO DO',
    rows: [
     
    ]
  },
  {
    id: 2,
    name: 'IN PROGRESS',
    rows: [
      
    ]
  },
  {
    id: 3,
    name: 'DONE',
    rows: [
      {
        id: '7',
        name: 'Draw from life',
        description: 'Do you enjoy coffee? Draw your coffee cup',
        progressCount:100
      },
      {
        id: '8',
        name: 'Take a class',
        description: 'Check your local university extension',
        progressCount:100
      }
    ]
  }
]
//this is important 
const startTask = {name: 'kawusia'}
interface MyItem {
  name: string;
  tasks: {
      name: string;
  }[];
}[]

const tables = [
  { name: 'start', tasks:[startTask, startTask]},
  { name: "progress", tasks:[]},
  { name: 'finished', tasks: []}
]

export const BoardHorisontal = () => {
  const board = useSelector(selectBoardData)

  // const [data, setData] = useState(board);
  const [ boardRepository, setBoardRepository ] = useState(new BoardRepository(board))

  useEffect(() => {
    setBoardRepository(new BoardRepository(board))

  },[board])  


  const navigation:any = useNavigation();
  console.log(board,'xdd')

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <StatusBar backgroundColor={'white'} style={'light'}/>
      {/* <StatusBar backgroundColor={'white'} style='auto' translucent={false} />  */}

      <View style={{flex:1, backgroundColor:'white'}}>
        <Board
            boardRepository={boardRepository}
            boardBackground={'white'}
            open={(taskData:any) => navigation.navigate('Task', taskData) }
            onDragEnd={() => {}}
            
        />
      </View>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#F6F7FB',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowItem: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});