import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


const DataContext = createContext();


export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = 'http://localhost:5000/etab';


    axios.get(url)
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        console.error('Erreur en fetch', err);
      });
  }, []);
  
  const handleDelete = (id) => {
    console.log(`Delete item with ID: ${id}`);
    axios.delete(`http://localhost:5000/etab/${id}`).then(() => {
      
      setData(data.filter(item => item.id !== id));
    })
    .catch(err => {
      console.error('Erreur effacer handdelete', err);
    });
  };

  const handleEdit = (formData) => {
    console.log(`edit item with ID: ${formData.id}`);
    axios.put(`http://localhost:5000/etab/${formData.id}`, formData).then(() => {
      setData(prevData => prevData.map(item => item.id === formData.id ? formData : item));
    })
    .catch(err => {
      console.error('Error updating item', err);
    });
  };
  


  const handleAdd = (formData) => {
    console.log(`Add item with ID: ${formData.id}`);
    axios.post(`http://localhost:5000/etab`, formData)
      .then(() => {
        console.log('etab ajouté');
        setData(prevData => [...prevData, formData]);
      })
      .catch(err => {
        console.error('Erreur ajout etab', err);
      });
  };
  return (
    <DataContext.Provider value={{ data, handleDelete,handleAdd,handleEdit }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
