import PropTypes from "prop-types"
export const ProductDetail = ({handlerProductSelected, handlerRemove, product = {}}) => {
    return(
        <tr>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className="btn btn-secondary bt-sm" onClick={() => handlerProductSelected(product)}>Update</button>
                            </td>
                            <td>
                                <button className="btn btn-danger bt-sm" onClick={() => handlerRemove(product.name)}>Remove</button>
                            </td>
                        </tr>
    )
}

ProductDetail.propTypes = {
    products: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}