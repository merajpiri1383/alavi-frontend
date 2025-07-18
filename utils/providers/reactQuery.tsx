"use client"
import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";
import { FC } from "react";


interface Props {
    children : React.ReactNode,
}

const queryClient = new QueryClient();

const ReactQueryProvider : FC<Props> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient} >
            {children}
        </QueryClientProvider>
    )
};export default ReactQueryProvider;