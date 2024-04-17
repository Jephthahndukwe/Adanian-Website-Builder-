import React, { useEffect, useState } from 'react';

const PreviewPage = ({ match }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        // Decode the content passed in the URL
        const decodedContent = decodeURIComponent(match.params.content);
        setContent(decodedContent);
    }, [match.params.content]);

    return (
        <div className="preview-container">
            <h1>Preview</h1>
            <div className="preview-content">
                {/* Render the decoded content */}
                {content && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
            </div>
        </div>
    );
};

export default PreviewPage;
