import PropTypes from "prop-types"
export const ProductDetail = ({product = {}}) => {
    return(
        <tr>
                            <th>{product.name}</th>
                            <th>{product.description}</th>
                            <th>{product.price}</th>
                        </tr>
    )
}

ProductDetail.propTypes = {
    products: PropTypes.array.isRequired
}