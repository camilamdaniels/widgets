import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from './theme';
import { 
  Box, 
  CssBaseline, 
  ThemeProvider 
} from '@mui/material';
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Box width='100%' height='100%' padding='1rem 2rem 4rem 2rem'>
          <Dashboard />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
