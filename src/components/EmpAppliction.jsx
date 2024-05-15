import OperationsComponent from "./OperationsComponent";
import EmpListComponent from "./EmpListComponent";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "../routes/NavigationRoutes.js";
function EmpAppliction() {
    return(
      <><Router>
          <OperationsComponent />

          {routes}
      </Router>
      </>
    );

}
export default EmpAppliction;