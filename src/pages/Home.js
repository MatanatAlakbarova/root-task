import { CommonPageContainer } from "../components/CommonpageContainer"
import {Row,Col} from "reactstrap"

export const Home=()=>{
    return(
        <CommonPageContainer>
            <Row>
                <Col xs={12} className="image">
                    <h3 className="text-center text-light mt-3">
                         Home Page
                    </h3>
                </Col>
            </Row>
        </CommonPageContainer>
    )
}