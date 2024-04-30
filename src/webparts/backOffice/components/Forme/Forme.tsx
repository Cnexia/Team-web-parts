import * as React from 'react';
import { sp } from '@pnp/sp';
import { WebPartContext } from '@microsoft/sp-webpart-base';


export interface IFormData {
  name: string;
  email: string;
  department: string;
  fileType: 'pdf' | 'docx' | 'xlsx'; // Example choice options
  file: File | null;
}

export interface IFormProps {
  context: WebPartContext;
}

export const Forme: React.FC<IFormProps> = ({ context }) => {
  const [formData, setFormData] = React.useState<IFormData>({
    name: '',
    email: '',
    department: '',
    fileType: 'pdf', // Default choice
    file: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFormData(prevState => ({
        ...prevState,
        file,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Upload file to "Assets" document library
      const fileItem = await sp.web.lists.getByTitle('Assets').rootFolder.files.add(formData.file!.name, formData.file!, true);
      const fileUrl = fileItem.data.ServerRelativeUrl;

      // Store form data in SharePoint list
      const list = sp.web.lists.getByTitle('FormData');
      await list.items.add({
        Title: formData.name,
        email: formData.email,
        department: formData.department,
        fileType: formData.fileType,
        fileUrl: fileUrl,
      });

      // Reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        department: '',
        fileType: 'pdf',
        file: null,
      });

      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
      </div>
      <div>
        <label htmlFor="department">Department:</label>
        <input type="text" id="department" name="department" value={formData.department} onChange={handleInputChange} required />
      </div>
      <div>
        <label>File Type:</label>
        <select name="fileType" value={formData.fileType} onChange={handleInputChange} required>
          <option value="pdf">PDF</option>
          <option value="docx">DOCX</option>
          <option value="xlsx">XLSX</option>
        </select>
      </div>
      <div>
        <label>Upload File:</label>
        <input type="file" accept=".pdf,.docx,.xlsx" onChange={handleFileChange} required />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Forme;
