import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./App.css";
import logo from "./logo.svg";
import "./styles.css";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/Button";
import { AnimatedLogo, DarkButton } from "./components/Button/Button.styles";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  white: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: "Segoe UI",
};

const GlobalStyle = createGlobalStyle`
button{
  /* font-family: 'Roboto' */
  font-family: ${(props) => props.theme.fontFamily};
}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <AnimatedLogo src={logo} alt="logo" />
        {/* <button>Button</button> */}
        <StyledButton>Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton variant="outline">Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <FancyButton as="a">Fancy Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit Button</SubmitButton>
        <div>
          <br />
        </div>
        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
