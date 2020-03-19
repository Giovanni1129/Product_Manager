import React from "react";

const ProductForm = ({form,handleChange,handleSubmit,errors}) => {
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <label>Title:</label>
                <span>{errors.title.message > 0 ? errors.title: null} </span>
                <input name="title" value={form.title} onChange={(e) => handleChange(e)}></input>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input name="price" value={form.price} onChange={(e) => handleChange(e)}></input>
            </div>
            <div className="form-group">
                <label>Description</label>
                <input name="description" value={form.description} onChange={(e) => handleChange(e)}></input>
            </div>
            <input className="btn btn-primary" type="submit" value="Create Product"></input>
        </form>
    )
}
export default ProductForm;