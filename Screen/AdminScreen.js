import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const MyForm = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Ici, vous pouvez traiter les données du formulaire, par exemple, les envoyer à un serveur ou effectuer une autre action
    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Rôle:', role);
    console.log('Email:', email);
  };

  return (
    <View>
      <Text>Nom :</Text>
      <TextInput
        placeholder="Entrez votre nom"
        onChangeText={text => setNom(text)}
        value={nom}
      />
      <Text>Prénom :</Text>
      <TextInput
        placeholder="Entrez votre prénom"
        onChangeText={text => setPrenom(text)}
        value={prenom}
      />
      <Text>Rôle :</Text>
      <TextInput
        placeholder="Entrez votre rôle"
        onChangeText={text => setRole(text)}
        value={role}
      />
      <Text>Email :</Text>
      <TextInput
        placeholder="Entrez votre email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <Button title="Soumettre" onPress={handleSubmit} />
    </View>
  );
};

export default MyForm;
