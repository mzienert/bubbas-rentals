import React from 'react';
import './App.css';
import { Container } from "./components/Container";
import { LocalizationProvider } from '@material-ui/pickers';
import MomentUtils from '@material-ui/pickers/adapter/moment';

export const App = () => {
  return (
    <LocalizationProvider dateAdapter={MomentUtils}>
      <Container />
    </LocalizationProvider>
  );
}
