import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const CapturePhotoButton = () => {
    const [mediaUrl, setMediaUrl] = useState(null);

    const handleCapture = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*,video/*';
        input.capture = 'user';
        input.style.display = 'none';
        input.addEventListener('change', handleCaptureMedia);
        document.body.appendChild(input);
        input.click();
    };

    const handleCaptureMedia = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setMediaUrl(event.target.result);
            };
            reader.readAsDataURL(file);
        }
        // Cleanup: remove event listener and remove input from the DOM
        event.target.removeEventListener('change', handleCaptureMedia);
        event.target.remove();
    };

    return (
        <div>
            <Button variant="contained" onClick={handleCapture}>
                Capture Photo
            </Button>
            {mediaUrl && (
                <div>
                    {fileIsImage(mediaUrl) ? (
                        <img src={mediaUrl} alt="Captured media" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                    ) : (
                        <video controls src={mediaUrl} style={{ maxWidth: '100%', maxHeight: '300px' }} />
                    )}
                </div>
            )}
        </div>
    );
};

const fileIsImage = (url) => {
    return url.startsWith('data:image');
};

export default CapturePhotoButton;
