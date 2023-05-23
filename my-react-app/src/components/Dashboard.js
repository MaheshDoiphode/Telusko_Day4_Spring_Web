import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  Card,
  CardContent,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';
import {
  MdComputer,
  MdKeyboard,
  MdMouse,
  MdDevicesOther,
  MdDelete,
  MdAdd,
  MdSearch,
} from 'react-icons/md';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    type: '',
    place: '',
    warranty: '',
  });
  const [isSearchDialogOpen, setSearchDialogOpen] = useState(false);
  const [searchedProduct, setSearchedProduct] = useState(null);
  const [searchProductName, setSearchProductName] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Add this line to check the fetched data
        setProducts(data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleDeleteProduct = name => {
    fetch(`http://localhost:8080/${name}`, { method: 'DELETE' })
      .then(() => {
        // Remove the deleted product from the state
        setProducts(prevProducts =>
          prevProducts.filter(product => product.name !== name)
        );
      })
      .catch(error => console.error(error));
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setNewProduct({
      name: '',
      type: '',
      place: '',
      warranty: '',
    });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    fetch('http://localhost:8080', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then(() => {
        // Add the new product to the state
        setProducts(prevProducts => [...prevProducts, newProduct]);
        handleCloseDialog();
      })
      .catch(error => console.error(error));
  };

  const handleOpenSearchDialog = () => {
    setSearchDialogOpen(true);
  };

  const handleCloseSearchDialog = () => {
    setSearchDialogOpen(false);
    setSearchProductName('');
    setSearchedProduct(null);
  };

  const handleSearchInputChange = event => {
    setSearchProductName(event.target.value);
  };

  const handleSearchProduct = () => {
    fetch(`http://localhost:8080/${searchProductName}`)
      .then(response => response.json())
      .then(data => {
        setSearchedProduct(data);
      })
      .catch(error => console.error(error));
  };

  return (
    <Box maxWidth="600px" mx="auto" mt={4}>
      <Typography variant="h4" align="center" gutterBottom>
        Product List
      </Typography>
      <Box display="flex" justifyContent="center" mt={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<MdAdd />}
          onClick={handleOpenDialog}
        >
          Add Product
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<MdSearch />}
          onClick={handleOpenSearchDialog}
          sx={{ marginLeft: '8px' }}
        >
          Search
        </Button>
      </Box>
      <List>
        {products.map(product => (
          <ListItem key={product.id} disablePadding>
            <Card variant="outlined" sx={{ width: '100%' }}>
              <CardContent>
                {product.type === 'Computer' && <MdComputer />}
                {product.type === 'Keyboard' && <MdKeyboard />}
                {product.type === 'Mouse' && <MdMouse />}
                {product.type === 'Cable' && <MdDevicesOther />}
                <Typography variant="subtitle1" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.type}
                </Typography>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteProduct(product.name)}
                >
                  <MdDelete />
                </IconButton>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Type"
            name="type"
            value={newProduct.type}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Place"
            name="place"
            value={newProduct.place}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Warranty"
            name="warranty"
            value={newProduct.warranty}
            onChange={handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleAddProduct} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isSearchDialogOpen} onClose={handleCloseSearchDialog}>
        <DialogTitle>Search Product</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Product Name"
            value={searchProductName}
            onChange={handleSearchInputChange}
            fullWidth
          />
          {searchedProduct && (
            <Card variant="outlined" sx={{ width: '100%' }}>
              <CardContent>
                <Typography variant="subtitle1" component="div">
                  {searchedProduct.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {searchedProduct.type}
                </Typography>
              </CardContent>
            </Card>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSearchDialog}>Cancel</Button>
          <Button onClick={handleSearchProduct} color="primary">
            Search
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default Dashboard;