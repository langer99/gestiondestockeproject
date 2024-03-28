import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const categories = [
  { label: 'Electroniques', value: 'Electroniques' },
  { label: 'Alimentations et boissons', value: 'Alimentations et boissons' },
  { label: 'Sport et plein air', value: 'Sport et plein air' },
  { label: 'Education', value: 'Education' },
  { label: 'Maisons et jardins', value: 'Maisons et jardins' },
  { label: 'Vêtements et accessoires', value: 'Vêtements et accessoires' }
];

const AddProduitApp = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState(categories[0].value);
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isOpen, setIsOpen] = useState(false); // État pour contrôler l'ouverture du dropdown

  const handleAdd = () => {
    // Logique pour ajouter l'élément avec les données du formulaire
    console.log('Name:', name);
    console.log('Category:', category);
    console.log('Price:', price);
    console.log('Quantity:', quantity);
    // Réinitialiser les champs après l'ajout
    setName('');
    setCategory(categories[0].value);
    setPrice('');
    setQuantity('');
  };

  return (
    <View style={{ padding: 20 }}>
      
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        placeholder="Nom"
        value={name}
        onChangeText={text => setName(text)}
      />
      <DropDownPicker
        items={categories}
        defaultValue={category}
        containerStyle={{ height: 40, marginBottom: 20 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{ justifyContent: 'flex-start' }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={item => setCategory(item.value)}
        open={isOpen} // Contrôle l'état d'ouverture
        setOpen={setIsOpen} // Fonction pour mettre à jour l'état d'ouverture
        value={category} // Valeur sélectionnée
        setValue={setCategory} // Fonction pour mettre à jour la valeur sélectionnée
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        placeholder="Prix"
        keyboardType="numeric"
        value={price}
        onChangeText={text => setPrice(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        placeholder="Quantité"
        keyboardType="numeric"
        value={quantity}
        onChangeText={text => setQuantity(text)}
      />
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10, alignItems: 'center', borderRadius: 5 }}
        onPress={handleAdd}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default  AddProduitApp ;
