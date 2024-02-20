import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const Testing = () => {
  const [editingElement, setEditingElement] = useState(null);

  const handleElementClick = (event) => {
    const element = event.target;
    setEditingElement(element);
  };

  const handleEditorChange = (content) => {
    if (editingElement) {
      editingElement.innerHTML = content;
    }
  };

  const handleEditorKeyDown = (event) => {
    if (event.key === 'Enter') {
      setEditingElement(null); // Close the editor
    }
  };

  return (
    <div>
      {/* Sample editable elements */}
      <h1 onClick={handleElementClick}>Editable Heading</h1>
      <p onClick={handleElementClick}>Editable Paragraph</p>

      {/* Render TinyMCE editor when editing */}
      {editingElement && (
        <Editor
          initialValue={editingElement.innerHTML}
          apiKey="weyuzxfz4rnkmcfm9egz0vqo4qwek3fq6aucwzeudmatw48t" // Replace with your TinyMCE API key
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help',
          }}
          onEditorChange={handleEditorChange}
          onKeyDown={handleEditorKeyDown}
        />
      )}
    </div>
  );
};

export default Testing;
