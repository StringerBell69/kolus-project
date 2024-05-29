import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


const DataContext = createContext();


export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/etab')
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
    <DataContext.Provider value={{ data, handleDelete,handleAdd }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
