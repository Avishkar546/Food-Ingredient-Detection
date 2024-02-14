import React from 'react'

const Image = () => {
    return (
        <div>
            <div class="image-container">
                <label for="upload" class="upload-btn">Upload Food Image</label>
                <input type="file" id="upload" accept="image/*" onchange="handleUpload(event)" />
            </div>
        </div>
    )
}

export default Image
