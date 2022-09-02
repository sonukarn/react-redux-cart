import {connect} from 'react-redux'
import { addToCart,removeToCart } from '../Services/Actions/actions';
import Home from "../Components/Home";

const mapStateToProps = state =>({
    data:state.cartItems

})

const mapDispatchToProps = dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)

// export default Home;