import { useState, useEffect } from 'react';
import ItemList from './components/ItemList';

// Use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]);

  // Fetch the data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URI);
        if (response.ok) {
          const data = await response.json();
          setItems(data);
        } else {
          console.error('Failed to fetch doors data');
        }
      } catch (error) {
        console.error('Error fetching doors data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URI}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        console.log('Item deleted');
      } else {
        console.error('Failed to delete door');
      }
    } catch (error) {
      console.error('Error deleting door:', error);
    }
  };

  const handleEdit = (id) => {
    console.log('Edit item with id:', id);
    // Implement edit functionality here
  };

  return <ItemList items={items} onDelete={handleDelete} onEdit={handleEdit} />;
}

export default App;
