import { StyleSheet } from 'react-native';

import { THEME } from '../../constants';

export default StyleSheet.create({
  coinNameText: {
    marginLeft: 5,
    marginRight: 20,
    marginTop: 10,
  },
  coinPrice: {
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 10,
    marginTop: 10,
  },
  coinSymbol: {
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 5,
    marginTop: 10,
  },
  container: {
    borderBottomColor: THEME.GREY,
    borderBottomWidth: 3,
    display: 'flex',
    marginBottom: 20,
    padding: 20,
  },
  image: {
    height: 35,
    width: 35,
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
    borderTopColor: THEME.LIGHT_GREY,
    borderTopWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  upperRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
  },
});
