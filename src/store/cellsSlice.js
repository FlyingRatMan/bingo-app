import {createSlice} from '@reduxjs/toolkit';

const niceWords = ['accepting', 'admirable', 'adorable', 'amazing', 'attractive', 'awesome', 'beautiful', 'best', 'brave', 'breathtaking',
    'brilliant', 'bright', 'calm', 'capable', 'careful', 'charismatic', 'charming', 'cheerful', 'clever', 'cool',
    'courageous', 'creative', 'cute', 'dedicated', 'dependable', 'detailed', 'elegant', 'elevating', 'encouraging', 'energetic',
    'enthusiastic', 'fantastic', 'friendly', 'funny', 'generous', 'giving', 'gorgeous', 'grateful', 'happy', 'hilarious',
    'incredible', 'inspiring', 'intelligent', 'kind', 'lovely', 'loyal', 'magnificent', 'motivated', 'patient'];

export const cellsSlice = createSlice({
    name: 'matrix',
    initialState: {
        isWon: false,
        matrix: [],
    },
    reducers: {
        fillCells: state => {
            for (let i = 0; i < 5; i++) {
                const row = [];

                for (let j = 0; j < 5; j++) {
                    const index = Math.floor(Math.random() * niceWords.length);
                    row[j] = {
                        title: niceWords[index],
                        status: false,
                    };
                }

                state.matrix[i] = row;
            }

            state.matrix[2][2] = {
                title: 'YOU ARE',
                status: true,
            };
        },
        check: (state, action) => {
            const {rowIndex, colIndex} = action.payload;
            state.matrix[rowIndex][colIndex].status = !state.matrix[rowIndex][colIndex].status;
        },
        checkAdjacent: (state, action) => {
            const {rowIndex, colIndex} = action.payload;
            let winCountVert = 0;
            let winCountDiag = 0;

            // vertical check
            for (let i = 0; i < 5; i++) {
                if (state.matrix[i][colIndex].status) {
                    winCountVert++;
                }
                if (state.matrix[i][i].status) {
                    winCountDiag++;
                }

                if (winCountVert === 5 || winCountDiag === 5) {
                    state.isWon = !state.isWon;
                }
            }

            // horizontal check
            if (state.matrix[rowIndex].every(cell => cell.status)) {
                state.isWon = !state.isWon;
            }
        }
    },
});

export const {fillCells, check, checkAdjacent} = cellsSlice.actions;

export default cellsSlice.reducer;
