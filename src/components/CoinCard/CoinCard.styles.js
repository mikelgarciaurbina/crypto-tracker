import { StyleSheet } from 'react-native';

import { THEME } from '../../constants';

export default StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 20,
    borderBottomColor: THEME.GREY,
    borderBottomWidth: 3,
    padding: 20,
  },
  upperRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: 'bold',
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20,
  },
  seperator: {
    marginTop: 10,
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 10,
    fontWeight: 'bold',
  },
  image: {
    width: 35,
    height: 35,
  },
  moneySymbol: {
    fontWeight: 'bold',
  },
  statisticsContainer: {
    display: 'flex',
    borderTopColor: THEME.LIGHT_GREY,
    borderTopWidth: 2,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  percentChangePlus: {
    color: THEME.GREEN,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  percentChangeMinus: {
    color: THEME.RED,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
