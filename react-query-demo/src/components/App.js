import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./PostsComponent"; // Import your PostsComponent
import { ReactQueryDevtools } from "react-query/devtools";

// Create a client for React Query
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}




export default App;
