import React, { useState } from 'react'

const Image = () => {
    const [product, setProduct] = useState({
        photo:""
    });
    return (
        <div>
            {/* <div className="mt-3 image-container">
                <label htmlFor="upload" class="upload-btn">
                    {image ? image : "Upload image"}
                    <input type="file" name="image" accept='image/*' onChange={(e) => setImage(e.target.files[0])} hidden />
                </label>
            </div>

            <div className="mt-10">
                {image && (
                    <div className="text-center">
                        <img src={URL.createObjectURL(image)} alt='' height={'200px'} className='img img-responsive' />
                    </div>
                )}
            </div> btn-outline-secondary */}
            <div className="mt-3 image-container">
              <label className='btn upload-btn'>
                {product.photo ? product.photo.name : "Upload image"}
                <input type="file" name="photo" accept='image/*' onChange={(e) => setProduct({ ...product, photo: e.target.files[0] })} hidden />
              </label>
            </div>

            <div className="mb-10">
              {product.photo && (
                <div className="text-center">
                  <img src={URL.createObjectURL(product.photo)} alt='' height={'200px'} className='img img-responsive' />
                </div>
              )}
            </div>
        </div>
    )
}

export default Image
