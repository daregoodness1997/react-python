import React from 'react'

interface Props{
    onChange: (event: any) => void
}

const FileUpload: React.FC<Props> = ({ onChange }) => {
  return (
    <div>
      <input
        type="file"
        name="file"
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
        onChange={onChange}
      />
    </div>
  );
};

export default FileUpload