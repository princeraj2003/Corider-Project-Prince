import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ChatPage from "./pages/ChatPage";
import ChatProvider from "./lib/context/ChatContext";

// extended theme of chakra ui
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#faf9f4",
      },
    },
  },
  colors: {
    brand: {
      100: "#008000",
    },
  },
  components: {
    // variants for chat messages
    Text: {
      variants: {
        selfMessage: {
          bg: "blue.500",
          color: "white",
          marginLeft: "auto",
          borderBottomRightRadius: "none !important",
        },
        otherMessage: {
          bg: "white",
          marginRight: "auto",
          borderTopLeftRadius: "none !important",
        },
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ChatProvider>
        <ChatPage />
      </ChatProvider>
    </ChakraProvider>
  );
}

export default App;
