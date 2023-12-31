import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.userId,
});
export default connect(mapStateToProps, {logout})(HeaderContainer);