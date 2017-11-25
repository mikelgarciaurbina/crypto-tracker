import { StyleSheet } from 'react-native';

import { THEME } from '../../constants';

export default StyleSheet.create({
  coinNameText: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20,
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 10,
    fontWeight: 'bold',
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    marginBottom: 20,
    borderBottomColor: THEME.GREY,
    borderBottomWidth: 3,
    padding: 20,
  },
  image: {
    width: 35,
    height: 35,
  },
  moneySymbol: {
    fontWeight: 'bold',
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
  seperator: {
    marginTop: 10,
  },
  statisticsContainer: {
    display: 'flex',
    borderTopColor: THEME.LIGHT_GREY,
    borderTopWidth: 2,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  upperRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
  },
});
