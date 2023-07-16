import { Box, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface CircleProps {
    children: ReactNode
}

export const Circle: FC<CircleProps> = ({ children }) => {
    return <Box className="circle">
        <Text>{children}</Text>
    </Box>
}