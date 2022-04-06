import { Container } from "reactstrap"
import { Header } from "./Header"

export const CommonPageContainer=({children})=>{
    return(
        <Container>
            <Header/>
            {children}
        </Container>
    )
}