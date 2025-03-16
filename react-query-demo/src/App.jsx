import React from "react";
import { QueryClient, QueryClientProvider } from "react-query"; // Import necessary React Query components
import PostsComponent from "./PostsComponent"; // Import the PostsComponent that will use React Query

// Create a new instance of QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap the entire app with QueryClientProvider to provide React Query functionality
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
