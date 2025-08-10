module.exports = {
  mode: 'jit',
  plugins: [], 
  content: ['./src/**/*.vue', './src/**/*.html'],
theme: {
    extend: {
      colors: {
        backdrop: '#000000a3',
        
        blue1:  '#E0F7F9',
        blue2:  '#B3E5E7',
        blue3:  '#80D1D6',
        blue4:  '#4DBBC4',
        blue5:  '#26A8B1',
        blue6:  '#1E8B8F',
        blue7:  '#176B6D',  // main replaced blue7
        blue8:  '#115351',
        blue9:  '#0B3D3B',
        blue10: '#062826',

        gray1: '#F8F9F9',
        gray10: '#838C91',
        gray2: '#ebecf0',
        gray3: '#E2E4E6',
        gray4: '#D6DADC',
        gray5: '#CDD2D4',
        gray6: '#C4C9CC',
        gray7: '#B6BBBF',
        gray8: '#A5ACB0',
        gray9: '#959DA1',

        green1: '#EEF6EC',
        green1O: '#3F6F21',
        green2: '#D6ECD2',
        green3: '#B7DDB0',
        green4: '#99D18F',
        green5: '#7BC86C',
        green6: '#61BD4F',
        green7: '#5AAC44',
        green8: '#519839',
        green9: '#49852E'
      },
      inset: {
        dropdown: '234px'
      },
      width: {
        cardDetail: '768px',
        dropdown: '316px',
        list: '272px'
      }
    }
  },
  variants: {
    extend: {}
  }
};
